const automacaoCxConversationalAi = {
    id: 7,
    title: "Automação de CX com Agentes Conversacionais Inteligentes",
    category: "NLP",
    price: "R$ 60.000+",
    description:
        "Arquitetura de agentes conversacionais baseados em LLM (Gemini), com RAG, integração profunda via APIs e suporte a voz e chat para resolver demandas reais do core do negócio.",

    iconName: "MessagesSquare",

    details: {
        timeline: "2 meses",

        context:
            "Evoluímos o chatbot tradicional para agentes conversacionais inteligentes que entendem contexto, consultam bases documentais via RAG, executam ações em sistemas internos e operam de forma omnichannel (voz e chat). O foco é automação operacional real, redução de escalonamento e melhoria mensurável da experiência do cliente.",

        technologies: [
            "Gemini (LLM)",
            "RAG (Retrieval-Augmented Generation)",
            "Dialogflow CX",
            "Cloud Speech-to-Text",
            "Cloud Text-to-Speech",
            "n8n",
            "API Integration"
        ],

        gcpProducts: [
            "Vertex AI",
            "Contact Center AI (CCAI)",
            "Dialogflow CX",
            "Cloud Run",
            "BigQuery",
            "Firebase",
            "Cloud SQL"
        ],

        artifacts: [
            {
                name: "Arquitetura de Agente Conversacional",
                description:
                    "Design completo da arquitetura com LLM, RAG, orquestração de fluxos, fallback inteligente e integração via APIs.",
                type: "technical"
            },
            {
                name: "Mapa de Jornadas e Intenções",
                description:
                    "Mapeamento estruturado das principais jornadas automatizáveis, regras de negócio e critérios de escalonamento.",
                type: "management"
            },
            {
                name: "Webhooks e Integrações",
                description:
                    "Microserviços serverless (Cloud Run) ou fluxos n8n para conexão com CRM, ERP, billing e sistemas internos.",
                type: "technical"
            },
            {
                name: "Guia Operacional e Métricas",
                description:
                    "Definição de KPIs como deflection, FCR, tempo médio de atendimento e taxa de escalonamento.",
                type: "management"
            }
        ],

        architectureDescription:
            "Arquitetura baseada em agentes conversacionais com Gemini via Vertex AI, enriquecimento contextual via RAG (consultando documentos e bases internas), orquestração conversacional em Dialogflow CX (máquinas de estado não-lineares), execução de ações via APIs expostas por Cloud Run e persistência de contexto em Firebase/Cloud SQL. Infraestrutura serverless garante escala automática e baixa latência.",

        architectureDiagramUrl: "",

        milestones: [
            "Mapeamento de Jornadas Prioritárias",
            "Construção do Agente com RAG",
            "Integração com Sistemas Internos",
            "Validação de Métricas e Ajustes"
        ],

        teamEstimates: [
            { role: "Conversational AI Architect", hours: 60 },
            { role: "Cloud Developer", hours: 120 },
            { role: "VUI / CX Designer", hours: 60 }
        ],

        benefits: [
            "Automação real de demandas complexas",
            "Atendimento 24/7 omnichannel (voz e chat)",
            "Redução de escalonamento humano",
            "Experiência fluida com contexto persistente",
            "Arquitetura preparada para evolução contínua"
        ],

        outcomes: [
            "Deflection sustentável acima de 60–75% em jornadas elegíveis",
            "Redução de custo operacional de atendimento",
            "Melhoria do FCR (First Contact Resolution)",
            "Base estruturada para evolução com IA generativa corporativa"
        ]
    }
};

export default automacaoCxConversationalAi;