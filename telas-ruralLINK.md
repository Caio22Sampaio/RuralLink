# Especificação de telas — Rural Link

Documento de referência para prototipação. Cobre os três perfis de uso do sistema: **Produtor**, **Comprador** (restaurantes, hotéis etc.) e **Administrador**. Cada tela traz objetivo, elementos, interações, navegação (de onde vem / pra onde vai) e notas de design.

**Princípio geral do produto:** a complexidade do sistema não desaparece — ela migra pra onde tem gente preparada pra lidar com ela. O comprador profissional lida bem com filtros, comparação e relatórios (é o trabalho dele). O produtor não deveria precisar "aprender a usar um app" pra vender o que colheu; a interface é que se adapta ao jeito dele de trabalhar.

---

## Sumário

1. Telas do Produtor
2. Telas do Comprador
3. Painel Administrativo
4. Padrões gerais de navegação

---

## 1. Telas do Produtor

Regra de ouro deste fluxo: **uma decisão por tela, texto grande, ícones, mínimo de digitação**. Sempre que possível, trocar "digitar" por "escolher".

### 1.1 Login / Cadastro simplificado

**Objetivo:** dar acesso ao produtor com o mínimo de fricção possível.

**Elementos:**
- Campo de telefone (único campo obrigatório nesta tela)
- Botão "Entrar" grande, centralizado
- Texto de apoio: "Você vai receber um código por WhatsApp"

**Interações:**
- Produtor digita telefone → recebe código via WhatsApp/SMS → digita código de 4 dígitos → entra
- Sem senha, sem cadastro de e-mail, sem captcha visual complexo

**Navegação:**
- Entrada: primeira tela do app (ou logout)
- Saída: ao validar o código, vai direto pra **Tela inicial (1.2)**. Se for o primeiro acesso, antes de abrir a Home pede só nome e localização (via GPS, sem digitar endereço)

**Notas de design:** nenhum campo de "perfil profissional" aqui — isso pode ser preenchido aos poucos, depois, dentro do Perfil (1.12), nunca como barreira de entrada.

---

### 1.2 Tela inicial (Home)

**Objetivo:** ponto de partida do produtor, focado na ação mais frequente: publicar o que colheu.

**Elementos:**
- Botão único, grande, centralizado no topo: **"Adicionar produto"**
- Abaixo, lista dos produtos já publicados (foto, nome, quantidade restante, status)
- Barra de navegação inferior fixa: Novo produto | Meus produtos | Pedidos | Perfil

**Interações:**
- Tocar no botão principal → abre o wizard de cadastro (1.3)
- Tocar em um item da lista → abre Detalhe/edição de produto (1.9)

**Navegação:**
- Entrada: login, ou ao voltar de qualquer uma das 4 telas da barra inferior
- Saída: Novo produto (1.3), Meus produtos (1.8), Pedidos (1.10), Perfil (1.12) — acesso direto, sem hierarquia

**Notas de design:** nada de dashboard com gráficos, métricas ou menus laterais. A primeira coisa que o produtor vê é a ação que ele mais faz.

---

### 1.3 Cadastro de produto — Etapa 1: Categoria

**Objetivo:** identificar o que está sendo vendido, sem digitação.

**Elementos:**
- Grade de ícones com os produtos mais comuns da região (tomate, banana, couve, abacate, cenoura...)
- Opção "Outro" no final da grade, que abre campo de foto + nome curto
- Botão "Avançar" (desabilitado até selecionar algo)
- Botão "X" no canto superior esquerdo (fecha o fluxo)

**Interações:**
- Toque único seleciona o produto e já avança automaticamente (não precisa de botão extra nesse caso específico)

**Navegação:**
- Entrada: Home (1.2), botão "Adicionar produto"
- Saída: Etapa 2 — Quantidade (1.4). "X" volta pra Home com aviso "Sair sem salvar?"

---

### 1.4 Cadastro de produto — Etapa 2: Quantidade

**Objetivo:** informar quanto tem disponível, com o mínimo de digitação.

**Elementos:**
- Título: "Quanto você tem de [produto selecionado]?"
- Botões de seleção rápida (10kg, 20kg, 50kg...) + opção "Digitar outro valor"
- Botões +/− para ajuste fino
- Rodapé fixo: **Voltar** | **Avançar**

**Navegação:**
- Entrada: Etapa 1 (1.3)
- Saída: Voltar → Etapa 1; Avançar → Etapa 3 (1.5)

---

### 1.5 Cadastro de produto — Etapa 3: Preço sugerido

**Objetivo:** definir o preço com apoio de referência de mercado, reduzindo insegurança do produtor.

**Elementos:**
- Texto: "Preço sugerido: R$ X/kg, baseado no mercado local"
- Campo de preço pré-preenchido com o valor sugerido (produtor só confirma ou ajusta)
- Rodapé fixo: **Voltar** | **Avançar**

**Navegação:**
- Entrada: Etapa 2 (1.4)
- Saída: Voltar → Etapa 2; Avançar → Etapa 4 (1.6)

---

### 1.6 Cadastro de produto — Etapa 4: Disponibilidade

**Objetivo:** informar quando o produto pode ser colhido/entregue.

**Elementos:**
- Calendário simples com poucos dias visíveis por vez (próximos 7-10 dias)
- Toque para marcar dias disponíveis
- Rodapé fixo: **Voltar** | **Avançar**

**Navegação:**
- Entrada: Etapa 3 (1.5)
- Saída: Voltar → Etapa 3; Avançar → Etapa 5 (1.7)

---

### 1.7 Cadastro de produto — Etapa 5: Confirmação

**Objetivo:** revisar tudo antes de publicar, com resumo visual simples.

**Elementos:**
- Card de resumo: foto/ícone do produto, quantidade, preço, disponibilidade
- Botão grande de destaque: **"Publicar"** (substitui o "Avançar" nesta etapa)
- Botão "Voltar" (volta pra Etapa 4)

**Interações:**
- Publicar → produto entra no ar imediatamente

**Navegação:**
- Entrada: Etapa 4 (1.6)
- Saída: após publicar, volta automaticamente pra **Home (1.2)**, onde o produto novo já aparece na lista — não existe tela de sucesso separada, pra não adicionar mais um passo

---

### 1.8 Meus produtos

**Objetivo:** ver e gerenciar o que já está publicado.

**Elementos:**
- Lista com foto, nome, quantidade restante, status (Disponível / Vendido / Expirado)
- Filtro simples por status (opcional, só se a lista crescer)

**Interações:**
- Tocar num item → abre Detalhe/edição (1.9)

**Navegação:**
- Entrada: barra inferior, a partir de qualquer tela do produtor
- Saída: Detalhe/edição de produto (1.9)

---

### 1.9 Detalhe / edição de produto

**Objetivo:** editar ou remover uma publicação existente.

**Elementos:**
- Mesmos campos do wizard de cadastro, mas numa tela só (não em etapas, já que é edição pontual)
- Botão "Salvar alterações"
- Botão "Remover produto" (com confirmação)

**Navegação:**
- Entrada: Meus produtos (1.8)
- Saída: Salvar ou Remover → volta pra Meus produtos (1.8)

---

### 1.10 Pedidos recebidos (lista)

**Objetivo:** ver solicitações de compra de forma rápida.

**Elementos:**
- Lista de pedidos: nome do comprador, produto, quantidade, status (Novo / Aceito / Recusado)
- Notificação (também replicada via WhatsApp)

**Interações:**
- Tocar num pedido → abre Detalhe do pedido (1.11)

**Navegação:**
- Entrada: barra inferior, ou notificação push/WhatsApp
- Saída: Detalhe do pedido (1.11)

---

### 1.11 Detalhe do pedido recebido

**Objetivo:** decidir aceitar ou recusar, sem negociação complexa nesta etapa.

**Elementos:**
- Resumo: comprador, produto, quantidade, data de entrega solicitada
- Dois botões grandes fixos no rodapé: **Aceitar** / **Recusar**
- Detalhes de entrega (endereço, horário) só aparecem depois de aceitar

**Navegação:**
- Entrada: Pedidos recebidos (1.10)
- Saída: Aceitar/Recusar → volta pra lista de Pedidos (1.10) com status atualizado

---

### 1.12 Perfil do produtor

**Objetivo:** dados básicos de conta, sem configurações avançadas.

**Elementos:**
- Nome, telefone, localização
- Formas de pagamento aceitas
- Botão de sair da conta

**Navegação:**
- Entrada: barra inferior
- Saída: edições salvam na própria tela, sem navegação adicional

---

## 2. Telas do Comprador

Perfil profissional — a interface pode (e deve) ter mais densidade de informação que a do produtor, mas organizada, não poluída. Aqui o objetivo é dar controle e visão de dados, porque essa pessoa toma decisão de compra comparando preço, quantidade e distância.

### 2.1 Login / Cadastro (empresarial)

**Objetivo:** cadastro completo do estabelecimento.

**Elementos:**
- Nome do estabelecimento, CNPJ, tipo (restaurante / hotel / padaria / outro), endereço de entrega, responsável pelas compras
- Login por e-mail e senha (ou SSO, se fizer sentido futuramente)

**Navegação:**
- Saída: Painel inicial (2.2)

**Notas de design:** aqui faz sentido pedir mais dados de uma vez — o perfil profissional já espera preencher um cadastro empresarial.

---

### 2.2 Painel inicial (Dashboard)

**Objetivo:** ponto de partida com descoberta ativa, não só busca reativa.

**Elementos:**
- Bloco em destaque: **"Colheita da semana na sua região"** (carrossel de produtos sazonais)
- Bloco: **"Excedentes disponíveis"** (oportunidades de preço melhor)
- Bloco: pedidos recorrentes ativos, com status
- Atalho: "Repetir último pedido"
- Barra de navegação inferior fixa: Buscar | Carrinho | Recorrência | Perfil

**Interações:**
- Tocar num item do carrossel de colheita → Detalhe da oferta (2.4)

**Navegação:**
- Entrada: login, ou ao voltar de qualquer uma das 4 telas da barra inferior
- Saída: Buscar (2.3), Carrinho (2.5), Recorrência (2.8), Perfil (2.11) — acesso direto

---

### 2.3 Busca / Catálogo

**Objetivo:** encontrar ofertas específicas por filtro.

**Elementos:**
- Filtros: produto, distância, preço, data de colheita, tipo de produção (agricultura familiar, orgânico etc.)
- Resultados em cards: foto, produtor, quantidade disponível, distância, preço

**Interações:**
- Aplicar filtro → atualiza lista
- Tocar num card → Detalhe da oferta (2.4)

**Navegação:**
- Entrada: barra inferior
- Saída: Detalhe da oferta (2.4). Voltar aqui preserva os filtros já aplicados (não reseta a busca)

---

### 2.4 Detalhe da oferta

**Objetivo:** todas as informações necessárias pra decidir a compra.

**Elementos:**
- Produtor, distância, data de colheita, prazo de entrega, pedido mínimo, se aceita recorrência
- Botão "Adicionar ao carrinho"
- Botão "Configurar como recorrente"

**Navegação:**
- Entrada: Busca (2.3) ou Painel inicial (2.2)
- Saída: "Adicionar ao carrinho" → item entra no Carrinho (2.5), mas a tela permanece na oferta (pra permitir adicionar mais de um produtor na sequência). Voltar retorna pra lista de origem

---

### 2.5 Carrinho (multi-produtor)

**Objetivo:** consolidar um pedido que pode ser atendido por vários produtores ao mesmo tempo — ponto central do modelo de matching da plataforma.

**Elementos:**
- Itens agrupados por produtor (não por produto), com quantidade e preço de cada grupo
- Total consolidado do pedido
- Botão "Finalizar pedido"

**Interações:**
- Remover item, ajustar quantidade

**Navegação:**
- Entrada: barra inferior (ícone com contador, sempre visível em qualquer tela, não só na aba Carrinho), ou "Adicionar ao carrinho" em 2.4
- Saída: Finalizar pedido (2.6)

**Notas de design:** sair do Carrinho não apaga nada — ele fica salvo até o comprador finalizar ou remover manualmente.

---

### 2.6 Finalizar pedido (checkout)

**Objetivo:** confirmar entrega e pagamento.

**Elementos:**
- Endereço de entrega (pré-preenchido do cadastro)
- Forma de pagamento
- Data/horário de recebimento
- Botão "Confirmar pedido"

**Navegação:**
- Entrada: Carrinho (2.5)
- Saída: Confirmação (2.7)

**Notas de design:** único ponto do fluxo do comprador com confirmação bloqueante ao tentar sair ("Cancelar pedido?") — depois que a forma de pagamento já foi escolhida, há risco real de perder informação de checkout.

---

### 2.7 Confirmação do pedido

**Objetivo:** fechar o ciclo com clareza do que foi pedido e quando chega.

**Elementos:**
- Resumo do pedido, número do pedido, previsão de entrega
- Botão "Voltar ao início"

**Navegação:**
- Entrada: Finalizar pedido (2.6)
- Saída: Painel inicial (2.2)

---

### 2.8 Lista de compra recorrente

**Objetivo:** configurar compras que se repetem toda semana, sem precisar refazer o pedido manualmente.

**Elementos:**
- Calendário semanal (segunda a domingo)
- Cada dia é editável isoladamente: toca no dia → escolhe produtos e quantidades daquele dia → salva

**Navegação:**
- Entrada: barra inferior
- Saída: editar um dia abre um sub-painel que, ao salvar, volta direto pro calendário (não sai da tela principal)

---

### 2.9 Histórico de pedidos e fornecedores favoritos

**Objetivo:** consulta de baixa frequência — por isso não fica na barra inferior.

**Elementos:**
- Lista de pedidos anteriores (data, produtor, valor)
- Lista de produtores favoritados, com atalho para nova compra

**Navegação:**
- Entrada: a partir do Perfil (2.11)
- Saída: tocar num pedido anterior → repetir pedido (leva direto ao Carrinho pré-preenchido)

---

### 2.10 Relatórios (plano profissional)

**Objetivo:** dar visão agregada de consumo — recurso do plano pago.

**Elementos:**
- Volume comprado por produtor/mês
- Economia estimada
- Gráfico de gasto por categoria
- Selo social: "Você comprou de 12 produtores locais, R$ 18.400 movimentados na agricultura local" (pensado para virar conteúdo de marketing do próprio restaurante)

**Navegação:**
- Entrada: a partir do Perfil (2.11), visível apenas se o plano for profissional

---

### 2.11 Perfil / Configurações da empresa

**Objetivo:** dados cadastrais e acesso às telas secundárias.

**Elementos:**
- Dados do estabelecimento, endereço de entrega, forma de pagamento
- Plano atual (gratuito/profissional) com opção de upgrade
- Atalhos para Histórico e favoritos (2.9) e Relatórios (2.10)

**Navegação:**
- Entrada: barra inferior
- Saída: Histórico (2.9), Relatórios (2.10)

---

## 3. Painel Administrativo

Não segue o padrão hub-and-spoke do produtor/comprador — é um perfil profissional que já espera um **menu lateral fixo**, com acesso direto a qualquer seção, sem hierarquia.

### 3.1 Dashboard geral
Métricas gerais: nº de produtores ativos, compradores ativos, volume transacionado, filtro por região.

### 3.2 Gestão de produtores e compradores
Aprovação de cadastro, suporte, histórico de atividade por usuário.

### 3.3 Moderação de anúncios
Sinalização de preços fora do padrão, produtos duplicados, remoção de anúncios.

### 3.4 Logística / rotas
Visualização de entregas agrupáveis por região (fase 2 do modelo de negócio).

### 3.5 Índice de Produção Local
Painel preditivo mostrando o que a região vai colher nas próximas semanas — a camada de inteligência que gera valor pros dois lados da plataforma.

---

## 4. Padrões gerais de navegação

- **Barra/menu fixo = navegação plana.** Vai direto pra qualquer tela de primeiro nível, sem precisar passar pela Home.
- **Fluxo em etapas (wizard) = navegação linear.** Só volta um passo por vez; saída explícita (X) sempre no canto superior esquerdo, com confirmação se houver dado não salvo.
- **Confirmação bloqueante só onde há risco real de perda de dado** (ex: checkout do comprador). Fora isso, evitar modais de confirmação — eles atritam o uso sem necessidade.
- **Todo aviso importante do produtor também é replicado por WhatsApp** — o app não é o único lugar onde a notificação existe, já que é um canal que esse perfil já domina.
- **Produtor:** telas de uma decisão por vez, ícones + texto, botões grandes, sem gestos escondidos.
- **Comprador:** telas mais densas, com filtros, comparação e dados — porque isso é parte do trabalho dele.
