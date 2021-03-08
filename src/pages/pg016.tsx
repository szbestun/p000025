import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 成长路上管理
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>成长路上管理</title>
			</Head>
			<Header />
			<C001></C001>
			<C002></C002>
			<C003></C003>
			<C004></C004>
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
function C001() {
	return <>
		<div className="margin-0a w1200 display s001">

			<div className="ht40 bg-f flex-c font14 color-3 s002">
				<i className="iconfont icon-fabu color-3 font20 s003"></i>
				<span>成长路上管理</span>
			</div>



			<div className="ht40 bg-f font14 color-3 s004">
				<div className="flex-js-c s005">
					<div className="display-ib s006">
						<div className="s007">
							<span className="font14">搜索：</span>
						</div>
						<div>
							<input type="text" placeholder="请输入搜索内容" className="text" />
						</div>
						<div title="搜索" className="radius-5 ht30 l-ht30 text-c cursor-p bg-theme display-ib s008">
							<i className="iconfont icon-sousuo color-f font14"></i>
						</div>
					</div>
					<div>
						<input type="button" value="新增" className="btn s009" />
					</div>
				</div>

			</div>

			<div className="bg-f">

				<div className="t_title">
					<span className="display-ib p5 border-r-1 text-c b-box s010">成长标题
				</span><span className="display-ib p5 border-r-1 text-c b-box s011">成长内容
				</span><span className="display-ib p5 border-r-1 text-c b-box s012">更新人
				</span><span className="display-ib p5 border-r-1 text-c b-box s013">更新时间
				</span><span className="display-ib p5 border-r-1 text-c b-box s014">审核状态
				</span><span className="display-ib p5 border-r-1 text-c b-box s015">操作
				</span>
				</div>


				<div className="t_body display-">
					<div className="tableRow">
						<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s016">份股份计算人反正都会的挺好挺
					</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s017">告备份股份计算人反正都备份股份计算人反正都好挺...
					</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s018">张三
					</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s019">2015-02-23
					</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s020">已通过
					</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s021">
							<i title="删除" className="iconfont icon-shanchu font16 vertical-a-m cursor-p s022"></i>
							<i title="编辑" className="iconfont icon-xiugai vertical-a-m cursor-p font16"></i>
						</span>
					</div>
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
					分页
			</div>

			</div>

		</div>
		<style jsx>{`
.s001 { margin-top:20px }
.s002 { padding:0 20px;margin-bottom: 20px }
.s003 { margin-right:10px }
.s004 { padding:0 20px; margin-bottom: 20px }
.s005 { padding-top: 5px }
.s006 { display: flex }
.s007 { margin-top: 5px }
.s008 { width:30px;margin-left: 50px }
.s009 { width:60px; }
.s010 { width:20%; }
.s011 { width:30%; }
.s012 { width:10%; }
.s013 { width:20%; }
.s014 { width:10%; }
.s015 { width:10%; }
.s016 { width:20%; }
.s017 { width:30%; }
.s018 { width:10%; }
.s019 { width:20%; }
.s020 { width:10%; }
.s021 { width:10%; }
.s022 { margin-right:10px; }
`}</style>
	</>;
}

/**
 * 企业宣传员编辑成长路上
 */
function C002() {
	return <>
		<div className="margin-0a w1200 display-n s001">

			<div className="bg-f">

				<div className="ht40 flex-c color-6 font14">
					<span className="display-ib cursor-p ht40 l-ht40 text-c s002">
						<i className="iconfont icon-fanhui5 font20"></i>
					返回
				</span>
					<span className="display-ib cursor-p ht40 l-ht40 text-c s003">
						<i className="iconfont icon-ai208 font18"></i>
					保存
				</span>
				</div>

				<div className="s004">
					<div className="s005">
						<div className="s006">
							<span className="display-ib font14 fr">
								<span className="color-red">
									*
							</span>
							成长标题：
						</span>
						</div>
						<div>
							<input placeholder="请输入成长标题" type="text" className="text s007" />
						</div>
					</div>
					<div className="s008">
						<div className="s009">
							<span className="display-ib font14 fr">
								<span className="color-red">
									*
							</span>
							成长内容：
						</span>
						</div>
						<div>
							控件
					</div>
					</div>
					<div className="s010">
						<div className="s011">
							<span className="display-ib font14 fr">
								<span className="color-red">
									*
							</span>
							上传视频：
						</span>
						</div>
						<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s012">
							<div className="s013">
								<div><i className="iconfont icon-icon-tianjia font24"></i></div>
								<div>点击上传</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<style jsx>{`
.s001 { margin-top:20px }
.s002 { width:90px }
.s003 { width:90px }
.s004 { margin: 25px;padding-bottom: 40px }
.s005 { display: flex;align-items:center; margin-bottom: 20px }
.s006 { width:100px;height:20px }
.s007 { width: 300px; }
.s008 { display: flex;align-items:center;margin-bottom: 20px }
.s009 { width:100px;height:20px }
.s010 { margin-top: 20px ;display: flex;align-items:center;align-items: flex-start }
.s011 { width:100px;height:20px }
.s012 { width:120px;height:120px;border: 1px dashed #ddd; }
.s013 { margin-top:30px; }
`}</style>
	</>;
}

/**
 * 企业宣传员编辑成长路上
 */
function C003() {
	return <>
		<div className="margin-0a w1200 display-n s001">

			<div className="bg-f">

				<div className="ht40 flex-c color-6 font14">
					<span className="display-ib cursor-p ht40 l-ht40 text-c s002">
						<i className="iconfont icon-fanhui5 font20"></i>
					返回
				</span>
					<span className="display-ib cursor-p ht40 l-ht40 text-c s003">
						<i className="iconfont icon-ai208 font18"></i>
					保存
				</span>
				</div>

				<div className="s004">
					<div className="s005">
						<div className="s006">
							<span className="display-ib font14 fr">
								<span className="color-red">
									*
							</span>
							成长标题：
						</span>
						</div>
						<div>
							<input placeholder="请输入成长标题" type="text" className="text s007" />
						</div>
					</div>
					<div className="s008">
						<div className="s009">
							<span className="display-ib font14 fr">
								<span className="color-red">
									*
							</span>
							成长内容：
						</span>
						</div>
						<div>
							控件
					</div>
					</div>
					<div className="s010">
						<div className="s011">
							<span className="display-ib font14 fr">
								<span className="color-red">
									*
							</span>
							上传视频：
						</span>
						</div>
						<div className="s012">
							<img src="/images/bg.png" className="s013" />
						</div>
						<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s014">
							<div className="s015">
								<div><i className="iconfont icon-icon-tianjia font24"></i></div>
								<div>点击上传</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<style jsx>{`
.s001 { margin-top:20px }
.s002 { width:90px }
.s003 { width:90px }
.s004 { margin: 25px;padding-bottom: 40px }
.s005 { display: flex;align-items:center;margin-bottom: 20px }
.s006 { width:100px;height:20px }
.s007 { width: 300px; }
.s008 { display: flex;align-items:center;margin-bottom: 20px }
.s009 { width:100px;height:20px }
.s010 { margin-top: 20px ;display: flex;align-items:center;align-items: flex-start }
.s011 { width:100px;height:20px }
.s012 {  width:120px ;height:120px ;margin-right: 20px }
.s013 { height: 100%;width: 100% }
.s014 { width:120px;height:120px;border: 1px dashed #ddd; }
.s015 { margin-top:30px; }
`}</style>
	</>;
}

/**
 * 删除提示弹窗
 */
function C004() {
	return <>
		<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a text-c ht100 w100 font12 display-n s001">
			<div className="flex-cc w100">
				<div className="bg-f overflow-h text-l s002">
					<div className="font14 bg-theme color-f ht40 l-ht40 s003">
						<i title="close" data-feidao-actions="click:eu-001" className="icon iconfont icon-guanbi1 fr text-c cursor-p font16"></i>提示
				</div>
					<div className="p20">
						<div className="ht40 l-ht40 text-c color-6">
							<span>是否删除？</span>
						</div>
						<div className="text-c s004">
							<input type="button" value="确认" className="btn s005" />
							<input type="button" value="取消" className="cbtn s006" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { z-index:120; }
.s002 { border-radius:4px;width:340px;margin-top:200px; }
.s003 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s004 { margin-top: 20px; }
.s005 { width: 50px; }
.s006 { width: 50px;margin-left: 60px; }
`}</style>
	</>;
}
