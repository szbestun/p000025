import { createHash } from 'crypto';
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import anylogger from 'anylogger';
import { sign } from 'jsonwebtoken';
import '@mmstudio/an000042';
import an47 from '@mmstudio/an000047';
import an49 from '@mmstudio/an000049';
import mmconf from '@mmstudio/config';
import a003 from '../../../atoms/a003';

const logger = anylogger('pages/api/d001/pg001/s001.ts');

export type Result = {
	ok: true;
} | {
	ok: false;
	message: string;
};

export type Query = {

}

export type Message = {
	usr: string;
	psw: string;
	csrf: string;
}

const handler = nextConnect<NextApiRequest, NextApiResponse<Result>>();

const session = mmconf.session as {
	secret: string;
	expiresIn: string | number;
};
/**
 * signin用户名密码登陆
 */
handler.post(async (req, res) => {
	const { usr, psw, csrf } = req.body as Message;
	const valid = a003(csrf);
	if (!valid) {
		res.redirect(301, '/d001/pg002');
		return;
	}
	if (!usr || !psw) {
		res.status(500).end('Params could not be null');
		return;
	}
	const md5 = createHash('md5').update(psw).digest('hex');
	logger.debug('usr', usr, 'psw', psw, 'md5', md5);

	const db = an49();
	const type = 'user';
	const tb001 = db<Table001>('mmtb001');
	const tb002 = db<Table002>('mmtb002');
	const r001 = await tb002.first().where('f003', type).andWhere('f004', usr).andWhere('f005', md5);
	logger.debug('r001', r001);
	if (!r001) {
		res.status(500).end('Could not find user in mmtb002');
		return;
	}
	const r002 = await tb001.first().where('f001', r001.f002);
	logger.debug('r002', r002);
	if (!r002) {
		res.status(500).end('Could not find user in mmtb001');
		return;
	}
	const token = sign(r002, session.secret, { expiresIn: session.expiresIn, algorithm: 'HS256' });
	logger.debug('userlogin success', usr, 'token', token);
	an47(res, 'token', token, { sameSite: 'lax', httpOnly: true });

	// // 在有些时候，管理员分配的数据库操作权限不能够创建表，需要预先把表创建好.
	// await db.schema.createTableIfNotExists('mmtb001', (builder) => {
	// 	builder.comment('用户表');
	// 	builder.string('f001').comment('用户ID').primary();
	// 	builder.string('f002').comment('用户姓名');
	// 	builder.string('f003').comment('头像');
	// 	builder.string('f004').comment('手机号');
	// 	builder.integer('f005').comment('性别');
	// 	builder.index('f001');
	// 	builder.unique(['f001']);
	// });
	// await db.schema.createTableIfNotExists('mmtb002', (builder) => {
	// 	builder.comment('用户授权信息');
	// 	builder.string('f001').comment('用户授权信息id');
	// 	builder.string('f002').comment('用户ID，mmtb001.f001');
	// 	builder.string('f003').comment('登录类型（手机号 邮箱 用户名）或第三方应用名称（微信 微博等）');
	// 	builder.string('f004').comment('标识（手机号 邮箱 用户名或第三方应用的唯一标识）');
	// 	builder.string('f005').comment('密码凭证（站内的保存密码，站外的不保存或保存token）');
	// 	builder.bigInteger('f006').comment('最后一次关键性操作时间');
	// 	builder.string('f007').comment('最后一次关键性操作ip地址');
	// });

	res.redirect('/');
});

export const config = {} as PageConfig;

export default handler;
