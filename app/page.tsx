import {
  ShieldCheck,
  Lock,
  Cpu,
  Radio,
  Workflow,
  KeyRound,
  Layers,
  Phone,
  MessageCircle,
  Globe,
  Mic,
  Database,
  Zap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import BetaForm from "./components/BetaForm";
import ModelToggle from "./components/ModelToggle";

function Brand() {
  return <span className="brand">Aroro</span>;
}

function CardHead({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="card-head">
      <Icon size={20} strokeWidth={1.5} aria-hidden />
      <h3>{title}</h3>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            Mengutay Lab
          </a>
          <nav aria-label="Primary">
            <a href="#capabilities">Capabilities</a>
            <a href="#sovereignty">Sovereignty</a>
            <a href="#hardware">Hardware</a>
            <a href="#contact">Contact</a>
            <a href="#beta" className="nav-cta">
              Join Beta
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="container hero">
          <p className="badge">Built in Switzerland • Local-First &amp; Hardware Ready</p>
          <h1>
            <Brand />
            The Autonomous AI Assistant You Truly Own.
          </h1>
          <p className="lead">
            An omnichannel companion that controls your workflows, manages your hardware, and keeps
            100% of your personal context private.
          </p>
          <div id="beta">
            <BetaForm />
          </div>
        </section>

        <section id="capabilities" className="container section">
          <div className="bento">
            <article id="sovereignty" className="card card-vault">
              <CardHead icon={ShieldCheck} title="Total Data Sovereignty" />
              <p>
                Your context never leaves your control. Store memory locally, encrypt end-to-end,
                and run inference through self-hosted models or direct API pipelines with zero data
                retainage.
              </p>
              <ul className="vault" aria-label="Local vault status">
                <li>
                  <Lock size={14} aria-hidden /> Local vault <span className="ok">Encrypted</span>
                </li>
                <li>
                  <Database size={14} aria-hidden /> Memory store <span className="ok">On-device</span>
                </li>
                <li>
                  <Radio size={14} aria-hidden /> Data retention <span className="ok">None</span>
                </li>
              </ul>
            </article>

            <article id="hardware" className="card">
              <CardHead icon={Cpu} title="Hardware & IoT Command" />
              <p>
                Direct hardware execution via MQTT, WebSockets, and custom edge nodes. Control local
                servers, smart home controllers, and physical sensors directly from conversation.
              </p>
              <div className="chips">
                {["MQTT", "Local Networks", "Smart Nodes", "Microcontrollers"].map((c) => (
                  <span key={c} className="chip">
                    <i aria-hidden /> {c}
                  </span>
                ))}
              </div>
            </article>

            <article className="card">
              <CardHead icon={Radio} title="Omnichannel Reach" />
              <p>
                Speak or text from anywhere. Native phone calling, WhatsApp, Telegram, WebRTC audio,
                and smart home voice interfaces.
              </p>
              <ul className="channels" aria-label="Channels">
                {[
                  { icon: Phone, label: "Phone" },
                  { icon: MessageCircle, label: "Messaging" },
                  { icon: Globe, label: "Web" },
                  { icon: Mic, label: "Voice" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon size={18} strokeWidth={1.5} aria-hidden />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card card-wide">
              <CardHead icon={Workflow} title="n8n Workflow Engine" />
              <p>
                Trigger complex multi-step automations. Connect your personal APIs, database
                actions, and background scripts through native n8n triggers.
              </p>
              <ol className="pipeline" aria-label="Example workflow">
                {[
                  { icon: Zap, label: "Trigger" },
                  { icon: Sparkles, label: "Aroro" },
                  { icon: Database, label: "Database" },
                  { icon: Workflow, label: "Action" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon size={16} aria-hidden /> {label}
                  </li>
                ))}
              </ol>
            </article>

            <article className="card">
              <CardHead icon={KeyRound} title="Bring Your Own Key (BYOK)" />
              <p>
                Plug in your Claude Sonnet 5.5 API keys or point <Brand /> to local Ollama/LM Studio
                instances running on your own hardware.
              </p>
              <ModelToggle />
            </article>

            <article className="card card-wide">
              <CardHead icon={Layers} title="Context Synthesis Pipeline" />
              <p>
                Indexes your daily logs, local markdown vaults, active system hardware telemetry,
                and incoming messaging streams into a unified real-time vector memory.
              </p>
              <div className="chips">
                {["Daily logs", "Markdown vaults", "Hardware telemetry", "Messaging streams"].map(
                  (c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ),
                )}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-inner">
          <span>Built by Mengutay Lab (Switzerland)</span>
          <div className="footer-links">
            <a href="mailto:info@mengutay.com">Contact: info@mengutay.com</a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN_ID" target="_blank" rel="noopener noreferrer">
              Founder: LinkedIn
            </a>
          </div>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}
