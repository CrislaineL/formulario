atraves deste ódigo abaixo, adpte ele, ou seja, quando a pessoa acessar outra_pagina.html apareça um comentário perguntando se a pessoa está logada, se a pessoa dizer que eatá logada, devera ser pergundado a ela qual é a senha, se acerta direcione para a outra_pagina.html, se errar devera direcionar para formulario.html, se a pessoa dizer que não está logada deverá redirecionar ela para formulario.html(alem disso se a pessoa clicar F12 deverá dar erro em tudo, e se possivel tente esconder a senha que está no script,pode tentar esconder de qualquer forma).formulario.html:<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Tela de Login</h1>
    <form id="expenseForm">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required><br>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required><br>

        <button id="botaoFugir" type="button">Entrar</button>
    </form>
    <div id="results"></div>
    
    <script src="script.js"></script>
</body>
</html>
styles.css:body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

h1 {
    text-align: center;
}

form {
    max-width: 400px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button:hover {
    background-color: #0056b3;
}

      #botaoFugir {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        position: relative;
        transition: all 0.1s ease;
        user-select: none;
      }script.js:function verificarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Aqui você pode definir um e-mail e senha de exemplo para verificação
    var emailCorreto = "usuario@example.com";
    var senhaCorreta = "senha123";

    var resultsDiv = document.getElementById('results');

    if (email === emailCorreto && senha === senhaCorreta) {
        resultsDiv.innerHTML = `<h2>Login bem-sucedido!</h2>`;
    } else {
        resultsDiv.innerHTML = `<h2>Login falhou. Verifique seu e-mail e senha.</h2>`;
    }
}
      const botao = document.getElementById("botaoFugir");
      const form = document.getElementById("expenseForm");
      const resultsDiv = document.getElementById("results");
      // Quando o mouse entrar em cima do botão:/*
      botao.addEventListener("mouseenter", () => {
        // Calcula os limites máximos para posicionar o botão dentro da janela do navegador
        const padding = 100; // margem da borda da viewport para evitar o botão sair da tela
        const maxX = window.innerWidth - botao.offsetWidth - padding;
        const maxY = window.innerHeight - botao.offsetHeight - padding;
        // Gera posições aleatórias dentro dos limites estabelecidos
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        // Aplica o posicionamento fixo e move o botão para a nova posição aleatória
        botao.style.position = "fixed";
        botao.style.left = randomX + "px";
        botao.style.top = randomY + "px";
      });
      // Função de clique para verificar login*/
      botao.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const emailCorreto = "usuario@example.com";
        const senhaCorreta = "senha123";
       if (email === emailCorreto && senha === senhaCorreta) {
          // Se as credenciais estiverem corretas, redireciona para outra página:
          window.location.href = "outra_pagina.html"; // <-- ESTA LINHA FAZ A MUDANÇA DE PÁGINA
        } else {
          resultsDiv.innerHTML =
            "<h2>Login falhou. Verifique seu e-mail e senha.</h2>";}
      });
outra_pagina.html:<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 class="Bem-Vindo">Bem-Vindo</h1>
</body>
</html>
