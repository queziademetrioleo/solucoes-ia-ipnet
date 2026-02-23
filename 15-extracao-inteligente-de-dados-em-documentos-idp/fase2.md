# 📌 FASE 2 — MODELAGEM

# Extração Inteligente de Dados em Documentos (IDP) IPNET

---

## ✔ O que exatamente é?

Nós, da **IPNET**, projetamos cadeias robóticas de processamento em massa (Intelligent Document Processing - IDP) integrando nativamente a capacidade de leitura óptica e linguagem generativa da Google Cloud à esteira corporativa diária.

* Em vez de sistemas baseados em *templates* ("o CNPJ estará nos primeiros 10 milímetros"), orquestramos Modelos Inteligentes GCP treinados para "entender" o contexto de cada documento desestruturado. O modelo sabe que `Tax ID` e `CNPJ` são correspondentes.
* As soluções são distribuídas para pegar faturas espalhadas no Workspace (Gmail, Drive) ou Sistemas File Storage da empresa, processá-las de 500 páginas e salvar apenas os dados "chaves-valor" limpos (JSON) diretamente pro BigQuery ou SAP do cliente.
* Inserimos *Confidence Scores* (Limiares de Confiança) na extração. Se o laudo estiver borrado e a IA confiar apenas 70%, ela pausa aquele único documento pedindo confirmação humana, agindo como um estagiário ultra-veloz.

Importante:
Vendemos o pipeline de ponta a ponta na nuvem. A escalabilidade garante que sua companhia não pague o mesmo preço caro em infraestrutura no dias fracos e tenha a potência de uma fazenda de servidores nos dias críticos de fechamento de mês. Tudo é gerenciado e hospedado ativamente conosco.

---

## ✔ Qual problema resolvemos?

Negócios robustos escalam suas vendas, mas o gargalo continua na área de documentação. Dezenas ou centenas de profissionais sêniores usando seu cérebro de R$10k para transcrever RGs e NFs amassadas e checar assinaturas, errando códigos fiscais e sofrendo prejuízo contábil no processo.

---

### 🔥 1. A Esteira Frágil de Leitura Despadronizada

"Nós abrimos para 100 fornecedores diferentes e agora nosso time gasta semanas conferindo cada nota no portal da Sefaz".

Sistemas antigos falham em interpretar fotos enviesadas. Nossa orquestração usa os pilares GCP de OCR cognitivo. O modelo absorve planilhas sujas, fotos escuras e arquivos nativos, decifra a tabela embutida, consolida os valores dos itens e devolve pro faturamento num instante, alinhado e checado em compliance.

---

### 🔥 2. A Ilha de Dados Desestruturados

O histórico jurídico ou laboratorial de milhões de contratos fica impresso ou em PDFs estáticos. Eles representam "Silos Mortos". Document AI extrai as cláusulas multas e as injeta numa base pesquisável. O setor de auditoria sai das semanas de garimpo para consultas instantâneas ("quais laudos do médico X continham o sintoma inflamatório na página secundária?").

---

## ✔ Para quem é?

### Perfil ideal:

* Seguradoras, Planos de Saúde (Auditoria Clínica), Indústrias Manufatureiras, Transportadoras Logísticas (Canhotos de Entrega) e Setores de Legal/Compliance lidando com contratos massivos e faturas terceirizadas diariamente.
* Lideranças de Operações, CFOs e CSCs (Centros de Serviços Compartilhados) que buscam escalabilidade de processos e SLAs instantâneos ou cortes dramáticos na folha de suporte "copia e cola".
* Negócios prontos para aderir nativamente ao Storage do Google como cérebro confiável desses documentos após processados.

---

### Não é para:

* PMEs ou despachantes pequenos onde a extração de 50 documentos não justifica os 100k de uma implementação serverless.
* Ambientes estáticos onde a documentação primária seja estritamente manual (cadernetas pautadas à mão) - o OCR manuscrito, apesar de avançado, costuma ter aderência baixa da acurácia que o corporativo exige em 100% de confiança para bilhetagem comercial.

---

## ✔ O que está incluso?

### 🔹 1. Mapeamento Arquitetural (Ingest)
* Concepção de onde o documento "nasce" (Integrações com Cloud Storage, SAP, Email ou APIs transacionais web).

### 🔹 2. Treinamento Base Document AI / Vertex AI 
* O processamento semântico no Google, dividindo Categorização (sabendo quem é nota fiscal frente a contrato) e e Extraction (isolando cada chave-valor desejado).

### 🔹 3. Pipeline MLOps & Orchestrator
* O coração do motor Serverless (Cloud Functions, Cloud Run) injetando o dado e enviando pro destino sem atraso, ou devolvendo o sinal de erro caso a confiabilidade caia da faixa de corte (90%).

### 🔹 4. Deploy Produtivo Integrado
* Documentos transacionando autonomamente do recebimento à base ativa limpa sob o olhar supervisor do C-level.

---

## ✔ O que NÃO está incluso?

* Mudanças bruscas no ERP legado interno da cliente (IPNET envia os dados limpos nas APIs fornecidas prontas ou aos provedores padrões da nuvem como BigQuery via insert). 

---

## ✔ Entregáveis claros

### 🎯 Executivo
* Prova massiva (geralmente documentada onde em POC passamos 100 notas reais em 1 minuto provando 99% de acurácia nos campos financeiros).

### 🧠 Técnico
* Extratores validados implantados (Modelos Customizados GCP) pro seu formato corporativo nativo e os scripts dos orquestradores que rodam como serviços na VPC segura.

### 📊 Estratégico
* Escala global de Storage atrelada a bases analíticas com todos os PDFs convertidos permanentemente em dados digitais consultáveis no Looker ou tabelas. 

---

## ✔ Duração

Fluxo conciso a ser modelado na Squad Data AI:
**2 a 4 Meses**. Inclui refinamentos contínuos de OCR das bordas de erros dos documentos até o fechamento com acurácia corporativa confiável do banco de destino.

---

## ✔ Complexidade

🔴 Técnica: Alta. Tecnologias massivas acopladas, lidando com imperfeições orgânicas gigantes ("PDFs péssimos") dependendo de tunnings profundos de IA e Visão do Google Document.
🟡 Comercial: Média-Alta (Venda consultiva tangível baseada no ROI imediato dos passivos de tempo dos funcionários).
🟢 Integração e Cloud Run: Operação impecável ao GCP ligando storage a processamento e saídas.

---

# 💰 Estrutura de Versões

### Core Intelligent Document Automation (R$ 90.000+)
Estabelecimento da primeira linha esteira transacional (1 a 3 tipos de documentos core) conectados ao storage Google e extração cognitiva Vertex AI para entrega aos bancos estruturados em 3 meses limpos.
