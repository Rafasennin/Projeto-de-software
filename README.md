# README - Sistema de Agendamento e Pagamento

Este é um sistema de agendamento e pagamento para serviços de salão de beleza. Ele permite que os clientes agendem compromissos com profissionais específicos e efetuem o pagamento pelo serviço selecionado.

## Tecnologias Utilizadas

O sistema foi desenvolvido utilizando as seguintes tecnologias:

- **Vue.js**: Um framework JavaScript progressivo para a construção de interfaces de usuário. Vue.js foi utilizado para criar os componentes e gerenciar o estado da aplicação de forma eficiente.

- **Vuetify**: Uma biblioteca de componentes Vue.js baseada em Material Design. Vuetify foi utilizada para criar a interface do usuário com componentes estilizados e responsivos.

- **Vue Router**: Uma biblioteca Vue.js para navegação entre páginas da aplicação. Vue Router foi utilizado para definir as rotas e direcionar o usuário para diferentes páginas com base em suas ações.

## Fluxo de Navegação

### Página de Agendamento
- A página inicial apresenta uma lista de serviços disponíveis e uma lista de profissionais para escolha.
- Os clientes podem selecionar um serviço, um profissional e uma data/horário disponíveis para agendar um compromisso.
- Após preencher os campos obrigatórios, eles podem prosseguir para o checkout.

### Página de Checkout
- Na página de checkout, os clientes podem revisar o serviço, o profissional e a data/horário selecionados antes de prosseguir para o pagamento.
- Os detalhes do agendamento são exibidos em uma tabela para revisão.
- Os clientes podem então proceder ao pagamento através de diferentes métodos disponíveis.

### Página de Comprovante
- Após a conclusão bem-sucedida do pagamento, os clientes são redirecionados para a página de comprovante.
- Nesta página, eles podem visualizar uma mensagem de sucesso informando que o pagamento foi realizado com sucesso.
- Além disso, eles têm a opção de imprimir o comprovante de pagamento.

### Página de Profissionais
- A página de profissionais exibe uma lista de profissionais disponíveis, cada um com sua própria descrição.
- Os clientes podem clicar em cada profissional para visualizar mais detalhes em um modal.

## Navegação entre Páginas

A navegação entre páginas é gerenciada pelo Vue Router. As rotas são definidas para cada página e os clientes são direcionados para a página correspondente com base em suas ações.

Por exemplo, ao clicar no botão "Prosseguir para o Checkout" na página de agendamento, os clientes são redirecionados para a página de checkout. Da mesma forma, após o pagamento bem-sucedido, eles são redirecionados para a página de comprovante.

## Considerações Finais

Este sistema oferece uma experiência fácil e intuitiva para os clientes agendarem serviços de salão de beleza e efetuarem pagamentos online. Com uma interface amigável e funcionalidades bem definidas, é uma solução eficaz para gerenciar compromissos e transações financeiras.
