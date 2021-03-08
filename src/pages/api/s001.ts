import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import anylogger from 'anylogger';
import '@mmstudio/an000042';
import d001_a004 from '../../atoms/a004';

const logger = anylogger('pages/api/d001/pg007/s001.ts');

export type Result = {
	user: Table001;
};

export type Query = {

}

export type Message = {
}

const handler = nextConnect<NextApiRequest, NextApiResponse<Result>>();

handler.get(async (req, res) => {
	logger.debug('cookies', req.cookies);
	const user = await d001_a004(req);
	res.status(200).json({
		user
	});
});

export const config = {} as PageConfig;

export default handler;
