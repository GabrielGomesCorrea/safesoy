var database = require("../database/config");

function listarFazenda() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql =
        `SELECT f.idFazenda, f.nome, count(u.fkFazenda) as QtdFunc FROM fazenda as f JOIN usuario as u
                            ON f.idFazenda = u.fkFazenda
                                GROUP BY f.idFazenda;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarFuncionario(superUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql =
        `SELECT f.nome, f.rf FROM usuario as f JOIN usuario as sf 
                    ON f.fkSuperFuncionario = sf.rf
                        WHERE sf.rf = ${superUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function deletar(rf) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", rf);
    var instrucaoSql = `
    DELETE FROM usuario WHERE rf = ${rf}; ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    listarFazenda,
    listarFuncionario,
    deletar,

}