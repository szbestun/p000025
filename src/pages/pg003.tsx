import { GetServerSideProps, NextApiRequest, NextApiResponse, NextPage, PageConfig } from 'next';
import anylogger from 'anylogger';
import Head from 'next/head';
import Link from 'next/link';
import { Col, Row, Spacer } from '@geist-ui/react';
import a002 from '../atoms/a002';
import { Message as M1, Query as Q1, Result as R1 } from './api/pg003/s001';

const s001 = '/api/pg003/s001';
const logger = anylogger('pages/d001/pg001.tsx');

interface IProps {
	csrf: string;
}


function C001(props: { csrf: string; }) {
	return <>
		<form action={s001} method='POST'>
			<input type='hidden' name='csrf' value={props.csrf} />
			<Row justify='center' align='middle'>
				<Col span={12}>
					<Spacer y={10}></Spacer>
				</Col>
			</Row>
			<div className=" pos-a display- s001">
				<div className="border-b-1 bg-theme text-c flex-cc s002">
					<img src="/images/logo.png" alt="" />
				</div>
				<div className="p20 text-c bg-f">
					{/* <!-- 账号 start --> */}
					<div className="s003">
						<div className="display-ib pos-r">
							<input type="text" placeholder="请输入用户名" className="radius-4 font14 s004" id="user_name" name='usr' required />
							<i className="iconfont icon-yonghuming color-9 pos-a s005"></i>
						</div>
					</div>
					{/* <!-- 账号 end --> */}
					{/* <!-- 密码 start --> */}
					<div className="s006">
						<div className="display-ib pos-r">
							<input type="password" placeholder="请输入密码" className="radius-4 font14 s007" id="user_pwd" name='psw' required />
							<i className="iconfont icon-mima color-9 pos-a s008"></i>
							{/* <!-- 显示使用 icon-xianshi --> */}
							<i className="iconfont icon-icon-test1 font20 pos-a cursor-p color-6 s009"
								data-feidao-actions="click:a004"></i>
						</div>
					</div>
					{/* <!-- 密码 end --> */}
					{/* <!-- 登陆按钮 start --> */}
					<div className="text-c s015">
						<input type="submit" value="登录" className="bg-theme color-f radius-4 border-none cursor-p login-btn s016" />
					</div>
					{/* <!-- 登陆按钮 --> */}
					{/* <!-- 忘记密码 start --> */}
					<div className="text-c font12 color-6 cursor-p s017">
						<span className="color-theme ">
							<Link href='/pg001' >忘记密码</Link>
						</span>
					</div>
					{/* <!-- 忘记密码 end --> */}
					{/* <!-- 版本号 start --> */}
					<div className="text-c font12 color-6 s018">
						版本号：<span className="color-theme ">1.1.1</span>
					</div>
					{/* <!-- 版本号 end --> */}
				</div>
			</div>
			{/* <!-- 登录 end --> */}
		</form>
		<style jsx>{`
			form{
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
				width: 90px;
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
 * 用户名密码登录页Signin
 */
const page: NextPage<IProps> = ({ csrf }) => {
	return (
		<>
			<Head>
				<title>用户登录</title>
			</Head>
			<C001 csrf={csrf} />
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;

export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
	const csrf = a002(context.req as NextApiRequest, context.res as NextApiResponse);
	logger.debug('csrf', csrf);
	return Promise.resolve({
		props: {
			csrf
		}
	});
};
