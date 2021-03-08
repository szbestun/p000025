import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 企业文化管理
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>企业文化管理</title>
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
 * 内容
 */
function C001({ children }: { children: ReactNode; }) {
	return <>
		<div className="margin-0a w1200  s001">{children}</div>
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
			<i className="iconfont icon-shouye color-3 font20 s002"></i>
			<span>企业文化维护</span>
		</div>
		<style jsx>{`
.s001 { padding:0 20px;margin-bottom: 20px;font-size: 14px;}
.s002 { margin-right:10px; }
`}</style>
	</>;
}

/**
 * 列表内容
 */
function C003() {
	return <div>
		<C004 title='企业文化图片'></C004>
		<C004 title='愿景'></C004>
		<C004 title='使命'></C004>
		<C004 title='价值观'></C004>
		<C004 title='人才观'></C004>
	</div>;
}

/**
 * 列表
 */
function C004({ title }: { title: string; }) {
	return <>
		<div className="border-b-1">
			<div className="bg-f display">
				<div className="ht60 bg-f flex-c font14 color-3 flex-js-c  s001">
					<div className="s002">
						<span>{title}</span>
					</div>
					<div className="display-">
						<i className=" iconfont icon-edit-1-copy color-3 font20 cursor-p  s003"></i>
						<span className="font10 ">编辑</span>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding:0 20px; }
.s002 { border-left: 4px solid #3283fc;padding-left:10px; font-size: 14px; }
.s003 { margin-right:5px ;margin-top:20px }
`}</style>
	</>;
}
