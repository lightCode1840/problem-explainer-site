import { Download, Play, Zap, Mic2, FileVideo, Code2, Layers, Monitor, ArrowRight } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const GITHUB_URL = 'https://github.com/lightCode1840/problem-explainer';

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
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
          >
            <Play size={13} fill="white" color="white" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight">TutorReel</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">功能</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">使用说明</a>
          <a href="#download" className="hover:text-white transition-colors">下载</a>
        </div>

        {/* Actions */}
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
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(124,58,237,0.18) 0%, transparent 65%)',
        }}
      />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 text-violet-300 text-xs mb-8"
          style={{ background: 'rgba(124,58,237,0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          本地运行 · 数据零外泄 · 开源免费
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-white">把文字题目</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg,#c4b5fd 0%,#8b5cf6 40%,#4f46e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            变成解说动画
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          粘贴题目文本，AI 自动解析知识点、生成 TTS 配音、合成可视化动画，一键导出 MP4。
          <br />
          <span className="text-zinc-500 text-base">支持 LeetCode · 语法题 · Java 面试题</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-[15px] transition-opacity hover:opacity-85"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
          >
            <Download size={16} />
            立即下载
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
    desc: '调用大模型自动提取知识点，生成结构化的逐步讲解脚本，支持 DeepSeek / GPT / Qwen 等接口',
  },
  {
    icon: <Mic2 size={19} />,
    title: 'TTS 自动配音',
    desc: '拟人化中文语音合成，自动计算音频时长并精准对齐动画画面，无需手动剪辑',
  },
  {
    icon: <Monitor size={19} />,
    title: 'Remotion 动画',
    desc: '数组、树、链表、网格等数据结构逐帧可视化渲染，关键帧随步骤自动切换',
  },
  {
    icon: <Layers size={19} />,
    title: '多题型模板',
    desc: 'LeetCode 算法题 / 英语语法题 / Java 面试题，每种题型配备专属动画模板',
  },
  {
    icon: <Code2 size={19} />,
    title: '全量手动编辑',
    desc: '步骤文案、配音脚本、动画状态均可在 UI 中直接修改，一键重新生成音频',
  },
  {
    icon: <FileVideo size={19} />,
    title: '一键导出 MP4',
    desc: '本地 Remotion 渲染引擎，高清视频无需上传，直接导出发布到任意平台',
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">节点即工具，组合即流程</h2>
          <p className="text-zinc-400">从原始文字到成品视频，每个环节全自动化</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    desc: '粘贴原始题目文本，选择题型（算法题 / 语法题 / 面试题）和 AI 模型',
  },
  {
    num: '02',
    title: 'AI 解析',
    desc: '大模型实时流式分析题意，自动生成逐步讲解步骤和语音脚本',
  },
  {
    num: '03',
    title: '合成动画',
    desc: '自动合成 TTS 配音、底部字幕和数据结构可视化动画，实时预览',
  },
  {
    num: '04',
    title: '导出视频',
    desc: '本地 Remotion 渲染引擎，一键导出高清 MP4，支持批量队列',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">四步完成一条视频</h2>
          <p className="text-zinc-400">从输入到 MP4，全程无需手动剪辑</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
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
      <div className="max-w-3xl mx-auto">
        <div
          className="relative p-12 rounded-3xl border border-white/[0.08] overflow-hidden text-center"
          style={{ background: '#0d0d0d' }}
        >
          {/* Top glow */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-64"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(124,58,237,0.22) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">开始使用</h2>
            <p className="text-zinc-400 mb-8">
              克隆仓库，填入 API Key，一条命令即可启动
              <span className="block text-xs text-zinc-600 mt-1">需要 Node.js 18+</span>
            </p>

            {/* Code block */}
            <div
              className="text-left p-5 rounded-xl mb-8 font-mono text-sm border border-white/[0.06] leading-7"
              style={{ background: '#080808' }}
            >
              <div>
                <span className="text-violet-400 select-none">$ </span>
                <span className="text-zinc-300">git clone {GITHUB_URL}</span>
              </div>
              <div>
                <span className="text-violet-400 select-none">$ </span>
                <span className="text-zinc-300">cd problem-explainer && npm install</span>
              </div>
              <div>
                <span className="text-violet-400 select-none">$ </span>
                <span className="text-zinc-300">cp .env.example .env</span>
                <span className="text-zinc-600">  # 填入 OpenAI API Key</span>
              </div>
              <div>
                <span className="text-violet-400 select-none">$ </span>
                <span className="text-zinc-300">npm run dev</span>
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
                下载 ZIP
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
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="#features" className="hover:text-white transition-colors">功能</a>
          <a href="#download" className="hover:text-white transition-colors">下载</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>

        <p className="text-xs text-zinc-700">© 2026 TutorReel · MIT License</p>
      </div>
    </footer>
  );
}
