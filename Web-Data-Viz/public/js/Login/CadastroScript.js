
// Script Cadastro Colaborador
function cadastro() {
    var email = input_email.value
    var senha = Number(input_senha.value)
    var confirmarSenha = Number(input_ConfirmarSenha.value)

    if (email.indexOf("@") < 0 || email.indexOf(".com") < 0) {
        alert(`Email Incorreto`)
    }
    else if (senha != confirmarSenha && confirmarSenha != senha) {
        alert(`Senha Errada`)
    }
    else {
        window.location.replace("Login.html");
        alert(`Redirecionando para a página de login`)
        setTimeout(Login, 5000)
    }
}

// Script do Login
var tentativas = 0
function Login() {

    var acesso = input_rf.value
    var acesso2 = Number(input_senha.value)

    for (var index = 0; index < 4; index++) {

        if (acesso != 1010 || acesso2 != 123) {
            if (acesso != 1011 && acesso2 != 12345) {
                tentativas++
                if (tentativas <= 3) {
                    alert(`Tentativas restantes: ${tentativas}`)
                    break
                }
            }
            else {
                if (acesso == 1011 && acesso2 == 12345) {
                    window.location.replace("SuperUsuario.html");
                    break
                }
            }
        }
        else if (acesso == 1010 && acesso2 == 123) {
            window.location.replace("dashboard.html");
            break
        }
    }
    if (tentativas == 3) {
        alert(`Acesso Bloqueado`)
        tentativas = 0
    }
}

