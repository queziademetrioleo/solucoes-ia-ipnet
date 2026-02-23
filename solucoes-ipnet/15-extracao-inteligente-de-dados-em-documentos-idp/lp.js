const extracaoInteligenteIDP = {
    id: 15,
    title: "Extração Inteligente de Dados em Documentos (IDP)",
    category: "Operações & Backoffice 4.0",
    price: "R$ 90.000+",
    description:
        "Leitura, validação e estruturação automática de contratos, notas fiscais e laudos usando inteligência artificial semântica e não apenas pixels.",
    iconName: "FileText", // Represents Documents / Scanning

    details: {
        timeline: "2 a 4 meses",
        context:
            "A dependência massiva da digitação manual de notas e contratos despadronizados é lenta, cara e passível de falhas. Sistemas antigos de OCR quebram se o layout mudar. O Intelligent Document Processing (IDP) lê com contexto, entendendo PDFs, planilhas esmagadas e fotos ruins usando o poder semântico da Nuvem Google.",

        architectureDescription:
            "Criamos esteiras de Machine Learning (Pipelines) serverless que recebem imagens soltas via Storage ou E-mail. O Document AI lê organicamente os valores e a arquitetura entrega os dados limpos validados diretamente na sua base BigQuery ou API do ERP, com checagem 'Human-in-the-Loop' caso a acurácia encontre exceções.",

        architectureDiagramUrl:
            "#visualizar-diagrama-tecnico",

        technologies: [
            "Integrações de API Rest / gRPC",
            "Python MLOps",
            "Event-Driven Architecture"
        ],

        gcpProducts: [
            "Document AI / Vertex AI",
            "Cloud Storage",
            "BigQuery",
            "Cloud Functions/Run"
        ],

        milestones: [
            "Fase 1 - Mapeamento Arquitetural (Ingest)",
            "Fase 2 - Treinamento Base Document AI / Vertex AI",
            "Fase 3 - Pipeline MLOps & Orchestrator",
            "Fase 4 - Deploy Produtivo Integrado"
        ],

        artifacts: [
            {
                name: "Modelos Customizados Extratores GCP",
                description:
                    "Extratores (Processors) parametrizados e configurados com alta confiança nas lógicas contábeis/técnicas exclusivas das tipologias da empresa.",
                type: "technical"
            },
            {
                name: "Orquestrador da Esteira de Ingest",
                description:
                    "Os scripts e funções implantados empurrando, validando e alertando ativamente os laudos no seu ERP.",
                type: "technical"
            }
        ],

        benefits: [
            "Redução Sensível da Folha (FTE): Processamentos de 15 minutos do backoffice viram rotinas escaláveis executadas em 3 segundos limpos",
            "Auditorias Instântaneas e Bases Vivas: Eliminação do 'arquivo morto'. Transformação de PDFs espalhados em consultas estruturadas BigQuery (Searchability)",
            "Garantia de Human-in-the-Loop acionando os especialistas apenas para focar nas incertezas e anomalias de confiança do algoritmo"
        ],

        outcomes: [
            "SLA comercial destravado: Aprovações financeiras e faturamentos concluídos no próprio dia de ingresso das notas",
            "Zero quebras por falhas de Pixel: Mapeamentos puramente contextuais (Machine Learning), imunes à mudança da logo ou fonte da fatura fornecedora"
        ],

        teamEstimates: [
            { role: "Data Engineer & ML Specialist", hours: 240 }
        ]
    }
};

export default extracaoInteligenteIDP;
