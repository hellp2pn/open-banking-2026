import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Modern Minimalist with Data Visualization
 * - Primary: Deep slate blue (#1E3A5F)
 * - Accent: Vibrant teal (#00A8A8)
 * - Gold accent: #D4A574
 * - Typography: Poppins (display), Inter (body)
 * - Layout: Asymmetric grid with alternating content blocks
 * - Interactions: Smooth scroll-triggered animations, expandable sections
 */

export default function Home() {
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OB</span>
            </div>
            <span className="font-bold text-primary text-lg hidden sm:inline">
              Open Banking 2026
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#api-economy" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:inline">
              API Economy
            </a>
            <a href="#strategies" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:inline">
              Strategies
            </a>
            <a href="#risk" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:inline">
              Risk Management
            </a>
            <a href="#playbook" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:inline">
              Playbook
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/images/hero-ecosystem.png"
            alt="Ecosystem"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                Comprehensive Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Mastering Open Banking in 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A practical guide to go-to-market strategy for incumbent banks and new open banking startups. Everything you need to thrive in the connected financial ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/hero-ecosystem.png"
                alt="Open Banking Ecosystem"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API Economy Section */}
      <section id="api-economy" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/api-architecture.png"
                alt="API Architecture"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                The API Economy: From Siloed to Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Banks have long operated as siloed service providers, controlling the full customer journey. The API economy transforms this model, enabling financial institutions to become ecosystem enablers rather than isolated providers.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">API-First Mindset</h3>
                    <p className="text-muted-foreground">Embed APIs into organizational DNA as strategic assets, not technical afterthoughts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Robust Tech Foundation</h3>
                    <p className="text-muted-foreground">Modern API management, microservices architecture, and comprehensive API catalogs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Governance for Scale</h3>
                    <p className="text-muted-foreground">Central API team enforcement with business unit adoption and agile practices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Ecosystem Activation</h3>
                    <p className="text-muted-foreground">Developer portals, sandboxes, hackathons, and streamlined fintech onboarding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Key Benefits of API-First Strategy</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-accent">↑</div>
                <h4 className="font-semibold text-primary">New Revenue Streams</h4>
                <p className="text-muted-foreground">Generate revenue through partnerships and data insights from ecosystem collaborations.</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-accent">🔗</div>
                <h4 className="font-semibold text-primary">Ecosystem Orchestration</h4>
                <p className="text-muted-foreground">Position your institution as the central hub in a broader financial ecosystem.</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-accent">⚡</div>
                <h4 className="font-semibold text-primary">Accelerated Innovation</h4>
                <p className="text-muted-foreground">Enable third-party providers to build embedded finance and faster payment solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incumbent Strategies Section */}
      <section id="strategies" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Strategic Imperatives for Incumbent Banks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Incumbent banks face both threats and unprecedented opportunities. Success requires strategic role selection and disciplined execution across technology, culture, and ecosystem dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Threats to Address</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border">
                  <h4 className="font-semibold text-primary mb-2">Disintermediation Risk</h4>
                  <p className="text-sm text-muted-foreground">Third-party aggregators capture customer relationships, eroding direct engagement and revenue.</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <h4 className="font-semibold text-primary mb-2">Margin Compression</h4>
                  <p className="text-sm text-muted-foreground">Price transparency enables customers to easily compare and switch providers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Legacy System Stagnation</h4>
                  <p className="text-sm text-muted-foreground">Outdated infrastructure limits agility and responsiveness to market changes.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Opportunities to Capture</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border">
                  <h4 className="font-semibold text-primary mb-2">Ecosystem Partnerships</h4>
                  <p className="text-sm text-muted-foreground">Co-create value with fintechs and third parties to unlock new revenue streams.</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <h4 className="font-semibold text-primary mb-2">Hyper-Personalization</h4>
                  <p className="text-sm text-muted-foreground">Leverage shared data with AI to deliver tailored experiences that build loyalty.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Marketplace Orchestration</h4>
                  <p className="text-sm text-muted-foreground">Curate and brand third-party solutions to redefine customer journeys.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Choose Your Strategic Role</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  id: "full-service",
                  title: "Full-Service Provider",
                  description: "Maintain proprietary offerings with limited third-party integrations, focusing on internal strengths.",
                  best: "Banks with strong brand and differentiated services"
                },
                {
                  id: "utility",
                  title: "Utility",
                  description: "Provide core banking APIs to power fintech innovations, earning steady fees from infrastructure services.",
                  best: "Banks with robust legacy systems and technical capabilities"
                },
                {
                  id: "supplier",
                  title: "Supplier",
                  description: "Distribute products through third-party apps to broaden market reach and accessibility.",
                  best: "Banks seeking rapid market expansion"
                },
                {
                  id: "interface",
                  title: "Interface/Aggregator",
                  description: "Curate and brand the best third-party solutions, transforming into a fee-generating marketplace.",
                  best: "Banks with strong customer relationships"
                }
              ].map((role) => (
                <div
                  key={role.id}
                  className="border border-border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md hover:border-accent"
                  onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                >
                  <h4 className="font-semibold text-primary mb-2">{role.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                  <p className="text-xs bg-accent/10 text-accent px-2 py-1 rounded inline-block">
                    Best for: {role.best}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                The Incumbent Transformation Roadmap
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Success requires a disciplined approach across four critical dimensions. Think of it as entering a new market—you must adapt to the ecosystem's norms and operating principles.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Technology</h4>
                    <p className="text-muted-foreground text-sm">Integrate internal and Open Banking data with AI for real-time, hyper-personalized offers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Culture</h4>
                    <p className="text-muted-foreground text-sm">Implement agile pods and "fail fast" governance to accelerate product development.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Ecosystem</h4>
                    <p className="text-muted-foreground text-sm">Streamline fintech onboarding via standard APIs and flexible revenue-sharing models.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Measurement</h4>
                    <p className="text-muted-foreground text-sm">Track ecosystem revenue, API adoption rates, and customer retention continuously.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/transformation-journey.png"
                alt="Transformation Journey"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section id="risk" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Balancing Innovation and Risk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Open Banking introduces new risks that must be managed through comprehensive frameworks, robust controls, and cultural shifts toward accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/risk-management-framework.png"
                alt="Risk Management Framework"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              {[
                {
                  id: "disintermediation",
                  title: "Disintermediation Risk",
                  description: "TPPs erode banks' direct customer relationships, leading to loss of control and revenue.",
                  mitigation: "Forge partnerships and marketplaces to retain ecosystem centrality."
                },
                {
                  id: "technology",
                  title: "Internal Technology Risk",
                  description: "Legacy systems and API dependencies increase outages, scalability issues, and integration failures.",
                  mitigation: "Adopt microservices, API-first architectures, and resilience testing."
                },
                {
                  id: "economic",
                  title: "Economic Risk",
                  description: "Market volatility from new entrants and innovations could strain profitability and capital.",
                  mitigation: "Diversify revenue via premium APIs and ecosystem fees; stress-test models."
                },
                {
                  id: "legal",
                  title: "Internal Legal Risk",
                  description: "Compliance gaps in cross-border data sharing and evolving regulations lead to fines and reputational harm.",
                  mitigation: "Implement agile governance and regular audits aligned with 2026 updates."
                },
                {
                  id: "security",
                  title: "Security Management Risk",
                  description: "Heightened cyber threats, data breaches, and fraud from open APIs and third-party access.",
                  mitigation: "Deploy AI-driven monitoring, encryption, and zero-trust models."
                }
              ].map((risk) => (
                <div
                  key={risk.id}
                  className="border border-border rounded-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedRisk(expandedRisk === risk.id ? null : risk.id)}
                    className="w-full p-4 bg-card hover:bg-secondary transition-colors text-left flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-semibold text-primary">{risk.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{risk.description}</p>
                    </div>
                    <div className="text-accent ml-4 flex-shrink-0">
                      {expandedRisk === risk.id ? "−" : "+"}
                    </div>
                  </button>
                  {expandedRisk === risk.id && (
                    <div className="px-4 py-3 bg-accent/5 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Mitigation:</strong> {risk.mitigation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Risk Management Framework</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">Preventative Controls</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Access controls and authentication mechanisms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Encryption and data protection protocols</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>API rate limiting and traffic management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Compliance governance and audit trails</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-4">Detective Controls</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Real-time anomaly detection and monitoring</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>AI-driven fraud detection systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Continuous compliance monitoring</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Ecosystem performance tracking and alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go-to-Market Playbook */}
      <section id="playbook" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Go-to-Market Playbook</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Different market entry strategies for incumbents and startups. Both must treat Open Banking as a paradigm shift requiring adaptation and transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">For Incumbent Banks</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Recognize the Market Analogy
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">View Open Banking as a new economic landscape with distinct "cultural" norms around collaborative data sharing and platform thinking.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Address Transition Challenges
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">Invest in modular architectures, API-first designs, and agile processes to enable secure integrations and reduce operational silos.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Lead Essential Transformations
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">Evolve into customer-centric institutions by adopting roles as aggregators, producers, or orchestrators, leveraging AI for hyper-personalization.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Measure and Iterate
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">Continuously track ecosystem revenue growth, API adoption rates, and customer retention, adjusting strategies based on performance.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">For Fintech Startups</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Identify Logical Entry Points
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">Target underserved segments via data aggregators, platform models, or niche services like embedded finance, using open APIs to access incumbent data.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Champion Innovation and Differentiation
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">Develop unique propositions like AI-driven credit scoring or personalized financial tools that incumbents' legacy systems can't match.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Build Partnerships and Innovate
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">Form alliances with incumbents for distribution and trust, co-creating solutions like instant payments or fraud tools while navigating regulatory compliance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Measure and Iterate
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">Evaluate entry success through user acquisition, innovation ROI, and partnership growth, iterating based on consumer feedback and competitive benchmarks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-8">
            <img
              src="/images/market-entry-strategies.png"
              alt="Market Entry Strategies"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12">Ecosystem-Focused Success Metrics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Financial Performance</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Revenue and gross profit from ecosystem activities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>API usage revenue and return on assets (ROA)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Customer acquisition cost (CAC) and cash flow metrics</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Ecosystem Engagement</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Number of third-party partners and growth rate</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Data exchange volumes and API traffic patterns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Developer integrations and adoption velocity</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Customer-Centric Metrics</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Percentage of customers using third-party solutions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>New product sales from ecosystem collaborations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Customer retention and satisfaction scores</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Comparative Value</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Ecosystem business value vs. total expenses</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Cost efficiency of API design and partner management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>ROI on collaborative innovation initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Transformation is Mandatory</h4>
                  <p className="text-sm text-white/80">Open Banking is not optional—it's the foundation for sustained growth and competitive relevance in 2026 and beyond.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ecosystem Thinking is Essential</h4>
                  <p className="text-sm text-white/80">Success requires collaborative, platform-based approaches where value is co-created across multiple players.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Risk Management Enables Innovation</h4>
                  <p className="text-sm text-white/80">Robust frameworks, controls, and cultural shifts allow institutions to innovate confidently without compromising stability.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Customer-Centricity Drives Loyalty</h4>
                  <p className="text-sm text-white/80">Hyper-personalization and seamless experiences built on shared data create sustainable competitive advantages.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Continuous Measurement is Critical</h4>
                  <p className="text-sm text-white/80">Data-driven iteration based on ecosystem metrics ensures strategies remain aligned with market realities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Partnerships Accelerate Success</h4>
                  <p className="text-sm text-white/80">Collaboration with fintechs and third parties is essential for both incumbents and startups to thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Master Open Banking?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use this guide as your strategic roadmap. Whether you're an incumbent bank or a fintech startup, the principles and frameworks here will guide your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
              <Download className="w-4 h-4" /> Download Full Guide
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 gap-2">
              Share This Guide <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <p className="text-sm text-white/80">Comprehensive guide to Open Banking strategies for 2026, created for banking professionals, fintech experts, and entrepreneurs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#api-economy" className="hover:text-white transition-colors">API Economy</a></li>
                <li><a href="#strategies" className="hover:text-white transition-colors">Strategies</a></li>
                <li><a href="#risk" className="hover:text-white transition-colors">Risk Management</a></li>
                <li><a href="#playbook" className="hover:text-white transition-colors">Playbook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Download PDF</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>&copy; 2026 Mastering Open Banking. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
