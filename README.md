<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/picinelli/projeto-cineflix">
    <img src="https://github.com/picinelli/projeto-cineflix/blob/main/public/android-chrome-192x192.png" alt="Logo" width="100">
  </a>

<h3 align="center">Projeto - Cineflex</h3>
  <p align="center">
    Single-Page Application (SPA) para um cinema, usando React Router!
    <br />
    <a href="https://github.com/picinelli/projeto-cineflix/tree/main/src"><strong>JSX code»</strong></a>
</div>

<!-- ABOUT THE PROJECT -->

## Requisitos

- Geral
    - [x]  Manipule o HTML usando somente React (sem usar o document nem bibliotecas como jQuery)
    - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub
    - [x]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit
- Versionamento
    - [x]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [x]  Faça commits a cada funcionalidade implementada
- Layout
    - [x]  Aplicar layout para mobile, seguindo figma fornecido (não é necessário implementar um layout para desktop)
        
        [Cineflex](https://www.figma.com/file/rc7ZTYfLZg9zpGahWB1aXb/Cineflex?node-id=0%3A1)
        
- Escolha de Filme (rota "/")
    - [x]  Buscar as informações dos filmes pela API fornecida e exibir conforme layout fornecido
    - [x]  Ao clicar em um filme, o usuário deve ser redirecionado para a rota "/sessoes/:idFilme", sendo :idFilme o id do filme clicado
- Escolha de Sessão (rota "/sessoes/:idFilme")
    - [x]  A partir do id da URL, obtenha da API as sessões disponíveis para o filme e exiba conforme o layout fornecido
    - [x]  Ao clicar em uma sessão, o usuário deve ser redirecionado para a rota "/assentos/:idSessao", onde :idSessao é o id da sessão escolhida
- Escolha de Assento (rota "/assentos/:idSessao")
    - [x]  A partir do id da sessão, buscar os dados da sessão da API e exibir o layout conforme fornecido
    - [x]  Ao clicar em um assento disponível, o assento deve ser marcado como "Selecionado"
    - [x]  Ao clicar novamente em um assento selecionado, este deve voltar para "Disponível"
    - [x]  Ao clicar em um assento indisponível, deverá ser exibido um alerta de "Esse assento não está disponível"
    - [x]  O usuário pode selecionar vários assentos
    - [x]  O usuário deve poder inserir o nome e o CPF do comprador
    - [x]  Ao clicar em "Reservar assento(s)", o pedido deve ser enviado para o servidor e o usuário deve ser redirecionado para a rota "/sucesso".  Isso fará com os assentos marcados fiquem indisponíveis para outras marcações.
- Rodapé
    - [x]  Ao longo das telas de Sessão e Assento, deve ser exibido um rodapé com as informações do filme selecionado. Estas informações virão das chamadas à API em cada tela
- Sucesso
    - [x]  Implementar layout conforme fornecido, exibindo os dados do pedido feito
    - [x]  Ao clicar em "Home" o usuário deve voltar para a rota inicial ("/"), com o pedido zerado


# Bônus (opcional)
- Botão de voltar
    - [x]  Adicione um botão de voltar no topo do site à esquerda
    - [x]  O topo do site deve estar fora dos componentes das páginas, ou seja, fora do <Switch> do React Router
    - [x]  Ao clicar no botão voltar, o usuário deve retornar para a página que estava anteriormente
    - [x]  O botão não deve ser exibido na tela inicial

### Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

<!-- CONTACT -->

### Contato

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Mail][mail-shield]][mail-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/pedro-ivo-brum-cinelli//
[mail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[mail-url]: mailto:cinelli.dev@gmail.com
