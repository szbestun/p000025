# 开发步骤

## 下载代码并初始化

推荐使用Git命令的方式

### Git

1. [fork项目](https://www.cnblogs.com/patchouli/p/6511251.html)
1. 克隆项目到本地

	```sh
	md ~/01factory
	cd ~/01factory
	git clone git@github.com:mm-works/p000025.git
	cd ./p000025/
	yarn
	```

### Local

这种方式无法提交代码，但可以本地运行

```sh
md ~/01factory
cd ~/01factory
wget https://github.com/mm-works/p000025/archive/main.zip
unzip ./main.zip
mv ./p000025-main ./p000025
rm -f ./main.zip
cd ./p000025/
yarn
```

## Getting Started

1. 运行命令进行开发：

	```bash
	cd ~/01factory/p000025
	yarn dev
	code .
	```

1. 在浏览器中打开地址[http://localhost:3000](http://localhost:3000)
1. 在vscode中打开页面 `src/pages/pg001` 修改代码并查看浏览器上的变化

## 页面介绍

### pg001

找回密码。如果用户输入的身份证号和姓名以及帐户名均正确，就可以修改密码.

### pg002

首页

### pg003

用户登录。相关说明参见[文档](./src/pages/d001/readme)

### pg004

公司简介——brief.html

### pg005

企业文化——culture.html

### pg006

企业文化动态详情——dynamic-details.html

### pg007

管理者之窗——controller.html

### pg008

成长路上——news.html

### pg009

成长路上详情——news-details.html

### pg010

法制法规——law.html

### pg011

法制法规详情——law-details.html

### pg012

公司简介管理——brief-manage.html

### pg013

企业文化管理——culture-manage.html

### pg014

企业文化动态管理——dynamic-manage.html

### pg015

管理者之窗管理——controller-manage.html

### pg016

成长路上管理——news-manage.html

### pg017

法制法规管理——law-manage.html
