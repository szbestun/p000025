import { NextPage, PageConfig } from 'next';
import anylogger from 'anylogger';
import Head from 'next/head';
import { Col, Row, Spacer, useToasts } from '@geist-ui/react';
import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import { m001, r001 } from './api/pg001/s001';
import pa001 from '../atoms/a001';

const s001 = '/api/pg001/s001';
const logger = anylogger('pages/pg001');

interface IProps {
	csrf: string;
}

function C001() {
	const [, showToast] = useToasts();
	function toast(text: string) {
		showToast({
			text,
			type: 'error'
		});
	}
	const [userid, setuserid] = useState('');
	const [id, setid] = useState('');
	const [name, setname] = useState('');
	const [psw, setpsw] = useState('');
	async function getpswback() {
		if (!userid) {
			toast('请填写帐号');
			return;
		}
		if (!id) {
			toast('请填写身份证号');
			return;
		}
		if (!name) {
			toast('请填写真实姓名');
			return;
		}
		if (!psw) {
			toast('请填写新密码');
			return;
		}
		const data = await pa001<r001, m001>(s001, {
			userid,
			id,
			name,
			psw
		});
		if (data.ok === false) {
			toast(data.message);
		} else {
			void router.push('/d001/pg001');
		}
	}
	return <>
		<div className='s000'>
			<Row justify='center' align='middle'>
				<Col span={12}>
					<Spacer y={10}></Spacer>
				</Col>
			</Row>
			{/* <!-- 忘记密码 start --> */}
			<div className=" pos-a s019">
				<div className="border-b-1 bg-theme text-c flex-cc s020">
					<span className="color-f font20 s021">找回密码</span>
				</div>
				<div className="p20 text-c bg-f">
					{/* <!-- 账号 start --> */}
					<div className="flex-c s003">
						<span className="color-3 font12 display-ib text-r s022">账号：</span>
						<input type="text" className="text radius-4 s023" placeholder="请输入账号" onChange={(e) => {
							setuserid(e.target.value);
						}} />
					</div>
					<div className="flex-c">
						<span className="color-3 font12 display-ib text-r s022">真实姓名：</span>
						<input type="text" name='name' className="text radius-4 s023" placeholder="请输入真实姓名" onChange={(e) => {
							setname(e.target.value);
						}} />
					</div>
					<div className="flex-c">
						<span className="color-3 font12 display-ib text-r s022">身份证：</span>
						<input type="text" name='id' className="text radius-4 s023" placeholder="请输入身份证" onChange={(e) => {
							setid(e.target.value);
						}} />
					</div>
					<div className="flex-c">
						<span className="color-3 font12 display-ib text-r s022">新密码：</span>
						<input type="password" name='psw' className="text radius-4 s023" placeholder="请输入新密码" onChange={(e) => {
							setpsw(e.target.value);
						}} />
					</div>
					{/* <!-- 账号 end --> */}
					{/* <!-- 登陆按钮 start --> */}
					<div className="text-c s015">
						<input type="submit" value="找回密码" className="bg-theme color-f radius-4 border-none cursor-p login-btn s024" onClick={getpswback} />
					</div>
					{/* <!-- 登陆按钮 --> */}
					<div className="text-c font12 color-6 cursor-p s017">
						<span className="color-theme "><Link href='/d001/pg001' >返回登陆</Link></span>
					</div>
					{/* <!-- 版本号 start --> */}
					<div className="text-c font12 color-6 s018">
						版本号：<span className="color-theme ">1.1.0</span>
					</div>
					{/* <!-- 版本号 end --> */}
				</div>
			</div>
			{/* <!-- 忘记密码 end --> */}
		</div>
		<style jsx>{`
.s000{
	width: 100vw;
	height: 100vh;
	background:url(/images/bg.png);
	background-size: cover;
}
.s001{
	width:400px;height:410px;box-shadow: 0 0 5px #338fe1;left: 0;right: 0;bottom: 0;top: 0;margin: auto;border-radius: 11px
}
.s002{
	height:110px;border-radius: 10px 10px 0 0 
}
.s003{
	height:40px;margin-bottom: 20px;
}
.s004{
	box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.35); 
	width:260px;height:40px;border:1px solid #ddd;padding:0 10px 0 40px;
}
.s005{
	font-size:20px;top:10px;left:10px;
}
.s006{
	height:40px;margin-bottom: 20px;
}
.s007{
		box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.35);
		width:260px;height:40px;border:1px solid #ddd;padding:0 10px 0 40px;
}
.s008{
	font-size:20px;top:10px;left:10px;
}
.s009{
	right:10px;top:10px
}
.s010{
	height:40px;margin-bottom: 20px;display: flex;justify-content: center
}
.s011{
	margin-left: 24px
}
.s012{
	box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.35);
	width:150px;height:40px;border:1px solid #ddd;padding:0 10px 0 40px;
}
.s013{
	font-size:20px;top:10px;left:10px;
}
.s014{
	width:132px;height:40px;
}
.s015{
	margin-top: 30px;
}
.s016{
	width:260px;height:50px;outline: none
}
.s017{
	margin-top: 20px;
	display: inline;
}
.s018{
	margin-top: 15px;
}
.s019{
	width:400px;height:410px;box-shadow: 0 0 5px #338fe1;left: 0;right: 0;bottom: 0;top: 0;margin: auto;border-radius: 11px
}
.s020{
	height:70px;border-radius: 10px 10px 0 0 
}
.s021{
	font-weight: bold;
}
.s022{
	width: 96px;
}
.s023{
	width: 210px;height: 40px;
}
.s024{
	width:260px;height:50px;outline: none
}
		`}</style>
	</>;
}

/**
 * 密码找回页
 */
const page: NextPage<IProps> = ({ csrf }) => {
	return (
		<>
			<Head>
				<title>密码找回</title>
			</Head>
			<C001 />
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;
