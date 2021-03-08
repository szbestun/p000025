import { NextApiRequest } from 'next';
import an39 from '@mmstudio/an000039';
import d001_a002 from './a003';

const csrf_name = '_mmcsrf-token';

/**
 * 获取用户信息
 */
export default function d001_a004(req: NextApiRequest) {
	const cookies = req.cookies;
	const csrf = cookies[csrf_name];
	const valid = d001_a002(csrf);
	if (!valid) {
		return null;
	}

	const token = cookies.token;
	return an39<Table001>(token);
}
