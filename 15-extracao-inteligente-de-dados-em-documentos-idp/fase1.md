# 📌 FASE 1 — Decisão Estratégica

## Extração Inteligente de Dados em Documentos (IDP)

Esse serviço é onde exterminamos o trabalho robótico feito por humanos no backoffice das empresas.

Ele precisa ser posicionado corretamente para não virar:

* Apenas um sistema burro de OCR (Reconhecimento Óptico de Caracteres) que quebra se a fonte do PDF mudar.
* Um projeto de digitalização genérico de papelada.

---

## 🧠 Leitura Real de Mercado

Milhares de pessoas em grandes corporações passam 8 horas por dia lendo PDFs, contratos, notas fiscais, CNHs e laudos médicos apenas para digitar essas informações no ERP (SAP, TOTVS, Salesforce). 

O problema central é triplo:
1. É lento e impede a escala da operação.
2. É caro e conta com alto índice de erro humano (digitação errada).
3. OCR tradicionais baseados em "coordenadas (x, y)" quebram diariamente porque cada fornecedor manda a fatura num formato diferente.

Qual é a realidade que a IPNET ataca?
> **O Intelligent Document Processing (IDP) não lê pixels, ele entende contexto. Usamos Modelos de Linguagem e IA especializada do Google para extrair os dados organizados mesmo que o documento seja uma foto amassada de celular ou um contrato fora do padrão.**

Quando automatizamos o fluxo de entrada de documentos, o backoffice vira uma linha de aprovação focada em exceções, e a margem de lucro da operação do cliente salta no mesmo mês.

---

## 📊 Avaliação Estratégica

| Critério            | Avaliação       |
| ------------------- | --------------- |
| Demanda             | Altíssima (Jurídico, Saúde, Logística e Seguradoras) |
| Competição          | Baixa (A maioria ainda vende OCR baseado em regras antigas) |
| Ticket              | Alto (R$ 90.000+)  |
| ROI percebido       | Altíssimo, rastreável pela redução de horas ativas FTE |
| Porta de entrada    | Excelente (Fácil de provar em uma PoC rápida com 50 documentos) |
| Potencial de upsell | Muito alto (Escala de cloud storage, RAG jurídico conectável) |

---

## 🔥 Pontos Positivos desse Serviço

✔ Problema tangível. A diretoria sabe exatamente quantos salários paga pra "lançar nota".
✔ Visibilidade imediata: Uma conta de 15 minutos virando um processamento de 2 segundos.
✔ Integração pesada nativa **GCP (Document AI)**.
✔ Reduz absurdamente gargalos de SLA com clientes finais (ex: aprovação de sinistro em seguradora).
✔ Gera uma dependência arquitetural positiva. 

---

## ⚠️ Onde Está Frágil

1. Documentos escritos à mão de forma ininteligível ainda são o "calcanhar de aquiles" global da tecnologia.
2. Clientes querendo 100% de acerto no Dia 1. É um modelo de IA que atinge "Human-Level", mas lida com ruídos sistêmicos.
3. Se o ERP do cliente não tiver API boa, o gargalo sai do papel e vai pra integração.

---

## 🎯 Diferencial que Precisa Ficar Claro

Não instalamos digitalizadores.

Vendemos:

> **Esteira autônoma e inteligente de extração. Da recepção do e-mail ao lançamento no seu ERP, o IDP IPNET usa Machine Learning estrutural GCP para entender, validar e orquestrar dezenas de milhares de laudos e contratos diariamente.**

Esse é o nosso trunfo. A autonomia da inteligência corporativa focada em dados desestruturados.

---

## 💡 Ajuste Estratégico Importante

O serviço deve focar obrigatoriamente nestes pilares:
* **Entendimento Semântico:** Destacar o poder do Google Document AI / Vertex AI de entender o "que é" um endereço invés de só ler a palavra.
* **Escala:** A esteira não reclama se num dia chegarem 10 mil notas em vez de 1.
* **Human in the Loop:** A arquitetura sempre prevê uma tela onde o funcionário só atua se a "Confiança da IA" cair abaixo de 95%.

---

## 🔥 Decisão Final

✅ Manter como nosso **Serviço Campeão de Eficiência Operacional (Backoffice 4.0)**

> **Extração Inteligente de Dados em Documentos (IDP) — O fim da digitação manual de relatórios, laudos e faturas.**

Transforma dados isolados presos em imagens na fundação de pesquisa e transação do negócio.
