function calcular() {
    var aluguel = parseFloat(document.getElementById('aluguel').value) || 0;
    var agua = parseFloat(document.getElementById('agua').value) || 0;
    var energia = parseFloat(document.getElementById('energia').value) || 0;
    var folhaPagamento = parseFloat(document.getElementById('folhaPagamento').value) || 0;
    var impostos = parseFloat(document.getElementById('impostos').value) || 0;

    var total = aluguel + agua + energia + folhaPagamento + impostos;
    var media = total / 5; // Total de 5 campos

    var totalAnual = total * 12;

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Total de Gastos Mensais: R$ ${total.toFixed(2)}</h2>
        <h2>Média de Gastos Mensais: R$ ${media.toFixed(2)}</h2>
        <h2>Estimativa de Gastos Anual: R$ ${totalAnual.toFixed(2)}</h2>
    `;
}