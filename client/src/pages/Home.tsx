import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Mail, BookOpen, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Modern Minimalist with Data Visualization
 * - Primary: Deep slate blue (#1E3A5F)
 * - Accent: Vibrant teal (#00A8A8)
 * - Focus: Beginner-friendly content with clear "Learn More" CTAs
 * - Navigation: All menu items functional with actual content sections
 * - CTA: Substack subscription integrated throughout
 */

export default function Home() {
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`https://substack.com/@prksh`, "_blank");
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const sourceArticles = {
    definition: "https://prksh.substack.com/p/how-open-banking-disrupts-traditional",
    apiEconomy: "https://substack.com/@prksh/p-181972333",
    whyMatters: "https://substack.com/home/post/p-182937512",
    riskManagement: "https://prksh.substack.com/p/balancing-innovation-and-risk-in",
    goToMarket: "https://prksh.substack.com/p/launch-your-open-banking-go-to-strategies"
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OB</span>
              </div>
              <span className="font-bold text-primary text-lg">Open Banking 2026</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 text-sm">
            <a href="#definition" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              What is Open Banking?
            </a>
            <a href="#api-economy" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              API Economy
            </a>
            <a href="#why-matters" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Why It Matters
            </a>
            <a href="#risk" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Risk Management
            </a>
            <a href="#strategies" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Go-to-Market
            </a>
            <a href="#subscribe" className="text-accent hover:text-accent/80 transition-colors font-bold">
              Subscribe
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-card">
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
                For Beginners
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Mastering Open Banking in 2026
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A practical beginner's guide from definition to go-to-market strategy. Everything banking professionals, fintech experts, and entrepreneurs need to understand Open Banking—for free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#definition">
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2 w-full sm:w-auto">
                    Start Learning <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href={sourceArticles.definition} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 gap-2 w-full sm:w-auto">
                    <BookOpen className="w-4 h-4" /> Read Full Articles
                  </Button>
                </a>
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

      {/* Definition Section */}
      <section id="definition" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">What is Open Banking?</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Simple Definition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Open Banking is a system where banks share customer financial data securely with third-party companies through APIs (Application Programming Interfaces). Think of it as giving permission for apps to access your bank information so they can provide better services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-border p-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Why It Matters
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Creates innovation in financial services</li>
                    <li>• Enables better, personalized services</li>
                    <li>• Increases competition and choice</li>
                    <li>• Improves financial inclusion</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-border p-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Key Players
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Traditional banks</li>
                    <li>• Fintech startups</li>
                    <li>• Regulators (PSD2, CFPB)</li>
                    <li>• Customers & businesses</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/5 rounded-lg border border-accent/20 p-6">
                <h4 className="font-semibold text-primary mb-2">Global Context</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Open Banking is mandated in different regions through regulations:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Europe:</strong> PSD2 (Payment Services Directive 2)</li>
                  <li><strong>United States:</strong> CFPB Personal Finance Data Right Rule</li>
                  <li><strong>Middle East:</strong> UAE and Saudi Arabia frameworks</li>
                  <li><strong>Emerging Markets:</strong> Brazil, Mexico, and others</li>
                </ul>
              </div>
            </div>

            <a href={sourceArticles.definition} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 gap-2">
                <BookOpen className="w-4 h-4" /> Read the Full Article on Substack
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* API Economy Section */}
      <section id="api-economy" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">The API Economy: How Banks Transform</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">What are APIs?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  APIs are like connectors that let different apps and systems talk to each other. In banking, APIs allow your bank's systems to securely share data with fintech apps, payment services, and other financial tools—without exposing sensitive information.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">From Siloed Banks to Ecosystem Enablers</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Before:</strong> Banks operated independently, controlling everything from accounts to lending to wealth management.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Now:</strong> Banks become platforms that enable third-party companies to build services on top of their data and capabilities.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Four Pillars of API-First Strategy</h3>
                <div className="space-y-3">
                  {[
                    { num: "1", title: "API-First Mindset", desc: "Treat APIs as strategic assets, not just technical tools" },
                    { num: "2", title: "Robust Tech Foundation", desc: "Modern API management, microservices, and comprehensive catalogs" },
                    { num: "3", title: "Governance for Scale", desc: "Central team enforcement with business unit adoption" },
                    { num: "4", title: "Ecosystem Activation", desc: "Developer portals, sandboxes, and fintech partnerships" }
                  ].map((pillar) => (
                    <div key={pillar.num} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {pillar.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm">{pillar.title}</h4>
                        <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href={sourceArticles.apiEconomy} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 gap-2">
                <BookOpen className="w-4 h-4" /> Read the Full Article on Substack
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why-matters" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Should Banks Care?</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    Threats to Address
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Disintermediation</h4>
                      <p className="text-xs text-muted-foreground">Losing direct customer relationships to aggregators</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Margin Compression</h4>
                      <p className="text-xs text-muted-foreground">Price transparency makes it easy for customers to switch</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Legacy System Stagnation</h4>
                      <p className="text-xs text-muted-foreground">Can't compete with agile fintech companies</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Opportunities to Capture
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-primary">New Revenue Streams</h4>
                      <p className="text-xs text-muted-foreground">Partnerships and ecosystem fees</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Hyper-Personalization</h4>
                      <p className="text-xs text-muted-foreground">AI-powered tailored experiences</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Marketplace Orchestration</h4>
                      <p className="text-xs text-muted-foreground">Curate and brand third-party solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Four Strategic Roles for Banks</h3>
                <div className="space-y-3">
                  {[
                    { role: "Full-Service Provider", desc: "Maintain proprietary offerings with limited third-party integrations" },
                    { role: "Utility", desc: "Provide core banking APIs to power fintech innovations" },
                    { role: "Supplier", desc: "Distribute products through third-party apps" },
                    { role: "Interface/Aggregator", desc: "Curate and brand the best third-party solutions" }
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-border pb-3 last:border-0">
                      <h4 className="font-semibold text-primary text-sm">{item.role}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href={sourceArticles.whyMatters} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 gap-2">
                <BookOpen className="w-4 h-4" /> Read the Full Article on Substack
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section id="risk" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Balancing Innovation & Risk</h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Open Banking introduces new risks that must be managed through proper frameworks and controls. Here are the key risks and how to mitigate them:
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: "disintermediation",
                    title: "Disintermediation Risk",
                    desc: "Third-party providers erode direct customer relationships",
                    mitigation: "Build partnerships and marketplaces to retain ecosystem centrality"
                  },
                  {
                    id: "technology",
                    title: "Technology Risk",
                    desc: "Legacy systems and API dependencies cause outages and failures",
                    mitigation: "Adopt modern architecture, microservices, and resilience testing"
                  },
                  {
                    id: "economic",
                    title: "Economic Risk",
                    desc: "Market volatility from new entrants strains profitability",
                    mitigation: "Diversify revenue streams and stress-test financial models"
                  },
                  {
                    id: "legal",
                    title: "Legal Risk",
                    desc: "Compliance gaps in data sharing and evolving regulations",
                    mitigation: "Implement agile governance and regular compliance audits"
                  },
                  {
                    id: "security",
                    title: "Security Risk",
                    desc: "Cyber threats, data breaches, and fraud from open APIs",
                    mitigation: "Deploy AI monitoring, encryption, and zero-trust security models"
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
                        <p className="text-sm text-muted-foreground mt-1">{risk.desc}</p>
                      </div>
                      <div className="text-accent ml-4 flex-shrink-0 font-bold">
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

              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Control Framework
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-3">Preventative Controls</h4>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li>✓ Access controls & authentication</li>
                      <li>✓ Encryption & data protection</li>
                      <li>✓ API rate limiting</li>
                      <li>✓ Compliance governance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-3">Detective Controls</h4>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li>✓ Real-time anomaly detection</li>
                      <li>✓ AI-driven fraud detection</li>
                      <li>✓ Compliance monitoring</li>
                      <li>✓ Performance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a href={sourceArticles.riskManagement} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 gap-2">
                <BookOpen className="w-4 h-4" /> Read the Full Article on Substack
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategies Section */}
      <section id="strategies" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Go-to-Market Strategies</h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Different strategies for incumbent banks and fintech startups to succeed in the Open Banking ecosystem:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">For Incumbent Banks</h3>
                  <div className="space-y-3">
                    {[
                      { step: "1", title: "Recognize the Market", desc: "Treat Open Banking as a new economy" },
                      { step: "2", title: "Address Challenges", desc: "Modernize technology and architecture" },
                      { step: "3", title: "Lead Transformation", desc: "Become aggregator or orchestrator" },
                      { step: "4", title: "Measure & Iterate", desc: "Track KPIs and adjust strategy" }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">For Fintech Startups</h3>
                  <div className="space-y-3">
                    {[
                      { step: "1", title: "Identify Entry Points", desc: "Target underserved segments" },
                      { step: "2", title: "Differentiate", desc: "Build unique value proposition" },
                      { step: "3", title: "Build Partnerships", desc: "Collaborate with incumbents" },
                      { step: "4", title: "Measure & Iterate", desc: "Track adoption and ROI" }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Key Success Metrics</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-2">Financial Performance</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Revenue & profit growth</li>
                      <li>• API usage revenue</li>
                      <li>• Customer acquisition cost</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-2">Ecosystem Engagement</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Number of partners</li>
                      <li>• Data exchange volumes</li>
                      <li>• Developer integrations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-2">Customer-Centric</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Third-party adoption</li>
                      <li>• New product sales</li>
                      <li>• Customer retention</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-2">Comparative Value</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Ecosystem ROI</li>
                      <li>• Cost efficiency</li>
                      <li>• Value vs. expenses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a href={sourceArticles.goToMarket} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 gap-2">
                <BookOpen className="w-4 h-4" /> Read the Full Article on Substack
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Key Takeaways for Beginners</h2>
            <div className="space-y-4">
              {[
                "Open Banking is transforming finance—it's not optional for future success",
                "Success requires ecosystem thinking, not siloed operations",
                "Risk management enables innovation, not prevents it",
                "Customer-centricity and personalization drive loyalty",
                "Continuous measurement ensures strategies stay relevant"
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-white/90 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Substack Subscription Section */}
      <section id="subscribe" className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Stay Updated on Open Banking</h2>
            <p className="text-lg text-muted-foreground mb-8">
              This guide covers the essentials for beginners. For in-depth analysis, case studies, and regular updates on Open Banking trends, subscribe to our Substack newsletter.
            </p>

            <div className="bg-white rounded-lg border border-border p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Subscribe for Regular Updates</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-accent hover:bg-accent/90 text-white gap-2"
                  >
                    <Mail className="w-4 h-4" /> Subscribe
                  </Button>
                </div>
                {subscribed && (
                  <p className="text-sm text-accent font-medium">
                    ✓ Redirecting to Substack. Subscribe to @prksh for regular updates!
                  </p>
                )}
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                We'll redirect you to Substack where you can subscribe to get regular articles on Open Banking, fintech, and digital transformation.
              </p>
            </div>

            <a href="https://substack.com/@prksh" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2 w-full sm:w-auto">
                Visit Our Substack <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Quick Navigation</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#definition" className="hover:text-white transition-colors">What is Open Banking?</a></li>
                <li><a href="#api-economy" className="hover:text-white transition-colors">API Economy</a></li>
                <li><a href="#why-matters" className="hover:text-white transition-colors">Why It Matters</a></li>
                <li><a href="#risk" className="hover:text-white transition-colors">Risk Management</a></li>
                <li><a href="#strategies" className="hover:text-white transition-colors">Go-to-Market</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Source Articles</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href={sourceArticles.definition} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Open Banking Disruption</a></li>
                <li><a href={sourceArticles.apiEconomy} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API Economy</a></li>
                <li><a href={sourceArticles.whyMatters} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Why Banks Should Care</a></li>
                <li><a href={sourceArticles.riskManagement} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Risk Management</a></li>
                <li><a href={sourceArticles.goToMarket} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Go-to-Market Strategies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Subscribe</h4>
              <p className="text-sm text-white/80 mb-4">
                Get regular updates on Open Banking, fintech, and digital transformation.
              </p>
              <a href="https://substack.com/@prksh" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full gap-2">
                  <Mail className="w-4 h-4" /> Subscribe on Substack
                </Button>
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>&copy; 2026 Mastering Open Banking. All rights reserved.</p>
            <p className="mt-2">
              This is a beginner's guide. For advanced learning, visit{" "}
              <a href="https://substack.com/@prksh" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                @prksh on Substack
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
