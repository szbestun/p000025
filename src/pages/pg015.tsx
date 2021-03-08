import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 管理者之窗管理
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>管理者之窗管理</title>
			</Head>
			<Header />
			<C001>
				<C002></C002>
				<C003></C003>
				<C004></C004>
				<C005></C005>
				<C006></C006>
				<C007></C007>
				<C008></C008>
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
 * 主体容器
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
 * 新增管理者信息
 */
function C003() {
	return <>
		<div className="display-n">
			<div className="flex-c bg-f ht40 l-ht40 color-3 s001">
				<div className="flex-c">
					<i className="color-theme iconfont icon-fanhui5 s002"></i>
					<span className="s003">返回</span>
				</div>
				<div className="flex-c s004">
					<i className="color-theme iconfont icon-ai208 s005"></i>
					<span className="s006">保存</span>
				</div>
			</div>
			<div className="bg-f color-3 s007">
				<div className="p20 s008">
					<div className="l-ht40 s009">
						<div className="s010">
							<span className="display-ib">
								<span className="color-red s011">*</span>
								人员名称：
							</span>
							<div className="display-ib pos-r">
								<input className="text s012" />
								<span className="cursor-p pos-a text-c radius-5 bg-c border-l-1 s013">...</span>
							</div>
						</div>
						<div className="text-r">
							<span className="display-ib">
								<span className="color-red s014">*</span>
								职位：
							</span>
							<input className="text s015" />
						</div>
						<div className="flex-c text-r">
							<div className="s016">
								<span className="display-ib">
									<span className="color-red s017">*</span>
									层级：
								</span>
							</div>
							<select className="select display- s018">
								<option>请选择</option>
							</select>
						</div>
					</div>
					<div className="s019">
						<span className="display-ib vertical-a-t">
							<span className="color-red display-ib text-r vertical-a-t">*</span>
							图片：
						</span>
						<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s020">
							<div className="s021">
								<div>
									<i className="iconfont icon-icon-tianjia font24"></i>
								</div>
								<div>
									添加图片
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-c p20 s022">
					<div className="s023">
						<span className="display-ib">
							<span className="color-red">*</span>
							人员简介：
						</span>
					</div>
					<textarea placeholder="请输入人员简介" className="text s024"></textarea>
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
.s008 { display:flex;justify-content: space-around; }
.s009 { margin-left: -134px; }
.s010 { margin-left: -28px; }
.s011 { width:54px; }
.s012 { width: 300px; }
.s013 { right:1px;top:6px;bottom:6px;width:32px;line-height: 21px; }
.s014 { width:54px }
.s015 { width: 300px; }
.s016 { margin-right: 4px; }
.s017 { width:54px }
.s018 { width: 300px; }
.s019 { margin-top:10px }
.s020 { width:120px;height:120px;border: 1px dashed #ddd; }
.s021 { margin-top:30px; }
.s022 { margin-left: 19px;margin-top: -19px; }
.s023 { margin-top: -150px;margin-left: 12px; }
.s024 { width:980px;height:180px; resize: none; }
`}</style>
	</>;
}

/**
 * 修改管理者信息
 */
function C004() {
	return <>
		<div className="display-n">
			<div className="flex-c bg-f ht40 l-ht40 color-3 s001">
				<div className="flex-c">
					<i className=" color-theme iconfont icon-fanhui5 s002"></i>
					<span className="s003">返回</span>
				</div>
				<div className="flex-c s004">
					<i className="color-theme iconfont icon-ai208 s005"></i>
					<span className="s006">保存</span>
				</div>
			</div>
		</div>
		<div className="p20 s007">
		</div>
		<div className="s008">
			<span className="display-ib">
				<span className="color-red">*</span>
								人员名称：
							</span>
			<div className="display-ib pos-r">
				<input className="text s009" />
				<span className="cursor-p pos-a radius-5 text-c bg-c border-l-1 s010">...</span>
			</div>
		</div>
		<div className="text-r">
			<span className="display-ib">
				<span className="color-red">*</span>
								职位：
							</span>
			<input className="text s011" />
		</div>
		<div className="flex-c text-r">
		</div>

		<span className="display-ib">
			<span className="color-red">*</span>
										层级：
									</span>

		<select className="select display- s012">
			<option>请选择</option>
		</select>




		<span className="display-ib display-ib text-r vertical-a-t">
			<span className="color-red ">*</span>
								图片：
							</span>
		<div className="display-ib pos-r img s013">
			<img src="/images/bg.png" className="s014" />

			<div className="bg-black-rgba6 pos-a pos-t0 pos-r0 pos-b0 text-c w100 display-n cursor-p delimg s015">
				<i className="iconfont icon-shanchu color-f font24"></i>
			</div>

		</div>


		<div className="flex-c p20 s016">
			<div className="vertical-a-t s017">
				<span className="display-ib">
					<span className="color-red">*</span>
							人员简介：
						</span>
			</div>
			<textarea placeholder="请输入人员简介" className="text s018"></textarea>
		</div>


		<style jsx>{`
.s001 { font-size:14px;margin-bottom:20px;padding: 0 20px;    height: 45px; }
.s002 { font-size:25px; }
.s003 { margin-left: 10px; }
.s004 { margin-left: 33px; }
.s005 { font-size:29px; }
.s006 { margin-left: 10px; }
.s007 { display:flex;justify-content: space-around; }
.s008 { margin-left: -28px; }
.s009 { width: 300px; }
.s010 { right:1px;top:6px;bottom:6px;width:32px;line-height: 21px; }
.s011 { width: 300px; }
.s012 { width: 300px; }
.s013 { width:120px;height:120px; }
.s014 { max-width:120px;height:120px }
.s015 { line-height:120px }
.s016 { margin-left: 19px;margin-top: -19px; }
.s017 { margin-top: -150px;margin-left: 12px; }
.s018 { width:980px;height:180px;resize: none; }
`}</style>
	</>;
}

/**
 * 层级管理弹窗
 */
function C005() {
	return <>
		<div className="display-n">
			<div className="flex-c bg-f ht40 l-ht40 color-3 s001">
				<div className="flex-c">
					<i className="color-theme iconfont icon-fanhui5 s002"></i>
					<span className="s003">返回</span>
				</div>
				<div className="flex-c s004">
					<i className="color-theme iconfont icon-ai208 s005"></i>
					<span className="s006">保存</span>
				</div>
			</div>
			<div className="color-3 bg-f s007">
				<div className="p20">

					<div className="t_s008">
						<span className="display-ib p5 border-r-1 text-c b-box s009">层级名称
						</span><span className="display-ib p5 border-r-1 text-c b-box s010">层级
						</span><span className="display-ib p5 border-r-1 text-c b-box s011">更新人
						</span><span className="display-ib p5 border-r-1 text-c b-box s012">更新时间
						</span><span className="display-ib p5 border-r-1 text-c b-box s013">操作
						</span>
					</div>


					<div className="t_body display- s014">
						<div className="tableRow">
							<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s015">董事局主席
							</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s016">1
							</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s017">张淼淼
							</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s018">2015-02-23
							</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s019">
								<i title="修改" className="iconfont icon-edit-1-copy font16 vertical-a-m cursor-p s020"></i>
							</span>
						</div>
					</div>


					<div className="page display- ">
						分页
					</div>

				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { font-size:14px;margin-bottom:20px;padding: 0 20px }
.s002 { font-size:25px; }
.s003 { margin-left: 10px; }
.s004 { margin-left: 33px; }
.s005 { font-size:29px; }
.s006 { margin-left: 10px; }
.s007 { font-size:14px; }
.s008 { margin: 0 auto }
.s009 { width:249px; }
.s010 { width:225px; }
.s011 { width:214px; }
.s012 { width:298px; }
.s013 { width:173px; }
.s014 { margin: 0 auto }
.s015 { width:249px; }
.s016 { width:225px; }
.s017 { width:214px; }
.s018 { width:298px; }
.s019 { width:173px; }
.s020 { font-size: 20px;margin-right:10px; }
`}</style>
	</>;
}

/**
 * 新增层级弹窗
 */
function C006() {
	return <>
		<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s001">
			<div className="s002">
				<div className="bg-f overflow-h  s003">
					<div className="font14 bg-theme color-f ht40 l-ht40 s004">
						<i title="close" data-feidao-actions="click:eu-001" className=" icon iconfont icon-guanbi1 fr text-c cursor-p font12"></i>新增层次
					</div>
					<div className="p20 s005">
						<div className="flex-c">
							<div className="s006">
								<div className="s007">
									<span className="display-ib">
										<span className="color-red font12 color-6 vertical-a-t">*</span>
										层次名称：
									</span>
								</div>
							</div>
							<input type="text" className="text s008" />
						</div>
						<div className="flex-c s009">
							<div className="s010">
								<div className="s011">
									<span className="display-ib">
										<span className="color-red font12 color-6 vertical-a-t">*</span>
										层次：
									</span>
								</div>
							</div>
							<input type="text" className="text s012" />
							<div className="s013">
								<i className="cursor-p iconfont icon-jia s014"></i>
								<i className="cursor-p cursor-p iconfont icon-jian s015"></i>
							</div>
						</div>
					</div>
					<div className="flex-c p20 s016">
						<input type="button" value="确定" className="btn s017" />
						<input type="button" value="取消" className="btn s018" />
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { z-index:120; }
.s002 { width:360px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s003 { border-radius:4px }
.s004 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s005 { margin-left:10px; }
.s006 { width:30% }
.s007 { margin-left:-4px; }
.s008 { width:190px;margin-left: -32px; }
.s009 { margin-top:20px }
.s010 { width:30% }
.s011 { margin-left: 20px; }
.s012 { width:190px;margin-left: -32px; }
.s013 { margin-left: 10px; }
.s014 { font-size:20px }
.s015 { font-size:20px }
.s016 { justify-content: space-evenly; }
.s017 { width: 50px;line-height: 20px }
.s018 { width: 50px;line-height: 20px }
`}</style>
	</>;
}

/**
 * 修改层级弹窗
 */
function C007() {
	return <>
		<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s001">
			<div className="s002">
				<div className="bg-f overflow-h  s003">
					<div className="font14 bg-theme color-f ht40 l-ht40 s004">
						<i title="close" data-feidao-actions="click:eu-001" className="icon iconfont icon-guanbi1 fr text-c cursor-p font12"></i>新增层次
					</div>
					<div className="p20 s005">
						<div className="flex-c">
							<div className="s006">
								<div className="s007">
									<span className="color-red">*</span><span className="font12 color-6 vertical-a-t">
										层次名称：
									</span>
								</div>
							</div>
							<input type="text" className="text s008" />
						</div>
						<div className="flex-c s009">
							<div className="s010">
								<div className="s011">
									<span className="color-red">*</span><span className="font12 color-6 vertical-a-t">
										层次：
									</span>
								</div>
							</div>
							<input type="text" className="text s012" />
							<div className="s013">
								<i className="cursor-p iconfont icon-jia s014"></i>
								<i className="cursor-p cursor-p iconfont icon-jian s015"></i>
							</div>
						</div>
					</div>
					<div className="flex-c p20 s016">
						<input type="button" value="确定" className="btn s017" />
						<input type="button" value="取消" className="btn s018" />
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { z-index:120; }
.s002 { width:360px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s003 { border-radius:4px }
.s004 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s005 { margin-left:10px; }
.s006 { width:30% }
.s007 { margin-left:-4px; }
.s008 { width:190px;margin-left: -32px; }
.s009 { margin-top:20px }
.s010 { width:30% }
.s011 { margin-left: 20px; }
.s012 { width:190px;margin-left: -32px; }
.s013 { margin-left: 10px; }
.s014 { font-size:20px }
.s015 { font-size:20px }
.s016 { justify-content: space-evenly; }
.s017 { width: 50px;line-height: 20px }
.s018 { width: 50px;line-height: 20px }
`}</style>
	</>;
}

/**
 * 选择人弹窗
 */
function C008() {
	return <>
		<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s001">
			<div className="s002">
				<div className="bg-f overflow-h  s003">
					<div className="font14 bg-theme color-f ht40 l-ht40 s004">
						<i title="close" data-feidao-actions="click:eu-001" className="icon iconfont icon-guanbi1 fr text-c cursor-p font12"></i>选择人员
					</div>
					<div className="flex-js-c">
						<div className="p20">
							<input placeholder="请输入员工姓名" className="text s005" />
							<div title="搜索" className="radius-5 ht30 l-ht30 text-c cursor-p bg-theme display-ib s006">
								<i className="iconfont icon-sousuo color-f font14"></i>
							</div>
						</div>
						<div className="p20">
							<input type="button" value="确定" className="btn" />
						</div>
					</div>

					<div className="p20 s007">

						<div className="t_title">
							<span className="display-ib p5 border-r-1 text-c b-box s008">姓名
							</span><span className="display-ib p5 border-r-1 text-c b-box s009">部门
							</span><span className="display-ib p5 border-r-1 text-c b-box s010">岗位
							</span>
						</div>


						<div className="t_body display-">
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s011">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s012">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s013">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s014">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s015">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s016">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s017">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s018">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s019">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s020">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s021">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s022">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s023">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s024">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s025">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s026">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s027">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s028">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s029">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s030">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s031">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s032">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s033">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s034">管理
								</span>
							</div>
							<div className="tableRow">
								<span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h  s035">张鸥
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s036">董事局
								</span><span className="display-ib p5 border-r-1 vertical-a-t text-c b-box overflow-h s037">管理
								</span>
							</div>
						</div>

					</div>


					<div className="page display- ">
						分页
					</div>

				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { z-index:120; }
.s002 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s003 { border-radius:4px }
.s004 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s005 { width:150px }
.s006 { width:30px;margin-left:16px; }
.s007 { min-height: 400px }
.s008 { width:34%; }
.s009 { width:33%; }
.s010 { width:33%; }
.s011 { width:34%; }
.s012 { width:33%; }
.s013 { width:33%; }
.s014 { width:34%; }
.s015 { width:33%; }
.s016 { width:33%; }
.s017 { width:34%; }
.s018 { width:33%; }
.s019 { width:33%; }
.s020 { width:34%; }
.s021 { width:33%; }
.s022 { width:33%; }
.s023 { width:34%; }
.s024 { width:33%; }
.s025 { width:33%; }
.s026 { width:34%; }
.s027 { width:33%; }
.s028 { width:33%; }
.s029 { width:34%; }
.s030 { width:33%; }
.s031 { width:33%; }
.s032 { width:34%; }
.s033 { width:33%; }
.s034 { width:33%; }
.s035 { width:34%; }
.s036 { width:33%; }
.s037 { width:33%; }
`}</style>
	</>;
}
