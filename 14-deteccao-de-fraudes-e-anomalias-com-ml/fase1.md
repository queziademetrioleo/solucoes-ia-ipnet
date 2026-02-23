# 📌 FASE 1 — Decisão Estratégica

## Detecção de Fraudes e Anomalias com ML

Nenhuma operação massiva sobrevive hoje protegida apenas por "regras de Se/Então". As fraudes são orquestradas por algoritmos, e tentar pará-las com analistas humanos ou sistemas rígidos é perder a corrida técnica e financeira.

Esse serviço precisa ser posicionado corretamente para não virar:

* Um dashboard "pós-morte" dizendo quanto a empresa perdeu ontem.
* Um sistema legado de "score" genérico que bloqueia clientes bons (Falso Positivo) e estraga o CX (Customer Experience).

---

## 🧠 Leitura Real de Mercado

A miopia do mercado financeiro, de varejo e logística é tratar a fraude como um "custo da operação". As empresas aceitam perder 1% a 5% do faturamento por que seus sistemas de detecção atuais são burros: eles barram o atacante apenas *depois* que o padrão já foi exaurido.

O problema central estrutural é a latência e a complexidade.

Qual é a realidade que a IPNET ataca?
> **Modelos baseados em regras não escalam. Quando o fraudador muda o vetor de ataque, a regra falha. A Detecção de Fraudes real exige modelos dinâmicos de Machine Learning que aprendem os novos vetores e cortam a transação em menos de 100 milissegundos.**

Nós entramos para estancar a sangria. Não com consultoria, mas implementando uma barreira inteligente em streaming. 

---

## 📊 Avaliação Estratégica

| Critério            | Avaliação       |
| ------------------- | --------------- |
| Demanda             | Altíssima (Mercados financeiros, e-commerce, saúde) |
| Competição          | Média (Muitas plataformas SaaS de prateleira, poucas sob medida nativas Cloud) |
| Ticket              | Alto (R$ 180.000+)  |
| ROI percebido       | Altíssimo, rastreável no primeiro mês operacional (Loss Prevention) |
| Porta de entrada    | Boa (As empresas sabem sua dor em Reais/Dólares) |
| Potencial de upsell | Alto (Escala natural para MLOps e novos vetores) |

---

## 🔥 Pontos Positivos desse Serviço

✔ O "Business Case" faz as contas sozinho ("Se a fraude cair de 2% para 0.5%, o projeto se paga em semanas").
✔ Assenta raízes profundas na infraestrutura (Dataflow / Vertex AI), dificultando a troca de provedor futuramente (lock-in tecnológico positivo).
✔ Afasta a concorrência que vende caixa-preta (O modelo será da empresa governado pelo GCP).
✔ Alavanca a governança de dados da empresa em tempo real.

---

## ⚠️ Onde Está Frágil

1. Dependência extrema de dados históricos tagueados (precisamos saber nas bases prévias do cliente o que foi fraude e o que não foi para treinar modelos supervisionados).
2. Pode gerar atrito inicial com a operação de negócios da empresa caso as taxas de "Falso Positivo" precisem ser ajustadas durante o UAT, rejeitando transações válidas nos primeiros dias de calibração.
3. Exige arquitetura técnica brutal em Streaming, que difere drasticamente do processamento em Lote (Batch).

---

## 🎯 Diferencial que Precisa Ficar Claro

Não alugamos acesso a uma API de Antifraude SaaS onde a plataforma rouba seus dados para treinar o algoritmo dela.

Vendemos:

> **Construção do seu próprio Motor Principal Corretivo. Modelos probabilísticos operando em arquitetura serverless de baixa latência (Google Cloud) tomando decisões impiedosas contra as fraudes e anomalias na fronteira do transacional.**

Esse é o nosso posicionamento: Autonomia e Proteção algorítmica sob a sua governança.

---

## 💡 Ajuste Estratégico Importante

O serviço deve focar obrigatoriamente nestes pilares:
* **Detecção em Tempo Real (Streaming):** Não adianta detectar fraude horas depois no BigQuery. O Scoring precisa acontecer "em trânsito".
* **Redução Drástica de Falsos Positivos:** Promover que ML não apenas "para" o fraudador, mas "libera" o cliente real, aumentando a receita.
* **Técnicas Não Supensionadas (Isolation Forests / Autoencoders):** A IA conseguindo bloquear golpes que *nunca* viu antes analisando a "estranheza" matemática da requisição.

---

## 🔥 Decisão Final

✅ Manter como nosso **Produto Estrela de Finanças e Segurança**

> **Detecção de Fraudes e Anomalias com ML — Inteligência rápida e implacável para reter seu capital contra ataques cibernéticos e operacionais.**

É o escudo definitivo para a escala de clientes gigantes sem fricção.
