
// SCRIPT PARA PODER PLOTAR OS GRAFICOS
function obterDadosGrafico() {
    var fkFazenda = sessionStorage.FK_FAZENDA;
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
    
        Grafico = new Chart(ctx,{
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

    // Criando estrutura para plotar gráfico - config
    // setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
}


// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
// function atualizarGrafico(idAquario, dados, myChart) {

//     fetch(`/medidas/tempo-real/${idAquario}`, { cache: 'no-store' }).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (novoRegistro) {

//                 obterdados(idAquario);
//                 // alertar(novoRegistro, idAquario);
//                 console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
//                 console.log(`Dados atuais do gráfico:`);
//                 console.log(dados);

//                 let avisoCaptura = document.getElementById(`avisoCaptura${idAquario}`)
//                 avisoCaptura.innerHTML = ""


//                 if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
//                     console.log("---------------------------------------------------------------")
//                     console.log("Como não há dados novos para captura, o gráfico não atualizará.")
//                     avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
//                     console.log("Horário do novo dado capturado:")
//                     console.log(novoRegistro[0].momento_grafico)
//                     console.log("Horário do último dado capturado:")
//                     console.log(dados.labels[dados.labels.length - 1])
//                     console.log("---------------------------------------------------------------")
//                 } else {
//                     // tirando e colocando valores no gráfico
//                     dados.labels.shift(); // apagar o primeiro
//                     dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

//                     dados.datasets[0].data.shift();  // apagar o primeiro de umidade
//                     dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

//                     dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
//                     dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

//                     myChart.update();
//                 }

//                 // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
//                 proximaAtualizacao = setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
//             });
//         } else {
//             console.error('Nenhum dado encontrado ou erro na API');
//             // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
//             proximaAtualizacao = setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
//         }
//     })
//         .catch(function (error) {
//             console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//         });

// }


