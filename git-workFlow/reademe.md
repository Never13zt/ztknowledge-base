## 正常Github工作流 有两个文件 master develop

## 按功能进行分类
# feature 新增功能
# release 新版本发布
# fixed bug修复

## git 常用操作命令
# 创建分支
git checkout -b develop master
git checkout -b feature develop

# 提交记录
git add 修改的文件
git commit -m '书写的commit'

# 合并分支
git checkout develop

<!-- -no-ff的意思是不使用快速合并 -->
git merage --no-ff 分支名 
<!-- --squash 这样合并后不会带来任何commit log -->
git merage --no-ff 分支名 

# 删除分支
git branch -d 要删除的分支

# 首先需要在本地建立与Github帐户的联系，在shell中安装SSH
ssh-keygen -t rsa -C "邮箱地址"
ssh-add id_rsa
输入密码 
会在user文件夹下生产.ssh -----> id_rsa.pub(公钥) 复制
---Github(Account Setting ---> SSH Key ---> Add SSH key)

