"use client";
import { useMemo, useState } from "react";

export default function Page() {
  const [dark, setDark] = useState(true);

  const me = {
    name: "Tu Nombre",
    role: "Integraciones · Cloud · Data",
    headline:
      "Ingeniería en Telecomunicaciones orientada a integraciones de streaming, automatización y analítica en la nube.",
    summary:
      "Diseño, despliegue y observabilidad de pipelines de video y datos. Enfoque en calidad de servicio (QoS), time-to-delivery y seguridad.",
    location: "AR · Remoto/On-site",
    email: "tu.email@dominio.com",
    github: "https://github.com/usuario",
    linkedin: "https://www.linkedin.com/in/usuario",
  };

  const skills = [
    {
      title: "Cloud & IaaC",
      items: ["AWS", "CDK", "CloudFormation", "GCP (básico)", "IAM"],
    },
    {
      title: "Streaming/Video",
      items: ["ABR", "Encoding", "Packaging", "DRM (básico)", "Origin Server"],
    },
    {
      title: "Containers & DevOps",
      items: ["Docker", "Kubernetes", "CI/CD", "Linux", "Networking"],
    },
    {
      title: "Observabilidad",
      items: [
        "Grafana",
        "Prometheus",
        "Youbora (conceptos)",
        "Logs",
        "Alerting",
      ],
    },
    {
      title: "Data/ML",
      items: ["Python", "SQL", "Pandas", "Scikit-learn", "DBT (básico)"],
    },
    {
      title: "Seguridad",
      items: ["Cifrado", "Gestión de secretos", "Buenas prácticas AWS"],
    },
  ];

  const projects = [
    {
      title: "Pipeline ABR en AWS con monitoreo end-to-end",
      period: "2025",
      type: "case",
      badges: ["AWS Media", "CDK", "Grafana", "QoS"],
      problem:
        "Necesidad de orquestar encoding y packaging para streaming adaptativo con visibilidad de SLO/SLA.",
      approach:
        "Infraestructura reproducible con CDK (origination, storage, CDN). Dashboards en Grafana con métricas de latencia, errores y bitrate. Alertas proactivas.",
      impact:
        "Tiempo de despliegue ↓60% y detección temprana de incidentes. Base para A/B de perfiles de bitrate.",
      repo: "#",
      demo: "#",
    },
    {
      title: "Youbora-like PoC: Telemetría de sesiones desde el player",
      period: "2025",
      type: "case",
      badges: ["Player SDK", "Telemetry", "K8s", "ELK"],
      problem:
        "Falta de granularidad para diagnosticar QoE por sesión (rebuffering, join time).",
      approach:
        "SDK liviano que envía eventos a una API en Kubernetes; pipeline de ingesta hacia Elasticsearch y visualización con Grafana.",
      impact:
        "Reducción del MTTR al correlacionar fallas de red con perfiles de dispositivo.",
      repo: "#",
      demo: "#",
    },
    {
      title: "Churn propensity para OTT (modelo baseline)",
      period: "2025",
      type: "case",
      badges: ["Python", "SQL", "XGBoost", "ML Ops (básico)"],
      problem:
        "Identificar clientes con alta probabilidad de baja en 30 días para priorizar retención.",
      approach:
        "Feature store simple (SQL) + pipeline de entrenamiento con validación temporal. Métrica principal: PR-AUC. Monitoreo de drift (conceptual).",
      impact:
        "Mejora de precisión base y definición de triggers para ofertas personalizadas.",
      repo: "#",
      demo: "#",
    },
  ];

  const education = [
    {
      title: "Ing. en Telecomunicaciones (en curso)",
      org: "Tu Univ.",
      year: "2025",
    },
    { title: "AWS Cloud Practitioner (objetivo)", org: "AWS", year: "2025" },
    { title: "Kubernetes for Devs (labs)", org: "Labs/Hands-on", year: "2025" },
  ];

  const nav = useMemo(
    () => [
      { id: "about", label: "Sobre mí" },
      { id: "skills", label: "Habilidades" },
      { id: "projects", label: "Proyectos" },
      { id: "edu", label: "Formación" },
      { id: "contact", label: "Contacto" },
    ],
    []
  );

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
        {/* HEADER */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <h1 className="font-bold">{me.name}</h1>
          <nav className="space-x-6 text-sm">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="px-2 py-1 border rounded text-xs"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? "Light" : "Dark"}
          </button>
        </header>

        {/* HERO */}
        <section id="about" className="px-8 py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">{me.role}</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            {me.headline}
          </p>
          <p>{me.summary}</p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="px-8 py-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((cat) => (
              <div key={cat.title}>
                <h3 className="font-semibold">{cat.title}</h3>
                <ul className="list-disc ml-5 text-sm">
                  {cat.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-8 py-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Proyectos</h2>
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.title} className="border p-4 rounded">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-xs text-neutral-500">{p.period}</span>
                </div>
                <div className="flex flex-wrap gap-2 my-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="text-xs bg-neutral-200 dark:bg-neutral-800 px-2 py-0.5 rounded"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <p className="text-sm">
                  <strong>Problema:</strong> {p.problem}
                </p>
                <p className="text-sm">
                  <strong>Enfoque:</strong> {p.approach}
                </p>
                <p className="text-sm">
                  <strong>Impacto:</strong> {p.impact}
                </p>
                <div className="flex gap-4 mt-2 text-xs">
                  {p.repo !== "#" && (
                    <a href={p.repo} className="underline">
                      Repo
                    </a>
                  )}
                  {p.demo !== "#" && (
                    <a href={p.demo} className="underline">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="edu" className="px-8 py-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Formación</h2>
          <ul className="list-disc ml-5 text-sm">
            {education.map((e) => (
              <li key={e.title}>
                {e.title} — {e.org} ({e.year})
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-8 py-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Contacto</h2>
          <p>
            Email:{" "}
            <a href={`mailto:${me.email}`} className="underline">
              {me.email}
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href={me.github} target="_blank" className="underline">
              {me.github}
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href={me.linkedin} target="_blank" className="underline">
              {me.linkedin}
            </a>
          </p>
        </section>

        {/* FOOTER */}
        <footer className="px-8 py-6 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
          © {new Date().getFullYear()} {me.name}. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}
