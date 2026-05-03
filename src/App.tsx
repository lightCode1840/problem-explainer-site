import { Download, Play, Zap, Mic2, Monitor, Layers, Code2, Palette, KeyRound, Puzzle, ArrowRight, Terminal } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const GITHUB_URL = 'https://github.com/lightCode1840/cs-interview-prep';

export default function App() {
  return (
    <div className="text-white min-h-screen" style={{ background: '#080808' }}>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <DownloadSection />
      <Footer />
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
      style={{ background: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
          >
            <Play size={13} fill="white" color="white" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight">TutorReel</span>
          <span className="ml-1.5 text-[11px] text-zinc-600 font-medium">码帧</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">功能</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">使用说明</a>
          <a href="#download" className="hover:text-white transition-colors">下载</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="#download"
            className="px-4 py-1.5 text-sm rounded-lg text-white font-medium transition-opacity hover:opacity-85"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
          >
            免费下载
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 text-center overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(124,58,237,0.18) 0%, transparent 65%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 text-violet-300 text-xs mb-8"
          style={{ background: 'rgba(124,58,237,0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          桌面应用 · 本地渲染 · 开源免费
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-white">AI 刷题讲解</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg,#c4b5fd 0%,#8b5cf6 40%,#4f46e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            一键生成短视频
          </span>
        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          粘贴题目，AI 自动生成带解说和数据结构动画的短视频。
          <br />
          支持桌面应用（macOS / Windows）和浏览器两种使用方式。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-[15px] transition-opacity hover:opacity-85"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
          >
            <Download size={16} />
            下载桌面应用
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl text-zinc-300 font-semibold text-[15px] border border-white/10 hover:border-violet-500/30 hover:text-white transition-all"
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

// ─── Features ─────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: <Zap size={19} />,
    title: 'AI 智能解析',
    desc: '接入 DeepSeek / GPT / Qwen 等大模型，自动提取知识点、生成分步讲解脚本和语音文案',
  },
  {
    icon: <Mic2 size={19} />,
    title: 'TTS 拟人配音',
    desc: '双轨文案：字幕精简显示，配音自然口语化。自动计算时长，精准对齐画面帧',
  },
  {
    icon: <Monitor size={19} />,
    title: '数据结构动画',
    desc: '数组、树、链表、网格多结构同屏渲染，高亮和指针随步骤程自动推进',
  },
  {
    icon: <Layers size={19} />,
    title: '多题型插件',
    desc: 'LeetCode 算法题 / 语法题 / Java 八股文各配动画模板。插件架构，可自由扩展',
  },
  {
    icon: <Code2 size={19} />,
    title: '全量手动编辑',
    desc: '步骤、脚本、动画状态均可直接修改。重新生成音频后实时预览更新',
  },
  {
    icon: <Palette size={19} />,
    title: '多主题切换',
    desc: '暗色代码、明亮清爽、蓝科技三种主题，运行时一键切换视觉风格',
  },
  {
    icon: <KeyRound size={19} />,
    title: 'License 分级',
    desc: 'Free 版基础使用（含水印），Pro 版无水印、批量无限制、支持离线宽限',
  },
  {
    icon: <Puzzle size={19} />,
    title: 'Electron 桌面应用',
    desc: '原生 macOS / Windows 安装包，无需 Node.js 环境，开箱即用',
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">全方位覆盖出题场景</h2>
          <p className="text-zinc-400">从文字输入到视频导出，一个桌面应用全部搞定</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/[0.07] hover:border-violet-500/25 transition-colors group"
              style={{ background: '#111111' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-violet-400 group-hover:text-violet-300 transition-colors"
                style={{ background: 'rgba(124,58,237,0.14)' }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-white mb-2 text-[15px]">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    title: '输入题目',
    desc: '粘贴题目文本，选择题型（LeetCode / 语法 / 八股文）和 AI 模型',
  },
  {
    num: '02',
    title: 'AI 解析',
    desc: '流式调用大模型自动解构题目，生成逐步讲解脚本和配音文案',
  },
  {
    num: '03',
    title: '审查与调整',
    desc: '在编辑器中预览步骤和动画，手动微调文案或动画状态',
  },
  {
    num: '04',
    title: '导出视频',
    desc: '一键渲染高清 MP4，支持批量队列导出，合并长视频',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">四步一条视频</h2>
          <p className="text-zinc-400">全程无需手动剪辑</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-9 left-[55%] right-0 h-px bg-white/[0.06]" />
              )}
              <div
                className="p-6 rounded-2xl border border-white/[0.07] hover:border-violet-500/20 transition-colors h-full"
                style={{ background: '#111111' }}
              >
                <div
                  className="text-2xl font-bold mb-4"
                  style={{
                    background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.num}
                </div>
                <h3 className="font-semibold text-white mb-2 text-[15px]">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Download ─────────────────────────────────────────────────────────────────

function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative p-12 rounded-3xl border border-white/[0.08] overflow-hidden text-center"
          style={{ background: '#0d0d0d' }}
        >
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-64"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(124,58,237,0.22) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">下载 TutorReel</h2>
            <p className="text-zinc-400 mb-8">
              两种使用方式，任你选择
            </p>

            {/* Two cards: Desktop app + Local dev */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-8">
              {/* Desktop App Card */}
              <div
                className="p-6 rounded-2xl border border-white/[0.08] hover:border-violet-500/25 transition-colors"
                style={{ background: '#111111' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(124,58,237,0.14)' }}
                >
                  <Monitor size={18} className="text-violet-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">桌面应用（推荐）</h3>
                <p className="text-sm text-zinc-500 mb-4">原生安装包，开箱即用，无需 Node.js</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-macOS.dmg`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 hover:border-violet-500/40 hover:text-white transition-all text-sm text-zinc-400"
                  >
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v16m0 0l-4-4m4 4l4-4"/><path d="M4 20h16"/></svg>
                      macOS (Apple Silicon)
                    </span>
                    <span className="text-xs text-zinc-600">.dmg</span>
                  </a>
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-Windows-x64.exe`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 hover:border-violet-500/40 hover:text-white transition-all text-sm text-zinc-400"
                  >
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                      Windows (x64)
                    </span>
                    <span className="text-xs text-zinc-600">.exe</span>
                  </a>
                </div>
              </div>

              {/* Local Dev Card */}
              <div
                className="p-6 rounded-2xl border border-white/[0.08] hover:border-violet-500/25 transition-colors"
                style={{ background: '#111111' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(124,58,237,0.14)' }}
                >
                  <Terminal size={18} className="text-violet-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">本地开发模式</h3>
                <p className="text-sm text-zinc-500 mb-4">克隆仓库自建运行，需 Node.js 18+</p>
                <div className="p-4 rounded-xl font-mono text-xs leading-6 border border-white/[0.06]" style={{ background: '#080808' }}>
                  <div><span className="text-violet-400 select-none">$ </span><span className="text-zinc-300">git clone {GITHUB_URL}</span></div>
                  <div><span className="text-violet-400 select-none">$ </span><span className="text-zinc-300">cd cs-interview-prep && npm install</span></div>
                  <div><span className="text-violet-400 select-none">$ </span><span className="text-zinc-300">cp .env.example .env</span><span className="text-zinc-600">  # 填入 API Key</span></div>
                  <div><span className="text-violet-400 select-none">$ </span><span className="text-zinc-300">npm run dev</span></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-[15px] transition-opacity hover:opacity-85"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
              >
                <GithubIcon size={17} />
                前往 GitHub
              </a>
              <a
                href={`${GITHUB_URL}/archive/refs/heads/main.zip`}
                className="flex items-center gap-2 px-7 py-3 rounded-xl text-zinc-300 font-semibold text-[15px] border border-white/10 hover:border-violet-500/30 hover:text-white transition-all"
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

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
          >
            <Play size={10} fill="white" color="white" />
          </div>
          <span className="text-sm font-medium">TutorReel</span>
          <span className="text-[11px] text-zinc-600">码帧</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="#features" className="hover:text-white transition-colors">功能</a>
          <a href="#download" className="hover:text-white transition-colors">下载</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>

        <p className="text-xs text-zinc-700">© 2026 码帧 TutorReel · MIT License</p>
      </div>
    </footer>
  );
}
