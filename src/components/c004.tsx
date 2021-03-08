import { Modal, useToasts } from '@geist-ui/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import router, { useRouter } from 'next/router';
import { Result } from '../pages/api/s001';
import { r002 } from '../pages/api/s002';
import { r004 } from '../pages/api/s004';
import { m005, r005 } from '../pages/api/s005';
import a001 from '../atoms/a001';

const s001 = '/api/s001';
const s002 = '/api/s002';
const s003 = '/api/s003';
const s004 = '/api/s004';
const s005 = '/api/s005';

/**
 * 消息、头像
 */
function C001() {
	const [user, setuser] = useState({} as Table001);
	useEffect(() => {
		void (async () => {
			const ret = await fetch(s001, {
				method: 'GET'
			});
			const data = await ret.json() as Result;
			if (data && data.user) {
				setuser(data.user);
			}
		})();
	}, []);
	async function logout() {
		const ret = await fetch(s002, {
			method: 'POST'
		});
		await ret.json() as r002;
		window.location.reload();
	}
	const name = user.f002;
	const avatar = user.f003;
	const imgsrc = avatar ? `${s003}?id=${avatar}` : '/images/bg.png';
	return <>
		<div className="flex-c pos-r s017">
			<div className="info1 flex-cc s001">
				<div className="infobox1 pos-a bg-f b-box s002" data-feidao-presentation="P004">

				</div>
				<i className="pos-r iconfont icon-weibiaoti- color-f cursor-p s003">
					<div className="pos-a flex-cc s004">
						<div className="color-f text-c s005" data-mess="message"></div>
					</div>
				</i>
			</div>
			<div className="info flex-c s006">
				<img className='s007' src={imgsrc} alt="" />
				<span className="color-f font14 display-ib cursor-p overflow-h s008" >{name || ''}</span>
				<div className="infobox pos-a bg-f b-box s009">
					<div className="border-b-1">
						<div className="p10 display-ib vertical-a-t s010">
							<img className='s011' src={imgsrc} alt="" />
						</div>
						<div className="display-ib vertical-a-t s012">
							<span className="s013" >{name || ''}</span>
							<input onClick={() => {
								void router.push('/d001/pg008');
							}} type="button" value="个人中心" className="btn s014" />
						</div>
					</div>
					<div className="flex-js-c s015">
						<C006 />
						<input type="button" onClick={logout} value="退出登录" className="btn s016" />
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001{
	height:60px;width:30px;margin-right:20px
}
.s002{
	box-shadow: 3px 3px 3px 3px rgba(153, 153, 153, 0.35);
	width: 320px; top: 60px;right: 10px;z-index:99
}
.s003{
	font-size:28px
}
.s004{
	width: 20px;height: 20px;top: -10px;right: -10px;border-radius: 50%;
}
.s005{
	font-size: 10px;
}
.s006{
	display:flex; margin-left:5px ;height: 60px;line-height: 60px;width:103px;
}
.s007{
	width: 37%;height: 36px;border-radius: 50%
}
.s008{
	width:100%
}
.s009{
	box-shadow: 3px 3px 3px 3px rgba(153, 153, 153, 0.35); width: 320px; top: 60px;right: 10px;z-index:99
}
.s010{
	width: 50px;height: 50px;
}
.s011{
	width: 50px;height: 50px;border-radius: 50%
}
.s012{
	margin-bottom:20px
}
.s013{
	font-size: 16px; display: block;text-align: left;margin: 10px 0
}
.s014{
	width:120px;height:30px
}
.s015{
	justify-content: space-evenly;
}
.s017{
	width: 145px
}
.s018 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }

`}</style>
	</>;
}

/**
 * logo
 */
function C003() {
	return <>
		<div className="flex-js-c s001">
			<div className="s002">
				<img src="/images/logo.png" alt="" className="s003" />
			</div>
		</div>
		<style jsx>{`
.s001{
	padding-left: 10px
}
.s002{
	width:90px;heght:60px;
}
.s003{
	max-width: 100%;max-height: 100%;
}
`}
		</style>
	</>;
}

/**
 * 菜单
 */
function C002() {
	const router = useRouter();
	const key = router.pathname;
	const { data } = useSWR<r004>(s004);
	if (!data) {
		return <></>;
	}
	return (<>
		<div className="color-f w1200 s001">
			{data.map((menu, idx) => {
				const menu_name = menu.f002;
				const url = menu.f005;
				const iscurrentpage = menu.f005 === key;
				const submenus = menu.sub || [];
				return <span className="display-ib text-c cursor-p nav onemenu pos-r ht60 s002" key={idx}>
					<a className={`ht60 display-ib ${iscurrentpage ? 'bg-themeff' : ''} ${url ? 's004' : 's005'}`} href={url}>
						<i className={`iconfont ${menu.f007} font20 vertical-a-t display-ib`}></i>
						<span className="font16 vertical-a-t display-ib color-f s003">{menu_name}</span>
					</a>
					<ul className="pos-a font16 s006">
						{submenus.map((menu, idx) => {
							const menu_name = menu.f002;
							const url = menu.f005;
							return <a href={url} key={idx} ><li className={`pos-r ${iscurrentpage ? 'bg-themef' : ''}`}>{menu_name}</li></a>;
						})}
					</ul>
				</span>;
			})}
		</div >
		<style jsx>{`
.s001{
	padding: 0 5px;
}
.s002{
	width:130px;display: inline-flex;align-items: center;
}
.s003{
	margin-left:10px;
}
.s004{
	cursor:default;width: 100%;color:#fff;display: inline-flex;align-items: center;justify-content: center;
}
.s005{
	cursor:default;width: 100%;display: inline-flex;align-items: center;justify-content: center;
}
.s006{
	width:130px;z-index: 99;top:60px;
}
.s003:hover{
	color:#fc5c38;
}
`}</style>
	</>);
}

/**
 * 修改密码弹窗
 */
function C006() {
	const [psw_old, setpsw_old] = useState('');
	const [psw_new, setpsw_new] = useState('');
	const [psw_repeat, setpsw_repeat] = useState('');
	const [, toast] = useToasts();
	const [open, setopen] = useState(false);
	return <>
		<input type="button" onClick={() => {
			setopen(true);
		}} value="修改密码" className="btn s001" />
		<Modal open={open} onClose={() => {
			console.error('lalalla');
			setopen(false);
		}}>
			<Modal.Title>
				<div className="font14 bg-theme color-f ht40 l-ht40 s018">修改密码</div></Modal.Title>
			<Modal.Content>
				<div className="flex-cc w100">
					<div className=" overflow-h text-l s002">
						<div className="p20 color-6 bg-f">
							<div className="s004">
								<div className="s005">
									<span className="display-ib font14 fr">原密码：</span>
								</div>
								<div>
									<input type="password" onChange={(e) => {
										setpsw_old(e.target.value);
									}} className="text s006" />
								</div>
							</div>
							<div className="s007">
								<div className="s008">
									<span className="display-ib font14 fr">新密码：</span>
								</div>
								<div>
									<input type="password" onChange={(e) => {
										setpsw_new(e.target.value);
									}} className="text s009" />
								</div>
							</div>
							<div className="s010">
								<div className="s011">
									<span className="display-ib font14 fr">确认密码：</span>
								</div>
								<div>
									<input type="password" onChange={(e) => {
										setpsw_repeat(e.target.value);
									}} className="text s012" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal.Content>
			<Modal.Action passive onClick={async () => {
				const ret = await a001<r005, m005>(s005, {
					psw_new,
					psw_old,
					psw_repeat
				});
				if (ret.ok === false) {
					toast({
						text: ret.message,
						type: 'error'
					});
					return;
				}
				toast({
					text: '修改密码成功',
					type: 'success'
				});
				setopen(false);
			}}>确认</Modal.Action>
			<Modal.Action onClick={() => {
				setopen(false);
			}}>取消</Modal.Action>
		</Modal>
		<style jsx>{`
.s001{
	display: block; width:120px;height:30px;margin: 10px;
}
.s002 { border-radius:4px;width:380px; }
.s003 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s004 { display: flex;align-items:center;margin-bottom: 20px }
.s005 { width:100px;height:20px }
.s006 { width:180px }
.s007 { display: flex;align-items:center;margin-bottom: 20px }
.s008 { width:100px;height:20px }
.s009 { width:180px }
.s010 { display: flex;align-items:center;margin-bottom: 20px }
.s011 { width:100px;height:20px }
.s012 { width:180px }
.s013 { margin-top: 20px; }
`}</style>
	</>;
}

/**
 * 头部导航
 */
export default function Navigation() {
	return <>
		<div className="bg-theme ht60 flex-js-c s001">
			<C003 />
			<C002 />
			<C001 />
		</div>
		<style jsx>{`
.s001{
	z-index: 119;
}
`}</style>
	</>;
}
