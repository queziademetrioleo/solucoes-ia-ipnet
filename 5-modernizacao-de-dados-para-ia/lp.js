const modernizacaoDadosIa = {
    id: 5,
    title: "Modernização de Dados para IA",
    category: "Engenharia",
    price: "R$ 40.000+",
    description:
        "IA-Ready Data Platform: estruturação de arquitetura Lakehouse no Google Cloud para alimentar modelos de machine learning com dados confiáveis, versionados e governados.",
    iconName: "Database",

    details: {
        timeline: "2 meses",
        context:
            "Empresas desejam escalar IA, mas operam com dados fragmentados, pipelines frágeis e ausência de governança. Estruturamos uma plataforma de dados preparada especificamente para sustentar modelos de machine learning em escala.",

        technologies: [
            "dbt",
            "Airflow",
            "SQL",
            "Data Quality Monitoring"
        ],

        gcpProducts: [
            "BigQuery",
            "Dataflow",
            "Dataproc",
            "Dataplex"
        ],

        artifacts: [
            {
                name: "Linhagem de Dados",
                description:
                    "Mapa completo de origem, transformação e consumo dos dados.",
                type: "technical"
            },
            {
                name: "Data Quality Dashboard",
                description:
                    "Métricas automatizadas de saúde e qualidade dos dados.",
                type: "technical"
            },
            {
                name: "Documentação Técnica",
                description:
                    "Arquitetura Lakehouse, pipelines e regras de transformação versionadas.",
                type: "technical"
            }
        ],

        architectureDescription:
            "Arquitetura Lakehouse unificada no Google Cloud com camadas Bronze, Silver e Gold orientadas a consumo por modelos de ML.",

        architectureDiagramUrl: "",

        milestones: [
            "Ingestão Estruturada",
            "Modelagem Bronze/Silver/Gold",
            "Governança e Data Quality"
        ],

        teamEstimates: [
            { role: "Data Engineer Senior", hours: 160 }
        ],

        benefits: [
            "Dados confiáveis para ML",
            "Redução de retrabalho",
            "Governança estruturada",
            "Escalabilidade para IA de larga escala"
        ],

        outcomes: [
            "Plataforma Lakehouse estruturada",
            "Pipelines automatizados",
            "Dataset pronto para ML",
            "Infraestrutura preparada para IA em escala"
        ]
    }
};

export default modernizacaoDadosIa;