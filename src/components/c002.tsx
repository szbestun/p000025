import { encode } from 'querystring';
import { Pagination as BasePagination, Col, Row } from '@geist-ui/react';
import { ChevronLeftCircleFill, ChevronRightCircleFill } from '@geist-ui/react-icons';
import { useRouter } from 'next/router';

/**
 * 分页控件
 */
export default function Pagination({ count }: { count: number; }) {
	const router = useRouter();
	const page = Number(router.query.page) || 1;
	return <>
		<Row justify='center' align='middle'>
			<Col span={24}>
				<BasePagination
					initialPage={page}
					count={count}
					limit={12}
					onChange={(vol) => {
						if (vol === page) {
							return;
						}
						const q = encode({
							...router.query,
							page: vol
						});
						void router.push(`${router.pathname}?${q}`);
					}}
				>
					<BasePagination.Next>
						<ChevronRightCircleFill />
					</BasePagination.Next>
					<BasePagination.Previous>
						<ChevronLeftCircleFill />
					</BasePagination.Previous>
				</BasePagination>
			</Col>
		</Row>
	</>;
}
