const sistemaIaMcp = {
    id: 13,
    title: "Sistema Corporativo de IA com Integração via MCP",
    category: "Integração & IA Corporativa",
    price: "R$ 120.000+",
    description:
        "Conecte o Gemini Enterprise e ecossistemas de IA nativamente aos seus sistemas vitais através do protocolo universal com total governança e segurança.",
    iconName: "Network", // Represents Connections / Unified Protocol

    details: {
        timeline: "3 a 4 meses",
        context:
            "A criação de IAs corporativas exigia o desenvolvimento de centenas de integrações (APIs), um pesadelo de engenharia que introduz código frágil e grandes ameaças na violação de permissionamento. O mercado demandava um 'USB da Inteligência Artificial' para orquestrar os sistemas sem silos. E ele chegou: O Model Context Protocol (MCP).",

        architectureDescription:
            "Nossos arquitetos utilizam o ADK (Agentic Development Kit) como o cérebro orquestrador (embarcado no Gemini), utilizando servidores baseados no padrão universal seguro MCP exclusivamente como cabos de conexão. O ADK delega tarefas baseando-se no contexto da requisição.",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "ADK (Agentic Development Kit)",
            "Model Context Protocol (MCP)",
            "Python / Go"
        ],

        gcpProducts: [
            "Vertex AI (Gemini Enterprise)",
            "Cloud Run",
            "Cloud IAM"
        ],

        milestones: [
            "Fase 1 - Setup Governança Inicial",
            "Fase 2 - Desenvolvimento dos Conectores (MCP Servers)",
            "Fase 3 - Orquestração com ADK e Gemini Enterprise",
            "Fase 4 - Deploy Autorizativo (Go-Live)"
        ],

        artifacts: [
            {
                name: "Servidores Conectivos MCP",
                description:
                    "Os micro-serviços implantados nas suas Clouds corporativas provendo pontes coesas de inteligência nativa sem restrição baseada em APIs precárias.",
                type: "technical"
            },
            {
                name: "Agente ADK Orquestrador (no Gemini)",
                description:
                    "A inteligência autônoma regendo a decisão de qual conector usar, mantendo governança absoluta validada baseada no perfil e permissionamento.",
                type: "technical"
            }
        ],

        benefits: [
            "Governança de IAM Integrada: O acesso ao sistema obedece a hierarquia do login do funcionário e as políticas do Cloud IAM",
            "Padronização Universal Construtiva: Substitutos perfeitos de APIs ponto a ponto, derrubando complexidades customizadas em escala",
            "Agilidade extrema no onboarding de novos softwares à Inteligência global da empresa"
        ],

        outcomes: [
            "Super-Funcionário unificado, integrando a fluidez da nuvem do chat às operações ou transações pesadas das entranhas da corporação",
            "Redução em mais de 70% na dívida técnica de conexões de APIs fragilizadas historicamente pro front-end IA"
        ],

        teamEstimates: [
            { role: "Senior AI Engineer", hours: 180 }
        ]
    }
};

export default sistemaIaMcp;
