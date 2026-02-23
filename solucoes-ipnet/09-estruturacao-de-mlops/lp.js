const estruturacaoMLOps = {
    id: 9,
    title: "Estruturação de MLOps",
    category: "Engenharia",
    price: "R$ 70.000+",
    description:
        "Automação do ciclo de vida dos modelos, do treino ao monitoramento contínuo em produção.",
    iconName: "Settings", // Represents Engineering/Pipelines

    details: {
        timeline: "3 meses",
        context:
            "Muitas IAs morrem em PoC. MLOps garante que o modelo continue funcionando e aprendendo com o tempo, eliminando a dívida técnica da operação sustentada e retreinos totalmente manuais e engarrafados do laboratório à nuvem.",

        architectureDescription:
            "Pipelines desacoplados permitindo portabilidade de modelos entre ambientes. O escopo conta com módulos independentes, possibilitando atualizações do modelo em esteira serverless via Vertex AI sem downtime na lógica de negócio.",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "Kubeflow",
            "TFX",
            "Docker"
        ],

        gcpProducts: [
            "Vertex AI Pipelines",
            "Artifact Registry",
            "Cloud Build"
        ],

        milestones: [
            "Fase 1 - Standardization",
            "Fase 2 - Pipeline Development",
            "Fase 3 - Monitoring Setup"
        ],

        artifacts: [
            {
                name: "Pipeline CI/CD/CT",
                description:
                    "Automação de Continuous Training do ciclo de vida integrativo nativo do aprendizado.",
                type: "technical"
            },
            {
                name: "Sistema de Alertas de Drift",
                description:
                    "Monitoramento sistemático de queda de acurácia nas inferências produtivas e alertas centralizados.",
                type: "technical"
            }
        ],

        benefits: [
            "Escala eficiente dos modelos para grandes lógicas sem dores operacionais",
            "Redução brusca de dívida técnica em infraestruturas",
            "Infraestrutura autoscale servindo picos massivos mantendo a latência e SLA sempre constantes"
        ],

        outcomes: [
            "Tempo de deploy reduzido de semanas para horas",
            "Confiabilidade preditiva contínua acompanhada a longo prazo baseada em Continuous Training"
        ],

        teamEstimates: [
            { role: "MLOps Engineer", hours: 160 }
        ]
    }
};

export default estruturacaoMLOps;
