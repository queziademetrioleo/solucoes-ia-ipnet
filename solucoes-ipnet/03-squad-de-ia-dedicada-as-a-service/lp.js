const squadIaDedicada = {
  id: 3,
  title: "Squad de IA Dedicada (As-a-Service)",
  category: "Execução",
  price: "Sob consulta (modelo mensal recorrente)",
  description:
    "Execução contínua de roadmap de IA com responsabilidade real por entrega em produção.",
  iconName: "Users",

  details: {
    timeline: "Mínimo 3 meses",
    context:
      "Empresas possuem backlog de IA validado, mas enfrentam gargalo de execução por falta de senioridade técnica e capacidade interna.",
    positioning:
      "Não oferecemos alocação de recursos. Oferecemos capacidade estruturada de execução contínua em IA com accountability por entrega.",

    problemStatement: [
      "Backlog de IA cresce mais rápido que a capacidade interna.",
      "Dificuldade de contratar engenheiros de IA sênior.",
      "POCs que não escalam para produção.",
      "Dependência de consultorias pontuais sem continuidade."
    ],

    technologies: [
      "Python",
      "TensorFlow",
      "GitHub / GitLab",
      "CI/CD estruturado",
      "MLOps"
    ],

    gcpProducts: [
      "Vertex AI",
      "BigQuery",
      "GKE",
      "Compute Engine"
    ],

    artifacts: [
      {
        name: "Código Production-Ready",
        description:
          "Features de IA em produção com testes automatizados e versionamento estruturado.",
        type: "technical"
      },
      {
        name: "Relatório Quinzenal",
        description:
          "Progresso de sprint, métricas técnicas e indicadores de impacto.",
        type: "management"
      },
      {
        name: "Documentação Arquitetural",
        description:
          "ADRs, runbooks e plano de autonomia técnica.",
        type: "technical"
      }
    ],

    architectureDescription:
      "Integração total com os processos ágeis do cliente (Scrum/Kanban), com governança técnica, MLOps estruturado e foco em produção.",

    architectureDiagramUrl: "",

    milestones: [
      "Setup Estratégico (Imersão + Plano de 90 dias)",
      "Execução Contínua de Features",
      "Evolução e Transferência de Conhecimento"
    ],

    teamEstimates: [
      { role: "Engenheiro(a) de IA", hours: 80 },
      { role: "Cientista de Dados", hours: 40 },
      { role: "Especialista MLOps", hours: 20 },
      { role: "PM Técnico", hours: 20 }
    ],

    benefits: [
      "Expertise imediata sem necessidade de contratação interna",
      "Flexibilidade contratual e escalabilidade de time",
      "Responsabilidade real por entrega em produção",
      "Integração profunda com o time do cliente"
    ],

    outcomes: [
      "Features de IA entregues continuamente",
      "Redução do tempo de entrega",
      "Evolução sustentável do roadmap",
      "Base técnica estruturada para crescimento"
    ],

    idealClientProfile: [
      "Empresas médias ou grandes",
      "Backlog estruturado de IA",
      "Produto digital ativo",
      "Necessidade de acelerar execução"
    ],

    notFor: [
      "Projetos exploratórios de curto prazo",
      "Empresas sem infraestrutura mínima",
      "Demandas pontuais de 30 dias"
    ],

    contractModel: {
      minimumDuration: "3 meses",
      recommendedDuration: "6 a 12 meses",
      billingModel: "Mensal recorrente",
      scalability:
        "Possibilidade de expandir ou reduzir o squad conforme necessidade"
    }
  }
};

export default squadIaDedicada;