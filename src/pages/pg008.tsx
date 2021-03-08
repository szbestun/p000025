import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 成长路上
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>成长路上</title>
			</Head>
			<Header />
			<C001>
				<C002></C002>
				<C003></C003>
				<C004>
					<C005></C005>
					<C006></C006>
				</C004>
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
		<div className="margin-0a w1200 s001">
			{children}
		</div>
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
			<i className="iconfont icon-fabu color-3 font20 s002"></i>
			<span>成长路上</span>
		</div>
		<style jsx>{`
.s001 { padding:0 20px;margin-bottom: 20px }
.s002 { margin-right:10px }
`}</style>
	</>;
}

/**
 * 筛选条件
 */
function C003() {
	return <>
		<div className="ht40 l-ht40 flex-c font14 color-3 bg-f s001">
			<div className="s002">
				<span>内容：</span>
				<input type="text" placeholder="请输入要搜索的标题/内容" className="text" />
			</div>
			<div className="s003">
				<span>日期：</span>
				<input type="date" className="date" />
				<span>至</span>
				<input type="date" className="date" />
			</div>
			<div className="ht30 l-ht30 bg-theme radius-4 text-c cursor-p s004">
				<i className="iconfont icon-sousuo color-f"></i>
			</div>
		</div>
		<style jsx>{`
.s001 { margin-bottom:20px;padding: 0 20px }
.s002 { margin-right:20px }
.s003 { margin-right:20px }
.s004 { width:30px }
`}</style>
	</>;
}

/**
 * 内容
 */
function C004({ children }: { children: ReactNode; }) {
	return <>
		<div className="bg-f p20 s001">{children}</div>
		<style jsx>{`
.s001 { min-height:600px }
`}</style>
	</>;
}

/**
 * 轮播控件
 */
function C005() {
	return <>
		<div className="border-1 s001">

		</div>
		<style jsx>{`
.s001 { height: 240px }
`}</style>
	</>;
}

/**
 * 列表
 */
function C006() {
	if (false) {
		return <C007></C007>;
	}
	return <>
		<div className="display- s001">
			<div className="border-b-1 p10 display-ib">
				<div className="display-ib s002">
					<img src="/images/bg.png" className="s003" />
				</div>
				<div className="display-ib vertical-a-t">
					<div className="display-ib p10 bg-theme color-f font14 text-c s004">
						<div>
							<span>12</span>
						</div>
						<div>
							2019-04
							</div>
					</div>
					<div className="overflow-h display-ib vertical-a-t s005">
						<div className="ht40 border-b-1 overflow-h">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年
							</div>
						<p className="font14 color-6 s006">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立
						</p></div>
				</div>
			</div>
			<div className="border-b-1 p10 display-ib">
				<div className="display-ib s007">
					<img src="/images/bg.png" className="s008" />
				</div>
				<div className="display-ib vertical-a-t">
					<div className="display-ib p10 bg-theme color-f font14 text-c s009">
						<div>
							<span>12</span>
						</div>
						<div>
							2019-04
							</div>
					</div>
					<div className=" display-ib vertical-a-t s010">
						<div className="ht40 border-b-1 overflow-h">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年
							</div>
						<p className="font14 color-6 s011">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立
						</p></div>
				</div>
			</div>
			<div className="border-b-1 p10 display-ib">
				<div className="display-ib s012">
					<img src="/images/bg.png" className="s013" />
				</div>
				<div className="display-ib vertical-a-t">
					<div className="display-ib p10 bg-theme color-f font14 text-c s014">
						<div>
							<span>12</span>
						</div>
						<div>
							2019-04
							</div>
					</div>
					<div className=" display-ib vertical-a-t s015">
						<div className="ht40 border-b-1 overflow-h">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年
							</div>
						<p className="font14 color-6 s016">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立
						</p></div>
				</div>
			</div>
			<div className="border-b-1 p10 display-ib">
				<div className="display-ib s017">
					<img src="/images/bg.png" className="s018" />
				</div>
				<div className="display-ib vertical-a-t">
					<div className="display-ib p10 bg-theme color-f font14 text-c s019">
						<div>
							<span>12</span>
						</div>
						<div>
							2019-04
							</div>
					</div>
					<div className=" display-ib vertical-a-t s020">
						<div className="ht40 border-b-1 overflow-h">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年
							</div>
						<p className="font14 color-6 s021">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立
						</p></div>
				</div>
			</div>
			<div className="border-b-1 p10 display-ib">
				<div className="display-ib s022">
					<img src="/images/bg.png" className="s023" />
				</div>
				<div className="display-ib vertical-a-t">
					<div className="display-ib p10 bg-theme color-f font14 text-c s024">
						<div>
							<span>12</span>
						</div>
						<div>
							2019-04
							</div>
					</div>
					<div className=" display-ib vertical-a-t s025">
						<div className="ht40 border-b-1 overflow-h">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年
							</div>
						<p className="font14 color-6 s026">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立
						</p></div>
				</div>
			</div>
			<div className="border-b-1 p10 display-ib">
				<div className="display-ib s027">
					<img src="/images/bg.png" className="s028" />
				</div>
				<div className="display-ib vertical-a-t">
					<div className="display-ib p10 bg-theme color-f font14 text-c s029">
						<div>
							<span>12</span>
						</div>
						<div>
							2019-04
							</div>
					</div>
					<div className=" display-ib vertical-a-t s030">
						<div className="ht40 border-b-1 overflow-h">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年
							</div>
						<p className="font14 color-6 s031">
							热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立
						</p></div>
				</div>
			</div>

			<div className="page">


				分页
				</div>

		</div>
		<style jsx>{`
.s001 { margin-top:20px }
.s002 { height:180px;width:180px }
.s003 { max-width:100%;height:180px }
.s004 { margin:0 10px }
.s005 { width:260px; }
.s006 { white-space: normal; }
.s007 { height:180px;width:180px }
.s008 { max-width:100%;height:180px }
.s009 { margin:0 10px }
.s010 { width:260px; }
.s011 { white-space: normal; }
.s012 { height:180px;width:180px }
.s013 { max-width:100%;height:180px }
.s014 { margin:0 10px }
.s015 { width:260px; }
.s016 { white-space: normal; }
.s017 { height:180px;width:180px }
.s018 { max-width:100%;height:180px }
.s019 { margin:0 10px }
.s020 { width:260px; }
.s021 { white-space: normal; }
.s022 { height:180px;width:180px }
.s023 { max-width:100%;height:180px }
.s024 { margin:0 10px }
.s025 { width:260px; }
.s026 { white-space: normal; }
.s027 { height:180px;width:180px }
.s028 { max-width:100%;height:180px }
.s029 { margin:0 10px }
.s030 { width:260px; }
.s031 { white-space: normal; }
`}</style>
	</>;
}

/**
 * 无数据
 */
function C007() {
	return <div className="none display-n">
		<div>
			<img src="/images/wsj.png" />
		</div>
		<div className="color-6">
			暂无数据
				</div>
	</div>;
}
