import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 法制法规
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>法制法规</title>
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
		<div className="ht50 bg-f flex-c font14 color-3 s001">
			<i className="iconfont icon-falv2 color-3 font20 s002"></i>
			<span className="s003">法治法律维护</span>
			<span className="cursor-p s004">全部</span>
			<span className="cursor-p s005">法治法规</span>
			<span className="cursor-p s006">管理规则</span>
		</div>
		<style jsx>{`
.s001 { padding:0 20px;margin-bottom: 20px }
.s002 { margin-right:10px }
.s003 { font-weight: bolder }
.s004 { margin-left:55px; }
.s005 { color:#b0a7a7;margin-left:65px }
.s006 { color:#b0a7a7;margin-left:55px; }
`}</style>
	</>;
}

/**
 * 内容
 */
function C003() {
	return <>
		<div className="s001">
			<div className="display-">

				<div className="border-b-1 bg-f ht40 l-ht40 s002">
					<div className="display-ib s003">
						<span className="font12 color-3">标题：</span>
						<input type="text" placeholder="请输入标题" className="text" />
					</div>
					<div className="display-ib bg-theme text-c cursor-p ht30 l-ht30 radius-4 s004">
						<i title="搜索" className="iconfont icon-sousuo color-f"></i>
					</div>
				</div>


				<div className="s005">
					<div className="p20 bg-f">

						<div className="font14 color-6">
							<div className="t_title">
								<span className="display-ib p5 border-r-1 text-c b-box pos-r s006">标题
									<i className="iconfont cursor-p icon-shangxia color-3 font14 pos-a s007"></i>
								</span><span className="display-ib p5 border-r-1 text-c b-box pos-r s008">内容
									<i className="iconfont cursor-p icon-shangxia color-3 font14 pos-a s009"></i>
								</span><span className="display-ib p5 border-r-1 text-c b-box pos-r s010">类型
									<i className="iconfont cursor-p icon-shangxia color-3 font14 pos-a s011"></i>
								</span><span className="display-ib p5 border-r-1 text-c b-box pos-r s012">更新时间
									<i className="iconfont cursor-p icon-shangxia color-3 font14 pos-a s013"></i>
								</span><span className="display-ib p5 border-r-1 text-c b-box pos-r s014">更新人
									<i className="iconfont cursor-p icon-shangxia color-3 font14 pos-a s015"></i>
								</span>
							</div>
						</div>


						<div className="t_body">
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s016">中央预算内容投资不住
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s017">阿斯兰的看法三大块开朗我可拉斯基的法律观念啊撒打发杀上古暗杀是个打打杀杀给按时打发时光
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s018">法制法规
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s019">2012-02-12
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s020">刘凯
								</span>
							</div>



							<div className="none">
								<div>
									<img src="/images/wsj.png" />
								</div>
								<div className="color-6">
									暂无数据
								</div>
							</div>



							<div className="page">
								分页控件
							</div>

						</div>
					</div>

				</div>
			</div>

		</div>
		<style jsx>{`
.s001 { min-height:500px }
.s002 { padding-left: 20px }
.s003 { margin-right:20px; }
.s004 { width:30px;margin-right:30px }
.s005 { padding-top:20px }
.s006 { width:16%; }
.s007 { right: 5px;top:5px; }
.s008 { width:40%; }
.s009 { right: 5px;top:5px; }
.s010 { width:13%; }
.s011 { right: 5px;top:5px; }
.s012 { width:16%; }
.s013 { right: 5px;top:5px; }
.s014 { width:15%; }
.s015 { right: 5px;top:5px; }
.s016 { width:16%; }
.s017 { width:40%; }
.s018 { width:13%; }
.s019 { width:16%; }
.s020 { width:15%; }
`}</style>
	</>;
}
