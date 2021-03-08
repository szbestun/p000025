import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 企业文化动态详情
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>企业文化动态详情</title>
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
 * 最外层组件
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
			<i className="iconfont icon-yewu color-3 font20 s002"></i>
			<span className="s003">企业文化动态详情</span>
		</div>
		<style jsx>{`
.s001 { padding:0 20px;margin-bottom: 20px }
.s002 { margin-right:10px }
.s003 { font-weight: bolder }
`}</style>
	</>;
}

/**
 * 企业文化动态详情(图文状态下)
 */
function C003() {
	return <>
		<div className="bg-f display- p20">
			<div className="color-3 s001">
				<div className="text-c ">
					<span className="s002">公司方案部李军获好人好事</span>
				</div>
				<div className="flex-c s003">
					<div>
						<span>类型：</span>
						<span>好人好事</span>
					</div>
					<div className="s004">
						<i className="iconfont icon-kehu s005"></i>
						<span>张三</span>
					</div>
					<div className="s006">
						<div>
							<i className="iconfont icon-kaoqinbiao s007"></i>
							<span>2018-12-22 08:25</span>
						</div>
					</div>
				</div>
			</div>
			<div className="color-3 s008">
				<div className="text-c">
					<img src="/images/bg.png" className="s009" />
				</div>
				<div className="color-3 s010">
					<span>
						2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。
					</span>
				</div>
			</div>
			<div className="color-3 s011">
				<div className="text-c">
					<img src="/images/bg.png" className="s012" />
				</div>
				<div className="color-3 s013">
					<span>
						2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没

						惊现昏厥男子。发现男子的地方人称99间房，
					</span>
				</div>
			</div>
			<div className="color-3 s014">
				<div className="text-c">
					<img src="/images/bg.png" className="s015" />
				</div>
				<div className="color-3 s016">
					<span>
						2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没

						类型：好人好事
					</span>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { font:14px;margin: 20 0; }
.s002 { font-weight:bold;font-size: 16px; }
.s003 { margin: 20px 0; font-size: 14px
				 }
.s004 { margin-left:30px; }
.s005 { font-size:20px }
.s006 { margin-left:30px; }
.s007 { font-size:20px; }
.s008 { font-size:14px; }
.s009 { width:1100px;height:280px; }
.s010 { width:1150px;margin:15px auto; }
.s011 { font-size:14px; }
.s012 { width:1100px;height:280px; }
.s013 { width:1150px;margin:15px auto; }
.s014 { font-size:14px; }
.s015 { width:1100px;height:280px; }
.s016 { width:1150px;margin:15px auto; }
`}</style>
	</>;
}
