import { createHash } from 'crypto';
import anylogger from 'anylogger';
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import '@mmstudio/an000042';
import an49 from '@mmstudio/an000049';
import d001_a004 from '../../atoms/d001/a004';

const logger = anylogger('pages/api/s005');

export type r005 = {
	ok: true;
} | {
	ok: false;
	message: string;
};

export type m005 = {
	psw_old: string;
	psw_new: string;
	psw_repeat: string;
}

/**
 * pages/api/s005
 */
const handler = nextConnect<NextApiRequest, NextApiResponse<r005>>();

handler.post(async (req, res) => {
	logger.debug('msg body:', req.body);
	const { psw_old, psw_new, psw_repeat } = req.body as m005;
	if (psw_new !== psw_repeat) {
		res.status(500).json({
			ok: false,
			message: '密码不一致'
		});
		return;
	}
	if (!psw_new) {
		res.status(500).json({
			ok: false,
			message: '密码不能为空'
		});
		return;
	}
	const user = await d001_a004(req);
	if (!user) {
		res.status(500).json({
			ok: false,
			message: '请登录'
		});
		return;
	}
	const userid = user.f001;
	// 验证密码
	const md5 = createHash('md5').update(psw_old).digest('hex');
	logger.debug('usrid', userid, 'md5', md5);

	const db = an49();
	const type = 'user';
	const tb002 = db<Table002>('mmtb002');
	const r001 = await tb002.first('f005').where('f003', type).andWhere('f002', userid);
	logger.debug('r001', r001);
	if (!r001) {
		res.status(500).json({
			ok: false,
			message: '没有该用户'
		});
		return;
	}
	if (r001.f005 !== md5) {
		res.status(500).json({
			ok: false,
			message: '密码错误'
		});
		return;
	}
	const headers = req.headers;
	const ip = headers['x-real-ip'] as string || headers['x-forwarded-for'] as string || // 判断是否有反向代理 IP
		req.connection.remoteAddress || // 判断 connection 的远程 IP
		req.socket.remoteAddress; // 判断后端的 socket 的 IP
	const md5_new = createHash('md5').update(psw_new).digest('hex');
	logger.debug('usrid', userid, 'md5', md5);
	await tb002.update({
		f005: md5_new,
		f006: new Date().getTime(),
		f007: ip
	}).where('f003', type).andWhere('f005', md5).andWhere('f002', userid);

	res.status(200).json({ ok: true });
});

export const config = {} as PageConfig;

export default handler;
