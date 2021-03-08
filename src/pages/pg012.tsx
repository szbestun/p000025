import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 公司简介管理
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>公司简介管理</title>
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
		<div className="margin-0a  s001">

			<div className="display-">

				<div className="ht40 bg-f flex-c font14 color-3 s002">
					<i className="iconfont icon-shouye color-3 font20 s003"></i>
					<span>公司简介管理</span>
				</div>



				<div className="bg-f pos-r">
					<div className="s004">
						轮播控件
				</div>
					<div className="pos-a s005">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>
				</div>


				<div className="bg-f pos-r p20">
					<div className="flex-cc  s006">
						<div className="s007">
						</div>
					</div>
					<div className=" flex-cc display-ib color-3 s008">
						<span>
							公司简介
					</span>
					</div>
					<div className="color-6">
						<span className="font14 flex-cc display-ib l-ht40 s009">
							公司秉承“诚信责任，成就客户，创造价值”的经营理念，始终坚持在自主产品和服务体
							系方面加大投入。迄今为止，移动应用、 IT
							服务管理和数据交换平台三个平台及应用产品日趋成熟，在金融、政府、教育等行业也成了特色集成解决方案，并借助独特的自有产品和优质的服务，与广东省上百家政府机构、银行、电讯运营商及商业企业客户建立了规范和密切的合作关系。同时，由于在移动应用和
							IT 运维领域公认的领先地位，成为广州市信息服务论坛的主办单位和广东省现代信息服务业协会的副会长单位，在同行业中起着“领头羊”的作用。
					</span>
					</div>
					<div className="display-ib flex-cc">
						<div className="s010">
							<img src="/images/bg.png" className="s011" />
						</div>
					</div>
					<span className="font14 flex-cc display-ib l-ht40 color-6 s012">
						展望未来，金税在立足行业基础上，深挖应用，进一步加大技术投入和人才引进。把金税打造成以自有知识产权产品为核心的技术驱动和以 IT
						运维服务为主的服务驱动型的高新技术企业，并立志成为立足广东，面向华南，辐射全国的一流信息系统集成商。
				</span>
					<div className="pos-a s013">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>
				</div>


				<div className="pos-r p20 s014">
					<div className="flex-cc  s015">
						<div className="s016">
						</div>
					</div>
					<div className=" flex-cc display-ib color-3 s017">
						<span>
							组织架构图
					</span>
					</div>
					<div className="text-c pos-r s018">
						<span className="border-1 s019">公司名称</span>
						<div className="border-1 pos-a s020"></div>
					</div>
					<div>
						架构图控件
				</div>
					<div className="pos-a s021">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>

					<div className=" pos-r pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display- s022">
						<div className="s023">
							<div className="bg-f overflow-h  s024">
								<div className="font14 ht40 l-ht40 border-b-1 s025">
									政教事业部
							</div>
								<div className="s026">
									<div className="s027">
										<img src="/images/bg.png" className="s028" />
										<div>
											<div className="s029">
												张军</div>
											<div className="s030">
												部门经理</div>
										</div>
									</div>
									<div className="p10">
										<div className="s031">
											<span className="font12 s032">部门详情</span>
										</div>
										<div>
											<span className="info s033">研究制定人事制度改革制度、方案、拟定人事管理政策法规，建立科学化、法制化的人事管理制度并进行监督检查；</span>
										</div>
									</div>
									<div className="p10">
										<div className="s034">
											<span className="font12 s035">部门详情</span>
										</div>
										<div>
											<span className="info s036">研究制定人事制度改革制度、方案、拟定人事管理政策法规，建立科学化、法制化的人事管理制度并进行监督检查；</span>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>


				<div className="bg-f pos-r s037">
					<div className="flex-cc ">
						<div className="s038">
						</div>
					</div>
					<div className=" flex-cc display-ib color-3 s039">
						<span>
							主营业务
					</span>
					</div>
					<div className=" border-b-1 flex-js s040">
						<div className="display-ib s041">
							<div className="s042">
								<img src="/images/bg.png" className="s043" />
							</div>
						</div>
						<span className="info color-6 l-ht30 s044">
							金税信息系统集成有限公司主要从事电子计算机软、硬件的开发及网络信息系统集成工程的设计，安装、维修技术服务批发和零售贸易(国家专营专控商品除外)这里结交趣味相投的新朋友用厘米秀开启年轻人专属的个性化聊天模式:畅游在动漫、文学、手游的娱乐海洋里:体验QQ钱包带来话费充值、网购转账收款的全新移动支付。
					</span>
					</div>
					<div className="flex-js s045">
						<div className="display-ib s046">
							<div className="s047">
								<img src="/images/bg.png" className="s048" />
							</div>
						</div>
						<span className="info color-6 l-ht30 s049">
							公司的主要业务方向是为电信金融税务教育政府交通公安旅业及大中型企业提供信息管理总体解决方家其中放年设计开发与维护I运难外包业务。it运罐技术培川系统集成工程等业务在公司的总体业务中国于主导地位，占到公司业务的70%以上，
					</span>
					</div>
					<div className="pos-a s050">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>
				</div>


				<div className="p20 pos-r s051">
					<div className="flex-cc ">
						<div className="s052">
						</div>
					</div>
					<div className=" flex-cc display-ib color-3 s053">
						<span>
							行业客户
					</span>
					</div>
					<div className="pos-r">
						<span>政府行业</span>
						<div className="border-1 pos-a s054"></div>
						<div className="s055">
							<div className="display-ib s056">
								<img src="/images/bg.png" className="s057" />
							</div>
						</div>
					</div>
					<div className="pos-r">
						<span>教育行业</span>
						<div className="border-1 pos-a s058"></div>
						<div className="s059">
							<div className="display-ib s060">
								<img src="/images/bg.png" className="s061" />
							</div>
						</div>
					</div>
					<div className="pos-a s062">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>
				</div>


				<div className="bg-f p20 pos-r">
					<div className="flex-cc ">
						<div className="s063">
						</div>
					</div>
					<div className=" flex-cc display-ib color-3 s064">
						<span>
							合作伙伴
					</span>
					</div>
					<div>
						<div className="p20 s065">
							<div className="display-ib s066">
								<img src="/images/bg.png" className="s067" />
							</div>

						</div>
					</div>
					<div className="pos-a s068">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>
				</div>


				<div className="p20 pos-r s069">
					<div className="flex-cc ">
						<div className="s070">
						</div>
					</div>
					<div className=" flex-cc display-ib color-3 s071">
						<span>
							发展史
					</span>
					</div>
					<div className="p20 s072">

						<div className="pos-r">
							<i className="pos-a iconfont icon-shang font17 cursor-p s073"></i>

							<i className="pos-a iconfont icon-xia font17 cursor-p s074"></i>
						</div>


						<div className="s075">

						</div>

					</div>
					<div className="pos-a s076">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>
				</div>


				<div className="bg-f p20 pos-r s077">
					<div className="flex-cc ">
						<div className="s078">
						</div>
					</div>
					<div className=" flex-cc display-ib color-3 s079">
						<span>
							荣誉资质
					</span>
					</div>
					<div className="flex-cc s080">
						<button className="btn display-ib s081">荣誉证书</button>
						<button className="btn display-ib  s082">资质证书</button>
					</div>

					<div className="pos-r">
						<div className="s083">
							<div className="display-ib s084">
								<img src="/images/bg.png" className="s085" />
							</div>

						</div>
						<i className="iconfont icon-you cursor-p pos-a color-6 s086"></i>
						<i className="iconfont icon-zuojiantou cursor-p pos-a color-6 s087"></i>
					</div>

					<div className="pos-a s088">
						<i className="iconfont icon-xiugai font17 cursor-p"></i>
						<span>编辑</span>
					</div>
				</div>


			</div>


			<div className="display-n text-c">
				<div className="ht40 bg-f flex-c font14 color-3 s089">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s090"></i>
						<span className="s091">返回</span>
					</div>
					<div className="s092">
						<span>公司简介图片</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3  s093">
					<div className="border-b-1 s094">
						<div className="text-c s095">公司简介图片</div>
						<div className="text-c s096">审核状态</div>
						<div className="text-c s097">操作</div>
					</div>
					<div className="border-b-1 s098">
						<div className="text-c s099">
							<div className="s100">
								<img src="/images/bg.png" className="s101" />
							</div>
						</div>
						<div className="text-c s102">待审核</div>
						<div className="text-c s103">
							<div className="s104">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>
					<div className="border-b-1 s105">
						<div className="text-c s106">
							<div className="s107">
								<img src="/images/bg.png" className="s108" />
							</div>
						</div>
						<div className="text-c s109">待审核</div>
						<div className="text-c s110">
							<div className="s111">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>
					<div className="border-b-1 s112">
						<div className="text-c s113">
							<div className="s114">
								<img src="/images/bg.png" className="s115" />
							</div>
						</div>
						<div className="text-c s116">审核通过</div>
						<div className="text-c s117">
							<div className="s118">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>
					<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s119">
						<div className="s120">
							<div className="display-ib "><i className="iconfont icon-icon-tianjia  s121"></i></div>
							<div className="display-ib">新增公司简介图片</div>
						</div>
					</div>
				</div>

				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s122">
					<div className="s123">
						<div className="bg-f overflow-h  s124">
							<div className="font14 bg-theme color-f ht40 l-ht40 s125">
								<i title="close" className=" icon iconfont icon-guanbi1 fr text-c cursor-p font12"></i><span className="fl">新增</span>
							</div>
							<div className="p20 s126">
								<div className="s127">
									<div className="s128">
										<span className="display-ib fr">
											<span className="s129">*</span>
										公司简介图片：</span>
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s130">
										<div className="s131">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="flex-c s132">
									<div className="s133">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										图片名称：
									</span>
									</div>
									<div className="pos-r display-ib">
										<input type="text" className="text s134" />
									</div>
								</div>
							</div>
							<div className="flex-c p20 s135">
								<input type="button" value="保存" className="btn s136" />
								<input type="button" value="取消" className="btn s137" />
							</div>
						</div>
					</div>
				</div>


				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s138">
					<div className="s139">
						<div className="bg-f overflow-h  s140">
							<div className="font14 bg-theme color-f ht40 l-ht40 s141">
								<i title="close" className=" icon iconfont icon-guanbi1 fr text-c cursor-p font12"></i><span className="fl">修改</span>
							</div>
							<div className="p20 s142">
								<div className="s143">
									<div className="s144">
										<span className="display-ib fr">
											<span className="s145">*</span>
										公司简介图片：</span>
									</div>
									<div className="s146">
										<img src="/images/bg.png" className="s147" />
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s148">
										<div className="s149">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="flex-c s150">
									<div className="s151">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										图片名称：
									</span>
									</div>
									<div className="pos-r display-ib">
										<input type="text" className="text s152" />
									</div>
								</div>
							</div>
							<div className="flex-c p20 s153">
								<input type="button" value="保存" className="btn s154" />
								<input type="button" value="取消" className="btn s155" />
							</div>
						</div>
					</div>
				</div>

			</div>


			<div className="display-n text-c">
				<div className="ht40 bg-f flex-c font14 color-3 s156">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s157"></i>
						<span className="s158">返回</span>
					</div>
					<div className="s159">
						<span>公司简介</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3 p20 s160">
					<div className="s161">
						富文本框控件
				</div>
					<div className="flex-c p20 s162">
						<input type="button" value="保存" className="btn s163" />
						<input type="button" value="取消" className="btn s164" />
					</div>
				</div>
			</div>


			<div className="display-n text-c">
				<div className="ht40 bg-f flex-c font14 color-3 s165">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s166"></i>
						<span className="s167">返回</span>
					</div>
					<div className="s168">
						<span>主营业务</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3  s169">
					<div className="border-b-1 s170">
						<div className="text-c s171">主营业务图片</div>
						<div className="text-c s172">内容描述</div>
						<div className="text-c s173">审核状态</div>
						<div className="text-c s174">操作</div>
					</div>
					<div className="border-b-1 s175">
						<div className="text-c s176">
							<div className="s177">
								<img src="/images/bg.png" className="s178" />
							</div>
						</div>
						<div className="text-c info s179"> {`消息内容:

						突出工作重点，加大打击力度。要坚持“严打“方针不动摇，对黑恶势力重拳出击，除恶务尽。把打击的锋芒对准黑恶社会性质组织，严厉打击黑恶势力犯罪。凡是有下列情形之一的予以重点打击:破坏农村经济发展、插手基层选举、侵蚀和把持基层政权的黑社会性质组织。宗教恶势力、地方恶势力。

						以暴力、胁迫等手段垄断娱乐服务、交通运输、建筑工程、资源开发产品销售、专业市场等行业经营或强收”保护费"的黑恶势力:参与”黄、赌、毒"及涉枪、涉爆等违法犯罪活动的黑恶势力;替人了难、强收债务、非法保护、受雇杀人伤害群众等的黑恶势力;参与包庇黑恶势力违法犯罪活动，干扰、阻扰办案，充当黑恶势力保护伞的党政干部和执法执纪人员;群众反映强烈、影响恶劣的其他黑恶势力`}
						</div>
						<div className="text-c s180">待审核</div>
						<div className="text-c s181">
							<div className="s182">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>
					<div className="border-b-1 s183">
						<div className="text-c s184">
							<div className="s185">
								<img src="/images/bg.png" className="s186" />
							</div>
						</div>
						<div className="text-c info s187"> {`消息内容:

						突出工作重点，加大打击力度。要坚持“严打“方针不动摇，对黑恶势力重拳出击，除恶务尽。把打击的锋芒对准黑恶社会性质组织，严厉打击黑恶势力犯罪。凡是有下列情形之一的予以重点打击:破坏农村经济发展、插手基层选举、侵蚀和把持基层政权的黑社会性质组织。宗教恶势力、地方恶势力。

						以暴力、胁迫等手段垄断娱乐服务、交通运输、建筑工程、资源开发产品销售、专业市场等行业经营或强收”保护费"的黑恶势力:参与”黄、赌、毒"及涉枪、涉爆等违法犯罪活动的黑恶势力;替人了难、强收债务、非法保护、受雇杀人伤害群众等的黑恶势力;参与包庇黑恶势力违法犯罪活动，干扰、阻扰办案，充当黑恶势力保护伞的党政干部和执法执纪人员;群众反映强烈、影响恶劣的其他黑恶势力`}
						</div>
						<div className="text-c s188">待审核</div>
						<div className="text-c s189">
							<div className="s190">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>
					<div className="border-b-1 s191">
						<div className="text-c s192">
							<div className="s193">
								<img src="/images/bg.png" className="s194" />
							</div>
						</div>
						<div className="text-c info s195"> {`消息内容:

						突出工作重点，加大打击力度。要坚持“严打“方针不动摇，对黑恶势力重拳出击，除恶务尽。把打击的锋芒对准黑恶社会性质组织，严厉打击黑恶势力犯罪。凡是有下列情形之一的予以重点打击:破坏农村经济发展、插手基层选举、侵蚀和把持基层政权的黑社会性质组织。宗教恶势力、地方恶势力。

						以暴力、胁迫等手段垄断娱乐服务、交通运输、建筑工程、资源开发产品销售、专业市场等行业经营或强收”保护费"的黑恶势力:参与”黄、赌、毒"及涉枪、涉爆等违法犯罪活动的黑恶势力;替人了难、强收债务、非法保护、受雇杀人伤害群众等的黑恶势力;参与包庇黑恶势力违法犯罪活动，干扰、阻扰办案，充当黑恶势力保护伞的党政干部和执法执纪人员;群众反映强烈、影响恶劣的其他黑恶势力`}
						</div>
						<div className="text-c s196">待审核</div>
						<div className="text-c s197">
							<div className="s198">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>

					<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s199">
						<div className="s200">
							<div className="display-ib "><i className="iconfont icon-icon-tianjia  s201"></i></div>
							<div className="display-ib">新增主营业务</div>
						</div>
					</div>
				</div>

				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s202">
					<div className="s203">
						<div className="bg-f overflow-h  s204">
							<div className="font14 bg-theme color-f ht40 l-ht40 s205">
								<i title="close" className=" icon iconfont icon-guanbi1 fr text-c cursor-p font12"></i>新增
						</div>
							<div className="p20 s206">
								<div className="s207">
									<div className="s208">
										<span className="display-ib fr">
											<span className="s209">*</span>
										主营业务图片：</span>
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s210">
										<div className="s211">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="s212">
									<div className="s213">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										内容描述：
									</span>
									</div>

									<div className="pos-r display-ib">
										<textarea placeholder="请输入" cols={30} rows={10}></textarea>
									</div>
								</div>
							</div>
							<div className="flex-c p20 s214">
								<input type="button" value="保存" className="btn s215" />
								<input type="button" value="取消" className="btn s216" />
							</div>
						</div>
					</div>
				</div>


				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s217">
					<div className="s218">
						<div className="bg-f overflow-h  s219">
							<div className="font14 bg-theme color-f ht40 l-ht40 s220">
								<i title="close" className=" icon iconfont icon-guanbi1 fr cursor-p font12"></i> <span className="fl">修改</span>
							</div>
							<div className="p20 s221">
								<div className="s222">
									<div className="s223">

										<span className="display-ib fr">
											<span className="s224">*</span>
										主营业务图片：</span>
									</div>
									<div className="s225">
										<img src="/images/bg.png" className="s226" />
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s227">
										<div className="s228">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="s229">
									<div className="s230">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										内容描述：
									</span>
									</div>
									<div className="pos-r display-ib">
										<textarea cols={30} rows={10}></textarea>
									</div>
								</div>
							</div>
							<div className="flex-c p20 s231">
								<input type="button" value="保存" className="btn s232" />
								<input type="button" value="取消" className="btn s233" />
							</div>
						</div>
					</div>
				</div>

			</div>


			<div className="display-n text-c">
				<div className="ht40 bg-f flex-c font14 color-3 s234">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s235"></i>
						<span className="s236">返回</span>
					</div>
					<div className="s237">
						<span>行业客户</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3  s238">
					<div className="s239">
						<input type="button" value="新增" className="btn fr s240" />
						<input type="button" value="新增行业类型" className="btn fr s241" />
					</div>
					<div className="border-b-1 s242">
						<div className="text-c s243">行业客户图片</div>
						<div className="text-c s244">行业客户类型</div>
						<div className="text-c s245">审核状态</div>
						<div className="text-c s246">操作</div>
					</div>
					<div className="border-b-1 s247">
						<div className="text-c s248">
							<div className="s249">
								<img src="/images/bg.png" className="s250" />
							</div>
						</div>
						<div className="text-c info s251">教育行业
					</div>
						<div className="text-c s252">待审核</div>
						<div className="text-c s253">
							<div className="s254">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>
					<div className="border-b-1 s255">
						<div className="text-c s256">
							<div className="s257">
								<img src="/images/bg.png" className="s258" />
							</div>
						</div>
						<div className="text-c info s259">金融行业
					</div>
						<div className="text-c s260">待审核</div>
						<div className="text-c s261">
							<div className="s262">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>
					<div className="border-b-1 s263">
						<div className="text-c s264">
							<div className="s265">
								<img src="/images/bg.png" className="s266" />
							</div>
						</div>
						<div className="text-c info s267">政府行业
					</div>
						<div className="text-c s268">待审核</div>
						<div className="text-c s269">
							<div className="s270">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>编辑</span>
							</div>
						</div>
					</div>

					<div className="page">
						分页控件
				</div>

				</div>

				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s271">
					<div className="s272">
						<div className="bg-f overflow-h  s273">
							<div className="font14 bg-theme color-f ht40 l-ht40 s274">
								<i title="close" className=" icon iconfont icon-guanbi1 fr cursor-p font12"></i> <span className="fl">新增</span>
							</div>
							<div className="p20 s275">
								<div className="s276">
									<div className="s277">

										<span className="display-ib fr">
											<span className="s278">*</span>
										行业客户图片：</span>
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s279">
										<div className="s280">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="s281">
									<div className="s282">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										图片名称：
									</span>
									</div>
									<div className="pos-r display-ib">
										<input type="text" className="text" />
									</div>
								</div>
								<div className="s283">
									<div className="s284">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										行业客户类型：
									</span>
									</div>
									<div className="pos-r display-ib">
										<select className="select">
											<option>请选择</option>
										</select>
									</div>
								</div>
							</div>
							<div className="flex-c p20 s285">
								<input type="button" value="保存" className="btn s286" />
								<input type="button" value="取消" className="btn s287" />
							</div>
						</div>
					</div>
				</div>


				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s288">
					<div className="s289">
						<div className="bg-f overflow-h  s290">
							<div className="font14 bg-theme color-f ht40 l-ht40 s291">
								<i title="close" className=" icon iconfont icon-guanbi1 fr cursor-p font12"></i> <span className="fl">新增</span>
							</div>
							<div className="p20 s292">
								<div className="s293">
									<div className="s294">
										<span className="display-ib fr">
											<span className="s295">*</span>
										行业客户图片：</span>
									</div>
									<div className="s296">
										<img src="/images/bg.png" className="s297" />
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s298">
										<div className="s299">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="s300">
									<div className="s301">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										图片名称：
									</span>
									</div>
									<div className="pos-r display-ib">
										<input type="text" className="text" />
									</div>
								</div>
								<div className="s302">
									<div className="s303">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										行业客户类型：
									</span>
									</div>
									<div className="pos-r display-ib">
										<select className="select">
											<option>请选择</option>
										</select>
									</div>
								</div>
							</div>
							<div className="flex-c p20 s304">
								<input type="button" value="保存" className="btn s305" />
								<input type="button" value="取消" className="btn s306" />
							</div>
						</div>
					</div>
				</div>

			</div>


			<div className="display-n text-c">
				<div className="ht40 bg-f flex-c font14 color-3 s307">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s308"></i>
						<span className="s309">返回</span>
					</div>
					<div className="s310">
						<span>客户群体类型</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3  s311">
					<div className="s312">
						<input type="button" value="新增" className="btn fr s313" />
					</div>
					<div className="border-b-1 s314">
						<div className="text-c s315">行业客户类型</div>
						<div className="text-c s316">操作</div>
					</div>
					<div className="border-b-1 s317">
						<div className="text-c info s318">教育行业
					</div>
						<div className="text-c s319">
							<div className="s320">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span className="s321">修改</span>
								<i className="iconfont icon-shanchu font17 cursor-p"></i>
								<span className="s322">删除</span>
							</div>
						</div>
					</div>

					<div className="page">
						分页控件
				</div>

				</div>
			</div>


			<div className="display-n text-c">
				<div className="ht40 bg-f flex-c font14 color-3 s323">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s324"></i>
						<span className="s325">返回</span>
					</div>
					<div className="s326">
						<span>行业客户</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3  s327">
					<div className="s328">
						<input type="button" value="新增" className="btn fr s329" />

					</div>
					<div className="border-b-1 s330">
						<div className="text-c s331">合作伙伴图片</div>
						<div className="text-c s332">审核状态</div>
						<div className="text-c s333">操作</div>
					</div>
					<div className="border-b-1 s334">
						<div className="text-c s335">
							<div className="s336">
								<img src="/images/bg.png" className="s337" />
							</div>
						</div>
						<div className="text-c s338">待审核</div>
						<div className="text-c s339">
							<div className="s340">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>修改</span>
							</div>
						</div>
					</div>

					<div className="page">
						分页控件
				</div>

				</div>

				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s341">
					<div className="s342">
						<div className="bg-f overflow-h  s343">
							<div className="font14 bg-theme color-f ht40 l-ht40 s344">
								<i title="close" className=" icon iconfont icon-guanbi1 fr cursor-p font12"></i> <span className="fl">新增</span>
							</div>
							<div className="p20 s345">
								<div className="s346">
									<div className="s347">
										<span className="display-ib fr">
											<span className="s348">*</span>
										合作伙伴图片：</span>
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s349">
										<div className="s350">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="s351">
									<div className="s352">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										图片名称：
									</span>
									</div>
									<div className="pos-r display-ib">
										<input type="text" className="text" />
									</div>
								</div>
							</div>
							<div className="flex-c p20 s353">
								<input type="button" value="保存" className="btn s354" />
								<input type="button" value="取消" className="btn s355" />
							</div>
						</div>
					</div>
				</div>


				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s356">
					<div className="s357">
						<div className="bg-f overflow-h  s358">
							<div className="font14 bg-theme color-f ht40 l-ht40 s359">
								<i title="close" className=" icon iconfont icon-guanbi1 fr cursor-p font12"></i> <span className="fl">修改</span>
							</div>
							<div className="p20 s360">
								<div className="s361">
									<div className="s362">
										<span className="display-ib fr">
											<span className="s363">*</span>
										行业客户图片：</span>
									</div>
									<div className="s364">
										<img src="/images/bg.png" className="s365" />
									</div>
									<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s366">
										<div className="s367">
											<div><i className="iconfont icon-icon-tianjia font24"></i></div>
											<div>添加图片</div>
										</div>
									</div>
								</div>
								<div className="s368">
									<div className="s369">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										图片名称：
									</span>
									</div>
									<div className="pos-r display-ib">
										<input type="text" className="text" />
									</div>
								</div>
							</div>
							<div className="flex-c p20 s370">
								<input type="button" value="保存" className="btn s371" />
								<input type="button" value="取消" className="btn s372" />
							</div>
						</div>
					</div>
				</div>

			</div>


			<div className="display-n text-c">
				<div className="ht40 bg-f flex-c font14 color-3 s373">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s374"></i>
						<span className="s375">返回</span>
					</div>
					<div className="s376">
						<span>行业客户</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3  s377">
					<div className="s378">
						<input type="button" value="新增" className="btn fr s379" />

					</div>
					<div className="border-b-1 s380">
						<div className="text-c s381">合作伙伴图片</div>
						<div className="text-c s382">简介</div>
						<div className="text-c s383">审核状态</div>
						<div className="text-c s384">操作</div>
					</div>
					<div className="border-b-1 s385">
						<div className="text-c s386">
							<div className="s387">
								<img src="/images/bg.png" className="s388" />
							</div>
						</div>
						<div className="text-c infom s389">
							{`出工作重点，加大打击力度。要坚持“严打“方针不动摇，对黑恶势力重拳出击，除恶务尽。把打击的锋芒对准黑恶社会性质组织，严厉打击黑恶势力犯罪。凡是有下列情形之一的予以重点打击:破坏农村经济发展、插手基层选举、侵蚀和把持基层政权的黑社会性质组织。宗教恶势力、地方恶势力。

							以暴力、胁迫等手段垄断娱乐服务、交通运输、建筑工程、资源开发产品销售、专业市场等行业经营或强收”保护费"的黑恶势力:参与”黄、赌、毒"及涉枪、涉爆等违法犯罪活动的黑恶势力;替人了难、强收债务、非法保护、受雇杀人伤害群众等的黑恶势力;参与包庇黑恶势力违法犯罪活动，干扰、阻扰办案，充当黑恶势力保护伞的党政干部和执法执纪人员;群众反映强烈、影响恶劣的其他黑恶势力`}
						</div>
						<div className="text-c  s390">
							待审核
					</div>
						<div className="text-c s391">
							<div className="s392">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span>修改</span>
							</div>
						</div>
					</div>
					<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s393">
						<div className="s394">
							<div className="display-ib "><i className="iconfont icon-icon-tianjia  s395"></i></div>
							<div className="display-ib">新增发展史</div>
						</div>
					</div>
				</div>

				<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display-n s396">
					<div className="s397">
						<div className="bg-f overflow-h  s398">
							<div className="font14 bg-theme color-f ht40 l-ht40 s399">
								<i title="close" className=" icon iconfont icon-guanbi1 fr cursor-p font12"></i> <span className="fl">修改</span>
							</div>
							<div className="p20 s400">
								<div className="s401">
									<div className="s402">
										<span className="display-ib fr">
											<span className="s403">*</span>
										发展史年份：</span>
									</div>
									<div className="pos-r display-ib">
										<input type="date" className="date" />
									</div>
								</div>
								<div className="s404">
									<div className="s405">
										<span className="display-ib fr">
											<span className="color-red font12 color-6 vertical-a-t">*</span>
										简介：
									</span>
									</div>
									<div className="pos-r display-ib">
										<textarea cols={30} rows={10}></textarea>
									</div>
								</div>
							</div>
							<div className="flex-c p20 s406">
								<input type="button" value="保存" className="btn s407" />
								<input type="button" value="取消" className="btn s408" />
							</div>
						</div>
					</div>
				</div>

			</div >


			<div className="display- ">
				<div className="ht40 bg-f flex-c font14 color-3 s409">
					<div className="flex-c">
						<i className="color-theme iconfont icon-fanhui5 cursor-p s410"></i>
						<span className="s411">返回</span>
					</div>
					<div className="s412">
						<span>荣誉资质</span>
					</div>
				</div>
				<div className="ht40 bg-f font14 color-3  s413">
					<div className="s414">
						<input type="button" value="新增" className="btn fr s415" />
					</div>
					<div className="border-b-1 s416">
						<div className="text-c s417">荣誉资质图片</div>
						<div className="text-c s418">荣誉资质类型</div>
						<div className="text-c s419">审核状态</div>
						<div className="text-c s420">操作</div>
					</div>
					<div className="border-b-1 s421">
						<div className=" info s422">
							<div className="s423">
								<img src="/images/bg.png" className="s424" />
							</div>
						</div>
						<div className="text-c info s425">
							资质
					</div>
						<div className="text-c info s426">
							待审核
					</div>
						<div className="text-c s427">
							<div className="s428">
								<i className="iconfont icon-xiugai font17 cursor-p"></i>
								<span className="s429">修改</span>
							</div>
						</div>
					</div>

					<div className="page">
						分页控件
				</div>

				</div>
			</div>


			<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a text-c ht100 w100 font12 display-n s430">
				<div className="flex-cc w100">
					<div className="bg-f overflow-h text-l s431">
						<div className="font14 bg-theme color-f ht40 l-ht40 s432">
							<i title="close" data-feidao-actions="click:eu-001" className="icon iconfont icon-guanbi1 fr text-c cursor-p font16"></i>修改
					</div>
						<div className="s433">
							<div className="s434">
								<div className="s435">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									荣誉资质图片：
								</span>
								</div>
								<div>
									<div className="pos-r">
										<div className="s436">
											<img src="/images/bg.png" className="s437" />
										</div>
										<div className="pos-a s438">
											<i title="删除" className="iconfont icon-shanchu1 font20 cursor-p color-red"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="s439">
								<div className="s440">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									图片名称：
								</span>
								</div>
								<div>
									<div>
										<input type="text" className="text" />
									</div>
								</div>
							</div>
							<div className="s441">
								<div className="s442">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									荣誉资质类型：
								</span>
								</div>
								<div>
									<div>
										<select className="select">
											<option>请选择</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-c s443">
								<input type="button" value="保存" className="btn s444" />
								<input type="button" value="取消" className="cbtn s445" />
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a text-c ht100 w100 font12 display-n s446">
				<div className="flex-cc w100">
					<div className="bg-f overflow-h text-l s447">
						<div className="font14 bg-theme color-f ht40 l-ht40 s448">
							<i title="close" data-feidao-actions="click:eu-001" className="icon iconfont icon-guanbi1 fr text-c cursor-p font16"></i>新增
					</div>
						<div className="s449">
							<div className="s450">
								<div className="s451">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									荣誉资质图片：
								</span>
								</div>
								<div>
									<div className="pos-r">
										<div className="radius-4 display-ib pos-r cursor-p l-ht30 text-c s452">
											<div className="s453">
												<div><i className="iconfont icon-icon-tianjia font24"></i></div>
												<div>点击上传</div>
											</div>
										</div>
										<div className="pos-a s454">
											<i title="删除" className="iconfont icon-shanchu1 font20 cursor-p color-red"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="s455">
								<div className="s456">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									图片名称：
								</span>
								</div>
								<div>
									<div>
										<input type="text" className="text" />
									</div>
								</div>
							</div>
							<div className="s457">
								<div className="s458">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									荣誉资质类型：
								</span>
								</div>
								<div>
									<div>
										<select className="select">
											<option>请选择</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-c s459">
								<input type="button" value="保存" className="btn s460" />
								<input type="button" value="取消" className="cbtn s461" />
							</div>
						</div>
					</div>
				</div>
			</div>



			<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a text-c ht100 w100 font12 display-n s462">
				<div className="flex-cc w100">
					<div className="bg-f overflow-h text-l s463">
						<div className="font14 bg-theme color-f ht40 l-ht40 s464">
							<i title="close" data-feidao-actions="click:eu-001" className="icon iconfont icon-guanbi1 fr text-c cursor-p font16"></i>新增
					</div>
						<div className="s465">
							<div className="s466">
								<div className="s467">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									行业客户名称：
								</span>
								</div>
								<div>
									<div>
										<input type="text" className="text" />
									</div>
								</div>
							</div>
							<div className="text-c s468">
								<input type="button" value="保存" className="btn s469" />
								<input type="button" value="取消" className="cbtn s470" />
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="bg-black-rgba6 pos-f pos-t0 pos-r0 pos-b0 pos-l0 overflow-a text-c ht100 w100 font12 display-n s471">
				<div className="flex-cc w100">
					<div className="bg-f overflow-h text-l s472">
						<div className="font14 bg-theme color-f ht40 l-ht40 s473">
							<i title="close" data-feidao-actions="click:eu-001" className="icon iconfont icon-guanbi1 fr text-c cursor-p font16"></i>修改
					</div>
						<div className="s474">
							<div className="s475">
								<div className="s476">
									<span className="display-ib font12 fr">
										<span className="color-red">*</span>
									行业客户名称：
								</span>
								</div>
								<div>
									<div>
										<input type="text" className="text" />
									</div>
								</div>
							</div>
							<div className="text-c s477">
								<input type="button" value="保存" className="btn s478" />
								<input type="button" value="取消" className="cbtn s479" />
							</div>
						</div>
					</div>
				</div>
			</div>


		</div >
		<style jsx>{`
.s001 { margin-top:20px;width: 63% }
.s002 { padding:0 20px;margin-bottom: 20px }
.s003 { margin-right:10px }
.s004 {  width:100% ;height:360px }
.s005 { top: 5px;right: 15px; }
.s006 { margin-top: 20px }
.s007 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s008 { font-size: 23px; margin-top: 20px  }
.s009 { text-indent: 2em; }
.s010 {  width:80%;height:360px }
.s011 { height: 100%;width: 100% }
.s012 { text-indent: 2em; }
.s013 { top: 40px;right: 15px; }
.s014 { background-color:#f8f8f8  }
.s015 { margin-top: 20px }
.s016 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s017 { font-size: 23px; margin-top: 20px  }
.s018 { margin-top: 20px }
.s019 { border-radius: 5px;padding:5px }
.s020 { height: 30px;right: 50%;
					top: 26px; }
.s021 { top: 40px;right: 15px; }
.s022 { z-index:120; }
.s023 { width:309px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s024 { border-radius:4px }
.s025 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s026 { padding:20px 10px }
.s027 { display:flex; }
.s028 { height:100px;width:100px;border-radius: 50%; }
.s029 { width: 87px;height: 50px;display: flex;justify-content: center;align-items: center; }
.s030 { width: 104px;height: 50px;display: flex;justify-content: center;align-items: center; }
.s031 { padding:20px 0 }
.s032 { font-weight:bold }
.s033 { white-space: normal; }
.s034 { padding-bottom: 20px }
.s035 { font-weight:bold }
.s036 { white-space: normal; }
.s037 { padding-top: 20px }
.s038 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s039 { font-size: 23px; margin-top: 20px  }
.s040 { padding: 30px 80px ;height: 190px }
.s041 { margin-top: 40px; }
.s042 {  width:150px ;height:100px }
.s043 { height: 100px;max-width: 100% }
.s044 { margin-left:70px;text-indent: 2em; }
.s045 { padding: 30px 80px;height: 190px }
.s046 { margin-top: 40px; }
.s047 {  width:150px ;height:100px }
.s048 { height: 100px;max-width: 100% }
.s049 { margin-left:70px;text-indent: 2em; }
.s050 { top: 40px;right: 15px; }
.s051 { background-color: #f8f8f8; }
.s052 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s053 { font-size: 23px;margin-top: 20px }
.s054 { width: 80%;top: 10px;left: 10%; }
.s055 { display: flex; flex-flow: wrap; }
.s056 { margin: 15px; width:120px;height:80px }
.s057 { height: 80px;max-width: 100% }
.s058 { width: 80%;top: 10px;left: 10%; }
.s059 { display: flex; flex-flow: wrap; }
.s060 { margin: 15px; width:120px;height:80px }
.s061 { height: 80px;max-width: 100% }
.s062 { top: 40px;right: 15px; }
.s063 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s064 { font-size: 23px;margin-top: 20px }
.s065 { display: flex; flex-flow: wrap; }
.s066 { margin: 10px; width:90px;height:60px }
.s067 { height: 60px;max-width: 100% }
.s068 { top: 40px;right: 15px; }
.s069 { background-color: #f8f8f8; }
.s070 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s071 { font-size: 23px;margin-top: 20px }
.s072 { display: flex;justify-content: space-evenly;align-items: center; }
.s073 { font-size: 30px;bottom: 140px;right: 0; }
.s074 { font-size: 40px;right: -8px;top: 130px; }
.s075 { width: 90%;height: 360px; border: 1px solid black }
.s076 { top: 40px;right: 15px; }
.s077 { min-height: 500px }
.s078 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s079 { font-size: 23px;margin-top: 20px }
.s080 { margin-top: 20px }
.s081 { margin-right: 40px;width: 120px;height: 40px; }
.s082 {  margin-left: 40px;background-color: #ffffff;width: 120px;height: 40px; color: #6b6b6b }
.s083 { display: flex;flex-wrap: wrap;margin: 20px 100px }
.s084 { margin: 25px; width:150px;height:120px }
.s085 { max-width:100%;height:120px }
.s086 {  font-size:65px;right: 0;top: 160px }
.s087 {  font-size:50px;left: 0;top: 160px }
.s088 { top: 40px;right: 15px; }
.s089 { padding:0 20px;margin-bottom: 20px }
.s090 { font-size:25px; }
.s091 { margin-right: 30px; }
.s092 { margin-right: 30px }
.s093 { padding:0 20px;margin-bottom: 20px ;min-height: 600px }
.s094 { padding: 20px 0 10px 0;
				display: flex;
				justify-content: space-evenly; }
.s095 { width: 200px;height: 20px; }
.s096 { width: 200px;height: 20px; }
.s097 { width: 200px;height: 20px; }
.s098 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s099 { width: 200px;height: 80px; }
.s100 {  margin-left: 40px;width:120px;height:80px }
.s101 { height: 80px;max-width: 100% }
.s102 { width: 200px;height: 80px;margin-top: 30px; }
.s103 { width: 200px;height: 80px; }
.s104 { top: 40px;right: 15px;margin-top: 30px; }
.s105 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s106 { width: 200px;height: 80px; }
.s107 {  margin-left: 40px;width:120px;height:80px }
.s108 { height: 80px;max-width: 100% }
.s109 { width: 200px;height: 80px;margin-top: 30px; }
.s110 { width: 200px;height: 80px; }
.s111 { top: 40px;right: 15px;margin-top: 30px; }
.s112 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s113 { width: 200px;height: 80px; }
.s114 {  margin-left: 40px;width:120px;height:80px }
.s115 { height: 80px;max-width: 100% }
.s116 { width: 200px;height: 80px;margin-top: 30px; }
.s117 { width: 200px;height: 80px; }
.s118 { top: 40px;right: 15px;margin-top: 30px; }
.s119 { margin-top: 30px; height: 50px; width:60%;border: 1px solid #ddd; }
.s120 { padding-top: 10px; display: flex;justify-content: center;align-items: center; }
.s121 { font-size: 17px }
.s122 { z-index:120; }
.s123 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s124 { border-radius:4px }
.s125 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s126 { margin-left:20px; }
.s127 { display: flex }
.s128 { width: 110px }
.s129 { color:red }
.s130 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s131 { margin-top:10px; }
.s132 { margin-top: 20px }
.s133 { width: 110px }
.s134 { width: 200px }
.s135 { justify-content: space-evenly; }
.s136 { width: 50px;line-height: 20px }
.s137 { width: 50px;line-height: 20px }
.s138 { z-index:120; }
.s139 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s140 { border-radius:4px }
.s141 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s142 { margin-left:20px; }
.s143 { display: flex }
.s144 { width: 110px }
.s145 { color:red }
.s146 {  width:120px;height:80px;margin-right: 20px; }
.s147 { height: 80px;max-width: 100% }
.s148 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s149 { margin-top:0px; }
.s150 { margin-top: 20px }
.s151 { width: 110px }
.s152 { width: 200px }
.s153 { justify-content: space-evenly; }
.s154 { width: 50px;line-height: 20px }
.s155 { width: 50px;line-height: 20px }
.s156 { padding:0 20px;margin-bottom: 20px }
.s157 { font-size:25px; }
.s158 { margin-right: 30px; }
.s159 { margin-right: 30px }
.s160 { margin-bottom: 20px ;min-height: 600px }
.s161 { height: 450px;width:100% }
.s162 { justify-content: space-evenly; }
.s163 { width: 50px;line-height: 20px }
.s164 { width: 50px;line-height: 20px }
.s165 { padding:0 20px;margin-bottom: 20px }
.s166 { font-size:25px; }
.s167 { margin-right: 30px; }
.s168 { margin-right: 30px }
.s169 { padding:0 20px;margin-bottom: 20px ;min-height: 600px }
.s170 { padding: 20px 0 10px 0;
					display: flex;
					justify-content: space-evenly; }
.s171 { width: 200px;height: 20px; }
.s172 { width: 200px;height: 20px; }
.s173 { width: 200px;height: 20px; }
.s174 { width: 200px;height: 20px; }
.s175 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s176 { width: 200px;height: 80px; }
.s177 {  margin-left: 40px;width:120px;height:80px }
.s178 { height: 80px;max-width: 100% }
.s179 { width: 200px;height: 80px; }
.s180 { width: 200px;height: 80px;margin-top: 30px; }
.s181 { width: 200px;height: 80px; }
.s182 { top: 40px;right: 15px;margin-top: 30px; }
.s183 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s184 { width: 200px;height: 80px; }
.s185 {  margin-left: 40px;width:120px;height:80px }
.s186 { height: 80px;max-width: 100% }
.s187 { width: 200px;height: 80px; }
.s188 { width: 200px;height: 80px;margin-top: 30px; }
.s189 { width: 200px;height: 80px; }
.s190 { top: 40px;right: 15px;margin-top: 30px; }
.s191 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s192 { width: 200px;height: 80px; }
.s193 {  margin-left: 40px;width:120px;height:80px }
.s194 { height: 80px;max-width: 100% }
.s195 { width: 200px;height: 80px; }
.s196 { width: 200px;height: 80px;margin-top: 30px; }
.s197 { width: 200px;height: 80px; }
.s198 { top: 40px;right: 15px;margin-top: 30px; }
.s199 { margin-top: 30px; height: 50px; width:60%;border: 1px solid #ddd; }
.s200 { padding-top: 10px; display: flex;justify-content: center;align-items: center; }
.s201 { font-size: 17px }
.s202 { z-index:120; }
.s203 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s204 { border-radius:4px }
.s205 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s206 { margin-left:20px; }
.s207 { display: flex }
.s208 { width: 110px }
.s209 { color:red }
.s210 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s211 { margin-top:10px; }
.s212 { margin-top: 20px;display: flex }
.s213 { width: 110px }
.s214 { justify-content: space-evenly; }
.s215 { width: 50px;line-height: 20px }
.s216 { width: 50px;line-height: 20px }
.s217 { z-index:120; }
.s218 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s219 { border-radius:4px }
.s220 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s221 { margin-left:20px; }
.s222 { display: flex }
.s223 { width: 110px }
.s224 { color:red }
.s225 {  width:120px;height:80px;margin-right: 20px; }
.s226 { height: 80px;max-width: 100% }
.s227 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s228 { margin-top:0px; }
.s229 { margin-top: 20px ;display: flex }
.s230 { width: 110px }
.s231 { justify-content: space-evenly; }
.s232 { width: 50px;line-height: 20px }
.s233 { width: 50px;line-height: 20px }
.s234 { padding:0 20px;margin-bottom: 20px }
.s235 { font-size:25px; }
.s236 { margin-right: 30px; }
.s237 { margin-right: 30px }
.s238 { padding:0 20px;margin-bottom: 20px ;min-height: 600px }
.s239 { width: 100%;height: 30px; }
.s240 { margin-left: 30px;width: 50px;line-height: 20px }
.s241 {     margin-left: 30px;width: 100px;line-height: 20px }
.s242 { padding:40px 0 10px 0;
						display: flex;
						justify-content: space-evenly; }
.s243 { width: 200px;height: 20px; }
.s244 { width: 200px;height: 20px; }
.s245 { width: 200px;height: 20px; }
.s246 { width: 200px;height: 20px; }
.s247 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s248 { width: 200px;height: 80px; }
.s249 {  margin-left: 40px;width:120px;height:80px }
.s250 { height: 80px;max-width: 100% }
.s251 { width: 200px;height: 80px;;margin-top: 30px; }
.s252 { width: 200px;height: 80px;margin-top: 30px; }
.s253 { width: 200px;height: 80px; }
.s254 { top: 40px;right: 15px;margin-top: 30px; }
.s255 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s256 { width: 200px;height: 80px; }
.s257 {  margin-left: 40px;width:120px;height:80px }
.s258 { height: 80px;max-width: 100% }
.s259 { width: 200px;height: 80px;;margin-top: 30px; }
.s260 { width: 200px;height: 80px;margin-top: 30px; }
.s261 { width: 200px;height: 80px; }
.s262 { top: 40px;right: 15px;margin-top: 30px; }
.s263 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s264 { width: 200px;height: 80px; }
.s265 {  margin-left: 40px;width:120px;height:80px }
.s266 { height: 80px;max-width: 100% }
.s267 { width: 200px;height: 80px;;margin-top: 30px; }
.s268 { width: 200px;height: 80px;margin-top: 30px; }
.s269 { width: 200px;height: 80px; }
.s270 { top: 40px;right: 15px;margin-top: 30px; }
.s271 { z-index:120; }
.s272 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s273 { border-radius:4px }
.s274 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s275 { margin-left:20px; }
.s276 { display: flex }
.s277 { width: 110px }
.s278 { color:red }
.s279 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s280 { margin-top:10px; }
.s281 { margin-top: 20px ;display: flex }
.s282 { width: 110px }
.s283 { margin-top: 20px ;display: flex }
.s284 { width: 110px }
.s285 { justify-content: space-evenly; }
.s286 { width: 50px;line-height: 20px }
.s287 { width: 50px;line-height: 20px }
.s288 { z-index:120; }
.s289 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s290 { border-radius:4px }
.s291 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s292 { margin-left:20px; }
.s293 { display: flex }
.s294 { width: 110px }
.s295 { color:red }
.s296 {  width:120px;height:80px;margin-right: 20px; }
.s297 { height: 80px;max-width: 100% }
.s298 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s299 { margin-top:0px; }
.s300 { margin-top: 20px ;display: flex }
.s301 { width: 110px }
.s302 { margin-top: 20px ;display: flex }
.s303 { width: 110px }
.s304 { justify-content: space-evenly; }
.s305 { width: 50px;line-height: 20px }
.s306 { width: 50px;line-height: 20px }
.s307 { padding:0 20px;margin-bottom: 20px }
.s308 { font-size:25px; }
.s309 { margin-right: 30px; }
.s310 { margin-right: 30px }
.s311 { padding:0 20px;margin-bottom: 20px ;min-height: 600px }
.s312 { width: 100%;height: 30px; }
.s313 { margin-left: 30px;width: 50px;line-height: 20px }
.s314 { padding:40px 0 10px 0;
							display: flex;
							justify-content: space-between; }
.s315 { width: 200px;height: 20px; }
.s316 { width: 200px;height: 20px; }
.s317 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-between; }
.s318 { width: 200px;height: 80px;;margin-top: 30px; }
.s319 { width: 200px;height: 80px; }
.s320 { top: 40px;right: 15px;margin-top: 30px; }
.s321 { margin-right: 20px }
.s322 { margin-right: 20px }
.s323 { padding:0 20px;margin-bottom: 20px }
.s324 { font-size:25px; }
.s325 { margin-right: 30px; }
.s326 { margin-right: 30px }
.s327 { padding:0 20px;margin-bottom: 20px ;min-height: 600px }
.s328 { width: 100%;height: 30px; }
.s329 { margin-left: 30px;width: 50px;line-height: 20px }
.s330 { padding:40px 0 10px 0;
									display: flex;
									justify-content: space-evenly; }
.s331 { width: 200px;height: 20px; }
.s332 { width: 200px;height: 20px; }
.s333 { width: 200px;height: 20px; }
.s334 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s335 { width: 200px;height: 80px; }
.s336 {  margin-left: 40px;width:120px;height:80px }
.s337 { height: 80px;max-width: 100% }
.s338 { width: 200px;height: 80px;margin-top: 30px; }
.s339 { width: 200px;height: 80px; }
.s340 { top: 40px;right: 15px;margin-top: 30px; }
.s341 { z-index:120; }
.s342 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s343 { border-radius:4px }
.s344 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s345 { margin-left:20px; }
.s346 { display: flex }
.s347 { width: 110px }
.s348 { color:red }
.s349 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s350 { margin-top:10px; }
.s351 { margin-top: 20px ;display: flex }
.s352 { width: 110px }
.s353 { justify-content: space-evenly; }
.s354 { width: 50px;line-height: 20px }
.s355 { width: 50px;line-height: 20px }
.s356 { z-index:120; }
.s357 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s358 { border-radius:4px }
.s359 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s360 { margin-left:20px; }
.s361 { display: flex }
.s362 { width: 110px }
.s363 { color:red }
.s364 {  width:120px;height:80px;margin-right: 20px; }
.s365 { height: 80px;max-width: 100% }
.s366 { margin-right: 20px; width:100px;height:80px;border: 1px dashed #ddd; }
.s367 { margin-top:0px; }
.s368 { margin-top: 20px ;display: flex }
.s369 { width: 110px }
.s370 { justify-content: space-evenly; }
.s371 { width: 50px;line-height: 20px }
.s372 { width: 50px;line-height: 20px }
.s373 { padding:0 20px;margin-bottom: 20px }
.s374 { font-size:25px; }
.s375 { margin-right: 30px; }
.s376 { margin-right: 30px }
.s377 { padding:0 20px;margin-bottom: 20px ;min-height: 600px }
.s378 { width: 100%;height: 30px; }
.s379 { margin-left: 30px;width: 50px;line-height: 20px }
.s380 { padding:40px 0 10px 0;
										display: flex;
										justify-content: space-evenly; }
.s381 { width: 200px;height: 20px; }
.s382 { width: 200px;height: 20px; }
.s383 { width: 200px;height: 20px; }
.s384 { width: 200px;height: 20px; }
.s385 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-evenly; }
.s386 { width: 200px;height: 80px; }
.s387 {  margin-left: 40px;width:120px;height:80px }
.s388 { height: 80px;max-width: 100% }
.s389 { width: 200px;height: 80px;margin-top: 0px; }
.s390 { width: 200px;height: 80px;margin-top: 30px; }
.s391 { width: 200px;height: 80px; }
.s392 { top: 40px;right: 15px;margin-top: 30px; }
.s393 { margin-top: 30px; height: 50px; width:60%;border: 1px solid #ddd; }
.s394 { padding-top: 10px; display: flex;justify-content: center;align-items: center; }
.s395 { font-size: 17px }
.s396 { z-index:120; }
.s397 { width:500px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s398 { border-radius:4px }
.s399 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s400 { margin-left:20px; }
.s401 { display: flex;     }
.s402 { width: 110px;margin-top: 5px; }
.s403 { color:red }
.s404 { margin-top: 20px ;display: flex }
.s405 { width: 110px }
.s406 { justify-content: space-evenly; }
.s407 { width: 50px;line-height: 20px }
.s408 { width: 50px;line-height: 20px }
.s409 { padding:0 28px;margin-bottom: 20px }
.s410 { font-size:25px; }
.s411 { margin-right: 30px; }
.s412 { margin-right: 30px }
.s413 { padding:0 20px;margin-bottom: 20px ;min-height: 600px;display: table }
.s414 { width: 100%;height: 30px; }
.s415 { width: 50px;line-height: 20px }
.s416 { padding:40px 0 10px 0;
									display: flex;
									justify-content: space-between; }
.s417 { width: 200px;height: 20px; }
.s418 { width: 200px;height: 20px; }
.s419 { width: 200px;height: 20px; }
.s420 { width: 200px;height: 20px; }
.s421 { height:100px; padding: 20px 0 10px 0;	display: flex;justify-content: space-between; }
.s422 { display:flex;justify-content: center;align-items: center; width: 200px;height: 80px; }
.s423 {  width:120px;height:80px }
.s424 { height: 80px;max-width: 100% }
.s425 { width: 200px;height: 80px;;margin-top: 30px; }
.s426 { width: 200px;height: 80px;;margin-top: 30px; }
.s427 { width: 200px;height: 80px; }
.s428 { top: 40px;right: 15px;margin-top: 30px; }
.s429 { margin-right: 20px }
.s430 { z-index:120; }
.s431 { border-radius:4px;width:450px;margin-top:200px; }
.s432 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s433 { padding:40px }
.s434 {  display: flex;margin-bottom: 20px }
.s435 { width:100px;height:20px }
.s436 {  width:120px;height:80px }
.s437 { height: 80px;max-width: 100% }
.s438 { float:right;top:-10px;right:-10px;display:block; }
.s439 {  display: flex;align-items: center;margin-bottom: 20px }
.s440 { width:100px;height:20px }
.s441 {  display: flex;align-items: center;margin-bottom: 20px }
.s442 { width:100px;height:20px }
.s443 { margin-top: 20px; }
.s444 { width: 50px; }
.s445 { width: 50px;margin-left: 60px; }
.s446 { z-index:120; }
.s447 { border-radius:4px;width:450px;margin-top:200px; }
.s448 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s449 { padding:40px }
.s450 {  display: flex;margin-bottom: 20px }
.s451 { width:100px;height:20px }
.s452 { width:120px;height:120px;border: 1px dashed #ddd; }
.s453 { margin-top:30px; }
.s454 { float:right;top:-10px;right:-10px;display:block; }
.s455 {  display: flex;align-items: center;margin-bottom: 20px }
.s456 { width:100px;height:20px }
.s457 {  display: flex;align-items: center;margin-bottom: 20px }
.s458 { width:100px;height:20px }
.s459 { margin-top: 20px; }
.s460 { width: 50px; }
.s461 { width: 50px;margin-left: 60px; }
.s462 { z-index:120; }
.s463 { border-radius:4px;width:320px;margin-top:200px; }
.s464 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s465 { padding:20px }
.s466 {  display: flex;align-items: center;margin-bottom: 20px }
.s467 { width:100px;height:20px }
.s468 { margin-top: 20px; }
.s469 { width: 50px; }
.s470 { width: 50px;margin-left: 60px; }
.s471 { z-index:120; }
.s472 { border-radius:4px;width:320px;margin-top:200px; }
.s473 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s474 { padding:20px }
.s475 {  display: flex;align-items: center;margin-bottom: 20px }
.s476 { width:100px;height:20px }
.s477 { margin-top: 20px; }
.s478 { width: 50px; }
.s479 { width: 50px;margin-left: 60px; }
`}</style>
	</>;
}
