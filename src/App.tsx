import { useEffect, useState } from 'react';
import { Download, Play, Zap, Mic2, Monitor, Layers, Code2, Palette, KeyRound, Puzzle, ArrowRight, Terminal, Sun, Moon } from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const GITHUB_URL = 'https://github.com/lightCode1840/cs-interview-prep';

const ACCENT_DARK = '#22B8CF';
const ACCENT_LIGHT = '#0891B2';

// ─── Theme helper ─────────────────────────────────────────────────

function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tr_theme') as 'dark' | 'light' | null;
      return saved || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    localStorage.setItem('tr_theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0B0B0D' : '#F7F7F8');
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const isDark = theme === 'dark';

  return { isDark, toggle };
}

// ─── App ──────────────────────────────────────────────────────────

export default function App() {
  const { isDark, toggle } = useTheme();
  const bg = isDark ? '#0B0B0D' : '#F7F7F8';
  const cardBg = isDark ? '#141416' : '#FFFFFF';
  const textPrimary = isDark ? '#EDEDEF' : '#18181B';
  const textSecondary = isDark ? '#6E6E77' : '#71717A';
  const border = isDark ? '#232326' : '#E4E4E7';
  const accent = isDark ? ACCENT_DARK : ACCENT_LIGHT;
  const accentGradient = isDark
    ? 'linear-gradient(135deg,#5eead4 0%,#22B8CF 40%,#06b6d4 100%)'
    : 'linear-gradient(135deg,#0E7490 0%,#065E7C 50%,#043A4F 100%)';

  const c = { bg, cardBg, textPrimary, textSecondary, border, accent, accentGradient, isDark, toggle };

  return (
    <div style={{ background: bg, color: textPrimary, minHeight: '100vh' }}>
      <Nav c={c} />
      <Hero c={c} />
      <Features c={c} />
      <HowItWorks c={c} />
      <DownloadSection c={c} />
      <Footer c={c} />
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────

interface Ctx {
  bg: string;
  cardBg: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  accent: string;
  accentGradient: string;
  isDark: boolean;
  toggle: () => void;
}

// ─── Nav ──────────────────────────────────────────────────────────

function Nav({ c }: { c: Ctx }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: c.isDark ? 'rgba(11,11,13,0.85)' : 'rgba(247,247,248,0.88)',
        backdropFilter: 'blur(14px)',
        borderColor: c.border,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: c.accentGradient }}
          >
            <Play size={13} fill="white" color="white" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight">TutorReel</span>
          <span className="ml-1.5 text-[11px]" style={{ color: c.textSecondary }}>码帧</span>
        </div>

        <div className={`hidden md:flex items-center gap-8 text-sm`}>
          {['功能', '使用说明', '下载'].map(label => {
            const href = label === '功能' ? '#features' : label === '使用说明' ? '#how-it-works' : '#download';
            return (
              <a key={label} href={href} className="transition-colors hover:opacity-80" style={{ color: c.textSecondary }}>
                {label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={c.toggle}
            className="p-2 rounded-lg transition-colors"
            style={{ color: c.textSecondary }}
            aria-label="切换主题"
          >
            {c.isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="p-2 transition-colors"
            style={{ color: c.textSecondary }}
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="#download"
            className="px-4 py-1.5 text-sm rounded-lg text-white font-medium transition-opacity hover:opacity-85"
            style={{ background: c.accentGradient }}
          >
            免费下载
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────

function Hero({ c }: { c: Ctx }) {
  return (
    <section className="relative pt-40 pb-28 px-6 text-center overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background: `radial-gradient(ellipse at center top, ${c.accent}15 0%, transparent 65%)`,
        }}
      />
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: c.isDark ? 0.03 : 0.05 }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.12) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs mb-8"
          style={{ borderColor: `${c.accent}40`, color: c.accent, background: `${c.accent}12` }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: c.accent }} />
          桌面应用 · 本地渲染 · 开源免费
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span style={{ color: c.textPrimary }}>AI 刷题讲解</span>
          <br />
          <span style={{ background: c.accentGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            一键生成短视频
          </span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: c.textSecondary }}>
          粘贴题目，AI 自动生成带解说和数据结构动画的短视频。
          <br />
          <span className="text-sm">支持桌面应用（macOS / Windows）和浏览器两种使用方式</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-[15px] transition-opacity hover:opacity-85"
            style={{ background: c.accentGradient }}
          >
            <Download size={16} />
            下载桌面应用
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] transition-all border"
            style={{
              color: c.textSecondary,
              borderColor: c.border,
            }}
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

// ─── Features ─────────────────────────────────────────────────────

const FEATURES_DATA = [
  { icon: <Zap size={19} />, title: 'AI 智能解析', desc: '接入 DeepSeek / GPT / Qwen 等大模型，自动提取知识点、生成分步讲解脚本和语音文案' },
  { icon: <Mic2 size={19} />, title: 'TTS 拟人配音', desc: '双轨文案：字幕精简显示，配音自然口语化。自动计算时长，精准对齐画面帧' },
  { icon: <Monitor size={19} />, title: '数据结构动画', desc: '数组、树、链表、网格多结构同屏渲染，高亮和指针随步骤自动推进' },
  { icon: <Layers size={19} />, title: '多题型插件', desc: 'LeetCode 算法题 / 语法题 / Java 八股文各配动画模板。插件架构，可自由扩展' },
  { icon: <Code2 size={19} />, title: '全量手动编辑', desc: '步骤、脚本、动画状态均可直接修改。重新生成音频后实时预览更新' },
  { icon: <Palette size={19} />, title: '多主题切换', desc: '极简暗色、极简亮色、经典蓝三种主题，运行时一键切换视觉风格' },
  { icon: <KeyRound size={19} />, title: 'License 分级', desc: 'Free 版基础使用（含水印），Pro 版无水印、批量无限制、支持离线宽限' },
  { icon: <Puzzle size={19} />, title: 'Electron 桌面应用', desc: '原生 macOS / Windows 安装包，无需 Node.js 环境，开箱即用' },
];

function Features({ c }: { c: Ctx }) {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: c.textPrimary }}>
            全方位覆盖出题场景
          </h2>
          <p style={{ color: c.textSecondary }}>从文字输入到视频导出，一个桌面应用全部搞定</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES_DATA.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border transition-colors group"
              style={{ background: c.cardBg, borderColor: c.border }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${c.accent}18`, color: c.accent }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold mb-2 text-[15px]" style={{ color: c.textPrimary }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.textSecondary }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────

const STEPS = [
  { num: '01', title: '输入题目', desc: '粘贴题目文本，选择题型（LeetCode / 语法 / 八股文）和 AI 模型' },
  { num: '02', title: 'AI 解析', desc: '流式调用大模型自动解构题目，生成逐步讲解脚本和配音文案' },
  { num: '03', title: '审查与调整', desc: '在编辑器中预览步骤和动画，手动微调文案或动画状态' },
  { num: '04', title: '导出视频', desc: '一键渲染高清 MP4，支持批量队列导出，合并长视频' },
];

function HowItWorks({ c }: { c: Ctx }) {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: c.textPrimary }}>四步一条视频</h2>
          <p style={{ color: c.textSecondary }}>全程无需手动剪辑</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-9 left-[55%] right-0 h-px"
                  style={{ background: c.border }}
                />
              )}
              <div
                className="p-6 rounded-2xl border h-full transition-colors hover:border-teal-500/20"
                style={{ background: c.cardBg, borderColor: c.border }}
              >
                <div className="text-2xl font-bold mb-4" style={{ background: c.accentGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2 text-[15px]" style={{ color: c.textPrimary }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: c.textSecondary }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Download ─────────────────────────────────────────────────────

function DownloadSection({ c }: { c: Ctx }) {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative p-12 rounded-3xl border overflow-hidden text-center"
          style={{ background: c.cardBg, borderColor: c.border }}
        >
          {/* Glow */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-64"
            style={{
              background: `radial-gradient(ellipse at center top, ${c.accent}20 0%, transparent 70%)`,
            }}
          />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: c.textPrimary }}>下载 TutorReel</h2>
            <p className="mb-8" style={{ color: c.textSecondary }}>两种使用方式，任你选择</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-8">
              {/* Desktop App */}
              <div
                className="p-6 rounded-2xl border transition-colors"
                style={{ background: c.bg, borderColor: c.border }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${c.accent}18` }}
                >
                  <Monitor size={18} style={{ color: c.accent }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: c.textPrimary }}>桌面应用（推荐）</h3>
                <p className="text-sm mb-4" style={{ color: c.textSecondary }}>原生安装包，开箱即用，无需 Node.js</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-macOS.dmg`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm"
                    style={{ borderColor: c.border, color: c.textSecondary }}
                  >
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v16m0 0l-4-4m4 4l4-4"/><path d="M4 20h16"/></svg>
                      macOS (Apple Silicon)
                    </span>
                    <span className="text-xs" style={{ color: c.textSecondary }}>.dmg</span>
                  </a>
                  <a
                    href={`${GITHUB_URL}/releases/latest/download/TutorReel-Windows-x64.exe`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-sm"
                    style={{ borderColor: c.border, color: c.textSecondary }}
                  >
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                      Windows (x64)
                    </span>
                    <span className="text-xs" style={{ color: c.textSecondary }}>.exe</span>
                  </a>
                </div>
              </div>

              {/* Local Dev */}
              <div
                className="p-6 rounded-2xl border transition-colors"
                style={{ background: c.bg, borderColor: c.border }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${c.accent}18` }}
                >
                  <Terminal size={18} style={{ color: c.accent }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: c.textPrimary }}>本地开发模式</h3>
                <p className="text-sm mb-4" style={{ color: c.textSecondary }}>克隆仓库自建运行，需 Node.js 18+</p>
                <div
                  className="p-4 rounded-xl font-mono text-xs leading-6 border"
                  style={{
                    background: c.isDark ? '#00000020' : '#E8E8EC',
                    borderColor: c.border,
                    color: c.textPrimary,
                  }}
                >
                  <div><span style={{ color: c.accent }}>$ </span><span style={{ color: c.textPrimary }}>git clone {GITHUB_URL}</span></div>
                  <div><span style={{ color: c.accent }}>$ </span><span style={{ color: c.textPrimary }}>cd cs-interview-prep {'&&'} npm install</span></div>
                  <div><span style={{ color: c.accent }}>$ </span><span style={{ color: c.textPrimary }}>cp .env.example .env</span><span style={{ color: c.textSecondary }}>  # 填入 API Key</span></div>
                  <div><span style={{ color: c.accent }}>$ </span><span style={{ color: c.textPrimary }}>npm run dev</span></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-[15px] transition-opacity hover:opacity-85"
                style={{ background: c.accentGradient }}
              >
                <GithubIcon size={17} />
                前往 GitHub
              </a>
              <a
                href={`${GITHUB_URL}/archive/refs/heads/main.zip`}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] border transition-all"
                style={{ borderColor: c.border, color: c.textSecondary }}
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

// ─── Footer ───────────────────────────────────────────────────────

function Footer({ c }: { c: Ctx }) {
  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: c.border, color: c.textSecondary }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: c.accentGradient }}
          >
            <Play size={10} fill="white" color="white" />
          </div>
          <span className="text-sm font-medium" style={{ color: c.textPrimary }}>TutorReel</span>
          <span className="text-[11px]" style={{ color: c.textSecondary }}>码帧</span>
        </div>

        <div className="flex items-center gap-6 text-sm" style={{ color: c.textSecondary }}>
          <a href="#features" className="transition-colors hover:opacity-80">功能</a>
          <a href="#download" className="transition-colors hover:opacity-80">下载</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition-colors hover:opacity-80" style={{ color: c.textSecondary }}>GitHub</a>
        </div>

        <p className="text-xs" style={{ color: c.textSecondary }}>© 2026 码帧 TutorReel · MIT License</p>
      </div>
    </footer>
  );
}
