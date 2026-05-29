import React from 'react';
import { Check, Maximize2 } from 'lucide-react';

export type Screenshot = {
  label: string;
  src: string;
};

export type SlideProps = {
  onExpandScreenshot?: (screenshot: Screenshot) => void;
};

const SlideLayout = ({ 
  overline, 
  title, 
  children,
  center = false
}: { 
  overline?: React.ReactNode; 
  title?: React.ReactNode; 
  children: React.ReactNode;
  center?: boolean;
}) => (
  <div className={`flex flex-col h-full w-full p-8 md:p-12 lg:p-24 overflow-y-auto ${center ? 'items-center justify-center text-center' : ''}`} style={{ background: '#0A0A0A', color: '#F0EEE9' }}>
    {overline && <div className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest mb-6">{overline}</div>}
    {title && <h2 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tighter leading-none mb-10 max-w-5xl text-[#F0EEE9]">{title}</h2>}
    <div className={`flex flex-col flex-1 ${center ? 'items-center justify-center' : ''} w-full`}>
      {children}
    </div>
  </div>
);

const Dot = () => <span className="w-1.5 h-1.5 bg-[#F0EEE9] rounded-full mr-2 inline-block mb-0.5"></span>;
const Tag = ({ children }: { children: React.ReactNode }) => <span className="text-[9px] px-2 py-1 border border-[#F0EEE9]/30 rounded-sm font-extrabold uppercase tracking-widest text-[#F0EEE9]/80">{children}</span>;

const ExpandableScreenshot = ({
  label,
  src,
  className = "",
  imageClassName = "",
  style,
  imageStyle,
  onExpandScreenshot
}: Screenshot & {
  className?: string;
  imageClassName?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  onExpandScreenshot?: (screenshot: Screenshot) => void;
}) => (
  <button
    type="button"
    className={`group relative block overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] ${className}`}
    style={style}
    onClick={() => onExpandScreenshot?.({ label, src })}
    aria-label={`Expand ${label} screenshot`}
    title={`Expand ${label}`}
  >
    <img src={src} className={imageClassName} style={imageStyle} alt={label} />
    <span className="absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded bg-[#0A0A0A]/85 text-[#F0EEE9] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
      <Maximize2 className="h-3.5 w-3.5" />
    </span>
  </button>
);

const DesktopScreenshotMockup = ({
  label,
  src,
  onExpandScreenshot
}: Screenshot & {
  onExpandScreenshot?: (screenshot: Screenshot) => void;
}) => (
  <div className="flex min-w-0 flex-col">
    <div className="mb-2 text-[8px] font-bold uppercase tracking-widest text-[#F0EEE9]/60">{label}</div>
    <div className="rounded-[6px] border border-[#F0EEE9]/15 bg-[#1A1A1A] p-2 shadow-2xl">
      <div className="mb-1.5 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F0EEE9]/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#F0EEE9]/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#F0EEE9]/15" />
      </div>
      <div className="aspect-[16/10] overflow-hidden rounded-[3px] bg-black">
        <ExpandableScreenshot
          label={label}
          src={src}
          className="h-full w-full"
          imageClassName="h-full w-full object-cover object-top"
          onExpandScreenshot={onExpandScreenshot}
        />
      </div>
    </div>
    <div className="mx-auto h-5 w-[22%] bg-[#F0EEE9]/12" />
    <div className="mx-auto h-1.5 w-[44%] rounded-t bg-[#F0EEE9]/16" />
  </div>
);

const LabelHeadLogo = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <img src="/labelhead-logo.png" alt="LabelHead" className={`object-contain ${className}`} style={{ height: 'auto', ...style }} />
);

const BrazenLogo = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <img src="/Brazen.png" alt="Brazen" className={`object-contain object-left mix-blend-screen ${className}`} style={{ height: 'auto', ...style }} />
);

const Slide1 = () => (
  <SlideLayout center>
    <div className="space-y-6 md:space-y-8 flex flex-col items-center flex-1 justify-center w-full">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#F0EEE9]">SOVEREIGN CO.</h1>
      <p className="text-xl md:text-3xl text-[#F0EEE9]/70 font-bold tracking-tight">The infrastructure layer for culture.</p>
      
      <div className="pt-16 md:pt-24 mt-16 md:mt-24 border-t border-[#F0EEE9]/10 space-y-4 w-full max-w-2xl text-center">
        <p className="text-xs font-bold text-[#F0EEE9]/55 uppercase tracking-widest">Seed Round · $1,200,000 · May 2026 · Confidential</p>
        <p className="text-xs font-bold text-[#F0EEE9]/80 uppercase tracking-widest">Geoffrey & Marcus (BenMarc)</p>
      </div>
    </div>
  </SlideLayout>
);

const Slide2 = () => (
  <SlideLayout overline="02 / 15 — The Problem" title="Music generates the cultural attention. It has never had the infrastructure to convert that attention into economic participation.">
    <div className="flex-1 flex flex-col mt-4">
      <div className="space-y-12 max-w-4xl w-full">
        <div>
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest mb-4">
            <span className="text-[#F0EEE9]/55"><Dot/>Sports entertainment ecosystem</span>
            <span className="text-[#F0EEE9]">$500B+</span>
          </div>
          <div className="w-full bg-[#141414] h-2 rounded-full overflow-hidden"><div className="w-[100%] bg-[#F0EEE9] h-full rounded-full" /></div>
        </div>
        <div>
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest mb-4">
            <span className="text-[#F0EEE9]/55"><Dot/>Music entertainment ecosystem</span>
            <span className="text-[#F0EEE9]">$54B</span>
          </div>
          <div className="w-full bg-[#141414] h-2 rounded-full overflow-hidden"><div className="w-[11%] bg-[#F0EEE9]/30 h-full rounded-full" /></div>
        </div>
        
        <div className="pt-16 mt-16 border-t border-[#F0EEE9]/10 flex flex-col items-start w-full">
          <div className="text-xs font-bold text-[#F0EEE9]/55 uppercase tracking-widest mb-8">Specific Gap: Participation Economy</div>
          <div className="grid grid-cols-2 gap-8 md:gap-24 w-full">
            <div className="flex flex-col">
              <div className="text-5xl md:text-6xl font-black tracking-tighter text-[#F0EEE9] mb-4">$200B+</div>
              <div className="text-xs font-bold text-[#F0EEE9]/55 uppercase tracking-widest">Sports</div>
            </div>
            <div className="flex flex-col">
              <div className="text-5xl md:text-6xl font-black tracking-tighter text-[#F0EEE9]/30 mb-4">$0</div>
              <div className="text-xs font-bold text-[#F0EEE9]/55 uppercase tracking-widest">Music</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide3 = () => (
  <SlideLayout overline="03 / 15 — The Insight" title="Sports didn't add competition to basketball. It organized competition that already existed. Music's problem is that it never got that organization.">
    <div className="mt-8 flex-1 w-full max-w-5xl" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', marginTop: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 40px 1fr 40px 1fr', marginBottom: '2px' }}>
          <div></div>
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,238,233,0.30)', padding: '8px 14px' }}>ART FORM</div>
          <div></div>
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,238,233,0.30)', padding: '8px 14px' }}>COMPETITIVE LAYER</div>
          <div></div>
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,238,233,0.30)', padding: '8px 14px' }}>ECOSYSTEM</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 40px 1fr 40px 1fr', gap: '0', marginBottom: '2px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 9, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A843' }}>SPORTS</div>
          <div style={{ background: 'rgba(212,168,67,0.09)', border: '0.5px solid rgba(212,168,67,0.35)', borderRadius: '3px', padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#F0EEE9', mb: 1 }}>Elite athletes perform</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'rgba(212,168,67,0.65)' }}>Fans pay to watch</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'rgba(212,168,67,0.40)' }}>→</div>
          <div style={{ background: 'rgba(212,168,67,0.09)', border: '0.5px solid rgba(212,168,67,0.35)', borderRadius: '3px', padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#F0EEE9', mb: 1 }}>Teams compete on rosters</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'rgba(212,168,67,0.65)' }}>Leagues, contracts, metrics</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'rgba(212,168,67,0.40)' }}>→</div>
          <div style={{ background: 'rgba(212,168,67,0.09)', border: '0.5px solid rgba(212,168,67,0.35)', borderRadius: '3px', padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#F0EEE9', mb: 1 }}>$500B+ ecosystem</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'rgba(212,168,67,0.65)' }}>Betting, fantasy, broadcast</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 40px 1fr 40px 1fr', marginBottom: '8px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 9, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,238,233,0.35)' }}>MUSIC</div>
          <div style={{ background: 'rgba(240,238,233,0.03)', border: '0.5px solid rgba(240,238,233,0.12)', borderRadius: '3px', padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(240,238,233,0.70)' }}>Elite artists perform</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'rgba(240,238,233,0.38)' }}>Fans pay to watch</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'rgba(240,238,233,0.12)' }}>·</div>
          <div style={{ background: 'rgba(0,0,0,0.40)', border: '1.5px dashed rgba(240,238,233,0.18)', borderRadius: '3px', padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
            <div style={{ display: 'inline-block', border: '0.5px solid rgba(240,238,233,0.15)', borderRadius: '2px', padding: '2px 7px', fontSize: 8, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,238,233,0.22)', alignSelf: 'flex-start' }}>STRUCTURAL GAP</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(240,238,233,0.22)' }}>No competitive layer</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'rgba(240,238,233,0.06)' }}>·</div>
          <div style={{ background: 'transparent', border: '0.5px solid rgba(240,238,233,0.06)', borderRadius: '3px', padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(240,238,233,0.12)' }}>No ecosystem</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: 'rgba(240,238,233,0.08)' }}>$0 participation economy</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '0', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 9, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#00E5FF' }}>LABELHEAD</div>
          <div style={{ gridColumn: '2 / -1', background: 'rgba(0,229,255,0.05)', border: '0.5px solid rgba(0,229,255,0.25)', borderRadius: '3px', padding: '0 20px', fontSize: 12, fontWeight: 300, color: '#F0EEE9', lineHeight: 1.65, display: 'flex', alignItems: 'center' }}>
            Provides music with the competitive layer it was never given — label vs label, roster vs roster, governed by transparent scoring derived entirely from data LabelHead does not control. The organizational infrastructure that makes the downstream participation economy possible.
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide4 = () => (
  <SlideLayout overline="04 / 15 — What is LabelHead?">
    <div className="flex flex-col w-full h-full justify-center mt-4">
      <div className="mb-12">
        <LabelHeadLogo style={{ height: '140px' }} className="-ml-24" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 w-full flex-1 mb-8">
        <div className="flex flex-col border-t border-[#F0EEE9]/10 pt-6">
          <div className="text-3xl font-black text-[#F0EEE9]/30 tracking-tighter mb-4">STEP 01 — "BUILD"</div>
          <p className="text-[#F0EEE9]/70 text-sm font-medium leading-relaxed">
            You create a fictitious record label. Name it. Brand it. Own it. This is your competitive identity for the season.
          </p>
        </div>
        <div className="flex flex-col border-t border-[#F0EEE9]/10 pt-6">
          <div className="text-3xl font-black text-[#F0EEE9]/30 tracking-tighter mb-4">STEP 02 — "DRAFT"</div>
          <p className="text-[#F0EEE9]/70 text-sm font-medium leading-relaxed">
            You sign 5 real artists — the ones you believe are about to break. Every pick is a public, timestamped call on your cultural instincts. The leaderboard shows whether you were right.
          </p>
        </div>
        <div className="flex flex-col border-t border-[#F0EEE9]/10 pt-6">
          <div className="text-3xl font-black text-[#F0EEE9]/30 tracking-tighter mb-4">STEP 03 — "COMPETE"</div>
          <p className="text-[#F0EEE9]/70 text-sm font-medium leading-relaxed">
            Your label goes head-to-head against every other label in the Cycle. Scoring is powered by real-world artist activity — streaming velocity, press mentions, cultural momentum. No opinions. Just what actually happened.
          </p>
        </div>
        <div className="flex flex-col border-t border-[#F0EEE9]/10 pt-6">
          <div className="text-3xl font-black text-[#F0EEE9]/30 tracking-tighter mb-4">STEP 04 — "WIN"</div>
          <p className="text-[#F0EEE9]/70 text-sm font-medium leading-relaxed">
            The label that saw it coming first wins. Real cash prizes. A permanent public record that you called it right before anyone else did.
          </p>
        </div>
      </div>
      
      <div className="w-full text-center text-xs font-bold text-[#F0EEE9]/55 pt-6 border-t border-[#F0EEE9]/10 uppercase tracking-widest leading-relaxed">
        This is not a game of luck. The A&R instinct — knowing who is about to break before the data confirms it — is a real, learnable skill.<br/>
        <span className="text-[#F0EEE9]">LabelHead is the first competitive format ever built to reward it.</span>
      </div>
    </div>
  </SlideLayout>
);

const Slide5 = () => (
  <SlideLayout overline="05 / 15 — See It Live" center>
    <div className="flex flex-col items-center justify-center flex-1 w-full space-y-12">
      <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-[#F0EEE9]">
        The platform is live.
      </h2>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center -space-y-10">
          <LabelHeadLogo style={{ height: '240px' }} className="-translate-x-4" />
          <span className="text-xl md:text-2xl font-bold tracking-widest text-[#00E5FF]">app.labelhead.co</span>
        </div>
        <div className="w-48 h-48 bg-white/5 flex items-center justify-center p-3 rounded shadow-lg border border-white/10">
          <img src="/qr-code.png" alt="QR Code linking to executable" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 text-[10px] font-medium text-[#F0EEE9]/30 italic">
      If connectivity is unavailable — screenshots on following backup panel.
    </div>
  </SlideLayout>
);

const Slide5B = ({ onExpandScreenshot }: SlideProps) => (
  <SlideLayout overline="Backup Panel — Interface" title="app.labelhead.co">
    <div className="flex w-full flex-wrap gap-4 mt-6 h-[calc(100%-80px)]">
      {[
        ["Homepage", "/Screenshots/Homepage page.png", "w-[calc(40%-8px)]"],
        ["Roster", "/Screenshots/Roster page.png", "w-[calc(60%-8px)]"],
        ["Artist Search", "/Screenshots/Artist page.png", "w-[calc(33.33%-11px)]"],
        ["Artist Detail", "/Screenshots/Artist Detail Page.png", "w-[calc(33.33%-11px)]"],
        ["Leaderboard", "/Screenshots/Leaderboard page.png", "w-[calc(33.33%-10px)]"]
      ].map(([label, src, wClass], i) => (
        <div key={i} className={`flex flex-col bg-[#141414] border border-[#F0EEE9]/10 rounded overflow-hidden ${wClass} h-[calc(50%-8px)]`}>
           <div className="px-3 py-2 border-b border-[#F0EEE9]/10 text-[9px] uppercase tracking-widest font-bold text-[#F0EEE9]/60 bg-[#0A0A0A] shrink-0">
             {label}
           </div>
           <ExpandableScreenshot
             label={label}
             src={src}
             className="h-full w-full"
             imageClassName="h-full w-full object-cover object-top"
             onExpandScreenshot={onExpandScreenshot}
           />
        </div>
      ))}
    </div>
  </SlideLayout>
);

const Slide6 = () => (
  <SlideLayout overline="06 / 15 — The Solution" title="One property is live. The other is the multiplier. Together they are the infrastructure layer for culture.">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
      <div style={{ 
        display: 'flex', flexDirection: 'column', 
        background: 'rgba(0,229,255,0.04)', 
        border: '0.5px solid rgba(0,229,255,0.22)', 
        borderTop: '2px solid #00E5FF', 
        borderRadius: '4px', 
        padding: '26px 24px' 
      }}>
        <div style={{ fontSize: 48, fontWeight: 500, color: 'rgba(240,238,233,0.06)', marginBottom: 14, lineHeight: 1 }}>01</div>
        <div style={{ height: 60, display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <LabelHeadLogo style={{ height: '120px' }} className="-ml-20" />
        </div>
        <div style={{ fontSize: 20, fontWeight: 500, color: '#F0EEE9', marginBottom: 5 }}>Cultural Competition Infrastructure</div>
        <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(240,238,233,0.35)', marginBottom: 16 }}>"The league."</div>
        <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(240,238,233,0.70)', lineHeight: 1.7, flex: 1 }}>
          Competitors draft real artists to 5-artist rosters — functioning as labels — and earn points based on how those artists outperform cultural expectations. Label vs label, roster vs roster. Scoring derived from data LabelHead does not control: Spotify, Billboard, third-party media. Every draft pick is a timestamped prediction. The leaderboard is a permanent public record of who knew first.
        </div>
        <div style={{ 
          marginTop: 20, alignSelf: 'flex-start',
          background: 'rgba(0,229,255,0.08)',
          border: '0.5px solid rgba(0,229,255,0.30)',
          borderRadius: '2px', padding: '3px 9px',
          fontSize: 9, fontWeight: 500, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#00E5FF'
        }}>
          Live — Founding Season Q2 2026
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', flexDirection: 'column', 
        background: 'rgba(212,168,67,0.04)', 
        border: '0.5px solid rgba(212,168,67,0.22)', 
        borderTop: '2px solid #D4A843', 
        borderRadius: '4px', 
        padding: '26px 24px' 
      }}>
        <div style={{ fontSize: 48, fontWeight: 500, color: 'rgba(240,238,233,0.06)', marginBottom: 14, lineHeight: 1 }}>02</div>
        <div style={{ height: 60, display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <BrazenLogo style={{ height: '54px' }} className="-ml-3" />
        </div>
        <div style={{ fontSize: 20, fontWeight: 500, color: '#F0EEE9', marginBottom: 5 }}>Premium Vertical Content Network</div>
        <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(240,238,233,0.35)', marginBottom: 16 }}>"The network."</div>
        <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(240,238,233,0.70)', lineHeight: 1.7, flex: 1 }}>
          A multi-channel vertical platform with LabelHead as its founding channel — seeded from day one with daily, competition-powered programming that no content platform without a live competition infrastructure can replicate. Each Brazen channel is a distinct programming vertical. LabelHead proves the model works before a single original frame is shot.
        </div>
        <div style={{ 
          marginTop: 20, alignSelf: 'flex-start',
          background: 'rgba(212,168,67,0.08)',
          border: '0.5px solid rgba(212,168,67,0.30)',
          borderRadius: '2px', padding: '3px 9px',
          fontSize: 9, fontWeight: 500, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#D4A843'
        }}>
          In Development
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 300, fontStyle: 'italic', color: 'rgba(240,238,233,0.32)', marginTop: 24 }}>
      LabelHead being live before Brazen is built is not a sequencing problem. It is the thesis in action.
    </div>
  </SlideLayout>
);

const SolutionProperty = ({
  number,
  accent,
  logo,
  title,
  subtitle,
  body,
  status
}: {
  number: string;
  accent: string;
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  body: string;
  status: string;
}) => (
  <div
    className="flex min-h-0 flex-col rounded-[4px] border p-5"
    style={{
      borderColor: `${accent}38`,
      borderTop: `2px solid ${accent}`,
      background: `${accent}0A`
    }}
  >
    <div className="mb-4 flex items-start justify-between gap-4">
      <div className="text-5xl font-medium leading-none text-[#F0EEE9]/10">{number}</div>
      <div
        className="rounded-sm border px-2 py-1 text-[8px] font-bold uppercase tracking-widest"
        style={{ borderColor: `${accent}55`, color: accent, background: `${accent}14` }}
      >
        {status}
      </div>
    </div>
    <div className="mb-5 flex h-14 items-center">{logo}</div>
    <div className="mb-1 text-[20px] font-bold tracking-tight text-[#F0EEE9]">{title}</div>
    <div className="mb-5 text-xs italic text-[#F0EEE9]/40">{subtitle}</div>
    <p className="flex-1 text-[12px] font-medium leading-relaxed text-[#F0EEE9]/68">{body}</p>
  </div>
);

const Slide6Compact = () => (
  <div className="flex h-full w-full flex-col overflow-hidden p-8 md:p-12 lg:p-20" style={{ background: '#0A0A0A', color: '#F0EEE9' }}>
    <div className="mb-5 text-[10px] font-bold uppercase tracking-widest text-[#F0EEE9]/55">06 / 15 â€” The Solution</div>
    <h2 className="mb-8 max-w-6xl text-4xl font-black leading-none tracking-tighter text-[#F0EEE9] md:text-5xl lg:text-[50px]">
      One live property. One multiplier. Together, the infrastructure layer for culture.
    </h2>

    <div className="grid min-h-0 flex-1 grid-cols-2 gap-5">
      <SolutionProperty
        number="01"
        accent="#00E5FF"
        logo={<LabelHeadLogo style={{ height: '120px' }} className="-ml-20" />}
        title="Cultural Competition Infrastructure"
        subtitle="The league."
        body="Competitors draft real artists to five-artist rosters and earn points when those artists outperform cultural expectations. Every pick becomes a timestamped prediction; the leaderboard becomes the public record of who knew first."
        status="Live"
      />
      <SolutionProperty
        number="02"
        accent="#D4A843"
        logo={<BrazenLogo style={{ height: '54px' }} className="-ml-3" />}
        title="Premium Vertical Content Network"
        subtitle="The network."
        body="Brazen turns the competition into programming. LabelHead seeds the first channel with daily, data-backed storylines; future channels expand the same format across culture, talent, and taste."
        status="In Development"
      />
    </div>

    <div className="mt-6 border-t border-[#F0EEE9]/10 pt-4 text-center text-xs font-medium italic text-[#F0EEE9]/38">
      LabelHead being live before Brazen is built is not a sequencing problem. It is the thesis in action.
    </div>
    <div className="mt-3 text-center text-xs font-medium italic text-[#F0EEE9]/38">
      This raise builds the Brazen MVP alongside the LabelHead GTM activation — so by the time the Series A conversation begins, both properties are operational.
    </div>
  </div>
);

const Slide7 = () => (
  <SlideLayout overline="07 / 15 — Brazen Network" title="Brazen is a vertical content network. LabelHead proves the programming works before a frame is shot.">
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', paddingTop: '14px' }}>
      
      <div style={{
        background: '#141414', border: '0.5px solid rgba(240,238,233,0.15)',
        borderRadius: '3px', padding: '12px 18px',
        display: 'flex', gap: '16px', alignItems: 'flex-start',
        marginBottom: '12px'
      }}>
        <div style={{
          border: '0.5px solid rgba(240,238,233,0.20)',
          borderRadius: '2px', padding: '3px 8px',
          fontSize: 9, fontWeight: 500, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(240,238,233,0.45)',
          whiteSpace: 'nowrap', marginTop: 2
        }}>Architecture</div>
        <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(240,238,233,0.70)', lineHeight: 1.65 }}>
          A multi-channel vertical content network. Each channel is a distinct vertical. <span style={{ color: '#F0EEE9', fontWeight: 500 }}>LabelHead is Channel One:</span> the founding channel that seeds the platform with daily, competition-generated content.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '0', overflow: 'hidden' }}>
        
        <div style={{
          background: 'rgba(0,229,255,0.03)', border: '0.5px solid rgba(0,229,255,0.20)',
          borderTop: '2px solid #00E5FF', borderRadius: '4px', padding: '16px 18px', display: 'flex', flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div className="flex items-center gap-1">
              <h4 style={{ color: '#00E5FF', fontWeight: 900, fontSize: 16 }}>Channel 1 —</h4>
              <LabelHeadLogo style={{ height: '64px' }} className="-ml-10 my-[-20px]" />
            </div>
            <div style={{ 
              background: 'rgba(212,168,67,0.1)', border: '0.5px solid rgba(212,168,67,0.3)',
              borderRadius: '2px', padding: '2px 6px', fontSize: 9, fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#D4A843'
            }}>Live</div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(240,238,233,0.5)', marginBottom: 12, borderBottom: '1px solid rgba(240,238,233,0.1)', paddingBottom: 8 }}>Competition-powered · Self-generating · Daily</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ["7–9a", "Overnight Highlights", "New drops scored, on loop"],
              ["9–11a", "The Panel", "Drops analyzed in scoring context"],
              ["11a–1p", "Label Intelligence", "IRL label and executive moves"],
              ["2–4p", "The Draft Room", "Roster strategy, upcoming previews"],
              ["5–8p", "Live Premieres", "The event the day builds toward"]
            ].map(([time, title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', fontSize: 10, fontWeight: 700, color: '#00E5FF', marginTop: 1 }}>{time}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: '#F0EEE9' }}>{title}</div>
                  <div style={{ fontSize: 11, fontWeight: 300, color: 'rgba(240,238,233,0.5)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'rgba(212,168,67,0.03)', border: '0.5px solid rgba(212,168,67,0.20)',
          borderTop: '2px solid #D4A843', borderRadius: '4px', padding: '16px 18px', display: 'flex', flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div className="flex items-center gap-2">
              <BrazenLogo style={{ height: '18px' }} className="object-left" />
              <h4 style={{ color: '#D4A843', fontWeight: 900, fontSize: 16 }}>Originals</h4>
            </div>
            <div style={{ 
              background: 'rgba(212,168,67,0.1)', border: '0.5px solid rgba(212,168,67,0.3)',
              borderRadius: '2px', padding: '2px 6px', fontSize: 9, fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#D4A843'
            }}>Premium</div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(240,238,233,0.5)', marginBottom: 12, borderBottom: '1px solid rgba(240,238,233,0.1)', paddingBottom: 8 }}>Marcus's creative domain · Talent-driven access</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            {[
              ["Longform Doc", "30 for 30-style deep dives"],
              ["Investigative", "Outside the Lines-style reporting"],
              ["Prestige Series", "Artist-developed fictionalized narratives"],
              ["The Rollout", "One artist, their pre-release window, live"],
              ["Original Films", "Feature-length prestige content"]
            ].map(([title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', background: 'rgba(212,168,67,0.3)', marginTop: 5, borderRadius: '50%' }}></div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: '#F0EEE9' }}>{title}</div>
                  <div style={{ fontSize: 11, fontWeight: 300, color: 'rgba(240,238,233,0.5)' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '12px', fontSize: 10, fontStyle: 'italic', color: 'rgba(240,238,233,0.35)', paddingTop: 10, borderTop: '0.5px solid rgba(240,238,233,0.1)' }}>
            The tentpole is Marcus's to define. Channel One is operational.
          </div>
        </div>

      </div>
    </div>
  </SlideLayout>
);

const Slide8 = () => (
  <SlideLayout overline="08 / 15 — How It Works" title="Label vs label. Roster vs roster. Scored on data LabelHead does not control and cannot manipulate.">
    <div className="mb-6 border-b border-[#F0EEE9]/10 pb-6 flex justify-between items-center w-full">
      <LabelHeadLogo style={{ height: '90px' }} className="-ml-16 my-[-20px]" />
    </div>
    <div className="flex flex-col w-full mb-8">
      {[ 
        {num: '01', title: 'DRAFT', desc: 'Select 5 artists to build your label roster before the weekly Cycle locks. Every pick is a public, timestamped prediction.'},
        {num: '02', title: 'COMPETE', desc: 'Your label competes against every other label on a synchronized global Cycle. Transparent scoring. Public leaderboard. No appeals.'},
        {num: '03', title: 'SCORE', desc: 'Points earned when your artists outperform cultural expectations. The edge belongs to whoever sees it coming first.'}
      ].map(step => (
        <div key={step.num} className="flex justify-between items-center py-6 border-b border-[#F0EEE9]/10">
          <div className="flex gap-6 items-center w-1/3">
            <div className="text-3xl font-black text-[#F0EEE9]/30 tracking-tighter">{step.num}</div>
            <h4 className="text-xs font-bold text-[#F0EEE9] uppercase tracking-widest">{step.title}</h4>
          </div>
          <p className="text-[#F0EEE9]/70 text-sm font-medium w-2/3">{step.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-2 flex-1">
      <div className="text-xs font-bold text-[#F0EEE9]/55 uppercase tracking-widest mb-6">The Scoring Engine</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {title: 'ACCELERATION', text: 'Rate of audience activity growth W-o-W'},
          {title: 'SURPRISE', text: 'Performance vs. baseline × saturation'},
          {title: 'LONGEVITY', text: 'Sustained above-baseline heat'},
          {title: 'CULTURAL GRAVITY', text: 'Weighted media mention velocity'}
        ].map(comp => (
          <div key={comp.title} className="flex flex-col">
            <div className="text-[#F0EEE9] font-bold text-[10px] tracking-widest mb-2 flex items-center"><Dot/>{comp.title}</div>
            <div className="text-[#F0EEE9]/70 font-medium text-[11px] leading-relaxed">{comp.text}</div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="w-full text-center text-xs font-bold text-[#F0EEE9]/55 pt-6 border-t border-[#F0EEE9]/10 uppercase tracking-widest leading-relaxed mt-8">
      Each underlying metric is binary at the source. A stream either registered or it didn't.<br/>
      <span className="text-[#F0EEE9]">LabelHead reads what happened — it does not decide.</span>
    </div>
  </SlideLayout>
);

const Slide9 = () => (
  <SlideLayout overline="09 / 15 — The Flywheel" title="Each property feeds the other. The data layer is what neither property could build alone.">
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full py-4 space-y-2 flex-1">
      <div className="w-full flex items-center justify-between py-6 border-b border-[#F0EEE9]/10">
        <div className="flex flex-col w-1/3">
          <LabelHeadLogo style={{ height: '80px' }} className="w-auto items-start justify-start object-left -ml-10 mt-[-20px] mb-[-10px]" />
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest mt-1">(Live)</span>
        </div>
        <div className="w-2/3 pl-8 border-l border-[#F0EEE9]/10 flex flex-col">
          <p className="text-[10px] font-bold text-[#F0EEE9] uppercase tracking-widest mb-2">Competition generates content</p>
          <p className="text-[13px] text-[#F0EEE9]/70 font-medium">Every Cycle produces a news cycle. Score changes, draft decisions, and Cycle results are Brazen Channel One's daily programming.</p>
        </div>
      </div>
      
      <div className="w-full flex items-center justify-between py-6 border-b border-[#F0EEE9]/10">
        <div className="flex flex-col w-1/3">
          <BrazenLogo style={{ height: '36px' }} className="mb-2 w-auto items-start justify-start object-left" />
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest mt-1">(The Network)</span>
        </div>
        <div className="w-2/3 pl-8 border-l border-[#F0EEE9]/10 flex flex-col">
          <p className="text-[10px] font-bold text-[#F0EEE9] uppercase tracking-widest mb-2">Content grows the competition</p>
          <p className="text-[13px] text-[#F0EEE9]/70 font-medium">Artists profiled on Brazen become premium draft assets. Original programming converts viewers into LabelHead competitors.</p>
        </div>
      </div>
      
      <div className="w-full flex items-center justify-between py-6">
        <div className="flex flex-col w-1/3">
          <h3 className="font-black text-2xl tracking-tighter text-[#F0EEE9]">DATA LAYER</h3>
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest mt-1">(B2B Asset)</span>
        </div>
        <div className="w-2/3 pl-8 border-l border-[#F0EEE9]/10 flex flex-col">
          <p className="text-[10px] font-bold text-[#F0EEE9] uppercase tracking-widest mb-2">The Moat</p>
          <p className="text-[13px] text-[#F0EEE9]/70 font-medium">Every draft pick and engagement signal flows into the Label Intelligence API. Sold to A&R teams, DSPs, and music rights investors.</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide10 = () => (
  <SlideLayout overline="10 / 15 — Market Opportunity" title="We are not entering a declining market. We are creating a participation layer on top of a growing one.">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12 mb-16 flex-1 w-full">
      <div className="flex flex-col space-y-16 py-8">
        <div className="flex flex-col">
          <span className="text-6xl md:text-7xl font-black tracking-tighter text-[#F0EEE9] mb-4">$200B+</span>
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest leading-relaxed">
            <span className="text-[#F0EEE9] inline-block mb-1">Sports participation economy today</span><br/>
            (Betting, fantasy, prediction markets)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-6xl md:text-7xl font-black tracking-tighter text-[#F0EEE9]/30 mb-4">$0</span>
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest leading-relaxed">
            <span className="text-[#F0EEE9] inline-block mb-1">Music participation economy today</span>
          </span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-16 py-8 border-t lg:border-t-0 lg:border-l border-[#F0EEE9]/10 lg:pl-24">
        <div className="flex flex-col">
          <span className="text-6xl md:text-7xl font-black tracking-tighter text-[#F0EEE9] mb-4">$28.6B</span>
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest leading-relaxed">
            <span className="text-[#F0EEE9] inline-block mb-1">Global recorded music revenue</span><br/>
            (Growing at 10% annually)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-6xl md:text-7xl font-black tracking-tighter text-[#F0EEE9]/30 mb-4">$500B+</span>
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest leading-relaxed">
            <span className="text-[#F0EEE9] inline-block mb-1">Sports entertainment ecosystem</span><br/>
            (The destination)
          </span>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide11 = () => (
  <SlideLayout overline="11 / 15 — Go-To-Market" title="Three prongs. One sequenced ignition. Each prong does the heavy lifting for the next.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#F0EEE9]/10 mt-8 mb-10 flex-1">
      <div className="flex flex-col py-8 pr-8 border-b md:border-b-0 md:border-r border-[#F0EEE9]/10">
        <div className="text-4xl font-black text-[#F0EEE9]/30 tracking-tighter mb-4">01</div>
        <h4 className="text-lg font-bold tracking-tight text-[#F0EEE9] mb-4 whitespace-nowrap">Ranked Partnership</h4>
        <p className="text-[13px] text-[#F0EEE9]/70 font-medium leading-relaxed mb-6 flex-1">
          Microinfluencer bounty platform. CEO is a direct Marcus relationship. Seeds the platform with real users and creates a permanent searchable content footprint.
        </p>
        <div className="flex items-center"><Tag>$50K Budget</Tag></div>
      </div>
      <div className="flex flex-col py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#F0EEE9]/10">
        <div className="text-4xl font-black text-[#F0EEE9]/30 tracking-tighter mb-4">02</div>
        <h4 className="text-lg font-bold tracking-tight text-[#F0EEE9] mb-4 whitespace-nowrap">Demo + Promo Spots</h4>
        <p className="text-[13px] text-[#F0EEE9]/70 font-medium leading-relaxed mb-6 flex-1">
          Motion-design demo (FanDuel-style) is the foundational "what is this?" asset.<br/><br/>
          NLE Choppa narrative promo spot uses existing Marcus relationship, formatted for organic cultural reach.
        </p>
        <div className="flex items-center"><Tag>$145K Budget</Tag></div>
      </div>
      <div className="flex flex-col py-8 md:pl-8">
        <div className="text-4xl font-black text-[#F0EEE9]/30 tracking-tighter mb-4">03</div>
        <h4 className="text-lg font-bold tracking-tight text-[#F0EEE9] mb-4 whitespace-nowrap">Top 2 → Top 50</h4>
        <p className="text-[13px] text-[#F0EEE9]/70 font-medium leading-relaxed mb-6 flex-1">
          Two competing podcast hosts become founding participants. Their public rivalry generates the founding narrative. Their combined reach creates the media package that closes anchor sponsor.
        </p>
        <div className="flex items-center"><Tag>$150K Budget</Tag></div>
      </div>
    </div>
    <div className="w-full text-center text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest leading-relaxed mt-2">
      Demo first → NLE in parallel → Ranked live → Podcast hosts announced → Selection Sunday → Top 50 filled → Sponsor closed
    </div>
  </SlideLayout>
);

const Slide12 = () => (
  <SlideLayout overline="12 / 15 — Business Model" title={<span>Revenue grows each season.<br/>The prize pool is always a sponsor conversation.</span>}>
    <div className="flex-1 w-full" style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ color: 'rgba(240,238,233,0.55)', marginBottom: 20, fontSize: 16, fontWeight: 500, lineHeight: 1.5, maxWidth: '800px' }}>
        The Top 50 assembled field is not a list of participants. It is a media package a brand's marketing team can model, price, and approve in one meeting.
      </p>

      <div style={{ 
        border: '0.5px solid rgba(200,169,106,0.22)',
        borderRadius: '3px', padding: '16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1px', background: 'rgba(200,169,106,0.15)', overflow: 'hidden', marginBottom: 24
      }}>
        {[
          { label: "What the sponsor buys", text: "Weekly organic content across 50 active channels for a full season. Combined reach in the tens of millions, self-selected for cultural taste. Category exclusivity in a format with no comparison point." },
          { label: "Why the field fills itself", text: "The Top 2 podcast hosts recruit the Top 50. Their names on the invitation carry more authority than any cold outreach. The culture's competitive instinct does the rest." },
          { label: "The closing argument", text: "One brand gets this. The others don't. Spirits brands have competed for exactly this demographic for decades. LabelHead gives them something no vehicle has offered: category exclusivity with a season arc and weekly content." }
        ].map((c, i) => (
          <div key={i} style={{ background: '#141414', padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#D4A843', marginBottom: 8, letterSpacing: '0.1em' }}>{c.label}</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: 'rgba(240,238,233,0.55)', lineHeight: 1.6 }}>{c.text}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', paddingBottom: 8, borderBottom: '1px solid rgba(240,238,233,0.2)', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(240,238,233,0.4)', textTransform: 'uppercase' }}>
          <div>Season</div><div>Primary Revenue</div><div>Secondary Revenue</div><div>B2B / Institutional</div>
        </div>
        {[
          ["Founding Season", <span style={{ color: '#D4A843', fontWeight: 600 }}>Anchor sponsorship — 1M prize pool. Brand partner. Not in this raise.</span>, "Invite-only entry, 500 competitor cap", "Secondary sponsor packages on Top 50 reach"],
          ["Season 2", "Multi-sponsor category exclusivity", "Artist Portals, Analyst tier, Press correspondent", "Brazen co-production partnerships"],
          ["Season 3", "Expanded formats — Catalog League, genre tracks", "Verified Pro membership, advanced statistics", "Label Intelligence API — A&R, DSPs, rights investors"],
          ["Season 4+", "Institutional Leagues — real labels, B2B licensing", "LabelHead Live — annual event, broadcast", "Data archive licensing — research and investment"]
        ].map(([s, p, sec, b2b], i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', borderBottom: '1px solid rgba(240,238,233,0.1)', padding: '12px 0', gap: 16, alignItems: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#F0EEE9' }}>{s}</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: 'rgba(240,238,233,0.8)' }}>{p}</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: 'rgba(240,238,233,0.5)' }}>{sec}</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: 'rgba(240,238,233,0.5)' }}>{b2b}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

const Slide13 = ({ onExpandScreenshot }: SlideProps) => (
  <SlideLayout overline="13 / 15 — Traction" title="The platform is live. This raise is GTM capital, not product capital. That distinction matters.">
    <div style={{ display: 'flex', gap: '30px', width: '100%', flex: 1, marginTop: '24px' }}>
      
      <div style={{ flex: '0 0 60%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignContent: 'start' }}>
        {[
          { t: "PLATFORM LIVE", d: "app.labelhead.co operational, scoring engine running" },
          { t: "FOUR-COMPONENT SCORING ENGINE", d: "Acceleration, Surprise, Longevity components fully deployed" },
          { t: "AI ORCHESTRATION ACTIVE", d: "8-agent Paperclip system managing VC pipeline and publishing" },
          { t: "FOUNDING SEASON INFRASTRUCTURE", d: "500 competitor cap, rosters, invite flow, public leaderboard" },
          { t: "DATA INTEGRATIONS RUNNING", d: "Spotify, Last.fm, YouTube, Shazam, Genius, Soundcharts" },
          { t: "GTM STRATEGY LOCKED", d: "Ranked staged, NLE confirmed, Top 2 targets identified" }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(240,238,233,0.1)', paddingTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#F0EEE9', letterSpacing: '0.05em' }}>{item.t}</span>
              <span style={{ fontSize: 8, padding: '2px 5px', border: '1px solid rgba(0,229,255,0.3)', borderRadius: 2, color: '#00E5FF' }}>DONE</span>
            </div>
            <span style={{ fontSize: 11, color: 'rgba(240,238,233,0.6)', lineHeight: 1.5 }}>{item.d}</span>
          </div>
        ))}
      </div>

      <div style={{ flex: '0 0 calc(40% - 30px)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          ["Roster Draft Screen", "/Screenshots/Roster page.png"],
          ["Live Leaderboard", "/Screenshots/Leaderboard page.png"],
          ["Score Breakdown", "/Screenshots/Artist Detail Page.png"]
        ].map(([label, src], i) => (
          <div key={i} style={{ 
            flex: 1, background: 'rgba(240,238,233,0.03)', border: '0.5px solid rgba(240,238,233,0.12)',
            borderRadius: '3px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', background: 'rgba(10,10,10,0.85)', padding: '6px 10px', borderBottom: '0.5px solid rgba(240,238,233,0.15)', zIndex: 10 }}>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,238,233,0.8)' }}>{label}</div>
            </div>
            <ExpandableScreenshot
              label={label}
              src={src}
              className="h-full w-full"
              imageStyle={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
              onExpandScreenshot={onExpandScreenshot}
            />
          </div>
        ))}
      </div>

    </div>
  </SlideLayout>
);

const Slide13Studio = ({ onExpandScreenshot }: SlideProps) => (
  <div className="flex h-full w-full flex-col overflow-hidden p-8 md:p-12 lg:p-20" style={{ background: '#0A0A0A', color: '#F0EEE9' }}>
    <div className="mb-5 text-[10px] font-bold uppercase tracking-widest text-[#F0EEE9]/55">13 / 15 â€” Traction</div>
    <h2 className="mb-7 max-w-6xl text-4xl font-black leading-none tracking-tighter text-[#F0EEE9] md:text-5xl lg:text-[46px]">
      The platform is live. This raise is GTM capital, not product capital. That distinction matters.
    </h2>

    <div className="flex min-h-0 flex-1 flex-col gap-7">
      <div className="grid grid-cols-3 gap-x-7 gap-y-5">
        {[
          { t: "PLATFORM LIVE", d: "app.labelhead.co operational, scoring engine running" },
          { t: "FOUR-COMPONENT SCORING ENGINE", d: "Acceleration, Surprise, Longevity components fully deployed" },
          { t: "AI ORCHESTRATION ACTIVE", d: "8-agent Paperclip system managing VC pipeline and publishing" },
          { t: "FOUNDING SEASON INFRASTRUCTURE", d: "500 competitor cap, rosters, invite flow, public leaderboard" },
          { t: "DATA INTEGRATIONS RUNNING", d: "Spotify, Last.fm, YouTube, Shazam, Genius, Soundcharts" },
          { t: "GTM STRATEGY LOCKED", d: "Ranked staged, NLE confirmed, Top 2 targets identified" }
        ].map((item, i) => (
          <div key={i} className="flex min-w-0 flex-col border-t border-[#F0EEE9]/10 pt-3">
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <span className="text-[9px] font-bold tracking-[0.05em] text-[#F0EEE9]">{item.t}</span>
              <span className="shrink-0 rounded-sm border border-[#00E5FF]/30 px-1.5 py-0.5 text-[7px] font-bold text-[#00E5FF]">DONE</span>
            </div>
            <span className="text-[10px] font-medium leading-snug text-[#F0EEE9]/60">{item.d}</span>
          </div>
        ))}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-3 items-end gap-5">
        {[
          ["Roster Draft Screen", "/Screenshots/Roster page.png"],
          ["Live Leaderboard", "/Screenshots/Leaderboard page.png"],
          ["Score Breakdown", "/Screenshots/Artist Detail Page.png"]
        ].map(([label, src], i) => (
          <div key={i}>
            <DesktopScreenshotMockup
              label={label}
              src={src}
              onExpandScreenshot={onExpandScreenshot}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Slide14 = () => (
  <SlideLayout overline="14 / 15 — The Raise" title={<span>$1.2M to build two properties and prove the flywheel.<br/>LabelHead's GTM activation. Brazen's MVP. Nine months of runway. The prize pool remains a sponsor conversation — not an investor conversation.</span>}>
    <div className="flex flex-col md:flex-row gap-16 lg:gap-20 mt-8 w-full flex-1">
      <div className="flex-1 w-full flex flex-col">
        <h3 className="text-[10px] font-bold text-[#F0EEE9] uppercase tracking-widest mb-6 border-b border-[#F0EEE9]/20 pb-4">Use of funds</h3>
        <div className="space-y-4">
          {[
            { n: "GTM Activation", d: "Podcast partnerships, Ranked", amt: "$215K", w: "33%" },
            { n: "Brazen MVP Development", d: "", amt: "$220K · 18%", w: "18%" },
            { n: "Content & Prodn", d: "Demo video, NLE spot", amt: "$135K", w: "21%" },
            { n: "Operations & Personnel", d: "Founder stipends, community", amt: "$280K · 23%", w: "23%" },
            { n: "Platform & Infrastructure", d: "Scaling, 6-mth cloud", amt: "$110K · 9%", w: "9%" },
            { n: "Legal & Compliance", d: "Entity formation", amt: "$65K · 5%", w: "5%" },
            { n: "Contingency", d: "", amt: "$175K · 15%", w: "15%" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col border-b border-[#F0EEE9]/5 pb-3">
              <div className="flex justify-between items-center mb-3">
                <div className="flex flex-col">
                  <span className="text-[#F0EEE9] text-[13px] font-bold">{item.n}</span>
                  {item.d && <span className="text-[#F0EEE9]/55 text-[11px] mt-0.5 font-medium">{item.d}</span>}
                </div>
                <div className="text-sm font-black text-[#F0EEE9] tracking-tight whitespace-nowrap">
                  {item.amt}
                </div>
              </div>
              <div className="w-full bg-[#141414] h-1 rounded-none overflow-hidden">
                <div className="bg-[#F0EEE9] h-full" style={{ width: item.w }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center border-t border-[#F0EEE9]/20 pt-4">
          <span className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest">Total</span>
          <span className="text-sm font-black text-[#F0EEE9] tracking-tight">$1,200,000</span>
        </div>
        <div className="mt-5 border-t border-[#F0EEE9]/10 pt-5">
          <div className="text-[10px] font-bold text-[#F0EEE9] uppercase tracking-widest mb-3">What this raise funds</div>
          <p className="text-[12px] text-[#F0EEE9]/60 font-medium leading-relaxed">
            Two parallel tracks running simultaneously. LabelHead's GTM activation creates the cultural proof of concept that closes the anchor sponsor. Brazen's MVP development ensures that when the Series A conversation begins, the investor is not buying a promise about the second property — they are looking at two operational platforms, a documented competitive season, and timestamped conviction data accumulating in real time.
          </p>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col border-t lg:border-t-0 lg:border-l border-[#F0EEE9]/10 lg:pl-16 pt-8 lg:pt-0">
        <h3 className="text-[10px] font-bold text-[#F0EEE9] uppercase tracking-widest mb-6 border-b border-[#F0EEE9]/20 pb-4">Three milestones this capital achieves</h3>
        <div className="flex flex-col space-y-6 flex-1">
          <div className="flex flex-col py-4 border-b border-[#F0EEE9]/10">
            <div className="text-3xl font-black text-[#F0EEE9]/30 tracking-tighter mb-3">01</div>
            <p className="text-[13px] text-[#F0EEE9] font-medium leading-relaxed">Demo video and NLE spot in market. Ranked campaign generating organic content footprint. Brazen MVP development underway.</p>
          </div>
          <div className="flex flex-col py-4 border-b border-[#F0EEE9]/10">
            <div className="text-3xl font-black text-[#F0EEE9]/30 tracking-tighter mb-3">02</div>
            <p className="text-[13px] text-[#F0EEE9] font-medium leading-relaxed">Top 2 podcast hosts competing publicly. Selection Sunday broadcast. 500 Founding Season competitors live. Brazen MVP operational with Channel One active.</p>
          </div>
          <div className="flex flex-col py-4">
            <div className="text-3xl font-black text-[#F0EEE9] tracking-tighter mb-3">03</div>
            <p className="text-[13px] font-bold text-[#F0EEE9] leading-relaxed">Anchor sponsor closed. Prize announced. Founding Season data in hand. Series A begins with two live properties and a documented flywheel.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide15 = () => (
  <SlideLayout overline="15 / 15 — The Team" title="Two founders. Distinct, complementary, non-interchangeable.">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6 flex-1 w-full">
      <div className="flex flex-col py-6 border-t border-[#F0EEE9]/20">
        <div className="mb-6">
          <h3 className="text-4xl font-black tracking-tighter text-[#F0EEE9] mb-3">GEOFFREY</h3>
          <div className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest">CEO & Co-Founder / Architecture</div>
        </div>
        <ul className="space-y-4 text-[13px] text-[#F0EEE9] font-medium leading-relaxed">
          <li className="flex gap-3 items-start"><Dot/> Identified the $446B participation economy gap in music and built LabelHead's full scoring infrastructure before raising a dollar</li>
          <li className="flex gap-3 items-start"><Dot/> Deployed an 8-agent AI orchestration system managing VC outreach, sponsor pipeline, content publishing</li>
          <li className="flex gap-3 items-start"><Dot/> LabelHead is live and operational — scoring engine running, Founding Season infrastructure complete</li>
          <li className="flex gap-3 items-start"><Dot/> Built the Sovereign strategic framework: two properties, one flywheel</li>
        </ul>
      </div>
      <div className="flex flex-col py-6 border-t border-[#F0EEE9]/20">
        <div className="mb-6">
          <h3 className="text-4xl font-black tracking-tighter text-[#F0EEE9] mb-3 flex items-baseline gap-2">MARCUS <span className="text-xl text-[#F0EEE9]/55 font-bold tracking-tight">(BENMARC)</span></h3>
          <div className="text-[10px] font-bold text-[#F0EEE9]/55 uppercase tracking-widest">Creative Director & Co-Founder / Access</div>
        </div>
        <ul className="space-y-4 text-[13px] text-[#F0EEE9] font-medium leading-relaxed">
          <li className="flex gap-3 items-start"><Dot/> VisionBank production company — directorial credits across Universal Music Group, Interscope, Def Jam</li>
          <li className="flex gap-3 items-start"><Dot/> Credits include: Lil Wayne, Chris Brown, Nicki Minaj, Cardi B, Yo Gotti, MoneyBagg Yo, GloRilla</li>
          <li className="flex gap-3 items-start"><Dot/> Brazen's multi-channel programming slate is his domain — the access his relationships provide cannot be manufactured or purchased</li>
          <li className="flex gap-3 items-start"><Dot/> Personal relationships with Ranked CEO, NLE Choppa, and the podcast ecosystem making the Top 2 strategy immediately executable</li>
        </ul>
      </div>
    </div>
  </SlideLayout>
);

const Slide16 = () => (
  <div className="flex flex-col h-full w-full p-8 md:p-12 lg:p-24 relative overflow-hidden" style={{ background: '#0A0A0A', color: '#F0EEE9' }}>
    <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-24 lg:left-24 text-[9px] font-bold tracking-widest uppercase text-[#D4A843]">
      SOVEREIGN CO.
    </div>
    <div className="flex flex-col flex-1 items-center justify-center text-center w-full pb-16">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#F0EEE9] leading-tight max-w-6xl">
        The competition is already happening.
      </h1>
      <div className="text-sm md:text-base font-bold text-[#D4A843] uppercase tracking-widest mt-6">
        $1,200,000 Seed Round
      </div>
    </div>
    
    <div className="absolute bottom-8 md:bottom-12 lg:bottom-24 left-0 w-full flex flex-col items-center">
      <div className="w-[40px] h-[0.5px] bg-[#D4A843] opacity-30 mb-8"></div>
      <div className="text-[10px] font-medium text-[#F0EEE9]/40 tracking-widest uppercase flex items-center justify-center gap-4 whitespace-nowrap">
        <span>app.labelhead.co</span>
        <span className="text-[14px] leading-none mb-0.5">·</span>
        <span>May 2026</span>
        <span className="text-[14px] leading-none mb-0.5">·</span>
        <span>Geoffrey & Marcus</span>
      </div>
    </div>
  </div>
);

const Slide16Close = () => (
  <div className="flex h-full w-full flex-col overflow-hidden p-8 md:p-12 lg:p-20" style={{ background: '#0A0A0A', color: '#F0EEE9' }}>
    <div className="flex items-center justify-between border-b border-[#F0EEE9]/10 pb-5">
      <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4A843]">SOVEREIGN CO.</div>
      <div></div>
    </div>

    <div className="grid min-h-0 flex-1 grid-cols-[1.2fr_0.8fr] items-center gap-16">
      <div>
        <div className="mb-6 text-[10px] font-bold uppercase tracking-widest text-[#F0EEE9]/45">
          Closing Argument
        </div>
        <h1 className="max-w-5xl text-6xl font-black leading-[0.94] tracking-tighter text-[#F0EEE9] md:text-7xl lg:text-[82px]" style={{ whiteSpace: 'pre-line' }}>
          {"Sports has leagues.\nCulture has Sovereign."}
        </h1>
      </div>

      <div className="border-l border-[#F0EEE9]/10 pl-10">
        <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(240,238,233,0.30)', marginBottom: '12px' }}>
          Now Raising
        </div>
        <div style={{ fontSize: 'clamp(52px, 5.5vw, 72px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#C8A96A', fontVariantNumeric: 'tabular-nums', marginBottom: '8px' }}>
          $1.2M
        </div>
        <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(240,238,233,0.35)', letterSpacing: '0.04em', marginBottom: '40px' }}>
          Seed Round
        </div>
        <div style={{ width: '100%', height: '0.5px', background: 'rgba(240,238,233,0.10)', marginBottom: '32px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(240,238,233,0.35)' }}>soverei.gn</div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(240,238,233,0.35)' }}>labelhead.co</div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between border-t border-[#F0EEE9]/10 pt-5 text-[10px] font-bold uppercase tracking-widest text-[#F0EEE9]/40">
      <span>app.labelhead.co</span>
      <span>Geoffrey & Marcus</span>
      <span>May 2026</span>
    </div>
  </div>
);

export const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide5B, 
  Slide6Compact, Slide7, Slide8, Slide9, Slide10, 
  Slide11, Slide12, Slide13Studio, Slide14, Slide15, Slide16Close
];

export const total = 16;
