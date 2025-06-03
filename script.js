// Senha correta
const senhaCorreta = "senha123"; // Mantemos a senha original

function verificarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var emailCorreto = "usuario@example.com";
    var resultsDiv = document.getElementById('results');

    if (email === emailCorreto && senha === senhaCorreta) {
        resultsDiv.innerHTML = `<h2>Login bem-sucedido!</h2>`;
        window.location.href = "home.html"; // Redireciona após login bem-sucedido
    } else {
        resultsDiv.innerHTML = `<h2>Login falhou. Verifique seu e-mail e senha.</h2>`;
    }
}

const botao = document.getElementById("botaoFugir");
botao.addEventListener("click", verificarLogin);
