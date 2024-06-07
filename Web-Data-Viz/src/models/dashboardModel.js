var database = require("../database/config");

function historico() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = 
                    `SELECT d.temperatura, d.umidade, date_format(DATE(d.dtRegistrada), '%d/%m/%y') as DataAtual, s.idSetor, f.nome as NomeFazenda FROM dados as d JOIN setor as s 	
                        ON d.fkSetor = s.idSetor
                            JOIN fazenda as f
                                ON s.fkFazenda = f.idFazenda
                                    WHERE idFazenda = 1
                                        ORDER BY dtRegistrada`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function temperatura(fkFazenda) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = 
                    `SELECT d.temperatura, date_format(TIME(d.dtRegistrada), '%h:%i') as Tempo, d.fkSetor FROM dados as d JOIN fazenda as f
	                ON d.fkFazenda = f.idFazenda
		            WHERE d.fkFazenda = ${fkFazenda};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    historico,
    temperatura
}
