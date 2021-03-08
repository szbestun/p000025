import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 成长路上详情
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>成长路上详情</title>
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
 * 主体内容
 */
function C001({ children }: { children: ReactNode; }) {
	return <>
		<div className="margin-0a w1200 s001">
			<div className="bg-f s002">
				{children}
			</div>
		</div>
		<style jsx>{`
.s001 { margin-top:20px }
.s002 { min-height:500px }
`}</style>
	</>;
}

/**
 * 图片状态下
 */
function C002() {
	return <>
		<div className="display-">

			<div className="text-c s001">
				<span>公司举行习近平总书记在思想政治理论课教师座谈会上重要讲话精神学习交流会</span></div>


			<div className="text-c s002"><span>2018-12-22 08:25</span></div>
			<div className="ht30 l-ht30 font14 flex-c color-3 s003">
				<div className="mr21"><i className="iconfont icon-wo mr02"></i><span>张三</span></div>
				<div><i className="iconfont icon-59 mr02"></i><span>2018-12-22 08:25</span></div>
			</div>

			<div className="s004">

				<div className="font14 color-3">
					<span>
						2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。
						</span>
				</div>


				<div className="pos-r s005">
					<img src="/images/bg.png" className="s006" />
					<div className="text-c pos-a font12 color-3 s007">
						<span className="ht40 l-ht40 ">惊现昏厥男子。发现男子的地方人称99间房，</span>
					</div>

				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding-top: 20px;font-weight:bold; }
.s002 { padding-top: 14px; }
.s003 { padding-top: 10px;padding-left: 28px; }
.s004 { padding: 30px }
.s005 { width: 1100px;height:400px;margin: 0 auto;padding-top: 22px;
				 }
.s006 { height: 350px;width: 1100px; }
.s007 { height: 40px; width:1100px;bottom: 50px; background:rgba(255, 255, 255, 0.2) }
`}</style>
	</>;
}

/**
 * 视频状态下
 */
function C003() {
	return <>
		<div className="display-n">

			<div className="text-c s001">
				<span>公司举行习近平总书记在思想政治理论课教师座谈会上重要讲话精神学习交流会</span></div>


			<div className="ht30 l-ht30 flex-c font14 color-3 s002">
				<div className="mr21"><i className="iconfont icon-wo mr02"></i><span>张三</span></div>
				<div><i className="iconfont icon-59 mr02"></i><span>2018-12-22 08:25</span></div>
			</div>

			<div className="s003">

				<div className="pos-r s004">
					<img src="/images/bg.png" className="s005" />
					<div className="text-c pos-a font12 color-3 s006">
						<span className="ht40 l-ht40 ">惊现昏厥男子。发现男子的地方人称99间房，</span>
					</div>
				</div>


				<div className="font14 color-3">
					<span>
						2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。2017年1月5日，位于福建省泉州市的一处百年老洋房，惊现昏厥男子。发现男子的地方人称99间房，是泉州华侨陈氏家族上世纪20年代在村里兴建的养老院。老洋房因长期无人维护，已经荒废。当时报警的村民就住在老洋房附近，没有人认识这个昏厥男子。两家医院接力救治，无名男子病情危急。是意外还是事故，监护责任谁来承担，专家给出结论。谁酿的苦酒，《今日说法》为您讲述。
						</span>
				</div>


			</div>
		</div>
		<style jsx>{`
.s001 { padding-top: 20px;font-weight:bold; }
.s002 { padding-top: 10px;padding-left: 28px; }
.s003 { padding: 30px }
.s004 { width: 1100px;height:400px;margin: 0 auto;padding-top: 22px;
					 }
.s005 { height: 350px;width: 1100px; }
.s006 { height: 40px; width:1100px;bottom: 50px; background:rgba(255, 255, 255, 0.2) }
`}</style>
	</>;
}
