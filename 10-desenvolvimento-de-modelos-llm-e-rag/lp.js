const modelsLlmRag = {
    id: 10,
    title: "Desenvolvimento de Modelos LLM e RAG",
    category: "NLP & LLM",
    price: "R$ 80.000+",
    description:
        "Implementação de sistemas de IA generativa baseados em RAG para consultas seguras à sua base privada e Fine-tuning para alta especialização do modelo.",
    iconName: "Search", // Or BrainCircuit, representing Semantic Search/LLM Orquestration

    details: {
        timeline: "2 a 3 meses",
        context:
            "Solução voltada para empresas que precisam de assistentes inteligentes que não 'alucinam', ancorando respostas em documentos reais e em ambientes com Privacidade de Dados enterprise total.",

        architectureDescription:
            "Arquitetura baseada em busca vetorial (Semantic Search), orquestração via LangGraph e Fine-tuning sob demanda. Módulos desacoplados que permitem atualizações independentes de modelos geradores (LLMs) e da lógica de negócio serverless.",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "LangChain",
            "Python",
            "Vector Databases"
        ],

        gcpProducts: [
            "Vertex AI",
            "Cloud Run",
            "Vertex Vector Search"
        ],

        milestones: [
            "Fase 1 - Ingestão de Dados",
            "Fase 2 - Modelagem (Embeddings e Fine-Tuning)",
            "Fase 3 - UAT",
            "Fase 4 - Go-live"
        ],

        artifacts: [
            {
                name: "Motor de Orquestração",
                description:
                    "Middleware agêntico sólido blindando as conexões sistêmicas na nuvem Serverless.",
                type: "technical"
            },
            {
                name: "Prompt Library",
                description:
                    "Instruções otimizadas limitando as alucinações e criando o tom de voz e governança restrita.",
                type: "technical"
            }
        ],

        benefits: [
            "Respostas operacionais precisas, lastreadas pelas fontes estritas da companhia",
            "Privacidade total de propriedade intelectual sobre os LLMs base (GCP Data Shield)",
            "Orquestração desacoplada sustentável para altíssima escala serverless com baixa latência"
        ],

        outcomes: [
            "Redução de 60% no tempo de busca interna",
            "Inovação materializada com valor imensurável nos fluxos das operações diárias com mitigação de riscos"
        ],

        teamEstimates: [
            { role: "Senior AI Engineer", hours: 120 }
        ]
    }
};

export default modelsLlmRag;
