const marketItems = [
  { symbol: "BTC", price: "$118,420", change: "+2.84%", positive: true },
  { symbol: "ETH", price: "$4,218", change: "+1.62%", positive: true },
  { symbol: "SOL", price: "$196.82", change: "+4.17%", positive: true },
  { symbol: "BNB", price: "$742.14", change: "-0.38%", positive: false },
  { symbol: "XRP", price: "$2.91", change: "+3.06%", positive: true },
];

function ZellaMark() {
  return (
    <div className="zella-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img">
        <path
          d="M11 10h27L19 38H10l19-28H11Z"
          fill="currentColor"
        />
        <path
          d="M27 19h11L27 38H16l11-19Z"
          fill="currentColor"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
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

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m9 7 8 5-8 5V7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalChart() {
  return (
    <svg
      className="signal-chart"
      viewBox="0 0 420 150"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="signalFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#37d9ff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#37d9ff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="signalStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="55%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      <path
        d="M0 122 C35 119 48 101 75 106 C101 111 111 79 137 86 C165 93 171 58 201 70 C232 83 238 43 269 51 C298 58 306 29 338 38 C369 47 385 16 420 20 L420 150 L0 150 Z"
        fill="url(#signalFill)"
      />

      <path
        d="M0 122 C35 119 48 101 75 106 C101 111 111 79 137 86 C165 93 171 58 201 70 C232 83 238 43 269 51 C298 58 306 29 338 38 C369 47 385 16 420 20"
        fill="none"
        stroke="url(#signalStroke)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <div className="page-container header-inner">
          <a className="brand" href="#" aria-label="Zella home">
            <ZellaMark />

            <div className="brand-copy">
              <strong>ZELLA</strong>
              <span>MARKET INTELLIGENCE</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#intelligence">Intelligence</a>
            <a href="#markets">Markets</a>
            <a href="#copilot">Copilot</a>
            <a href="#platform">Platform</a>
          </nav>

          <div className="header-actions">
            <a className="login-link" href="/login">
              Sign in
            </a>

            <a className="header-cta" href="/dashboard">
              Launch Zella
              <ArrowIcon />
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-light hero-light-one" aria-hidden="true" />
        <div className="hero-light hero-light-two" aria-hidden="true" />

        <div className="page-container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Zella Cortex V12 is now online
            </div>

            <h1>
              The intelligence layer for
              <span className="gradient-text"> modern crypto markets.</span>
            </h1>

            <p className="hero-description">
              Research, scan, analyze and execute with one AI-powered market
              operating system built for serious crypto decisions.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="/dashboard">
                Launch Zella
                <ArrowIcon />
              </a>

              <a className="secondary-button" href="#platform">
                <span className="play-button">
                  <PlayIcon />
                </span>
                Explore the platform
              </a>
            </div>

            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true">
                <span>Z</span>
                <span>AI</span>
                <span>12</span>
              </div>

              <div>
                <strong>One unified intelligence engine</strong>
                <span>
                  Technical, on-chain, sentiment and macro analysis combined
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Zella intelligence preview">
            <div className="visual-aura" aria-hidden="true" />

            <article className="terminal-card glass-panel">
              <div className="terminal-header">
                <div>
                  <span className="terminal-kicker">ZELLA CORTEX</span>
                  <h2>Market Intelligence</h2>
                </div>

                <div className="live-status">
                  <span />
                  LIVE
                </div>
              </div>

              <div className="market-state">
                <div>
                  <span>Global market regime</span>
                  <strong>Bullish Expansion</strong>
                </div>

                <div className="confidence-ring">
                  <div>
                    <strong>86</strong>
                    <span>CONFIDENCE</span>
                  </div>
                </div>
              </div>

              <div className="chart-panel">
                <div className="chart-header">
                  <div>
                    <span>Zella Opportunity Index</span>
                    <strong>82.46</strong>
                  </div>

                  <span className="chart-change">+6.82%</span>
                </div>

                <SignalChart />

                <div className="chart-time">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>Now</span>
                </div>
              </div>

              <div className="terminal-grid">
                <article>
                  <span>Top opportunity</span>
                  <div>
                    <strong>SOL</strong>
                    <em>91%</em>
                  </div>
                </article>

                <article>
                  <span>Risk environment</span>
                  <div>
                    <strong>Controlled</strong>
                    <em>42</em>
                  </div>
                </article>

                <article>
                  <span>Active signals</span>
                  <div>
                    <strong>14</strong>
                    <em>+3</em>
                  </div>
                </article>
              </div>

              <div className="council-message">
                <div className="council-icon">
                  <ZellaMark />
                </div>

                <div>
                  <span>AI Council verdict</span>
                  <p>
                    Momentum remains constructive. Prioritize high-liquidity
                    assets with confirmed volume expansion.
                  </p>
                </div>
              </div>
            </article>

            <aside className="floating-card floating-card-top">
              <span>Opportunity detected</span>
              <div>
                <strong>BTC breakout</strong>
                <em>89%</em>
              </div>
            </aside>

            <aside className="floating-card floating-card-bottom">
              <span>24H intelligence</span>
              <div>
                <strong>7 high-conviction setups</strong>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="market-strip" aria-label="Market overview">
        <div className="market-strip-track">
          {[...marketItems, ...marketItems].map((item, index) => (
            <article className="ticker-item" key={`${item.symbol}-${index}`}>
              <strong>{item.symbol}</strong>
              <span>{item.price}</span>
              <em className={item.positive ? "positive" : "negative"}>
                {item.change}
              </em>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}