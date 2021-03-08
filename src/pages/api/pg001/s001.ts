import { createHash } from 'crypto';
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import anylogger from 'anylogger';
import an49 from '@mmstudio/an000049';
import '@mmstudio/an000042';

const logger = anylogger('pages/api/pg001/s001');

export type r001 = {
	ok: true;
} | {
	ok: false;
	message: string;
};

export type m001 = {
	userid: string;
	id: string;
	name: string;
	psw: string;
}

/**
 * 找回密码服务
 */
const handler = nextConnect<NextApiRequest, NextApiResponse<r001>>();

handler.post(async (req, res) => {
	logger.debug('msg body:', req.body);
	const { userid, id, name, psw } = req.body as m001;
	if (!userid || !id || !name || !psw) {
		logger.error('参数为空');
		res.status(500).json({ ok: false, message: '参数不能为空' });
		return;
	}
	const db = an49();
	const type = 'user';
	const filter = {
		f003: type,
		f004: userid
	};
	const tb002 = db<Table002>('mmtb002');
	const r001 = await tb002.first('f001').where(filter).andWhere('f004', userid);
	logger.debug('r001', r001);
	if (!r001) {
		res.status(500).json({ ok: false, message: '用户不存在' });
		return;
	}
	// todo 以下逻辑可能不对,缺少条件，该表tb001当与用户表mmtb002有关联关系。
	const tb001 = db<tb001>('tb001');
	const r002 = await tb001.first('f039', 'f063').where('f039', '=', id).andWhere('f063', '=', name);
	if (!r002) {
		res.status(500).json({ ok: false, message: '根据用户信息无法查询到结果' });
		return;
	}
	const md5 = createHash('md5').update(psw).digest('hex');
	const tb003 = db<Table002>('mmtb002');
	await tb003.update('f005', md5).where(r001);
	res.status(200).json({ ok: true });
});

export const config = {} as PageConfig;

export default handler;
