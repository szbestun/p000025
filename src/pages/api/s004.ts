import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import anylogger from 'anylogger';
import an49 from '@mmstudio/an000049';
import '@mmstudio/an000042';
import d001_a004 from '../../atoms/a004';

const logger = anylogger('pages/api/s004');

export type r004 = IMenu[];

export type m004 = {

}

export type q004 = {

}

export interface IMenu extends Table007 {
	sub: IMenu[];
}

/**
 * get menus
 */
const handler = nextConnect<NextApiRequest, NextApiResponse<r004>>();

handler.get(async (req, res) => {
	logger.debug('msg body:', req.body);
	const user = await d001_a004(req);
	if (!user) {
		res.redirect(302, '/');
		return;
	}

	const userid = user.f001;
	const db = an49();
	const tb7 = db<Table007>('mmtb007');
	const tb8 = db<Table008>('mmtb008');
	const tb9 = db<Table009>('mmtb009');
	const q9 = tb9.select('f002').where('f001', '=', userid);
	const q8 = tb8.select('f002').whereIn('f001', q9);
	const t007 = await tb7.select().whereIn('f001', q8).orderBy('f004', 'desc');
	const menus = t007.map((it) => {
		return {
			...it,
			sub: []
		} as IMenu;
	});
	// map all menus
	const all = menus.reduce((pre, cur) => {
		pre.set(cur.f001, cur);
		return pre;
	}, new Map<string, IMenu>());
	const roots = get_roots(all);
	roots.forEach((m) => {
		get_sub(menus, m);
	});
	res.status(200).json(roots);
});

export const config = {} as PageConfig;

export default handler;

function sort(menus: IMenu[]) {
	return menus.sort((a, b) => {
		return b.f004 - a.f004;
	});
}

function get_sub(all: IMenu[], parent: IMenu) {
	parent.sub = sort(all.filter((m) => {
		if (m.f003 === parent.f001) {
			get_sub(all, m);
			return true;
		}
		return false;
	}));
}

function get_roots(all: Map<string, IMenu>) {
	return sort(Array.from(all.keys()).filter((it) => {
		const item = all.get(it)!;
		return !all.has(item.f003);
	}).reduce((pre, cur) => {
		pre.push(all.get(cur)!);
		return pre;
	}, [] as IMenu[]));
}
