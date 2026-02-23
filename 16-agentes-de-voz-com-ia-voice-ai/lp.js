const agentesDeVozIA = {
    id: 16,
    title: "Agentes de Voz com IA (Voice AI)",
    category: "Inovação Comercial e Hiper-Automação",
    price: "R$ 150.000+",
    description:
        "O fim do Call Center engessado. Agentes robóticos conversacionais fluídos operando vendas, atendimento e cobrança em telefone com latência de milissegundos e empatia clonada.",
    iconName: "Mic", // Represents Voice / Communication / Live Call

    details: {
        timeline: "3 a 4 meses",
        context:
            "A frustração universal: atendentes humanos geram custos astronômicos de turnover, enquanto URAs burras enfurecem o cliente. O Voice AI funde um cérebro cognitivo conversacional de Grandes Modelos de Linguagem (LLMs) com sintetizadores neurais humanizados (ElevenLabs), entregando um robô que sorri, raciocina e atende milhares de chamadas de forma idêntica a um humano experiente.",

        architectureDescription:
            "Arquitetura MultiCloud focada em Latência Zero. A fala do cliente (SIP/Telefonia) entra pelo servidor LiveKit de borda e é convertida em texto instantâneo. O LLM Llama (hospedado na Oracle/GCP) ou Gemini raciocina sobre as regras de negócio em RAG, enquanto a ElevenLabs devolve o áudio sintetizado e humanizado de volta para o gateway PABX.",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "ElevenLabs (Voice Synthesis)",
            "LiveKit / WebRTC",
            "SIP / VoIP Integration"
        ],

        gcpProducts: [
            "Oracle OCI (Llama LLM)",
            "Google Vertex AI",
            "Cloud Run (Edge Servers)"
        ],

        milestones: [
            "Fase 1 - Provisionamento Orquestrador e Telefônico",
            "Fase 2 - Cérebro RAG/LLM Integrado e Prompt Base",
            "Fase 3 - Seleção, Casting e Persona Clínica Vocal",
            "Fase 4 - Deploy Omni e Operação Escalável"
        ],

        artifacts: [
            {
                name: "Core Orquestrador MultiCloud Voice AI",
                description:
                    "Os servidores LiveKit providos e a malha de conexão orquestrada (ADK) unindo sua telefonia nativa SIP à inteligência sem hiatos ou travamentos.",
                type: "technical"
            },
            {
                name: "Persona Treinada Custom e Dashboards",
                description:
                    "Sua IA base Llama treinada em RAG operando a Entonação ElevenLabs clonada exclusivamente, unida às views gerenciais extraindo texto transcricional do BI.",
                type: "technical"
            }
        ],

        benefits: [
            "Extinção drástica de infraestrutura de PAs terceirizadas (Cost-Saving), evadindo passivos trabalhistas do Call Center em ROI Trimestral justificado",
            "Campanhas elásticas absolutas sem contratações: Capacidade serverless de iniciar 10 mil negociações simultâneas sorridentes no mesmo minuto para leads esquecidos",
            "Empatia Clone (Human-Level): O fim exclusivo da 'voz morta de robô' da URA; implementa-se pausas pragmáticas, suspiros vocais e naturalidade da IA na venda"
        ],

        outcomes: [
            "Integração Sistêmica: A Voice AI liga pra cobrar a fita atrasada e insere nativamente o parcelamento aprovado num Data Warehouse (Big/Oracle) na mesma via",
            "Análise de 100% da operação: A matriz retém o dashboard textual analítico infinito com motivos de insatisfação em 40 mil ligações convertidas (Speech-to-Text) ao Banco de Dados"
        ],

        teamEstimates: [
            { role: "Voice AI Engineer & Cloud Architect", hours: 280 }
        ]
    }
};

export default agentesDeVozIA;
