
// SCRIPT PARA PODER PLOTAR OS GRAFICOS
function obterDadosGrafico() {

  var setor = 1
  sessionStorage.setItem('FK_SETOR', setor)
  var fkFazenda = sessionStorage.FK_SETOR;

  fetch(`/dashboard/dados/${fkFazenda}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        resposta.reverse();

        plotarGrafico(resposta);

      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*


var lista_temperatura = [];
var lista_umidade = [];
var Grafico;

function plotarGrafico(resposta) {
  var lista_hora = [];

  console.log('iniciando plotagem do gráfico...');


  console.log('----------------------------------------------')
  console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
  console.log(resposta)

  // Inserindo valores recebidos em estrutura para plotar o gráfico
  for (i = 0; i < resposta.length; i++) {
    var temperatura = resposta[i].temperatura;
    var umidade = resposta[i].umidade;
    var hora = resposta[i].Tempo;

    lista_temperatura.push(temperatura);
    lista_umidade.push(umidade);
    lista_hora.push(hora);
  }

  console.log('----------------------------------------------')
  console.log('O gráfico será plotado com os respectivos valores:')
  console.log('Labels:')
  console.log(lista_hora)
  console.log('Dados:')
  console.log(lista_temperatura)
  console.log(lista_umidade)
  console.log('----------------------------------------------')

  if (Grafico) {
    Grafico.destroy();
  }

  const ctx = document.getElementById('myChart');

  Grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lista_hora,
      datasets: [{
        label: 'Temperatura',
        data: lista_temperatura,
        borderWidth: 1
      },
      {
        label: 'Umidade',
        data: lista_umidade,
        borderWidth: 1
      }],

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}