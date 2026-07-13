export default function HomePage() {
  return (
    <main className="foundation-page">
      <div className="page-container foundation-container">
        <div className="foundation-brand">
          <div className="foundation-logo">
            <span>Z</span>
          </div>

          <div>
            <p className="foundation-label">ZELLA V12</p>
            <h1>
              Intelligence built for
              <span className="gradient-text"> modern markets.</span>
            </h1>
          </div>
        </div>

        <section className="glass-panel foundation-card">
          <div className="foundation-status">
            <span className="foundation-status-dot" />
            <span>System foundation active</span>
          </div>

          <p>
            Zella&apos;s new premium interface is ready for the navigation,
            market intelligence, AI Copilot and trading experience.
          </p>

          <div className="foundation-metrics">
            <article>
              <span>Interface</span>
              <strong>V12</strong>
            </article>

            <article>
              <span>Architecture</span>
              <strong>Next.js</strong>
            </article>

            <article>
              <span>Status</span>
              <strong className="positive">Online</strong>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}