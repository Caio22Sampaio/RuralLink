# Especificação de Requisitos — Rural Link

**Versão:** 1.0
**Status:** Rascunho inicial (base para prototipação e arquitetura técnica)

## 1. Introdução

Este documento descreve os requisitos funcionais (RF) e não funcionais (RNF) do sistema Rural Link — uma plataforma que conecta pequenos produtores rurais diretamente a compradores profissionais (restaurantes, hotéis, padarias etc.), eliminando intermediários e organizando negociação, logística e recorrência de compra.

O objetivo é servir de base para as próximas etapas do ciclo de desenvolvimento: arquitetura técnica, modelagem de banco de dados e construção do MVP. Os requisitos foram derivados da especificação de telas já produzida e do modelo de negócio discutido nas etapas anteriores de design.

## 2. Atores do sistema

| Ator | Descrição |
|---|---|
| **Produtor** | Pessoa física ou pequena propriedade rural que publica o que tem disponível para venda. Perfil com baixa familiaridade tecnológica — requisitos de usabilidade são especialmente restritivos para esse ator. |
| **Comprador** | Estabelecimento profissional (restaurante, hotel, padaria, cozinha industrial etc.) que compra insumos de forma recorrente. Perfil profissional, tolerante a interfaces mais densas. |
| **Administrador** | Equipe interna da plataforma, responsável por moderação, aprovação de cadastros e acompanhamento de métricas. |

## 3. Requisitos Funcionais

### 3.1 Módulo Produtor

| ID | Descrição | Prioridade |
|---|---|---|
| RF01 | O sistema deve permitir que o produtor se cadastre usando apenas número de telefone, com validação por código enviado via WhatsApp/SMS. | Essencial |
| RF02 | O sistema deve permitir que o produtor publique um produto informando categoria, quantidade, preço, data de colheita e dias disponíveis para entrega. | Essencial |
| RF03 | O sistema deve sugerir automaticamente um preço de referência para o produto, baseado no preço médio praticado na região. | Essencial |
| RF04 | O sistema deve permitir editar ou remover um produto publicado. | Essencial |
| RF05 | O sistema deve listar os produtos publicados pelo produtor, com respectivo status (disponível, vendido, expirado). | Essencial |
| RF06 | O sistema deve notificar o produtor quando um pedido de compra for recebido. | Essencial |
| RF07 | O sistema deve permitir que o produtor aceite ou recuse um pedido recebido. | Essencial |
| RF08 | O sistema deve exibir os detalhes de entrega (endereço, horário) somente após o produtor aceitar o pedido. | Importante |
| RF09 | O sistema deve replicar notificações importantes (novo pedido, confirmação de aceite) via WhatsApp. | Essencial |
| RF10 | O sistema deve permitir a edição dos dados básicos de perfil do produtor (nome, telefone, localização, formas de pagamento aceitas). | Importante |

### 3.2 Módulo Comprador

| ID | Descrição | Prioridade |
|---|---|---|
| RF11 | O sistema deve permitir cadastro completo do estabelecimento comprador (nome, CNPJ, tipo de estabelecimento, endereço de entrega, responsável pelas compras). | Essencial |
| RF12 | O sistema deve exibir na tela inicial os produtos em "colheita da semana" da região do comprador, com base em sazonalidade. | Importante |
| RF13 | O sistema deve exibir ofertas de excedente agrícola disponíveis na região, com destaque de preço especial. | Desejável |
| RF14 | O sistema deve permitir busca de produtos com filtros por tipo, distância, preço, data de colheita e tipo de produção (agricultura familiar, orgânico etc.). | Essencial |
| RF15 | O sistema deve exibir o detalhe de uma oferta: produtor, distância, data de colheita, prazo de entrega e pedido mínimo. | Essencial |
| RF16 | O sistema deve permitir adicionar itens de diferentes produtores a um mesmo carrinho de compra. | Essencial |
| RF17 | O sistema deve consolidar o pedido agrupando os itens por produtor, exibindo quantidade, preço e total por grupo. | Essencial |
| RF18 | O sistema deve executar um algoritmo de correspondência ("match") entre a demanda solicitada e as ofertas disponíveis, considerando produto, quantidade, preço, distância e data. | Essencial |
| RF19 | O sistema deve permitir configurar uma lista de compra recorrente, organizada por dia da semana. | Importante |
| RF20 | O sistema deve permitir repetir automaticamente um pedido anterior. | Importante |
| RF21 | O sistema deve manter histórico de pedidos realizados pelo comprador. | Importante |
| RF22 | O sistema deve permitir favoritar produtores para acesso rápido em compras futuras. | Desejável |
| RF23 | O sistema deve gerar relatórios de volume comprado por produtor/mês, economia estimada e gasto por categoria, disponíveis apenas no plano profissional. | Desejável |
| RF24 | O sistema deve exibir um indicador social de impacto (quantidade de produtores locais atendidos, valor movimentado na agricultura local). | Desejável |

### 3.3 Módulo Administrador

| ID | Descrição | Prioridade |
|---|---|---|
| RF25 | O sistema deve permitir a aprovação ou reprovação de cadastros de produtores e compradores. | Essencial |
| RF26 | O sistema deve permitir a moderação de anúncios, sinalizando preços fora do padrão e removendo publicações duplicadas. | Importante |
| RF27 | O sistema deve exibir métricas gerais da plataforma (produtores ativos, compradores ativos, volume transacionado), filtráveis por região. | Importante |
| RF28 | O sistema deve exibir um índice preditivo de produção local, baseado em histórico de colheita, sazonalidade e demanda registrada. | Desejável (Fase 2) |
| RF29 | O sistema deve permitir o agrupamento de entregas por região/rota. | Desejável (Fase 2) |

### 3.4 Requisitos gerais do sistema

| ID | Descrição | Prioridade |
|---|---|---|
| RF30 | O sistema deve calcular comissão sobre transações realizadas, com percentual configurável (ex: 5% a 10%). | Importante |
| RF31 | O sistema deve oferecer um plano gratuito e um plano profissional para compradores, com diferenciação de funcionalidades disponíveis. | Importante |
| RF32 | O sistema deve manter um cadastro estruturado de produtos, com categoria, unidade de medida, sazonalidade, região e preço médio histórico. | Essencial |

## 4. Requisitos Não Funcionais

### 4.1 Usabilidade

| ID | Descrição |
|---|---|
| RNF01 | A publicação de um produto pelo produtor não deve exigir mais que 5 toques do início ao fim do fluxo. |
| RNF02 | A interface do produtor não deve exigir digitação além de valores numéricos (quantidade, preço) e deve priorizar seleção sobre digitação sempre que possível. |
| RNF03 | O sistema deve ser utilizável por pessoas com baixa familiaridade tecnológica, priorizando ícones combinados com texto, poucos elementos por tela e ausência de gestos escondidos (como arrastar para revelar opções). |
| RNF04 | A interface do comprador deve permitir comparar as informações essenciais de uma oferta (produto, preço, distância, quantidade) em uma única tela, sem exigir múltiplas navegações. |

### 4.2 Desempenho

| ID | Descrição |
|---|---|
| RNF05 | O algoritmo de matching entre demanda e oferta deve retornar resultados em tempo aceitável mesmo com crescimento da base de produtores (meta a ser validada em teste de carga). |
| RNF06 | O carregamento da tela inicial, tanto do produtor quanto do comprador, deve ocorrer em até 3 segundos em conexão 3G. |

### 4.3 Confiabilidade e disponibilidade

| ID | Descrição |
|---|---|
| RNF07 | Os itens adicionados ao carrinho pelo comprador devem permanecer salvos mesmo que o app seja fechado antes da finalização do pedido. |
| RNF08 | O sistema deve manter disponibilidade compatível com uso comercial recorrente, com janelas de manutenção programadas e comunicadas previamente. |

### 4.4 Segurança

| ID | Descrição |
|---|---|
| RNF09 | A autenticação do produtor deve ocorrer via código de verificação enviado por canal externo (SMS/WhatsApp), sem exigir criação ou memorização de senha. |
| RNF10 | Os dados cadastrais de produtores e compradores devem ser armazenados de forma protegida, com controle de acesso por perfil. |
| RNF11 | O acesso ao painel administrativo deve ser restrito por autenticação e controle de perfil (RBAC), distinto do login de produtores e compradores. |

### 4.5 Compatibilidade

| ID | Descrição |
|---|---|
| RNF12 | O sistema deve tolerar instabilidade de conexão típica de áreas rurais, sem perda dos dados já preenchidos em um formulário em andamento. |
| RNF13 | O MVP deve funcionar via web responsiva, sem exigir instalação de aplicativo nativo — consistente com a decisão de testar o modelo antes de investir em app dedicado. |

### 4.6 Manutenibilidade e escalabilidade

| ID | Descrição |
|---|---|
| RNF14 | A arquitetura deve permitir expansão gradual de região geográfica (início: Viçosa e cidades próximas) sem necessidade de redesenho do banco de dados. |
| RNF15 | A arquitetura deve permitir a inclusão futura de uma rede de entregadores parceiros (Fase 3 da logística) sem impacto estrutural nos módulos já existentes. |

## 5. Regras de negócio complementares

- **Logística em fases:** Fase 1 — entrega feita diretamente pelo produtor ao comprador; Fase 2 — agrupamento de rotas por proximidade regional; Fase 3 — rede de entregadores parceiros.
- **Modelo de receita:** sem cobrança do produtor na fase inicial (foco em gerar oferta); comissão sobre transação e/ou assinatura do comprador (plano profissional) como fontes principais.
- **Escopo geográfico do MVP:** restrito a Viçosa e cidades próximas, antes de qualquer expansão regional.

## 6. Fora do escopo do MVP

- Aplicativo nativo (iOS/Android) — o MVP roda em web responsiva combinada com WhatsApp
- Rede própria de entregadores (prevista apenas para a Fase 3)
- Venda de dados agregados/anonimizados como fonte de receita
- Certificações formais de produtores (selos oficiais de qualidade)

## 7. Histórico de versões

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | 22/08/2026 | Primeira versão, derivada da especificação de telas |
