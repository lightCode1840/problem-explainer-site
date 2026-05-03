import { Download, Play, Zap, Mic2, Monitor, Layers, Code2, ArrowRight, Terminal, Github } from 'lucide-react';

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
  accent: '#D4D4D8',    // subtle gray accent
  accentBg: '#18181B',
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
            style={{ background: C.accentBg, border: `1px solid ${C.border}` }}
          >
            <Play size={13} />
          </div>
          <span className="font-semibold text-[15px] tracking-tight">TutorReel</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: C.text2 }}>
          <a href="#features" className="hover:text-white transition-colors">功能</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">使用说明</a>
          <a href="#download" className="hover:text-white transition-colors">下载</a>
        </div>

        <div className="flex items-center gap-2">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="p-2 transition-colors hover:text-white" style={{ color: C.text2 }} aria-label="GitHub">
            <Github size={18} />
          </a>
          <a
            href="#download"
            className="px-4 py-1.5 text-sm rounded-lg font-medium transition-all hover:opacity-85"
            style={{ background: C.text, color: C.bg }}
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
          桌面应用 · 本地渲染 · 开源免费
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span style={{ color: C.text }}>AI 刷题讲解</span>
          <br />
          <span style={{ color: C.text2 }}>一键生成短视频</span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: C.text2 }}>
          粘贴题目，AI 自动生成带解说和数据结构动画的短视频。
          <br />
          <span className="text-sm" style={{ color: C.text3 }}>支持桌面应用（macOS / Windows）和浏览器两种使用方式</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] transition-all hover:opacity-85"
            style={{ background: C.text, color: C.bg }}
          >
            <Download size={16} />
            下载桌面应用
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] border transition-all hover:border-white/30"
            style={{ borderColor: C.border, color: C.text2 }}
          >
            <Github size={16} />
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
  { icon: <Zap size={19} />, title: 'AI 智能解析', desc: '接入 DeepSeek / GPT / Qwen 等大模型，自动提取知识点、生成分步讲解脚本和语音文案' },
  { icon: <Mic2 size={19} />, title: 'TTS 拟人配音', desc: '双轨文案：字幕精简显示，配音自然口语化。自动计算时长，精准对齐画面帧' },
  { icon: <Monitor size={19} />, title: '数据结构动画', desc: '数组、树、链表、网格多结构同屏渲染，高亮和指针随步骤自动推进' },
  { icon: <Layers size={19} />, title: '多题型模板', desc: 'LeetCode 算法题 / 语法题 / Java 八股文各配动画模板。插件架构，可自由扩展' },
  { icon: <Code2 size={19} />, title: '全量手动编辑', desc: '步骤、脚本、动画状态均可直接修改。重新生成音频后实时预览更新' },
  { icon: <Terminal size={19} />, title: '本地运行', desc: '数据不出本机，无需上传。支持 Electron 桌面应用或 Node.js 开发模式两种方式' },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.text }}>全方位覆盖出题场景</h2>
          <p style={{ color: C.text2 }}>从文字输入到视频导出，一个工具全部搞定</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES_DATA.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border transition-all hover:border-white/20"
              style={{ background: C.card, borderColor: C.border }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: C.accentBg, border: `1px solid ${C.border}` }}>
                <span style={{ color: C.text }}>{f.icon}</span>
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
  { num: '01', title: '输入题目', desc: '粘贴题目文本，选择题型（LeetCode / 语法 / 八股文）和 AI 模型' },
  { num: '02', title: 'AI 解析', desc: '流式调用大模型自动解构题目，生成逐步讲解脚本和配音文案' },
  { num: '03', title: '审查与调整', desc: '在编辑器中预览步骤和动画，手动微调文案或动画状态' },
  { num: '04', title: '导出视频', desc: '一键渲染高清 MP4，支持批量队列导出，合并长视频' },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.text }}>四步一条视频</h2>
          <p style={{ color: C.text2 }}>全程无需手动剪辑</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-9 left-[55%] right-0 h-px" style={{ background: C.border }} />
              )}
              <div
                className="p-6 rounded-2xl border transition-all hover:border-white/20 h-full"
                style={{ background: C.card, borderColor: C.border }}
              >
                <div className="text-2xl font-bold mb-4" style={{ color: C.text2 }}>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.text }}>下载 TutorReel</h2>
            <p className="mb-8" style={{ color: C.text2 }}>两种使用方式，任你选择</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-8">
              {/* Desktop App */}
              <div
                className="p-6 rounded-2xl border transition-all hover:border-white/20"
                style={{ background: C.bg, borderColor: C.border }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: C.accentBg, border: `1px solid ${C.border}` }}>
                  <Monitor size={18} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: C.text }}>桌面应用（推荐）</h3>
                <p className="text-sm mb-4" style={{ color: C.text2 }}>原生安装包，开箱即用，无需 Node.js</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-macOS.dmg`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm hover:border-white/30"
                    style={{ borderColor: C.border, color: C.text2 }}
                  >
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v16m0 0l-4-4m4 4l4-4"/><path d="M4 20h16"/></svg>
                      macOS (Apple Silicon)
                    </span>
                    <span className="text-xs" style={{ color: C.text3 }}>.dmg</span>
                  </a>
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-Windows-x64.exe`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm hover:border-white/30"
                    style={{ borderColor: C.border, color: C.text2 }}
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
                className="p-6 rounded-2xl border transition-all hover:border-white/20"
                style={{ background: C.bg, borderColor: C.border }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: C.accentBg, border: `1px solid ${C.border}` }}>
                  <Terminal size={18} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: C.text }}>本地开发模式</h3>
                <p className="text-sm mb-4" style={{ color: C.text2 }}>克隆仓库自建运行，需 Node.js 18+</p>
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
                style={{ background: C.text, color: C.bg }}
              >
                <Github size={17} />
                前往 GitHub
              </a>
              <a
                href={`${GITHUB_URL}/archive/refs/heads/main.zip`}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] border transition-all hover:border-white/30"
                style={{ borderColor: C.border, color: C.text2 }}
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
            style={{ background: C.accentBg, border: `1px solid ${C.border}` }}
          >
            <Play size={10} />
          </div>
          <span className="text-sm font-medium" style={{ color: C.text }}>TutorReel</span>
        </div>

        <div className="flex items-center gap-6 text-sm" style={{ color: C.text2 }}>
          <a href="#features" className="hover:text-white transition-colors">功能</a>
          <a href="#download" className="hover:text-white transition-colors">下载</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>

        <p className="text-xs" style={{ color: C.text3 }}>© 2026 TutorReel · MIT License</p>
      </div>
    </footer>
  );
}
