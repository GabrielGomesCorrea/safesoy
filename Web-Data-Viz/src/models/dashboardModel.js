var database = require("../database/config");

function historico(fkFazenda) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarHistoricoDashboard()");
    var instrucaoSql =
        `SELECT max(d.temperatura) as tempMaxima, max(d.umidade) as umidMax, date_format(DATE(d.dtRegistrada), '%d/%m/%y') as DataAtual, s.idSetor, f.nome as NomeFazenda FROM dados as d JOIN setor as s 	
                        ON d.fkSetor = s.idSetor
                            JOIN fazenda as f
                                ON s.fkFazenda = f.idFazenda
                                    WHERE idFazenda = ${fkFazenda}
                                        GROUP BY DataAtual, s.idSetor;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados(dadosFazenda) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosFazenda()");
    var instrucaoSql =
        `SELECT d.temperatura, d.umidade, date_format(TIME(d.dtRegistrada), '%h:%i') as Tempo, d.fkSetor FROM dados as d JOIN setor as s
	                ON d.fkSetor = s.idSetor
		            WHERE s.idSetor = 1
                        ORDER BY d.dtRegistrada DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function countCritico(criticoSetores) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql =
        `SELECT COALESCE(
        (SELECT DISTINCT fkSetor FROM dados JOIN setor ON fkSetor = idSetor
        WHERE (umidade >= 90.00 OR umidade <= 65.00 OR temperatura >= 35.00 OR temperatura <= 10.00) AND fkFazenda = ${criticoSetores} AND dtRegistrada = DATE(NOW())), 
		NULL) AS fkSetor;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempCritico(criticoTemperatura) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql =
        `select max(temperatura) as tempRisco from dados 
                        join setor on fkSetor = idSetor
                            where temperatura >= 35.00 or temperatura <= 10.00 AND fkFazenda = ${criticoTemperatura} and dtRegistrada = date(now());`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function umidCritico(criticoUmidade) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql =
        `select max(umidade) as umidRisco from dados 
                        join setor on fkSetor = idSetor
                            where umidade >= 90.00 or umidade <= 65.00 AND fkFazenda = ${criticoUmidade} and dtRegistrada = date(now());`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    historico,
    dados,
    countCritico,
    tempCritico,
    umidCritico
}
