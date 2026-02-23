const deteccaoFraudesML = {
    id: 14,
    title: "Detecção de Fraudes e Anomalias com ML",
    category: "Segurança & Finanças",
    price: "R$ 180.000+",
    description:
        "Inteligência rápida e implacável para reter seu capital contra ataques cibernéticos e operacionais através de modelos de Machine Learning em tempo real.",
    iconName: "ShieldAlert", // Represents Security / Anti-Fraud

    details: {
        timeline: "3 a 6 meses",
        context:
            "A morte por mil cortes. Empresas aceitam perder até 5% do faturamento porque os sistemas atuais de detecção baseados em regras ou escores genéricos são lerdos e punem clientes reais. A detecção de fraudes moderna exige modelos dinâmicos de Machine Learning transacionais.",

        architectureDescription:
            "Arquitetura serverless de baixa latência em Streaming. Nossos modelos probabilísticos (XGBoost, Isolation Forests) operam na fronteira do transacional, desacoplados das regras base do seu negócio, mitigando falsos positivos e analisando a 'estranheza' matemática da requisição.",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "XGBoost / Random Forest",
            "Isolation Forests / Autoencoders",
            "Streaming Data"
        ],

        gcpProducts: [
            "Cloud Dataflow",
            "Pub/Sub",
            "Vertex AI Models",
            "BigQuery ML"
        ],

        milestones: [
            "Fase 1 - Feature Engineering Real-Time",
            "Fase 2 - Treinamento Base Híbrida",
            "Fase 3 - Pipeline Streaming Dataflow",
            "Fase 4 - Deploy Score (Go-Live)"
        ],

        artifacts: [
            {
                name: "Endpoint do Real-time Score Preditor",
                description:
                    "APIs nativas e segregantes em Cloud Run escaláveis devolvendo FRAUD_SCORE sob a requisição do usuário sem quebrar o front-end.",
                type: "technical"
            },
            {
                name: "Modelos Customizados Proprietários",
                description:
                    "Os Weights e a modelagem matemática puramente detentora do negócio nas regras de Machine Learning sob governança absoluta na Cloud IPNET.",
                type: "technical"
            }
        ],

        benefits: [
            "Loss Prevention rastreável: Eliminação visceral das fatias financeiras perdidas num ROI justificável no primeiro balanço",
            "Redução expressiva de Falsos Positivos aumentando a aceitação comercial da esteira e elevando CX (Customer Experience) dos sadios",
            "Identificação ativa de Ataques Zero-Day com as IAs sinalizando ataques não-supervisionados nunca vistos antes operados por malhas cibernéticas"
        ],

        outcomes: [
            "Implementação madura de escudos probabilísticos bloqueando as saídas antes de processar chargebacks",
            "Independência arquitetural: fim das 'Caixas-Pretas' das concorrentes terceirizadas que treinam IAs isoladas não aderentes as peculiaridades financeiras suas"
        ],

        teamEstimates: [
            { role: "Data Scientist e ML Engineer", hours: 300 }
        ]
    }
};

export default deteccaoFraudesML;
