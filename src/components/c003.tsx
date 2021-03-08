
/**
 * 头部导航
 */
export default function Navigation() {
	return <>
		<div className="bg-theme ht60 flex-js-c s001">

			<div>
				<img src="/images/logo.png" />
			</div>
			<div className="color-f w1200">
				<span className="display-ib ht60 l-ht60 text-c nav cursor-p">企业宣传</span>
				<span className="display-ib ht60 l-ht60 text-c nav cursor-p">企业宣传维度</span>
				<span className="display-ib ht60 l-ht60 text-c nav cursor-p">互动社区</span>
				<span className="display-ib ht60 l-ht60 text-c nav cursor-p">企业制度</span>
				<span className="display-ib ht60 l-ht60 text-c nav cursor-p">数据维护</span>
				<span className="display-ib ht60 l-ht60 text-c nav cursor-p">工作审批</span>
				<span className="display-ib ht60 l-ht60 text-c nav cursor-p">系统管理</span>
			</div>


			<div className="flex-c">
				<i className="iconfont icon-weibiaoti- color-f cursor-p s009"></i>
				<div className="flex-c cursor-p s010">
					<i className="iconfont icon-touxiang color-f s011"></i>
					<span className="color-f font14 display-ib s012">刘德华</span>
				</div>
			</div>

		</div>
		<style jsx>{`
.s001 { padding:0 20px }
div>span { width:13.9% }
.s009 { font-size:28px }
.s010 { margin-left:20px }
.s011 { font-size:28px }
.s012 { margin-left:10px }
`}</style>
	</>;
}
