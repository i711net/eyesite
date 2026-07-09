# 眼科学习站

按《眼科学》教材章节编排的图文学习网站，纯静态 HTML/CSS/JS，无需构建工具，可直接部署到 GitHub Pages 或 Cloudflare Pages。

## 目录结构

```
/
├── index.html              # 首页：章节导航 + 全部章节卡片
├── assets/
│   ├── style.css           # 全站共用样式
│   └── site.js             # 侧边栏交互 + 测验引擎 + 眼球图交互
├── chapters/
│   ├── 01-anatomy.html     # 第1章 眼的应用解剖与生理
│   └── 02-refraction.html  # 第2章 屈光与调节
└── README.md
```

## 上传到 GitHub

```bash
git init
git add .
git commit -m "眼科学习站：第一批章节（解剖生理 + 屈光）"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

## 用 Cloudflare Pages 部署

1. 登录 Cloudflare 控制台 → **Workers & Pages** → **创建应用程序** → **Pages** → **连接到 Git**
2. 选择刚才推送的仓库
3. 构建设置：
   - **框架预设**：无 (None)
   - **构建命令**：留空
   - **构建输出目录**：`/`（仓库根目录，因为 `index.html` 在根目录）
4. 点击部署，几十秒后即可获得 `xxx.pages.dev` 的访问地址
5. 之后每次 `git push`，Cloudflare Pages 会自动重新部署

> 也完全兼容 GitHub Pages：仓库 Settings → Pages → Source 选 `main` 分支 `/ (root)` 目录即可，二选一或两个都开都可以。

## 后续新增章节的方法

每新增一章，会在 `chapters/` 下新增一个 `0X-xxx.html` 文件，并且需要同步更新以下 3 处（我会在交付新章节时一并帮你改好，此处仅作说明）：

1. `index.html` 中：
   - 左侧侧边栏对应章节的 `<a>` 去掉 `disabled` 类，`href` 指向新文件
   - 章节卡片区域对应卡片从 `<div class="chapter-card locked">` 改为 `<a class="chapter-card" href="...">`，`badge` 文字改为"已上线"
2. 已有的所有 `chapters/*.html` 文件里，侧边栏对应章节同样去掉 `disabled`
3. 新章节页面自身的"上一章 / 下一章"链接对应更新

## 内容说明

内容依据国内《眼科学》规培/本科教材大纲自行编写整理，用于考点复习，不替代官方教材与临床指南；具体诊疗请以最新临床指南及主治医师指导为准。
