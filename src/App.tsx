import { Download, Play, Zap, Mic2, Monitor, Layers, Code2, ArrowRight, Terminal } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const GITHUB_URL = 'https://github.com/lightCode1840/cs-interview-prep';

// ─── Color palette ──────────────────────────────────────────────────
// Clean monochrome with a single subtle accent

const C = {
  bg: '#0B0B0D',
  card: '#141416',
  border: '#232326',
  text: '#EDEDEF',
  text2: '#6E6E77',
  text3: '#3F3F46',
  accent: '#D4D4D8',
  accentBg: '#18181B',
  cyn: '#22B8CF',
};

export default function App() {
  return (
    <div style={{ background: C.bg, color: C.text, minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <DownloadSection />
      <Footer />
    </div>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: 'rgba(11,11,13,0.88)', backdropFilter: 'blur(14px)', borderColor: C.border }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: C.cyn }}
          >
            <Play size={13} className="text-black" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight">TutorReel</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: C.text2 }}>
          <a href="#features" className="transition-colors" style={{ color: C.text2 }} onMouseEnter={e => e.currentTarget.style.color = C.cyn} onMouseLeave={e => e.currentTarget.style.color = C.text2}>功能</a>
          <a href="#how-it-works" className="transition-colors" style={{ color: C.text2 }} onMouseEnter={e => e.currentTarget.style.color = C.cyn} onMouseLeave={e => e.currentTarget.style.color = C.text2}>使用说明</a>
          <a href="#download" className="transition-colors" style={{ color: C.text2 }} onMouseEnter={e => e.currentTarget.style.color = C.cyn} onMouseLeave={e => e.currentTarget.style.color = C.text2}>下载</a>
        </div>

        <div className="flex items-center gap-2">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="p-2 transition-colors" style={{ color: C.text2 }} onMouseEnter={e => e.currentTarget.style.color = C.cyn} onMouseLeave={e => e.currentTarget.style.color = C.text2} aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a
            href="#download"
            className="px-4 py-1.5 text-sm rounded-lg font-medium transition-all hover:opacity-85"
            style={{ background: C.cyn, color: '#000000' }}
          >
            免费下载
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 text-center overflow-hidden">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs mb-8"
          style={{ border: `1px solid ${C.border}`, color: C.text2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.text }} />
          本地跑 · 开源 · 免费
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span style={{ color: C.text }}>刷题太枯燥？</span>
          <br />
          <span style={{ color: C.text2 }}>让它变成动画片</span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: C.text2 }}>
          把一道题贴进去，剩下的交给它。
          <br />
          <span className="text-sm" style={{ color: C.text3 }}>macOS / Windows 都能跑</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] transition-all hover:opacity-85"
            style={{ background: C.cyn, color: '#000000' }}
          >
            <Download size={16} />
            下载桌面应用
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] border transition-all"
            style={{ borderColor: C.border, color: C.text2 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyn; e.currentTarget.style.color = C.cyn; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text2; }}
          >
            <GithubIcon size={16} />
            查看源码
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Features ───────────────────────────────────────────────────────

const FEATURES_DATA = [
  { icon: <Zap size={19} />, title: '自己选模型', desc: 'DeepSeek、GPT、Qwen 随你挑。觉得某个模型讲得不对味？换一个重来就行' },
  { icon: <Mic2 size={19} />, title: '配音不机器', desc: '字幕一行，语音一段。字幕精炼好读，语音自然像人，不用手调' },
  { icon: <Monitor size={19} />, title: '动画跟思路走', desc: '数组、树、链表…… 讲到哪高亮到哪，指针和状态跟着步骤变' },
  { icon: <Layers size={19} />, title: '不是只有算法题', desc: '英语语法、Java 八股文一样行。每种题型有专属模板，插件一挂就能加' },
  { icon: <Code2 size={19} />, title: '改到满意为止', desc: 'AI 生成的东西你说了算。步骤、措辞、动画，想改哪改哪' },
  { icon: <Terminal size={19} />, title: '不传你的数据', desc: '一切在你电脑上跑。装个 Electron 就能用，装 Node.js 也能用' },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.text }}>它能干什么</h2>
          <p style={{ color: C.text2 }}>不多不少，刚好够用</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES_DATA.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border transition-all"
              style={{ background: C.card, borderColor: C.border }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#22B8CF'}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: C.accentBg, border: `1px solid ${C.border}` }}>
                <span style={{ color: C.cyn }}>{f.icon}</span>
              </div>
              <h3 className="font-semibold mb-2 text-[15px]" style={{ color: C.text }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.text2 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────

const STEPS = [
  { num: '01', title: '贴题目', desc: 'Ctrl+V 把题粘进去，选个题型和模型' },
  { num: '02', title: '它来拆', desc: '后台的大模型吭哧吭哧把题拆成一步一步的讲解' },
  { num: '03', title: '你看一遍', desc: '动画和文案都出来了，觉得哪里不对直接改' },
  { num: '04', title: '导出', desc: '点一下，MP4 生成完事，想批量就批量' },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.text }}>用起来就四步</h2>
          <p style={{ color: C.text2 }}>比剪视频简单一百倍</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-9 left-[55%] right-0 h-px" style={{ background: C.border }} />
              )}
              <div
                className="p-6 rounded-2xl border transition-all h-full"
                style={{ background: C.card, borderColor: C.border }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#22B8CF'}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <div className="text-2xl font-bold mb-4" style={{ color: C.cyn }}>
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2 text-[15px]" style={{ color: C.text }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.text2 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Download ───────────────────────────────────────────────────────

function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative p-12 rounded-3xl border overflow-hidden text-center"
          style={{ background: C.card, borderColor: C.border }}
        >
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.text }}>开搞</h2>
            <p className="mb-8" style={{ color: C.text2 }}>想省事还是想折腾，都行</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-8">
              {/* Desktop App */}
              <div
                className="p-6 rounded-2xl border transition-all"
                style={{ background: C.bg, borderColor: C.border }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#22B8CF'}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${C.cyn}20`, border: `1px solid ${C.cyn}40` }}>
                  <Monitor size={18} style={{ color: C.cyn }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: C.text }}>桌面应用</h3>
                <p className="text-sm mb-4" style={{ color: C.text2 }}>双击安装，不用配环境</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-macOS.dmg`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm"
                    style={{ borderColor: C.border, color: C.text2 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyn; e.currentTarget.style.color = C.cyn; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text2; }}
                  >
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v16m0 0l-4-4m4 4l4-4"/><path d="M4 20h16"/></svg>
                      macOS (Apple Silicon)
                    </span>
                    <span className="text-xs" style={{ color: C.text3 }}>.dmg</span>
                  </a>
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-Windows-x64.exe`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm"
                    style={{ borderColor: C.border, color: C.text2 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyn; e.currentTarget.style.color = C.cyn; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text2; }}
                  >
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                      Windows (x64)
                    </span>
                    <span className="text-xs" style={{ color: C.text3 }}>.exe</span>
                  </a>
                </div>
              </div>

              {/* Local Dev */}
              <div
                className="p-6 rounded-2xl border transition-all"
                style={{ background: C.bg, borderColor: C.border }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#22B8CF'}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${C.cyn}20`, border: `1px solid ${C.cyn}40` }}>
                  <Terminal size={18} style={{ color: C.cyn }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: C.text }}>自己跑源码</h3>
                <p className="text-sm mb-4" style={{ color: C.text2 }}>git clone 一把梭，适合开发者</p>
                <div
                  className="p-4 rounded-xl font-mono text-xs leading-6 border"
                  style={{ background: C.bg, borderColor: C.border }}
                >
                  <div><span style={{ color: C.text2 }}>$ </span><span style={{ color: C.text }}>git clone {GITHUB_URL}</span></div>
                  <div><span style={{ color: C.text2 }}>$ </span><span style={{ color: C.text }}>cd cs-interview-prep && npm install</span></div>
                  <div><span style={{ color: C.text2 }}>$ </span><span style={{ color: C.text }}>cp .env.example .env</span><span style={{ color: C.text3 }}>  # 填入 API Key</span></div>
                  <div><span style={{ color: C.text2 }}>$ </span><span style={{ color: C.text }}>npm run dev</span></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] transition-all hover:opacity-85"
                style={{ background: C.cyn, color: '#000000' }}
              >
                <GithubIcon size={17} />
                前往 GitHub
              </a>
              <a
                href={`${GITHUB_URL}/archive/refs/heads/main.zip`}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] border transition-all"
                style={{ borderColor: C.border, color: C.text2 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyn; e.currentTarget.style.color = C.cyn; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text2; }}
              >
                <Download size={17} />
                下载源码 ZIP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t py-10 px-6" style={{ borderColor: C.border, color: C.text2 }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: C.cyn }}
          >
            <Play size={10} className="text-black" />
          </div>
          <span className="text-sm font-medium" style={{ color: C.text }}>TutorReel</span>
        </div>

        <div className="flex items-center gap-6 text-sm" style={{ color: C.text2 }}>
          <a href="#features" className="transition-colors" style={{ color: C.text2 }} onMouseEnter={e => e.currentTarget.style.color = C.cyn} onMouseLeave={e => e.currentTarget.style.color = C.text2}>功能</a>
          <a href="#download" className="transition-colors" style={{ color: C.text2 }} onMouseEnter={e => e.currentTarget.style.color = C.cyn} onMouseLeave={e => e.currentTarget.style.color = C.text2}>下载</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition-colors" style={{ color: C.text2 }} onMouseEnter={e => e.currentTarget.style.color = C.cyn} onMouseLeave={e => e.currentTarget.style.color = C.text2}>GitHub</a>
        </div>

        <p className="text-xs" style={{ color: C.text3 }}>© 2026 TutorReel · MIT License</p>
      </div>
    </footer>
  );
}
