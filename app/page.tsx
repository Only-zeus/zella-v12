import Link from "next/link";

type IconProps = {
  size?: number;
  className?: string;
};

type Capability = {
  title: string;
  description: string;
  label: string;
  icon: React.ReactNode;
};

type ResearchMetric = {
  label: string;
  value: string;
};

type StrategyStage = {
  number: string;
  title: string;
  description: string;
};

function ZellaLogo({ size = 38, className = "" }: IconProps) {
  return (
    <span
      className={`brand-symbol ${className}`}
      style={{
        width: size,
        height: size,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48">
        <defs>
          <linearGradient
            id="zella-logo-gradient"
            x1="7"
            y1="7"
            x2="41"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#66A3FF" />
            <stop offset="0.48" stopColor="#24D9FF" />
            <stop offset="1" stopColor="#A66BFF" />
          </linearGradient>
        </defs>

        <path
          d="M13.25 8.5H39L26.9 23.25H37.5L17.4 40H8.5L21.15 24.8H10.5L25.4 8.5H13.25Z"
          fill="url(#zella-logo-gradient)"
        />
      </svg>
    </span>
  );
}

function ArrowUpRightIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 7h14M5 12h14M5 17h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrainIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M9.5 5.2A3.3 3.3 0 0 0 4 7.7c0 .7.2 1.3.6 1.9A3.6 3.6 0 0 0 6.4 16c.1 1.8 1.6 3.2 3.4 3.2.9 0 1.7-.3 2.2-.9V5.8a3.3 3.3 0 0 0-2.5-.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.5 5.2A3.3 3.3 0 0 1 20 7.7c0 .7-.2 1.3-.6 1.9a3.6 3.6 0 0 1-1.8 6.4 3.3 3.3 0 0 1-3.4 3.2c-.9 0-1.7-.3-2.2-.9V5.8a3.3 3.3 0 0 1 2.5-.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7.6 9.2c1.5 0 2.4.8 2.4 2M16.4 9.2c-1.5 0-2.4.8-2.4 2M7.8 15c1.2 0 2 .6 2.2 1.6M16.2 15c-1.2 0-2 .6-2.2 1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResearchIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 20V9M10 20V4M15 20v-7M20 20V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="m4 7 5-4 5 7 6-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StrategyIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="6"
        cy="6"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="18"
        cy="7"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="12"
        cy="18"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="m7.8 7.3 2.9 8.5M16.1 8.7l-2.8 7.1M8.2 6.2h7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 3 20 6v5.8c0 4.6-3.2 7.8-8 9.2-4.8-1.4-8-4.6-8-9.2V6l8-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="m8.7 12 2.1 2.1 4.7-4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScannerIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="12"
        r="3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function PortfolioIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="7"
        width="17"
        height="12"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M8 7V5.7A1.7 1.7 0 0 1 9.7 4h4.6A1.7 1.7 0 0 1 16 5.7V7M3.5 12h17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M10 12v2h4v-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M3.4 9h17.2M3.4 15h17.2M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3c-2.2 2.4-3.3 5.4-3.3 9S9.8 18.6 12 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LockIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 10V7.5a4 4 0 0 1 8 0V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MarketWave() {
  return (
    <svg
      className="market-wave"
      viewBox="0 0 700 260"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="market-wave-stroke"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#4F8CFF" />
          <stop offset="46%" stopColor="#24D9FF" />
          <stop offset="100%" stopColor="#A66BFF" />
        </linearGradient>

        <linearGradient
          id="market-wave-fill"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#24D9FF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#24D9FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 217 C42 205 61 220 92 197 C126 171 144 196 176 168 C204 143 230 164 263 130 C294 98 314 135 348 104 C383 72 405 115 440 85 C471 58 502 81 530 48 C562 12 591 61 620 35 C649 10 668 26 700 8 L700 260 L0 260 Z"
        fill="url(#market-wave-fill)"
      />

      <path
        d="M0 217 C42 205 61 220 92 197 C126 171 144 196 176 168 C204 143 230 164 263 130 C294 98 314 135 348 104 C383 72 405 115 440 85 C471 58 502 81 530 48 C562 12 591 61 620 35 C649 10 668 26 700 8"
        fill="none"
        stroke="url(#market-wave-stroke)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const capabilities: Capability[] = [
  {
    title: "AI Copilot",
    description:
      "A contextual market assistant grounded in verified Zella data, portfolio context and institutional research.",
    label: "Human-like intelligence",
    icon: <BrainIcon />,
  },
  {
    title: "Institutional Research",
    description:
      "Deep project research across fundamentals, tokenomics, liquidity, regulation, adoption and market structure.",
    label: "Investment-grade analysis",
    icon: <ResearchIcon />,
  },
  {
    title: "Adaptive Strategies",
    description:
      "Detect changing market regimes and select the most compatible trading approach without unstable strategy flipping.",
    label: "Scenario-aware",
    icon: <StrategyIcon />,
  },
  {
    title: "Risk Intelligence",
    description:
      "Position sizing, exposure controls, execution checks and capital-protection rules before any trade reaches an exchange.",
    label: "Built for protection",
    icon: <ShieldIcon />,
  },
  {
    title: "Opportunity Scanner",
    description:
      "Rank assets using momentum, liquidity, structure, risk, catalysts and Zella’s multi-layered scoring framework.",
    label: "Market-wide discovery",
    icon: <ScannerIcon />,
  },
  {
    title: "Portfolio Intelligence",
    description:
      "Understand concentration, performance, drawdown, correlation and portfolio-level opportunities from one interface.",
    label: "Unified portfolio view",
    icon: <PortfolioIcon />,
  },
];

const researchMetrics: ResearchMetric[] = [
  {
    label: "Fundamentals",
    value: "Project quality",
  },
  {
    label: "Market structure",
    value: "Liquidity depth",
  },
  {
    label: "On-chain",
    value: "Network behaviour",
  },
  {
    label: "Tokenomics",
    value: "Supply pressure",
  },
  {
    label: "Macro",
    value: "Capital environment",
  },
  {
    label: "Regulation",
    value: "Jurisdiction risk",
  },
];

const strategyStages: StrategyStage[] = [
  {
    number: "01",
    title: "Detect the environment",
    description:
      "Zella identifies trend, range, volatility, liquidity, derivatives positioning and broader risk conditions.",
  },
  {
    number: "02",
    title: "Score compatible approaches",
    description:
      "Every approved strategy is checked against the active regime, timeframe, liquidity and risk constraints.",
  },
  {
    number: "03",
    title: "Select the strongest fit",
    description:
      "Zella chooses the highest-quality approach only when its confirmations and safety conditions are satisfied.",
  },
  {
    number: "04",
    title: "Re-evaluate continuously",
    description:
      "Meaningful regime changes can trigger protection, reduced exposure or a controlled strategy transition.",
  },
];

export default function HomePage() {
  return (
    <main className="zella-page landing-page">
      <header className="landing-header safe-top">
        <div className="page-shell landing-header-inner">
          <Link href="/" className="landing-brand" aria-label="Zella home">
            <ZellaLogo />

            <span className="landing-brand-copy">
              <strong>ZELLA</strong>
              <small>INTELLIGENCE SYSTEM</small>
            </span>
          </Link>

          <nav className="landing-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#research">Research</a>
            <a href="#adaptive">Adaptive AI</a>
            <a href="#security">Security</a>
          </nav>

          <div className="landing-header-actions">
            <Link href="/login" className="landing-sign-in">
              Sign in
            </Link>

            <Link
              href="/dashboard"
              className="zella-button zella-button-primary landing-launch"
            >
              Launch Zella
              <ArrowUpRightIcon size={17} />
            </Link>

            <button
              className="landing-menu-button"
              type="button"
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <section className="landing-hero">
        <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
        <div className="hero-ambient hero-ambient-two" aria-hidden="true" />

        <div className="page-shell landing-hero-grid">
          <div className="landing-hero-copy fade-up">
            <div className="hero-status status-pill status-pill-positive">
              <span className="live-dot" />
              Zella Cortex V12
              <span className="hero-status-divider" />
              New architecture
            </div>

            <h1 className="page-title landing-title">
              Market intelligence that
              <span className="gradient-text">
                {" "}
                adapts before you act.
              </span>
            </h1>

            <p className="landing-hero-description">
              Zella combines real-time market infrastructure, institutional
              research, adaptive strategy selection and a human-like AI
              Copilot in one unified crypto intelligence platform.
            </p>

            <div className="landing-hero-actions">
              <Link
                href="/dashboard"
                className="zella-button zella-button-primary hero-primary-action"
              >
                Enter Zella
                <ArrowRightIcon />
              </Link>

              <a
                href="#platform"
                className="zella-button zella-button-secondary"
              >
                Explore the system
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="hero-trust-icon">
                <LockIcon />
              </div>

              <div>
                <strong>Intelligence grounded in real data</strong>
                <span>
                  No generated prices. No direct AI execution. Every decision
                  passes through Zella Core.
                </span>
              </div>
            </div>
          </div>

          <div className="landing-terminal-wrap fade-up">
            <div className="terminal-aura" aria-hidden="true" />

            <article className="landing-terminal glass-panel-strong">
              <div className="terminal-topbar">
                <div className="terminal-title-group">
                  <ZellaLogo size={36} />

                  <div>
                    <span>ZELLA CORTEX</span>
                    <strong>Intelligence Command</strong>
                  </div>
                </div>

                <div className="status-pill">
                  <span className="live-dot" />
                  Preview
                </div>
              </div>

              <div className="terminal-regime">
                <div>
                  <span>Adaptive market engine</span>
                  <h2>Waiting for live Zella Core</h2>
                  <p>
                    This interface will activate when the V12 market endpoint
                    is connected.
                  </p>
                </div>

                <div className="terminal-core-visual" aria-hidden="true">
                  <span className="core-orbit core-orbit-one" />
                  <span className="core-orbit core-orbit-two" />

                  <div className="core-center">
                    <ZellaLogo size={42} />
                  </div>
                </div>
              </div>

              <div className="terminal-chart">
                <div className="terminal-chart-heading">
                  <div>
                    <span>Market intelligence stream</span>
                    <strong>Verified data only</strong>
                  </div>

                  <span className="terminal-data-label">
                    Backend connection pending
                  </span>
                </div>

                <MarketWave />

                <div className="terminal-chart-axis" aria-hidden="true">
                  <span>Market</span>
                  <span>Liquidity</span>
                  <span>Momentum</span>
                  <span>Risk</span>
                  <span>Strategy</span>
                </div>
              </div>

              <div className="terminal-cards">
                <article>
                  <span>Market regime</span>
                  <strong>Connecting</strong>
                  <small>Scenario engine</small>
                </article>

                <article>
                  <span>Best approach</span>
                  <strong>Evaluating</strong>
                  <small>Strategy selector</small>
                </article>

                <article>
                  <span>Risk state</span>
                  <strong>Protected</strong>
                  <small>Execution locked</small>
                </article>
              </div>

              <div className="terminal-council">
                <div className="terminal-council-icon">
                  <BrainIcon size={20} />
                </div>

                <div>
                  <span>AI Council</span>
                  <p>
                    Zella&apos;s AI will explain verified engine outputs. It
                    will not invent market values or bypass deterministic risk
                    controls.
                  </p>
                </div>
              </div>
            </article>

            <aside className="terminal-floating-card floating-research">
              <ResearchIcon size={18} />

              <div>
                <span>Institutional layer</span>
                <strong>Research active</strong>
              </div>
            </aside>

            <aside className="terminal-floating-card floating-strategy">
              <StrategyIcon size={18} />

              <div>
                <span>Strategy control</span>
                <strong>Adaptive mode</strong>
              </div>
            </aside>
          </div>
        </div>

        <div className="hero-system-strip">
          <div className="hero-system-track">
            <span>Market Intelligence</span>
            <i />
            <span>Institutional Research</span>
            <i />
            <span>Adaptive Strategies</span>
            <i />
            <span>AI Council</span>
            <i />
            <span>Portfolio Risk</span>
            <i />
            <span>Execution Protection</span>
            <i />
            <span>Market Intelligence</span>
            <i />
            <span>Institutional Research</span>
            <i />
            <span>Adaptive Strategies</span>
            <i />
            <span>AI Council</span>
            <i />
            <span>Portfolio Risk</span>
            <i />
            <span>Execution Protection</span>
          </div>
        </div>
      </section>

      <section className="section-space landing-platform" id="platform">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="small-label">ONE INTELLIGENCE SYSTEM</span>

              <h2 className="section-title">
                More than a collection of trading tools.
              </h2>
            </div>

            <p>
              Every Zella module will operate from the same market,
              intelligence and risk foundation instead of functioning as an
              isolated feature.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article
                className="capability-card zella-card interactive-card"
                key={capability.title}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="capability-card-top">
                  <span className="capability-icon">{capability.icon}</span>
                  <span className="capability-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="capability-label">{capability.label}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>

                <span className="capability-link">
                  Explore module
                  <ArrowUpRightIcon size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-space institutional-section"
        id="research"
      >
        <div className="page-shell institutional-layout">
          <div className="institutional-copy">
            <span className="small-label">ZELLA&apos;S HIDDEN GEM</span>

            <h2 className="section-title">
              Institutional research,
              <span className="gradient-text"> built into the product.</span>
            </h2>

            <p>
              Zella will examine whether an asset deserves capital, not only
              whether its chart looks attractive. Research will combine
              fundamentals, liquidity, token structure, adoption, on-chain
              behaviour, macro conditions and regulatory risk.
            </p>

            <div className="institutional-actions">
              <Link
                href="/research"
                className="zella-button zella-button-gradient"
              >
                Explore research
                <ArrowRightIcon />
              </Link>

              <span className="institutional-note">
                Reports will use verified sources and clearly identify missing
                data.
              </span>
            </div>
          </div>

          <article className="research-preview glass-panel-strong">
            <div className="research-preview-head">
              <div>
                <span>INSTITUTIONAL RESEARCH ENGINE</span>
                <h3>Asset intelligence framework</h3>
              </div>

              <div className="research-grade">ZIRE</div>
            </div>

            <div className="research-orbit">
              <span className="research-orbit-ring ring-one" />
              <span className="research-orbit-ring ring-two" />
              <span className="research-orbit-ring ring-three" />

              <div className="research-orbit-core">
                <ZellaLogo size={52} />
                <strong>Research</strong>
                <span>Multi-layered</span>
              </div>

              <span className="orbit-node node-one">Risk</span>
              <span className="orbit-node node-two">Macro</span>
              <span className="orbit-node node-three">Liquidity</span>
              <span className="orbit-node node-four">On-chain</span>
            </div>

            <div className="research-metric-grid">
              {researchMetrics.map((metric) => (
                <article key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>

            <div className="research-verdict">
              <ShieldIcon size={20} />

              <div>
                <span>Investment committee output</span>
                <p>
                  Bull, base, bear and black-swan scenarios will be presented
                  separately instead of disguising uncertainty as one target.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-space adaptive-section" id="adaptive">
        <div className="page-shell">
          <div className="adaptive-heading">
            <span className="small-label">ADAPTIVE MARKET APPROACH</span>

            <h2 className="section-title">
              The strategy changes when
              <span className="gradient-text"> the market changes.</span>
            </h2>

            <p>
              Zella will not force trend-following, scalping, breakout or
              mean-reversion logic into every environment. It will detect the
              active scenario and score only compatible approaches.
            </p>
          </div>

          <div className="strategy-flow">
            {strategyStages.map((stage, index) => (
              <article className="strategy-stage" key={stage.number}>
                <div className="strategy-stage-number">{stage.number}</div>

                <div className="strategy-stage-copy">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>

                {index < strategyStages.length - 1 ? (
                  <div className="strategy-connector" aria-hidden="true">
                    <span />
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <article className="adaptive-control-panel glass-panel">
            <div className="adaptive-control-left">
              <div className="adaptive-control-icon">
                <StrategyIcon size={25} />
              </div>

              <div>
                <span>Adaptive strategy protection</span>
                <h3>Controlled switching, not constant switching.</h3>
              </div>
            </div>

            <div className="adaptive-rules">
              <span>Regime persistence</span>
              <span>Confidence threshold</span>
              <span>Switch margin</span>
              <span>Risk approval</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section-space security-section" id="security">
        <div className="page-shell security-layout">
          <article className="security-card zella-card">
            <div className="security-card-icon">
              <ShieldIcon size={27} />
            </div>

            <span className="small-label">DETERMINISTIC SAFETY</span>

            <h2>AI suggests. Zella Core validates.</h2>

            <p>
              OpenAI will power explanations, research synthesis and the
              Copilot experience. Trade validation, position limits, exposure
              checks and execution permissions will remain deterministic.
            </p>

            <div className="security-checks">
              <span>
                <i />
                Private server-side AI key
              </span>

              <span>
                <i />
                No secret keys in frontend code
              </span>

              <span>
                <i />
                Risk engine before execution
              </span>

              <span>
                <i />
                Emergency kill-switch support
              </span>
            </div>
          </article>

          <article className="security-architecture glass-panel-strong">
            <div className="architecture-layer">
              <span>01</span>

              <div>
                <strong>Zella Interface</strong>
                <small>React and Next.js application</small>
              </div>
            </div>

            <div className="architecture-path">
              <span />
              <span />
              <span />
            </div>

            <div className="architecture-layer featured-layer">
              <span>02</span>

              <div>
                <strong>Zella Core V12</strong>
                <small>Market, strategy, research and risk engines</small>
              </div>
            </div>

            <div className="architecture-path">
              <span />
              <span />
              <span />
            </div>

            <div className="architecture-layer">
              <span>03</span>

              <div>
                <strong>OpenAI Intelligence</strong>
                <small>Reasoning and natural-language interaction</small>
              </div>
            </div>

            <div className="architecture-path">
              <span />
              <span />
              <span />
            </div>

            <div className="architecture-layer">
              <span>04</span>

              <div>
                <strong>Protected Execution</strong>
                <small>Risk-approved exchange operations</small>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="landing-cta">
        <div className="page-shell">
          <article className="landing-cta-panel glass-panel-strong">
            <div className="cta-light cta-light-one" aria-hidden="true" />
            <div className="cta-light cta-light-two" aria-hidden="true" />

            <div className="landing-cta-brand">
              <ZellaLogo size={50} />

              <span>
                <strong>ZELLA V12</strong>
                <small>THE INTELLIGENCE LAYER FOR CRYPTO</small>
              </span>
            </div>

            <h2>
              One system. Every market scenario.
              <span className="gradient-text"> Better decisions.</span>
            </h2>

            <p>
              Enter the next generation of Zella and experience adaptive
              intelligence, institutional research and protected AI-assisted
              trading from one platform.
            </p>

            <div className="landing-cta-actions">
              <Link
                href="/dashboard"
                className="zella-button zella-button-primary"
              >
                Launch Zella
                <ArrowUpRightIcon />
              </Link>

              <Link
                href="/login"
                className="zella-button zella-button-secondary"
              >
                Sign in
              </Link>
            </div>
          </article>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="page-shell landing-footer-inner">
          <Link href="/" className="landing-brand">
            <ZellaLogo size={34} />

            <span className="landing-brand-copy">
              <strong>ZELLA</strong>
              <small>INTELLIGENCE SYSTEM</small>
            </span>
          </Link>

          <p>
            AI-assisted market intelligence. Not financial advice. Trading
            involves risk.
          </p>

          <div className="footer-links">
            <a href="#platform">Platform</a>
            <a href="#research">Research</a>
            <a href="#security">Security</a>
          </div>
        </div>
      </footer>
    </main>
  );
}