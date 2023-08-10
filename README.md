# Kenzie Burguer <br>
Este projeto simula um site de uma hamburgueria, onde os usuários podem adicionar itens ao carrinho de compras. A característica distintiva deste projeto é que ele impede a adição de itens duplicados ao carrinho, proporcionando uma experiência de compra mais eficiente e organizada.

Tecnologias Utilizadas
React: Utilizei os hooks de useState e useEffect para gerenciar o estado dos componentes e atualizações da interface em tempo real.

Axios: A biblioteca Axios foi usada para realizar requisições HTTP, especialmente para buscar informações da API que foi integrada ao projeto. No caso, utilizei o método GET para buscar informações relevantes.

Styled Components: Para estilização do projeto, utilizei a biblioteca Styled Components. Ela permite criar estilos diretamente nos componentes, facilitando o desenvolvimento e a manutenção do CSS.

React Toastify: Implementei o React Toastify para fornecer feedback visual ao usuário por meio de toasts. Isso ajuda a informar o usuário sobre ações importantes, como adicionar itens ao carrinho ou removê-los.

Funcionalidades Principais
Adição de Itens ao Carrinho: Os usuários podem adicionar itens ao carrinho de compras. O projeto garante que não seja possível adicionar o mesmo item duas vezes, mantendo a lista do carrinho organizada.

Carrinho Modal: Implementei um modal onde os usuários podem visualizar o conteúdo atual do carrinho. A cada item adicionado, o total é atualizado automaticamente.

Remoção de Itens: O carrinho oferece a opção de remover itens individualmente ou todos de uma vez. Isso proporciona flexibilidade ao usuário para gerenciar suas escolhas.
