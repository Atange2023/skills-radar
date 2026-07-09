"use client";

import { useMemo, useState } from "react";
import sourceStatus from "../content/source-status.json";
import { allTags, experts, items, paths, type SkillItem, updateLog } from "../content/skills";

const priorityRank: Record<SkillItem["priority"], number> = { 先装: 1, 先看: 2, 按需: 3, 参考: 4, 进阶: 5, 高级: 6 };

function copyText(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard) navigator.clipboard.writeText(text);
}

export default function Home() {
  const [activeExpert, setActiveExpert] = useState("all");
  const [activeTag, setActiveTag] = useState("全部");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [toast, setToast] = useState("");

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = items.filter((item) => {
      const expertOk = activeExpert === "all" || item.expert === activeExpert;
      const tagOk = activeTag === "全部" || item.tags.includes(activeTag);
      const text = [item.name, item.cn, item.type, item.source, item.solves, item.usage, item.best, item.priority, item.freshness, ...item.tags].join(" ").toLowerCase();
      return expertOk && tagOk && (!q || text.includes(q));
    });
    if (sort === "priority") result.sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [activeExpert, activeTag, query, sort]);

  const selectedExpert = activeExpert === "all" ? null : experts.find((expert) => expert.id === activeExpert);
  const flash = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 1600);
  };
  const selectScenario = (name: string) => {
    setActiveExpert("all");
    setActiveTag("全部");
    setQuery(name);
    document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Skills Radar 首页">
            <span className="brand-mark">SR</span>
            <span><strong>Skills Radar</strong><small>中文互联网 Skills 推荐雷达</small></span>
          </a>
          <nav className="top-nav" aria-label="主导航">
            <a href="#scenarios">场景</a><a href="#catalogue">专家与项目</a><a href="#updates">更新记录</a>
          </nav>
          <span className="status-dot"><i />每日复核中</span>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker"><span>ISSUE 01</span><span>BEIJING / 00:05</span></p>
          <h1>把值得用的<br /><em>Skills</em> 先找出来。</h1>
          <p className="hero-lead">从专家的真实工作流出发，筛出值得先装、先看或持续观察的 Agent Skills、开源工具和知识项目。少收藏，多跑通一个完整场景。</p>
          <div className="hero-actions"><a className="button button-dark" href="#scenarios">从场景开始 <span>↘</span></a><a className="text-link" href="#catalogue">浏览全部项目 <span>→</span></a></div>
        </div>
        <aside className="hero-index" aria-label="站点状态">
          <div className="index-head"><span>本期索引</span><span>10 JUL 2026</span></div>
          <div className="index-number">26</div><p>个精选项目</p>
          <div className="index-rule" />
          <dl><div><dt>专家来源</dt><dd>04</dd></div><div><dt>覆盖场景</dt><dd>06</dd></div><div><dt>下次复核</dt><dd>00:05</dd></div></dl>
          <p className="index-note">每天只在发现有意义的仓库变化时更新站点内容。</p>
        </aside>
      </section>

      <section className="section shell" id="scenarios">
        <div className="section-title"><div><p className="section-kicker">START HERE</p><h2>先说你要解决什么</h2></div><p>比起收藏一堆仓库，先把一个真实工作流跑通。</p></div>
        <div className="scenario-grid">{paths.map((path) => <button className="scenario" key={path.id} onClick={() => selectScenario(path.items[0])}><span className="scenario-number">{path.mark}</span><span className="scenario-title">{path.title}<b>↗</b></span><span className="scenario-desc">{path.desc}</span><span className="scenario-items">{path.items.slice(0, 3).join(" · ")}</span></button>)}</div>
      </section>

      <section className="section shell" id="catalogue">
        <div className="section-title"><div><p className="section-kicker">CURATED CATALOGUE</p><h2>专家与技能卡片</h2></div><p>按专家、标签或优先级过滤，找到下一步最值得尝试的项目。</p></div>
        <div className="catalogue-layout">
          <aside className="filters" aria-label="项目筛选">
            <div className="filter-label">专家</div>
            <button className={activeExpert === "all" ? "filter-option active" : "filter-option"} onClick={() => setActiveExpert("all")}>全部专家 <span>{items.length}</span></button>
            {experts.map((expert) => <button key={expert.id} className={activeExpert === expert.id ? "filter-option active" : "filter-option"} onClick={() => setActiveExpert(expert.id)}><i style={{ background: expert.tone }} />{expert.name}<span>{items.filter((item) => item.expert === expert.id).length}</span></button>)}
            <div className="filter-divider" /><div className="filter-label">优先级</div>
            {["先装", "先看", "按需", "参考", "进阶"].map((priority) => <button key={priority} className="filter-option compact" onClick={() => setQuery(priority)}>{priority}<span>→</span></button>)}
          </aside>
          <div className="catalogue-main">
            <div className="catalogue-tools"><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索项目、用途或标签" aria-label="搜索项目、用途或标签" /></label><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="排序"><option value="default">默认排序</option><option value="priority">优先级优先</option><option value="name">名称排序</option></select></div>
            <div className="tag-list">{allTags.slice(0, 22).map((tag) => <button key={tag} className={activeTag === tag ? "tag active" : "tag"} onClick={() => setActiveTag(tag)}>{tag}</button>)}</div>
            <div className="catalogue-meta"><span>{selectedExpert ? selectedExpert.name : "全部专家"}</span><strong>{filteredItems.length} 个结果</strong></div>

            {selectedExpert ? <div className="expert-brief"><div className="expert-avatar" style={{ background: selectedExpert.tone }}>{selectedExpert.avatar}</div><div><p className="section-kicker">EXPERT NOTE</p><h3>{selectedExpert.name}</h3><p>{selectedExpert.summary}</p><small>{selectedExpert.position}</small></div><ol>{selectedExpert.installOrder.slice(0, 3).map((step) => <li key={step}>{step}</li>)}</ol></div> : <div className="expert-brief all-brief"><div className="expert-avatar all">ALL</div><div><p className="section-kicker">EDITOR&apos;S PICK</p><h3>全部专家合集</h3><p>跨专家检索，从场景出发选择技能包。卡片中已区分可直接安装的 Skill、值得研究的项目和需要额外环境的实验型工具。</p></div><span className="brief-aside">先场景<br />再标签<br />后安装</span></div>}

            <div className="card-grid">{filteredItems.map((item) => <SkillCard key={item.id} item={item} onCopy={(text) => { copyText(text); flash("已复制到剪贴板"); }} onTag={(tag) => setActiveTag(tag)} />)}</div>
            {filteredItems.length === 0 && <div className="empty-state">没有找到匹配的项目。换一个关键词或清空筛选。</div>}
          </div>
        </div>
      </section>

      <section className="section updates shell" id="updates">
        <div className="section-title"><div><p className="section-kicker">MAINTENANCE LOG</p><h2>每日复核，保持内容新鲜</h2></div><p>站点只在来源发生有意义变化时更新，避免为了更新而更新。</p></div>
        <div className="updates-grid"><div className="update-status"><span className="pulse" /><div><strong>自动复核已配置</strong><b>每天 00:05 · Asia/Shanghai</b></div><span className="status-label">已启用</span></div><div className="update-log"><div className="log-row"><time>{sourceStatus.sources.length || "首轮"}</time><span><strong>来源检查</strong>{sourceStatus.sources.length ? `已检查 ${sourceStatus.sources.length} 个 GitHub 来源。` : "首轮检查将在下一次定时任务运行。"}</span></div>{updateLog.map((log) => <div className="log-row" key={log.date}><time>{log.date}</time><span><strong>{log.label}</strong>{log.text}</span></div>)}</div></div>
      </section>

      <footer className="site-footer"><div className="shell footer-inner"><span>Skills Radar / 中文互联网 Skills 推荐雷达</span><span>内容来源于公开仓库与用户提供的整理稿。安装前请自行检查权限、依赖与 API Key 要求。</span><a href="#top">回到顶部 ↑</a></div></footer>
      {toast && <div className="toast" role="status">{toast}</div>}
    </main>
  );
}

function SkillCard({ item, onCopy, onTag }: { item: SkillItem; onCopy: (text: string) => void; onTag: (tag: string) => void }) {
  const expert = experts.find((entry) => entry.id === item.expert);
  const clone = item.url.replace(/\/tree\/(main|master)$/, "");
  return <article className="skill-card" style={{ borderTopColor: expert?.tone }}>
    <div className="card-top"><span className="card-id">#{String(item.id).padStart(3, "0")}</span><span className={`freshness ${item.freshness}`}>{item.freshness}</span></div>
    <div className="card-heading"><span className="type-label">{item.type}</span><span className={`priority ${item.priority}`}>{item.priority}</span></div>
    <h3>{item.name}<small>{item.cn}</small></h3><p className="card-source">{item.source}</p>
    <dl className="card-details"><div><dt>解决</dt><dd>{item.solves}</dd></div><div><dt>用法</dt><dd>{item.usage}</dd></div><div><dt>适合</dt><dd>{item.best}</dd></div></dl>
    {item.note && <p className="card-note">注意：{item.note}</p>}
    <div className="card-tags">{item.tags.map((tag) => <button key={tag} onClick={() => onTag(tag)}>{tag}</button>)}</div>
    <div className="card-actions"><a className="open-link" href={item.url} target="_blank" rel="noreferrer">打开 GitHub ↗</a><button onClick={() => onCopy(item.url)} aria-label={`复制 ${item.name} 地址`}>⧉</button><button onClick={() => onCopy(`git clone ${clone}`)} aria-label={`复制 ${item.name} clone 命令`}>⌘</button></div>
  </article>;
}
