
<h1 align="center">
AcadHomepage
</h1>

<div align="center">

[![](https://img.shields.io/github/stars/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io)
[![](https://img.shields.io/github/forks/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io)
[![](https://img.shields.io/github/issues/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io)
[![](https://img.shields.io/github/license/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io/blob/main/LICENSE)  | [English README](../README.md) 

</div>

<p align="center">一个现代、响应式的个人学术主页</p>


<p align="center">
    <br>
    <img src="./screenshot.png" width="100%"/>
    <br>
</p>

一些例子：
- [样例页面](https://rayeren.github.io/acad-homepage.github.io/)
- [作者的个人主页](https://rayeren.github.io/)

## 主要特点
- **自动更新谷歌学术引用**: 借助谷歌学术爬虫和github action功能，本仓库可以自动更新作者的引用数和论文引用数。
- **支持谷歌Analytics**: 你可以通过简单的配置来实现使用谷歌Analytics跟踪网页的流量。
- **响应式的**: 此主页会针对不同的屏幕尺寸自动调整布局。
- **美观而简约**: 此主页美观而简约，适合个人学术主页的搭建。
- **搜索引擎优化**: 搜索引擎优化 (SEO) 帮助搜索引擎轻松找到您在主页上发布的信息，然后将其与类似网站进行排名，并获得排名优势。

## 快速开始

1. Fork本仓库到`USERNAME/USERNAME.github.io`，其中`USERNAME`是你的github用户名。
1. 配置谷歌学术引用爬虫：
    1. 在你的谷歌学术引用页面的url里找到你的谷歌学术ID：例如，在url https://scholar.google.com/citations?user=SCHOLAR_ID 中，`SCHOLAR_ID`部分即为你的谷歌学术ID。
    1. 在github本仓库页面的`Settings -> Secrets -> Actions -> New repository secret`中，添加`GOOGLE_SCHOLAR_ID`变量：`name=GOOGLE_SCHOLAR_ID`、`value=SCHOLAR_ID`。
    1. 在github本仓库页面的`Action`中，点击*"I understand my workflows, go ahead and enable them"*启用workflows by clicking *"。本action将会谷歌学术引用的统计量数据`gs_data.json`到本仓库的`google-scholar-stats`分支中。每次修改main分支的内容会触发该action。本action也会在每天08:00 UTC定时触发。
1. 使用 [favicon-generator](https://redketchup.io/favicon-generator)生成favicon（网页icon文件），并下载所有文件到`REPO/images`。
1. 修改主页配置文件[_config.yml](../_config.yml):
    1. `title`: 主页标题
    1. `description`: 主页的描述
    1. `repository`: USER_NAME/REPO_NAME  
    1. `google_analytics_id` (可选的): 谷歌Analytics ID
    1. SEO相关的键值 (可选的): 从搜索引擎的控制台里获得对应的ID (例如：Google, Bing and Baidu)，然后粘贴到这里。
    1. `author`: 主页作者信息，包括其他网页、Email、所在城市、大学等。
    1. `google_scholar_stats_use_cdn`: 使用CDN读取存储于`https://raw.githubusercontent.com/`的google scholar引用统计数据，防止中国大陆地区被墙无法访问的情况。但是CDN有缓存，因此`google_scholar_stats_use_cdn : True`时，引用数据更新会有延迟。
    1. 更多的配置信息在注释中有详细描述。
1. 将你的主页内容添加到 [_pages/about.md](../_pages/about.md).
1. 你的主页将会被部署到`https://USERNAME.github.io`.

## 本地调试

1. 使用`git clone`将本项目克隆到本地。
1. 安装Jekyll的构建环境，包括`Ruby`、`RubyGems`、`GCC`和`Make`。可参考[该教程](https://jekyllrb.com/docs/installation/#requirements)。
1. 运行 `bash run_server.sh` 来启动Jekyll实时重载服务器。
1. 在浏览器里打开 [http://127.0.0.1:4000](http://127.0.0.1:4000)。如果你修改了网页的源码，服务器会自动重新编译并刷新页面。
1. 当你修改完毕你的页面以后, 使用`git`命令，`commit`你的改动并`push`到你的github仓库中。

# Acknowledges

- AcadHomepage incorporates Font Awesome, which is distributed under the terms of the SIL OFL 1.1 and MIT License.
- AcadHomepage is influenced by the github repo [mmistakes/minimal-mistakes](https://github.com/mmistakes/minimal-mistakes), which is distributed under the MIT License.
- AcadHomepage is influenced by the github repo [academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io), which is distributed under the MIT License.
# 论文视频

首页的 10 篇论文已通过 `_data/paper_videos.yml` 配置中英文视频，MP4 保存在 `准备发表的视频/Chinese/` 和 `准备发表的视频/English/`。发布时需要将对应 MP4 与网站代码一起提交，保留文件名和目录结构。

为新论文添加视频时，在该 YAML 文件中添加唯一标识、标题 `title`、封面 `poster` 和中英文路径 `zh` / `en`，然后在 `_pages/about.md` 对应论文的 PDF 链接后加入：

```liquid
{% include paper-video-links.html id="对应的唯一标识" %}
```

视频在点击入口后加载，不自动播放；弹窗支持切换语言、原生播放控件、Esc 关闭和单独打开 MP4。关闭弹窗会停止播放并释放视频来源。禁用 JavaScript 或浏览器不支持弹窗时，入口仍可直接打开 MP4。

## 论文代码链接

`_data/paper_code.yml` 保存已根据仓库 README 中的论文标题或 DOI 核对的代码链接。独立项目链接到仓库，集中在总仓库中的 KINN、DCEM、CENN 和 Transfer Learning 链接到各自目录。在 `_pages/about.md` 对应论文的 PDF 链接后加入 `{% include paper-code-link.html id="对应的唯一标识" %}` 即可显示 Code 按钮。新增条目时先确认仓库对应论文，再添加 `title` 和 `url`。


## 论文推送与 B 站主页

`_data/paper_news.yml` 保存与论文标题或 DOI 核对后的报道。对应论文的 PDF / Code 链接旁加入 `{% include paper-news-link.html id="对应的唯一标识" %}`，显示带来源的推送按钮。字段包括来源 `source`、报道标题 `title`、链接 `url` 和便于核对的 `doi` 或 `paper_url`。优先链接官方原文；转载页面需在来源中标注“转载”。目前清华新闻网两篇报道对应 XDEM、PFEM 和计算力学 AI for PDEs 综述，Quanta Magazine 报道对应 KINN；尚未找到可靠对应报道的论文不添加推送按钮。

B 站主页配置在 `_config.yml` 的 `author.bilibili`（用户 UID）和 `author.bilibili_name`（昵称），桌面资料栏显示名称，手机社交入口提供图标和可访问名称。


## 浏览次数

浏览次数显示在个人资料名称下，桌面和手机均可见。当前配置使用 `yizheng.goatcounter.com`，由 `assets/js/site-visits.js` 加载官方统计脚本并读取全站总数；清空 `visit_counter.goatcounter_site` 才会恢复旧的不蒜子接口。不自动重试计数请求，也不在本地增加数值。

接口超过 8 秒未返回时，有缓存则显示上次成功获取的次数并标注“缓存”（悬停可查看获取时间），没有缓存则显示“暂不可用”。迟到的有效响应仍会更新计数。缓存只保存在当前浏览器、当前域名下，不等同于统计数据库备份；第三方服务不可用时，首次访问者无法取得真实总数。预览域名与正式域名的统计彼此独立。


### 切换到自己的 GoatCounter 账号

已配置用户提供的 `yizheng` 账号；公开计数权限需要在账号后台开启，代码部署后才开始统计正式网站访问。更换账号或重新配置时：

1. 在 https://www.goatcounter.com/signup 注册，站点域名填写 `yizheng-wang.github.io`。
2. 在站点设置开启 **Allow adding visitor counts on your website**，否则公开计数接口不可读。若要与之前 PV 的“每次打开页面计一次”口径一致，在 **Settings → Data collection → Sessions** 关闭会话去重。
3. 在 `_config.yml` 的 `visit_counter.goatcounter_site` 填写分配的站点子域名（不含 `https://` 和 `.goatcounter.com`），`started_on` 填实际启用日期，保留 `production_host` 为正式网站域名。
4. 部署后检查后台收到真实访问，再检查 `/counter/TOTAL.json` 返回有效数值。GoatCounter 公共计数缓存最长 4 小时，不是每次刷新都立即更新。

页面会注明新统计起始日期，原服务累计数不会自动导入或相加。两家服务的本地缓存隔离，避免误把旧数值当成新服务数据。本地预览只读取数字，不向正式账号发送访问记录。账号密码和 API 密钥无需放入网站。

依据：[公开计数文档](https://www.goatcounter.com/help/visitor-counter)、[会话计数口径](https://www.goatcounter.com/help/sessions)。
