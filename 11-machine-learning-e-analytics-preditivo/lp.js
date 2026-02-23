const machineLearningAnalytics = {
    id: 11,
    title: "Machine Learning e Analytics Preditivo",
    category: "Data Science",
    price: "R$ 150.000+",
    description:
        "Modelagem estatística avançada para previsão de demanda, churn e otimização de preços.",
    iconName: "LineChart", // Or TrendingUp, representing Predictive modeling

    details: {
        timeline: "3 a 5 meses",
        context:
            "Transformação de dados históricos em previsões acionáveis para antecipar movimentos de mercado. Direcionado à lideranças que desejam parar de conduzir os negócios orientando-se pelo espelho retrovisor de BI estático.",

        architectureDescription:
            "Pipelines escaláveis de MLOps para retreino automático. Nossa arquitetura é construída em módulos desacoplados, permitindo atualizações de modelos na Vertex AI e lógicas de negócios isoladamente sem impactar os sistemas da operação (downtime zero).",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "XGBoost",
            "TensorFlow",
            "SQL"
        ],

        gcpProducts: [
            "BigQuery ML",
            "Vertex AI Pipelines",
            "Feature Store"
        ],

        milestones: [
            "Fase 1 - Feature Engineering",
            "Fase 2 - Treino",
            "Fase 3 - Validação",
            "Fase 4 - Deploy"
        ],

        artifacts: [
            {
                name: "Pipeline de Dados",
                description:
                    "Fluxo automatizado de treino no Google Cloud extraindo padrões matemáticos ocultos de volumes imensos de bases históricas.",
                type: "technical"
            },
            {
                name: "Dashboard Looker",
                description:
                    "Visualização e interatividade tátil direta sobre as predições de impacto operacional com facilidade de consumo pelas matrizes executivas.",
                type: "technical"
            }
        ],

        benefits: [
            "Otimização violenta em redução de faltas e desperdícios com adequação profunda aos relatórios de estoque massivo gerado pelo consumo projetado no tempo",
            "Previsibilidade financeira assegurando estratégias rentáveis de antecipação aos fluxos indescritíveis ocultos na companhia"
        ],

        outcomes: [
            "Aumento de 15% na margem operacional",
            "Blindagem do Churn através dos algoritmos baseados em sinais sutis e antecipados à tomada final com mitigação dos prejuízos inerentes aos clientes finais inativados"
        ],

        teamEstimates: [
            { role: "Data Scientist", hours: 200 }
        ]
    }
};

export default machineLearningAnalytics;
