# 眼科学习站

按《眼科学》教材章节编排的图文学习网站，纯静态 HTML/CSS/JS，无需构建工具，可直接部署到 GitHub Pages 或 Cloudflare Pages。

**全部19章已完成上线**，共95道随堂测验题（每章5题）。

## 目录结构

```
/
├── index.html              # 首页：章节导航 + 全部19章卡片
├── assets/
│   ├── style.css           # 全站共用样式
│   └── site.js             # 侧边栏交互 + 测验引擎 + 眼球图交互
├── chapters/
│   ├── 01-anatomy.html         第1章 眼的应用解剖与生理
│   ├── 02-refraction.html      第2章 屈光与调节
│   ├── 03-examination.html     第3章 眼科检查法
│   ├── 04-eyelid.html          第4章 眼睑病
│   ├── 05-lacrimal.html        第5章 泪器病
│   ├── 06-conjunctiva.html     第6章 结膜病
│   ├── 07-cornea.html          第7章 角膜病
│   ├── 08-sclera.html          第8章 巩膜病
│   ├── 09-uveitis.html         第9章 葡萄膜炎
│   ├── 10-cataract.html        第10章 晶状体病（白内障）
│   ├── 11-glaucoma.html        第11章 青光眼
│   ├── 12-vitreous.html        第12章 玻璃体病
│   ├── 13-retina.html          第13章 视网膜病
│   ├── 14-optic-nerve.html     第14章 视神经疾病
│   ├── 15-strabismus.html      第15章 斜视与弱视
│   ├── 16-trauma.html          第16章 眼外伤
│   ├── 17-orbit.html           第17章 眼眶病
│   ├── 18-tumor.html           第18章 眼部肿瘤
│   └── 19-systemic.html        第19章 全身病的眼部表现
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

## 中西医双轨道

- `index.html` / `chapters/` —— 西医《眼科学》，19章全部完成
- `tcm-index.html` / `tcm-chapters/` —— 中医《中医眼科学》，目前完成总论前2章（T1中医眼科发展概要、T2眼与脏腑经络的关系），其余17章制作中
- 两个首页顶部都有"西医眼科学 / 中医眼科学"切换标签，可随时互跳
- 中医页面通过 `<body class="tcm">` 应用暖棕色主题（区别于西医的青蓝主题），共用同一份 `assets/style.css` 和 `assets/site.js`

## 内容说明

内容依据国内《眼科学》规培/本科教材大纲自行编写整理，用于考点复习，不替代官方教材与临床指南；具体诊疗请以最新临床指南及主治医师指导为准。
