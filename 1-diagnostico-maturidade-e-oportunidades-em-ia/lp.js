const diagnosticoMaturidadeIA = {
  id: 1,
  title: "Diagnóstico de Maturidade e Oportunidades em IA",
  category: "Estratégia",
  price: "R$ 10.000",
  description:
    "Avaliamos o estágio real da organização em IA e identificamos oportunidades de alto impacto com viabilidade técnica, dados disponíveis e ROI estimado.",
  iconName: "Brain",

  details: {
    timeline: "2 semanas intensivas",
    context:
      "Fase estratégica e crítica para evitar desperdício de recursos, reduzir risco financeiro e estruturar base sólida para adoção de IA com viabilidade real de execução.",

    architectureDescription:
      "Diagnóstico baseado no framework de prontidão de IA da Google Cloud, avaliando maturidade de dados, arquitetura, governança, cultura organizacional e capacidade de execução.",

    architectureDiagramUrl:
      "https://cloud.google.com/architecture/framework",

    technologies: [
      "Miro",
      "Python (Profiling)",
      "Vertex AI Model Garden"
    ],

    gcpProducts: [
      "BigQuery",
      "Vertex AI",
      "Dataplex"
    ],

    milestones: [
      "Kickoff Executivo",
      "Auditoria de Dados",
      "Apresentação de Roadmap"
    ],

    artifacts: [
      {
        name: "Relatório de Maturidade",
        description:
          "Score detalhado por pilar, análise técnica, riscos identificados e recomendações estruturadas.",
        type: "management"
      },
      {
        name: "Auditoria da Infraestrutura Atual",
        description:
          "Mapeamento arquitetural, avaliação de aderência ao GCP e sugestões de evolução.",
        type: "technical"
      },
      {
        name: "Backlog Priorizado",
        description:
          "5 quick wins com ROI estimado, estimativa de custo, tempo e roadmap executável de 90 dias.",
        type: "management"
      }
    ],

    benefits: [
      "Redução concreta de risco financeiro",
      "Alinhamento técnico e executivo",
      "Clareza de prioridades",
      "Direcionamento GCP-first com viabilidade validada",
      "Base estruturada para execução real"
    ],

    outcomes: [
      "Score estruturado de maturidade em IA",
      "10–15 oportunidades mapeadas",
      "5 quick wins priorizados",
      "Estimativa de ROI por iniciativa",
      "Roadmap executável de 90 dias"
    ],

    teamEstimates: [
      { role: "AI Strategist", hours: 40 }
    ]
  }
};

export default diagnosticoMaturidadeIA;