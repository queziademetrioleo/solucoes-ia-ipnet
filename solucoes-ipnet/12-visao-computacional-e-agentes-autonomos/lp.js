const visaoAgentesAutonomos = {
    id: 12,
    title: "Visão Computacional e Agentes Autônomos",
    category: "Automação",
    price: "R$ 300.000+",
    description:
        "Agentes autônomos e sistemas de visão que executam tarefas complexas e inspeção de qualidade de forma ininterrupta.",
    iconName: "Eye", // Represents Computer Vision / Monitoring

    details: {
        timeline: "4 a 8 meses",
        context:
            "Automação de alto nível integrando hardware (câmeras no chão de fábrica ou campo) e software para monitoramento e reação ativa em tempo real, mitigando erros humanos com precisão cirúrgica e atuação direta nos ERPs.",

        architectureDescription:
            "Arquitetura distribuída com processamento em borda (Edge) e nuvem. Nossa estrutura desacoplada permite atualizações independentes e imediatas da inteligência artificial central ou dos scripts lógicos de negócio dos Agentes Executores sem submeter a rede a downtime operacionais físicos.",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "OpenCV",
            "PyTorch",
            "Playwright" // For RPA/Agent capabilities
        ],

        gcpProducts: [
            "Vertex AI Vision",
            "Cloud Functions",
            "Pub/Sub"
        ],

        milestones: [
            "Fase 1 - Setup de Infra",
            "Fase 2 - Treino de Visão",
            "Fase 3 - Integração RPA",
            "Fase 4 - Rollout"
        ],

        artifacts: [
            {
                name: "Agente de Execução",
                description:
                    "Scripts de automação lógicos implantando braços digitais integrados para responderem infalivelmente às intercorrências.",
                type: "technical"
            },
            {
                name: "Modelo de Visão",
                description:
                    "Weights e configuração arquitetônica viva validada neural do modelo YOLO/Deep Learning sobre sua base complexa.",
                type: "technical"
            }
        ],

        benefits: [
            "Escala ininterrupta de Operação 24/7 mitigando prejuízos humanos noturnos (Fadiga zero)",
            "Precisão sobre-humana e varreduras inspecionais de qualidade absoluta captando milímetros defeituosos na esteira",
            "Robustez Serverless contornando picos severos de banda isolada ao Edge Computing"
        ],

        outcomes: [
            "Retorno Sobre Investimento (ROI) vertiginoso em menos de 12 meses",
            "Rompimento imediato com processos manuais legados e controle operacional instantâneo da liderança sobre fábricas ou estoques"
        ],

        teamEstimates: [
            { role: "Computer Vision Specialist", hours: 300 }
        ]
    }
};

export default visaoAgentesAutonomos;
