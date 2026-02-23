const finopsOtimizacaoIa = {
    id: 4,
    title: "FinOps e Otimização de Custos de IA",
    category: "Engenharia",
    price: "R$ 15.000",
    description:
        "AI Cost Engineering aplicado à produção: reengenharia técnica para reduzir, controlar e prever custos em sistemas de IA já escalados — sem sacrificar performance.",
    iconName: "DollarSign",

    details: {
        timeline: "3 semanas",
        context:
            "Projetos de IA em produção frequentemente sofrem com custo imprevisível por ausência de governança técnica. Atuamos identificando desperdício real (tokens, modelos, infra), implementando quotas, alertas e intervenções técnicas para reduzir custos de 20% a 40% sem perda de performance.",

        architectureDescription:
            "Arquitetura de AI Cost Engineering com análise de consumo (Billing → BigQuery), dashboards estratégicos, alertas automáticos e governança via quotas. Inclui intervenções técnicas em modelo, prompt e infraestrutura quando aplicável.",

        architectureDiagramUrl: "",

        technologies: [
            "Cloud Billing",
            "BigQuery Analytics",
            "Custom Dashboards",
            "Monitoramento de Anomalias",
            "Engenharia de Prompt",
            "Estratégias de Multi-Model Routing"
        ],

        gcpProducts: [
            "Cloud Billing API",
            "BigQuery",
            "Quotas API"
        ],

        milestones: [
            "Análise Histórica Profunda",
            "Identificação de Desperdício",
            "Implementação de Governança (Quotas + Alertas + Dashboard + Plano de Savings)"
        ],

        artifacts: [
            {
                name: "Dashboard Técnico de Custos",
                description:
                    "Visão granular por projeto, modelo e aplicação, com alertas automáticos e visão por centro de custo quando aplicável.",
                type: "technical"
            },
            {
                name: "Relatório Executivo",
                description:
                    "Diagnóstico de desperdício, riscos financeiros e plano de ação priorizado para redução de custo sem sacrificar performance.",
                type: "management"
            },
            {
                name: "Plano Formal de Savings",
                description:
                    "Projeção de economia (20–40% típico), roadmap de implementação e recomendações técnicas para manter previsibilidade orçamentária.",
                type: "management"
            }
        ],

        benefits: [
            "Redução média de 20% a 40% na fatura de IA",
            "Previsibilidade orçamentária",
            "Controle por aplicação, time ou produto",
            "Governança técnica estruturada (quotas + alertas)",
            "Argumento sólido para CFO e diretoria"
        ],

        outcomes: [
            "Custo por token e por requisição medido e controlado",
            "Desperdícios identificados e eliminados (modelo/prompt/infra)",
            "Dashboard operacional com alertas e visão executiva",
            "Plano de savings validado e roadmap técnico de continuidade"
        ],

        teamEstimates: [
            { role: "Cloud Financial Analyst", hours: 24 },
            { role: "Engenheiro(a) de IA", hours: 24 }
        ]
    }
};

export default finopsOtimizacaoIa;