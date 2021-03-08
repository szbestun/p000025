import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 管理者之窗
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>管理者之窗</title>
			</Head>
			<Header />
			<C001>
				<C002></C002>
				<C003></C003>
			</C001>
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;

export const getStaticProps: GetStaticProps<IProps> = async () => {
	return Promise.resolve({
		props: {},
		revalidate: 60 * 60 * 24 // 1 day
	});
};

/**
 * 主体
 */
function C001({ children }: { children: ReactNode; }) {
	return <>
		<div className="margin-0a w1200 s001">{children}</div>
		<style jsx>{`
.s001 { margin-top:20px }
`}</style>
	</>;
}

/**
 * 面包屑
 */
function C002() {
	return <>
		<div className="ht40 bg-f flex-c font14 color-3 s001">
			<i className="iconfont icon-nav_user color-3 font20 s002"></i>
			<span>管理者之窗</span>
		</div>
		<style jsx>{`
.s001 { padding:0 20px;margin-bottom: 20px }
.s002 { margin-right:10px }
`}</style>
	</>;
}

/**
 * 内容
 */
function C003() {
	return <>
		<div className="bg-f s001">
			<div className="display-">

				<div className="s002">

					<div className="text-c font18 color-3 s003">
						<span className="s004">
							— 总经理 —
						</span>
					</div>

					<div className="s005">

						<div className="pos-r hov1 s006">
							<img src="/imagesg.png" className="s007" />
							<div className="text-c pos-a font12 s008">
								<div><span>张偶</span></div>
								<div><span>金E企执行总裁</span></div>
							</div>

							<div className="pos-a hov2 bg-f s009">
								<div className="s010">
									<div className="mb04"><span>涂涂峰</span></div>
									<div className="mb06"><span>董事会秘书</span></div>
									<div className="font12 s011">
										<span>2012年加入金E企集团2015出任副主席</span></div>
								</div>
							</div>

						</div>

					</div>
				</div>



				<div className="s012">

					<div className="text-c font18 color-3 s013">
						<span className="s014">
							— 副总经理 —
						</span>
					</div>

					<div className="s015">

						<div className="pos-r hov1 display-ib s016">
							<img src="/imagesg.png" className="s017" />
							<div className="text-c pos-a font12 ht40 l-ht40 s018">
								<span>副总经理</span>
							</div>

							<div className="pos-a z-index1 hov2 bg-f  s019">
								<div className="s020">
									<div className="mb04"><span>涂涂峰</span></div>
									<div className="mb06"><span>董事会秘书</span></div>
									<div className="font12 s021">
										<span>2012年加入金E企集团2015出任副主席</span>
									</div>
								</div>
							</div>

						</div>
						<div className="pos-r display-ib s022">
							<img src="/imagesg.png" className="s023" />
							<div className="text-c pos-a font12 ht40 l-ht40 s024">
								<span>副总经理</span>
							</div>
						</div>
						<div className="pos-r display-ib s025">
							<img src="/imagesg.png" className="s026" />
							<div className="text-c pos-a font12 ht40 l-ht40 s027">
								<span>副总经理</span>
							</div>
						</div>
						<div className="pos-r display-ib s028">
							<img src="/imagesg.png" className="s029" />
							<div className="text-c pos-a font12 ht40 l-ht40 s030">
								<span>副总经理</span>
							</div>
						</div>
						<div className="display-ib s031">

							<div className="pos-r s032">
								<img src="/imagesg.png" className="s033" />
								<div className="text-c pos-a font12 ht40 l-ht40 s034">
									<span>副总经理</span>
								</div>
							</div>

						</div>
					</div>
				</div>



				<div className="s035">

					<div className="text-c font18 color-3 s036">
						<span className="s037">
							— 部门经理 —
						</span>
					</div>


					<div className="s038">

						<div className="pos-r hov1 s039">
							<img src="/imagesg.png" className="s040" />

							<div className="text-c pos-a font12 ht40 l-ht40 s041">
								副总经理
							</div>


							<div className="pos-a z-index1 hov2 bg-f s042">
								<div className="s043">
									<div className="mb04"><span>涂涂峰</span></div>
									<div className="mb06"><span>董事会秘书</span></div>
									<div className="font12 s044">
										<span>2012年加入金E企集团2015出任副主席</span></div>
								</div>
							</div>

						</div>
						<div className="pos-r s045">
							<img src="/imagesg.png" className="s046" />
							<div className="text-c pos-a font12 ht40 l-ht40 s047">
								副总经理
							</div>
						</div>
						<div className="pos-r s048">
							<img src="/imagesg.png" className="s049" />
							<div className="text-c pos-a font12 ht40 l-ht40 s050">
								副总经理
							</div>
						</div>
						<div className="pos-r s051">
							<img src="/imagesg.png" className="s052" />
							<div className="text-c pos-a font12 ht40 l-ht40 s053">
								副总经理
							</div>
						</div>
						<div className="pos-r s054">
							<img src="/imagesg.png" className="s055" />
							<div className="text-c pos-a font12 ht40 l-ht40 s056">
								副总经理
							</div>
						</div>
						<div className="pos-r s057">
							<img src="/imagesg.png" className="s058" />
							<div className="text-c pos-a font12 ht40 l-ht40 s059">
								副总经理
							</div>
						</div>
						<div className="pos-r s060">
							<img src="/imagesg.png" className="s061" />
							<div className="text-c pos-a font12 ht40 l-ht40 s062">
								副总经理
							</div>
						</div>

					</div>
				</div>

			</div>

		</div>
		<style jsx>{`
.s001 { min-height:500px }
.s002 { margin-bottom:20px }
.s003 { padding-top: 28px; }
.s004 { letter-spacing: 10px; }
.s005 { display: flex;flex-direction:row;justify-content:center;padding-top: 24px; }
.s006 { height: 180px;width:180px }
.s007 { height: 180px;max-width:180px }
.s008 { height: 40px; width:180px;bottom: 0; background: rgba(255, 255, 255, 0.2) }
.s009 { left: 180px;
								top: 0px; height: 178px;width:180px;border: 1px solid #5573d2  }
.s010 { padding: 10px }
.s011 { color:#ccc; }
.s012 { padding:20px 250px }
.s013 { padding-top: 28px; }
.s014 { letter-spacing: 10px; }
.s015 { margin-top: 20px; }
.s016 { height: 140px;width:140px;margin: 15px }
.s017 { height: 140px;max-width:140px }
.s018 { width:140px;bottom: 0; background: rgba(192, 189, 189, 0.5) }
.s019 {  left: 140px;top: 0px; height: 138px;width:140px;border: 1px solid #5573d2 }
.s020 { padding: 10px }
.s021 { color:#ccc; }
.s022 { height: 140px;width:140px;margin: 15px }
.s023 { height: 140px;max-width:140px }
.s024 { width:140px;bottom: 0; background: rgba(192, 189, 189, 0.5) }
.s025 { height: 140px;width:140px;margin: 15px }
.s026 { height: 140px;max-width:140px }
.s027 { width:140px;bottom: 0; background: rgba(192, 189, 189, 0.5) }
.s028 { height: 140px;width:140px;margin: 15px }
.s029 { height: 140px;max-width:140px }
.s030 { width:140px;bottom: 0; background: rgba(192, 189, 189, 0.5) }
.s031 { margin: 15px }
.s032 { height: 140px;width:140px }
.s033 { height: 140px;max-width:140px }
.s034 { width:140px;bottom: 0; background: rgba(192, 189, 189, 0.5) }
.s035 { padding:20px 60px }
.s036 { margin-top: 20px; }
.s037 { letter-spacing: 10px; }
.s038 { display: flex;flex-wrap:wrap;margin-top: 20px; }
.s039 { height: 140px;width:140px;margin: 20px }
.s040 { height: 140px;max-width:140px }
.s041 { width:140px;bottom: 0; background: rgba(255, 255, 255, 0.2) }
.s042 {  left: 140px;
									top: 0px; height: 138px;width:140px;border: 1px solid #5573d2 }
.s043 { padding: 10px }
.s044 { color:#ccc; }
.s045 { height: 140px;width:140px;margin: 20px }
.s046 { height: 140px;max-width:140px }
.s047 { width:140px;bottom: 0; background: rgba(255, 255, 255, 0.2) }
.s048 { height: 140px;width:140px;margin: 20px }
.s049 { height: 140px;max-width:140px }
.s050 { width:140px;bottom: 0; background: rgba(255, 255, 255, 0.2) }
.s051 { height: 140px;width:140px;margin: 20px }
.s052 { height: 140px;max-width:140px }
.s053 { width:140px;bottom: 0; background: rgba(255, 255, 255, 0.2) }
.s054 { height: 140px;width:140px;margin: 20px }
.s055 { height: 140px;max-width:140px }
.s056 { width:140px;bottom: 0; background: rgba(255, 255, 255, 0.2) }
.s057 { height: 140px;width:140px;margin: 20px }
.s058 { height: 140px;max-width:140px }
.s059 { width:140px;bottom: 0;background: rgba(255, 255, 255, 0.2) }
.s060 { height:140px;width:140px;margin: 20px }
.s061 { height: 140px;max-width:140px }
.s062 { height: 40px; width:140px;bottom: 0;background: rgba(255, 255, 255, 0.2) }
`}</style>
	</>;
}
