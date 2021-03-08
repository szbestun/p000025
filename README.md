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
