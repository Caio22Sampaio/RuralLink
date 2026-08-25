# Plano de validação do protótipo Rural Link

## Objetivo

Verificar se os fluxos principais são compreendidos e executados sem ajuda, antes de iniciar a construção do backend.

## Participantes

- 3 produtores rurais de Viçosa ou cidades próximas
- 2 compradores profissionais, como restaurantes, hotéis ou padarias
- 1 pessoa responsável por operação ou administração da plataforma

## Cenários de teste

### Produtor

1. Escolher a opção **Sou produtor**.
2. Entrar usando telefone e código recebido.
3. Publicar 20 kg de tomate a R$ 5,80/kg.
4. Marcar os dias de entrega.
5. Encontrar e aceitar um pedido recebido.
6. Editar ou remover um produto publicado.

### Comprador

1. Escolher a opção **Sou comprador**.
2. Entrar com os dados do estabelecimento.
3. Encontrar tomate usando o catálogo.
4. Adicionar produtos de dois produtores ao carrinho.
5. Conferir o total agrupado por produtor.
6. Confirmar um pedido.
7. Configurar uma compra recorrente.

### Administrador

1. Escolher a opção **Sou administrador**.
2. Entrar no painel administrativo.
3. Consultar as métricas gerais.
4. Aprovar um cadastro pendente.
5. Abrir a área de moderação.

## Perguntas de observação

- A pessoa entende imediatamente qual modalidade deve escolher?
- O produtor consegue publicar sem pedir orientação?
- Os textos, ícones e botões são compreendidos sem explicação?
- O comprador encontra preço, quantidade e distância rapidamente?
- O usuário sabe quando uma ação foi concluída?
- Em que momento a pessoa hesita, volta ou abandona o fluxo?

## Critérios mínimos para avançar

- Pelo menos 4 de 5 produtores concluem uma publicação sem ajuda.
- A publicação do produtor é concluída em até 5 minutos.
- Pelo menos 4 de 5 compradores concluem o carrinho e entendem o total.
- Nenhum participante confunde sua modalidade após entrar.
- Todos identificam como sair da sessão.

## Resultado esperado

Registrar problemas por severidade:

- **Bloqueador:** impede concluir uma tarefa essencial.
- **Alto:** causa erro ou exige ajuda.
- **Médio:** gera dúvida, mas permite continuar.
- **Baixo:** melhoria visual ou de texto.

Depois dos testes, ajustar primeiro os bloqueadores e problemas altos. Só então definir o stack do backend, o modelo de dados e as integrações reais de autenticação, WhatsApp, pagamentos e notificações.