const programaEticaGovernancaIA = {
    id: 8,
    title: "Programa de Ética e Governança em IA",
    category: "Estratégia",
    price: "R$ 25.000",
    description:
        "Camada de governança aplicada a sistemas de IA já ativos ou em fase de produção, garantindo conformidade (LGPD), segurança técnica e mitigação de riscos reputacionais.",
    iconName: "ShieldCheck",

    details: {
        timeline: "1 mês",
        context:
            "IA sem controle pode gerar prejuízos jurídicos e de imagem. Estruturamos diretrizes e controles técnicos para uso seguro e auditável, como complemento de governança a um produto principal de IA (ativo ou em implementação).",

        technologies: [
            "Explainable AI (XAI)",
            "What-If Tool",
            "Learning Interpretability Tool (LIT)",
            "Compliance Checklists"
        ],

        gcpProducts: [
            "Vertex AI Model Registry",
            "Cloud IAM"
        ],

        artifacts: [
            {
                name: "Política de IA Responsável",
                description:
                    "Manual formal de diretrizes éticas, processo de aprovação de modelos, accountability e regras de uso de dados (LGPD).",
                type: "management"
            },
            {
                name: "Relatório de Bias",
                description:
                    "Auditoria técnica de viés e explicabilidade, com testes contrafactuais e recomendações de mitigação.",
                type: "technical"
            },
            {
                name: "Matriz de Risco",
                description:
                    "Classificação estruturada de riscos (jurídico, reputacional, operacional e segurança), com plano de mitigação priorizado.",
                type: "management"
            }
        ],

        architectureDescription:
            "Framework de governança cruzando segurança cibernética e ética algorítmica, aplicado por meio de SAIF (Secure AI Framework), governança de dados e modelos (IAM + Model Registry) e explicabilidade/fairness (LIT + XAI).",

        architectureDiagramUrl:
            "https://safety.google/intl/pt-BR_ALL/safety/saif/",

        milestones: [
            "Audit Inicial",
            "Workshop de Riscos",
            "Handover de Política"
        ],

        teamEstimates: [
            { role: "AI Compliance Officer", hours: 32 }
        ],

        benefits: [
            "Segurança jurídica",
            "Confiança do cliente",
            "Accountability formal para decisões automatizadas",
            "Redução de risco reputacional"
        ],

        outcomes: [
            "Selo de conformidade técnica interna",
            "Política e controles aplicáveis a produtos de IA ativos",
            "Base para escalar IA com segurança e auditoria"
        ]
    }
};

export default programaEticaGovernancaIA;