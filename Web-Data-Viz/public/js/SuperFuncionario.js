
// Função para atualizar o feed da fazenda 
function atualizarFeedFazenda() {

    nome_user.innerHTML = sessionStorage.NOME_USUARIO;
    var fkFazenda = sessionStorage.getItem("FK_FAZENDA") 
    fetch(`/superUsuario/listarFazenda/${fkFazenda}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var painelPai = document.getElementById("painel_pai");
                var painelFilho = document.createElement("div");
                var tituloPainel = document.createElement("div");
                var conteudoPainel = document.createElement("div");

                for (let i = 0; i < resposta.length; i++) {
                    if (resposta[i].idFazenda == sessionStorage.getItem("FK_FAZENDA")) {
                        var respostasBD = resposta[i];
                        break
                    }

                }

                if (respostasBD) {
                    var tituloDoPainel = document.createElement("h1")
                    var qtdPainel = document.createElement("h1")
                    var tipoFunc = document.createElement("h1")

                    tituloDoPainel.innerHTML = respostasBD.nome;
                    qtdPainel.innerHTML = respostasBD.QtdFunc - 1;
                    tipoFunc.innerHTML = "Funcionarios";

                    painelPai.className = "paiPainel";
                    painelFilho.className = "painel";
                    tituloPainel.className = "titulopainel";
                    conteudoPainel.className = "conteudopainel";
                    tituloDoPainel.className = "h1";
                    qtdPainel.className = "funcionario";
                    tipoFunc.className = "funcionario";

                    painelPai.appendChild(painelFilho)
                    painelFilho.appendChild(tituloPainel)
                    tituloPainel.appendChild(tituloDoPainel)
                    painelFilho.appendChild(conteudoPainel)
                    conteudoPainel.appendChild(qtdPainel)
                    conteudoPainel.appendChild(tipoFunc)
                }
                else {
                    alert(`Houve um erro ao buscar a fazenda`)
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

    atualizarFeedFuncionarios()
}

// Função para atualizar a lista de funcionarios presentes dentro de uma fazenda 
var superFuncionarioFunc = sessionStorage.getItem("RF_USUARIO")

function atualizarFeedFuncionarios() {
    fetch(`/superUsuario/listarFuncionario/${superFuncionarioFunc}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var painelPai2 = document.getElementById("paipainel2");
                var painelfilho2 = document.getElementById("painelfilho2")
                var conteudopainel2 = document.getElementById("conteudopainel_2");
                conteudopainel2.innerHTML = ``

                for (var index = 0; index < resposta.length; index++) {
                    var resultadoBD = resposta[index]
                    var pessoa = document.createElement("div")
                    var infoFunc = document.createElement("div")
                    var nomeFunc = document.createElement("h1")
                    var rfFunc = document.createElement("h1")
                    var divBotao = document.createElement("div")
                    var botaoDots = document.createElement("button")

                    nomeFunc.innerHTML = resultadoBD.nome;
                    rfFunc.innerHTML = resultadoBD.rf;
                    botaoDots.innerHTML = "Deletar Usuario"


                    painelPai2.className = "paiPainel2";
                    painelfilho2.className = "painel2";
                    conteudopainel2.className = "conteudopainel2";
                    pessoa.className = "pessoa";
                    infoFunc.className = "nome";
                    divBotao.className = "dots";

                    botaoDots.id = "buttonDelete" + resultadoBD.rf;
                    botaoDots.setAttribute("onclick", `deletar(${resultadoBD.rf})`);

                    painelPai2.appendChild(painelfilho2)
                    painelfilho2.appendChild(conteudopainel2)
                    conteudopainel2.appendChild(pessoa)
                    pessoa.appendChild(infoFunc)
                    infoFunc.appendChild(nomeFunc)
                    infoFunc.appendChild(rfFunc)
                    pessoa.appendChild(divBotao)
                    divBotao.appendChild(botaoDots)
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

// Função de deletar um funcionario
function deletar(rf) {

    var confirmacao = confirm(`Clique em "Ok" caso queira deletar este RF` + rf)

    if(confirmacao){
        console.log("Criar função de apagar do usuario escolhido - RF: " + rf);
        fetch(`/superUsuario/deletar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rfServer: rf,
            })
        }).then(function (resposta) {
    
            if (resposta.ok) {
                alert("Usuario do RF" + rf + " deletado com sucesso pelo " + sessionStorage.NOME_USUARIO + "!");
                atualizarFeedFuncionarios()
                atualizarFeedFazenda()
                window.location.href ='SuperUsuario.html'
            } else if (resposta.status == 404) {
                alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar deletar o usuario! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
    else{
        alert("Operação cancelada")
    }
}