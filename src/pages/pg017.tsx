import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 法制法规管理
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>法制法规管理</title>
			</Head>
			<Header />
			<C001>
				<C002></C002>
				<C003></C003>
				<C004></C004>
				<C005></C005>
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
 * 初始化页面
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
 * 查看法律法规
 */
function C003() {
	return <>
		<div className="display-">
			<div className="flex-js-c bg-f ht40 l-ht40 color-3 s001">
				<div className="flex-c">
					<div>
						<span>搜索：</span>
						<input className="text" />
					</div>
					<div title="搜索" className="radius-5 ht30 l-ht30 text-c cursor-p bg-theme display-ib s002">
						<i className="iconfont icon-sousuo color-f font18"></i>
					</div>
				</div>
				<div className="flex-js-c">
					<div>
						<div className="btn ht30 flex-cc s003">
							<span>新增</span>
						</div>
					</div>
				</div>
			</div>

			<div className="color-3 bg-f s004">
				<div className="p20">

					<div className="t_s005">
						<span className="display-ib p5 border-r-1 text-c b-box s006">标题
						</span><span className="display-ib p5 border-r-1 text-c b-box s007">内容
						</span><span className="display-ib p5 border-r-1 text-c b-box s008">类型
						</span><span className="display-ib p5 border-r-1 text-c b-box s009">更新时间
						</span><span className="display-ib p5 border-r-1 text-c b-box s010">更新人
						</span><span className="display-ib p5 border-r-1 text-c b-box s011">审核状态
						</span><span className="display-ib p5 border-r-1 text-c b-box s012">操作
						</span>
					</div>


					<div className="t_body display- s013">
						<div className="tableRow">
							<span className="display-ib p5 border-r-1 text-c b-box s014">标题
							</span><span className="display-ib p5 border-r-1 text-c b-box s015">内容
							</span><span className="display-ib p5 border-r-1 text-c b-box s016">标题
							</span><span className="display-ib p5 border-r-1 text-c b-box s017">内容
							</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s018">董事局主席
							</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s019">1
							</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s020">
								<i title="修改" className="iconfont icon-edit-1-copy font16 vertical-a-m cursor-p s021"></i>
							</span>
						</div>
					</div>


					<div className="none display-n">
						<div>
							<img src="/images/wsj.png" />
						</div>
						<div className="color-6">
							暂无数据
						</div>
					</div>


					<div className="page display- ">
						分页
					</div>

				</div>
			</div>

		</div>
		<style jsx>{`
.s001 { font-size:14px;margin-bottom:20px;padding: 0 20px;    height: 40px; }
.s002 { width:30px;margin-left:16px; }
.s003 { width:80px; }
.s004 { font-size:14px; }
.s005 { width: 100%;margin: 0 auto }
.s006 { width:158px; }
.s007 { width:234px; }
.s008 { width:155px; }
.s009 { width:145px; }
.s010 { width:150px; }
.s011 { width:200px; }
.s012 { width:117px; }
.s013 { width: 100%;margin: 0 auto }
.s014 { width:158px; }
.s015 { width:234px; }
.s016 { width:155px; }
.s017 { width:145px; }
.s018 { width:150px; }
.s019 { width:200px; }
.s020 { width:117px; }
.s021 { margin-right:10px; }
`}</style>
	</>;
}

/**
 * 新增管理者信息
 */
function C004() {
	return <>
		<div className="display-n">
			<div className="flex-c bg-f ht40 l-ht40 color-3 s001">
				<div className="flex-c">
					<i className=" iconfont icon-fanhui5 s002"></i>
					<span className="s003">返回</span>
				</div>
				<div className="flex-c s004">
					<i className="iconfont icon-ai208 s005"></i>
					<span className="s006">保存</span>
				</div>
			</div>
			<div className="bg-f color-3 p20 s007">
				<div className="text-r l-ht40 s008">
					<div className="text-r s009">
						<div className="flex-c">
							<div className="s010">
								<span className="display-id">
									<span className="color-red">*</span>
									类型名称:
								</span>
							</div>
							<div className="s011">
								<select className="select display- s012">
									<option>请选择</option>
								</select>
							</div>
						</div>
						<div className="flex-c">
							<div className="s013">
								<span className="display-id">
									<span className="color-red">*</span>
									标题名称:
								</span>
							</div>
							<input className="text s014" />
						</div>
					</div>
				</div>
				<div className="flex-c s015">
					<div className="s016">
						<span className="display-id">
							<span className="color-red">*</span>
							内容:
						</span>
					</div>
					<div className="border-1 s017">

					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { font-size:14px;margin-bottom:20px;padding: 0 20px;    height: 45px; }
.s002 { font-size:25px; }
.s003 { margin-left: 10px; }
.s004 { margin-left: 33px; }
.s005 { font-size:25px; }
.s006 { margin-left: 10px; }
.s007 { font-size: 14px }
.s008 { display:flex;justify-content: flex-start; }
.s009 { margin-left: 56px;margin-left:27px; }
.s010 { width: 71px; }
.s011 { margin-left: 6px }
.s012 { width: 300px; }
.s013 { width: 71px; }
.s014 { width: 302px;margin-left: 6px; }
.s015 { margin-left: 59px; }
.s016 { margin-top: -134px; }
.s017 { width:980px;height:180px; margin-top: 10px;
					margin-left: 5px; }
`}</style>
	</>;
}

/**
 * 修改管理者信息
 */
function C005() {
	return <>
		<div className="display-n">
			<div className="flex-c bg-f ht40 l-ht40 color-3 s001">
				<div className="flex-c">
					<i className=" iconfont icon-fanhui5 s002"></i>
					<span className="s003">返回</span>
				</div>
				<div className="flex-c s004">
					<i className="iconfont icon-ai208 s005"></i>
					<span className="s006">保存</span>
				</div>
			</div>
			<div className="bg-f color-3 p20 s007">
				<div className="text-r l-ht40 s008">
					<div className="text-r s009">
						<div className="flex-c">
							<div className="s010">
								<span className="display-id">
									<span className="color-red">*</span>
									类型名称:
								</span>
							</div>
							<div className="s011">
								<select className="select display- s012">
									<option>请选择</option>
								</select>
							</div>
						</div>
						<div className="flex-c">
							<div className="s013">
								<span className="display-id">
									<span className="color-red">*</span>
									标题名称:
								</span>
							</div>
							<input className="text s014" />
						</div>
					</div>
				</div>
				<div className="flex-c s015">
					<div className="s016">
						<span className="display-id">
							<span className="color-red">*</span>
							内容:
						</span>
					</div>
					<div className="border-1 s017">

					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { font-size:14px;margin-bottom:20px;padding: 0 20px;    height: 45px; }
.s002 { font-size:25px; }
.s003 { margin-left: 10px; }
.s004 { margin-left: 33px; }
.s005 { font-size:25px; }
.s006 { margin-left: 10px; }
.s007 { font-size: 14px }
.s008 { display:flex;justify-content: flex-start; }
.s009 { margin-left: 56px;margin-left:27px; }
.s010 { width: 71px; }
.s011 { margin-left: 6px }
.s012 { width: 300px; }
.s013 { width: 71px; }
.s014 { width: 302px;margin-left: 6px; }
.s015 { margin-left: 59px; }
.s016 { margin-top: -134px; }
.s017 { width:980px;height:180px; margin-top: 10px;
						margin-left: 5px; }
`}</style>
	</>;
}
