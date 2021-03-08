import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 法制法规详情
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>法制法规详情</title>
			</Head>
			<Header />
			<C001></C001>
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;



// // enables server-side rendering, this enable seo
// pg011.getInitialProps = async (context) => {
// 	return {
// 	};
// };
// pre-render this page at build time
export const getStaticProps: GetStaticProps<IProps> = async () => {
	return Promise.resolve({
		props: {},
		revalidate: 60 * 60 * 24 // 1 day
	});
};

/**
 * 主体
 */
function C001() {
	return <>
		<div className="margin-0a w1200 s001">

			<div className="bg-f s002">

				<div className="display-">

					<div className="text-c s003"><span>中央预算内投资不住和贴息项目管理办法</span></div>

					<div className="ht30 l-ht30 flex-c font14 s004">
						<div className="mr21">类型：<span>法制法规</span></div>
						<div>施行日期<span>2018-12-22</span></div>
					</div>

					<div className="s005">

						<div className="font14 mt21">
							<div><span>1、《公司法规》</span></div>
							<div className="s006">
								<span>公司法规,是规范公司行为的基本法律，公司的基本法鲁阿拉山口大家覅给i哦啊是的感觉连锁酒店覅哦按实际得分零九十点附近啦啊撒打发嘎哈和大和然后的身份不是的不是的不是的发</span>
							</div>
						</div>

						<div className="font14 mt21">
							<div><span>2、《合同发》</span></div>
							<div className="s007">
								<span>公司法规,是规范公司行为的基本法律，公司的基本法鲁阿拉山口大家覅给i哦啊是的感觉连锁酒店覅哦按实际得分零九十点附近啦啊撒打发嘎哈和大和然后的身份不是的不是的不是的发</span>
							</div>
						</div>


					</div>
				</div>


			</div>

		</div>
		<style jsx>{`
.s001 { margin-top:20px }
.s002 { min-height:600px }
.s003 { padding-top: 20px; }
.s004 { padding-top: 10px;padding-left: 28px; }
.s005 { padding: 30px }
.s006 { padding-top: 6px;padding-left: 28px; }
.s007 { padding-top: 6px;padding-left: 28px; }
`}</style>
	</>;
}
