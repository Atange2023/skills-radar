export type Expert = {
  id: string;
  name: string;
  alias: string;
  avatar: string;
  tone: string;
  summary: string;
  position: string;
  sources: string;
  installOrder: string[];
};

export type SkillItem = {
  id: number;
  expert: string;
  name: string;
  cn: string;
  type: string;
  tags: string[];
  url: string;
  source: string;
  solves: string;
  usage: string;
  best: string;
  priority: "先装" | "先看" | "按需" | "参考" | "进阶" | "高级";
  freshness: "稳定" | "活跃" | "观察";
  note?: string;
  urls?: [string, string][];
};

export const experts: Expert[] = [
  {
    id: "khazix",
    name: "数字生命卡兹克",
    alias: "Khazix Skills",
    avatar: "KZ",
    tone: "#2f6f61",
    summary: "以 Agent 可复用工作流为核心，覆盖研究、写作、资讯、清理、项目记忆和日常开发能力。",
    position: "适合想把 Claude、Codex、Cursor 等 Agent 从临时问答升级为稳定工作系统的个人与团队。",
    sources: "用户提供的微信文章整理稿；相关 GitHub 仓库已内置。",
    installOrder: ["开发：Superpowers、PUA、neat-freak", "内容：khazix-writer、aihot、Skill-Creator", "调研：hv-analysis、Web Access、aihot", "办公：docx / xlsx / pdf / pptx", "长期项目：Claude-mem + neat-freak"],
  },
  {
    id: "pnakotus",
    name: "PnakotusLabs",
    alias: "LLM Wiki & AI Signal Radar",
    avatar: "PN",
    tone: "#58717a",
    summary: "偏向高质量知识库和 AI 项目信号雷达，把原始资料沉淀为可查询、可审计的 LLM Wiki。",
    position: "适合 AI 研究员、咨询顾问、技术情报团队和长期知识库项目。",
    sources: "GitHub 主页与 ExpertWiki、github-high-potential README。",
    installOrder: ["先跑 github-high-potential：建立 12 小时级 AI 项目雷达", "再用 ExpertWiki：沉淀资料、笔记和报告", "最后补充网页入口或 API/MCP 适配"],
  },
  {
    id: "eli",
    name: "ELI-Labz",
    alias: "Enhanced Lifelike Intelligence",
    avatar: "EL",
    tone: "#4d63ae",
    summary: "聚焦本地 Agent、OSINT 仪表盘、劳动力数据 Agent 与自动化研究实验室。",
    position: "适合技术型用户、AI Agent 产品经理、OSINT 探索者和循环工程研究者。",
    sources: "Godcoder、Third-Eye、KAR、ResearchSwarm、Looping 项目 README。",
    installOrder: ["本地编程助手：先看 Godcoder", "情报态势：再看 Third-Eye", "岗位变化：看 KAR", "长循环 Agent：看 Looping", "GPU 实验：最后看 ResearchSwarm"],
  },
  {
    id: "kangaroo",
    name: "袋鼠帝 KangarooKing",
    alias: "内容蒸馏与 Agent Skills 生态",
    avatar: "KR",
    tone: "#b65f45",
    summary: "从长内容蒸馏、X 内容自动化、系统提示词工程，到免费多模态模型与 OpenClaw 移动端。",
    position: "适合自媒体、课程研发、知识管理、营销内容和多模态 Agent 实验。",
    sources: "cangjie-skill、x-skills、kangarooking-skills、agnes-free-model-skills、system-prompt-skills、MobileClaw。",
    installOrder: ["知识蒸馏：先装 cangjie-skill", "提示词工程：补 system-prompt-skills", "内容增长：x-skills + kangarooking-skills", "多模态生成：agnes-free-model-skills", "移动端实验：MobileClaw"],
  },
];

export const paths = [
  { id: "build", title: "开发与复杂任务", mark: "01", desc: "先搭 Agent 工作系统，再处理工程执行和排障。", items: ["Superpowers", "PUA", "neat-freak", "Godcoder", "Looping"] },
  { id: "content", title: "内容生产与自媒体", mark: "02", desc: "从选题、写作、推文、图像到公众号起号。", items: ["khazix-writer", "aihot", "x-skills", "kangarooking-skills", "agnes-free-model-skills"] },
  { id: "research", title: "调研与情报雷达", mark: "03", desc: "从 AI 资讯、GitHub 高潜项目到 OSINT 态势图。", items: ["hv-analysis", "aihot", "github-high-potential", "Third-Eye", "KAR"] },
  { id: "knowledge", title: "知识蒸馏与长期记忆", mark: "04", desc: "把资料、书、视频和项目过程变成可复用资产。", items: ["cangjie-skill", "ExpertWiki", "Claude-mem", "neat-freak", "system-prompt-skills"] },
  { id: "office", title: "办公文档与交付", mark: "05", desc: "优先安装成熟文档能力，减少格式返工。", items: ["Office Suite", "Skill-Creator", "Frontend Design", "storage-analyzer"] },
  { id: "multi", title: "多模态与移动 Agent", mark: "06", desc: "适合图片、视频、语音和视觉 Agent 原型。", items: ["agnes-free-model-skills", "MobileClaw", "apimart-image-gen", "multi-agent-image"] },
];

export const items: SkillItem[] = [
  { id: 1, expert: "khazix", name: "hv-analysis", cn: "横纵分析法", type: "研究 Skill", tags: ["调研", "竞品分析", "行业研究", "投资分析"], url: "https://github.com/KKKKhazix/khazix-skills/tree/main/hv-analysis", source: "来自 khazix-skills 仓库。", solves: "对产品、公司、人物和概念做深度研究。", usage: "纵向梳理演进，横向对比竞品或相关对象。", best: "竞品分析、行业研究、投资分析、深度选题。", priority: "先装", freshness: "活跃" },
  { id: 2, expert: "khazix", name: "khazix-writer", cn: "卡兹克写作风格", type: "内容 Skill", tags: ["内容", "公众号", "写作", "去AI味"], url: "https://github.com/KKKKhazix/khazix-skills/tree/main/khazix-writer", source: "把公众号写作方法论做成 Skill。", solves: "让 Agent 按特定口吻、节奏和表达禁忌写文章。", usage: "用于观点稿、长文改写、风格统一和内容打磨。", best: "公众号文章、观点稿、去 AI 味改写。", priority: "先装", freshness: "活跃" },
  { id: 3, expert: "khazix", name: "aihot", cn: "AI HOT 资讯查询", type: "情报 Skill", tags: ["资讯", "调研", "AI日报", "选题"], url: "https://github.com/KKKKhazix/khazix-skills/tree/main/aihot", source: "对接 aihot.virxact.com 的 AI 资讯源。", solves: "快速查询 AI 日报、产品动态、模型更新和论文。", usage: "无需 API Key / MCP server，可直接查询每日情报。", best: "AI 日报、行业追踪、课程和自媒体选题。", priority: "先装", freshness: "活跃" },
  { id: 4, expert: "khazix", name: "storage-analyzer", cn: "磁盘清理分析", type: "工具 Skill", tags: ["工具", "效率", "磁盘清理", "报告"], url: "https://github.com/KKKKhazix/khazix-skills/tree/main/storage-analyzer", source: "Agent 化磁盘分析方案。", solves: "扫描磁盘空间，生成交互式 HTML 报告。", usage: "识别大文件和缓存来源，给出处理建议。", best: "磁盘爆满、定位垃圾文件和判断删除风险。", priority: "按需", freshness: "稳定" },
  { id: 5, expert: "khazix", name: "neat-freak", cn: "项目文档与记忆同步", type: "项目 Skill", tags: ["长期项目", "记忆", "文档同步", "开发"], url: "https://github.com/KKKKhazix/khazix-skills/tree/main/neat-freak", source: "解决 Agent 项目越做越乱的问题。", solves: "同步项目文档、CLAUDE.md 和 Agent 记忆。", usage: "作为长期项目收尾动作，保持代码、文档和记忆一致。", best: "长期项目、频繁迭代和文档容易脱节的团队。", priority: "先装", freshness: "活跃" },
  { id: 6, expert: "khazix", name: "Superpowers", cn: "Agent 工作流系统", type: "推荐工具", tags: ["开发", "复杂任务", "多Agent", "TDD"], url: "https://github.com/obra/superpowers", source: "社区项目，适配 Claude Code、Codex、Cursor、Gemini。", solves: "让 Agent 更会规划、拆解、执行、审查和复盘。", usage: "用于软件开发、复杂任务和多 Agent 协作。", best: "软件开发、复杂任务和多 Agent 协作。", priority: "先装", freshness: "活跃" },
  { id: 7, expert: "khazix", name: "Frontend Design", cn: "前端设计审美", type: "推荐工具", tags: ["前端", "设计", "网页", "原型"], url: "https://github.com/anthropics/skills/tree/main/skills/frontend-design", source: "Anthropic 官方 Skill。", solves: "改善 AI 生成前端的审美和设计一致性。", usage: "先确定视觉方向，再处理排版、字体、留白和动效。", best: "网页、产品界面、原型和前端视觉优化。", priority: "按需", freshness: "活跃" },
  { id: 8, expert: "khazix", name: "Office Suite", cn: "办公四件套 docx / xlsx / pdf / pptx", type: "推荐工具", tags: ["办公", "Word", "Excel", "PDF", "PPT"], url: "https://github.com/anthropics/skills/tree/main/skills", source: "Anthropic 官方文档处理 Skills。", solves: "更稳定地处理 Word、Excel、PDF 和 PPT。", usage: "提供成熟处理流程和代码模板，减少排版问题。", best: "报告、表格、演示文稿和论文笔记。", priority: "先装", freshness: "活跃", urls: [["docx", "https://github.com/anthropics/skills/tree/main/skills/docx"], ["xlsx", "https://github.com/anthropics/skills/tree/main/skills/xlsx"], ["pdf", "https://github.com/anthropics/skills/tree/main/skills/pdf"], ["pptx", "https://github.com/anthropics/skills/tree/main/skills/pptx"]] },
  { id: 9, expert: "khazix", name: "Web Access", cn: "本地 Chrome 联网访问", type: "推荐工具", tags: ["网页访问", "登录态", "调研", "自动化"], url: "https://github.com/eze-is/web-access", source: "来自 eze-is/web-access。", solves: "让 Agent 通过本地 Chrome 访问网页并复用登录态。", usage: "沉淀不同网站的选择器、路径和踩坑记录。", best: "登录网站调研和自动化网页操作。", priority: "按需", freshness: "观察" },
  { id: 10, expert: "khazix", name: "PUA", cn: "排障压力升级", type: "推荐工具", tags: ["排障", "修Bug", "开发", "检查清单"], url: "https://github.com/tanweai/pua", source: "来自 tanweai/pua。", solves: "防止 Agent 遇到困难后摆烂或原地打转。", usage: "通过压力升级和检查清单，逼 Agent 换思路排查。", best: "修 Bug、复杂排障和多次失败后的推进。", priority: "先装", freshness: "活跃" },
  { id: 11, expert: "khazix", name: "Claude-mem", cn: "Claude Code 长期记忆", type: "记忆工具", tags: ["记忆", "长期项目", "偏好", "上下文"], url: "https://github.com/thedotmack/claude-mem", source: "来自 thedotmack/claude-mem。", solves: "给 Claude Code 增加长期记忆能力。", usage: "记录会话关键信息，下次会话检索并注入上下文。", best: "长期项目、个人偏好记忆和跨会话工作。", priority: "进阶", freshness: "活跃" },
  { id: 12, expert: "khazix", name: "Skill-Creator", cn: "自定义 Skill 生成器", type: "推荐工具", tags: ["自定义", "技能生成", "工作流", "团队规范"], url: "https://github.com/anthropics/skills/tree/main/skills/skill-creator", source: "Anthropic 官方 Skill。", solves: "从需求描述生成自己的 Skill。", usage: "把个人工作流和团队规范沉淀为可复用能力。", best: "想把工作方法产品化、流程化的人。", priority: "进阶", freshness: "稳定" },
  { id: 101, expert: "pnakotus", name: "ExpertWiki", cn: "面向 Agent 的本地 LLM Wiki", type: "知识库", tags: ["知识管理", "LLM Wiki", "本地优先", "Agent记忆"], url: "https://github.com/PnakotusLabs/ExpertWiki", source: "PnakotusLabs：Verified human knowledge for AI agents。", solves: "把资料沉淀成 Agent 可读、可查、可审计的 Markdown Wiki。", usage: "用 CLI init / ingest / page create / lint / query 管理资料。", best: "长期研究、企业知识库、课程资料和咨询报告。", priority: "先看", freshness: "活跃" },
  { id: 102, expert: "pnakotus", name: "github-high-potential", cn: "12 小时 AI 高潜项目雷达", type: "AI 雷达", tags: ["AI资讯", "GitHub趋势", "arXiv", "HackerNews", "Codex Skill"], url: "https://github.com/PnakotusLabs/github-high-potential", source: "Codex Skill + local workflow。", solves: "从 GitHub、HN、arXiv、RSS 和 Product Hunt 收集信号。", usage: "输出半日 Markdown 报告，包含候选项目和排序。", best: "AI 情报日报、技术趋势和开源项目筛选。", priority: "先装", freshness: "活跃" },
  { id: 103, expert: "pnakotus", name: "PnakotusLabs.github.io", cn: "ExpertWiki 公共网站入口", type: "网站入口", tags: ["官网", "文档", "展示页"], url: "https://github.com/PnakotusLabs/PnakotusLabs.github.io", source: "PnakotusLabs 公共网站仓库。", solves: "为 ExpertWiki 提供公开展示和文档入口。", usage: "适合作为项目定位、页面结构和发布方式的参考。", best: "想把 Wiki 或工具链做成公开项目页的用户。", priority: "参考", freshness: "稳定" },
  { id: 201, expert: "eli", name: "Godcoder", cn: "本地优先桌面编程 Agent", type: "本地 Agent", tags: ["编码Agent", "本地优先", "Rust", "Tauri", "隐私"], url: "https://github.com/eli-labz/Godcoder", source: "ELI-Labz：local-first open-source AI coding agent。", solves: "在桌面端运行 AI 编程 Agent，代码不经过厂商后端。", usage: "Bring your own LLM key，用桌面 App 承载代码理解和工具编排。", best: "重视源码隐私的开发者和本地 Agent 研究。", priority: "先看", freshness: "观察" },
  { id: 202, expert: "eli", name: "Third-Eye", cn: "开源全球情报与态势感知平台", type: "OSINT", tags: ["OSINT", "态势感知", "地图", "WebGL", "情报"], url: "https://github.com/eli-labz/Third-Eye", source: "ELI-Labz 全球情报与侦察平台。", solves: "将航班、海事、地震、火点、新闻和安全数据聚合到地图。", usage: "Next.js + MapLibre GL，可本地运行或 Docker 部署。", best: "OSINT 学习、态势感知原型和情报可视化。", priority: "进阶", freshness: "观察" },
  { id: 203, expert: "eli", name: "KAR", cn: "美国劳动力市场 AI Agent", type: "数据 Agent", tags: ["劳动力", "职业分析", "AI替代", "HR研究", "数据产品"], url: "https://github.com/eli-labz/KAR", source: "ELI-Labz：U.S. Labor Market AI Agent。", solves: "围绕劳动力市场提供职业暴露预测和新闻分析。", usage: "通过地图、对话 Agent、岗位风险评分和数据上传分析。", best: "岗位变化研究、AI 影响评估和 HR 战略。", priority: "参考", freshness: "观察" },
  { id: 204, expert: "eli", name: "ResearchSwarm", cn: "自主 LLM 训练实验群", type: "研究自动化", tags: ["LLM训练", "GPU", "自动实验", "研究Agent", "SQLite记忆"], url: "https://github.com/eli-labz/ResearchSwarm", source: "ELI-Labz fork + autonomous AI research swarm。", solves: "让 Agent 在真实 LLM 训练环境中自主做多轮实验。", usage: "读取 program.md，修改 train.py，运行实验并保留记忆。", best: "有 GPU 的研究者和训练实验自动化。", priority: "高级", freshness: "观察" },
  { id: 205, expert: "eli", name: "Looping", cn: "AI Agent 循环操作系统", type: "Loop 工程", tags: ["Loop Engineering", "Agent流程", "MCP", "自动化", "安全门"], url: "https://github.com/eli-labz/Looping", source: "ELI-Labz：open-source loop operating system。", solves: "把一次性 Prompt 升级为可调度、可审计的 Agent 循环。", usage: "用 loop-init、loop-audit、loop-cost、loop-sync 管理循环。", best: "长期自动化、日报巡检和 Coding Agent 生产化。", priority: "先看", freshness: "活跃" },
  { id: 301, expert: "kangaroo", name: "cangjie-skill", cn: "把长内容蒸馏成可执行 Agent Skills", type: "知识蒸馏", tags: ["书籍", "长视频", "播客", "课程", "Skill生成"], url: "https://github.com/kangarooking/cangjie-skill", source: "袋鼠帝：把高价值内容蒸馏成可执行 Skill。", solves: "把方法论转化为可触发、可组合、可测试的 Skill。", usage: "RIA-TV++ 七阶段流水线，包含验证、链接、压力测试。", best: "课程研发、知识管理和方法论沉淀。", priority: "先装", freshness: "活跃" },
  { id: 302, expert: "kangaroo", name: "x-skills", cn: "X / Twitter 内容创作自动化", type: "内容增长", tags: ["X", "Twitter", "素材收集", "选题筛选", "推文创作"], url: "https://github.com/kangarooking/x-skills", source: "袋鼠帝：X 内容创作自动化 Claude Skills。", solves: "从素材收集、选题筛选到推文草稿形成闭环。", usage: "x-collect、x-filter、x-create、x-publish 分段执行。", best: "AI 博主和海外社媒内容实验。", priority: "先装", freshness: "活跃" },
  { id: 303, expert: "kangaroo", name: "kangarooking-skills", cn: "袋鼠帝个人 Skills 集合", type: "技能集合", tags: ["图片生成", "文章日更", "任务方向盘", "视频下载", "飞书"], url: "https://github.com/kangarooking/kangarooking-skills", source: "袋鼠帝个人 AI Agent skills 仓库。", solves: "封装创作、图片、视频、任务管理和增长选题流程。", usage: "按需使用文章、图片、视频和任务类独立 Skills。", best: "公众号起号、图文生产和长任务管理。", priority: "参考", freshness: "活跃" },
  { id: 304, expert: "kangaroo", name: "agnes-free-model-skills", cn: "Agnes 免费文本 / 图片 / 视频模型 Skills", type: "多模态", tags: ["免费模型", "文本生成", "图片生成", "视频生成", "Codex"], url: "https://github.com/kangarooking/agnes-free-model-skills", source: "Agnes AI 免费模型的 Codex / Agent Skills。", solves: "为 Agent 提供免费文本、图片和视频模型调用能力。", usage: "包含 agnes-free-text、agnes-free-image、agnes-free-video。", best: "低成本多模态实验和 Agent Demo。", priority: "按需", freshness: "活跃", note: "需要通过环境变量提供 API Key。" },
  { id: 305, expert: "kangaroo", name: "system-prompt-skills", cn: "15 个系统提示词设计 Skill", type: "系统提示词", tags: ["System Prompt", "安全", "工具权限", "记忆", "Agent设计"], url: "https://github.com/kangarooking/system-prompt-skills", source: "由 cangjie-skill 从顶级 AI 产品系统提示词中蒸馏。", solves: "覆盖身份、工具、安全、记忆、上下文、搜索和输出设计。", usage: "按核心架构、交互控制、工程支撑、场景适配四层组织。", best: "AI 产品、Agent 架构和企业 Chatbot 规范。", priority: "先看", freshness: "稳定" },
  { id: 306, expert: "kangaroo", name: "MobileClaw", cn: "OpenClaw 多模态移动客户端", type: "移动 Agent", tags: ["OpenClaw", "移动端", "语音", "视觉", "多模态"], url: "https://github.com/kangarooking/mobileclaw", source: "MobileClaw：voice + vision walkie-talkie for OpenClaw。", solves: "把手机变成能看、能听、能说的 AI 对讲终端。", usage: "连接 OpenClaw Gateway，支持语音、摄像头、视觉识别和 TTS。", best: "移动端 Agent 交互和多模态演示。", priority: "进阶", freshness: "活跃" },
];

export const updateLog = [
  { date: "2026-07-10", label: "首版入库", text: "整理附件中的 4 位专家、26 个项目和 6 条场景路径。" },
  { date: "2026-07-09", label: "结构确认", text: "确定采用静态内容库，每日北京时间 00:05 复核来源。" },
];

export const allTags = ["全部", ...Array.from(new Set(items.flatMap((item) => item.tags))).sort((a, b) => a.localeCompare(b, "zh-CN"))];
