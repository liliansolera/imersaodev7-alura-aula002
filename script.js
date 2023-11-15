var secretNumber = parseInt(Math.random() * 1001);
//parse = analise; int = inteiro -> "analise como inteiro"
//math.random busca numero de 0 a 0.99, ou seja, inclui zero e exclui 1, assim precisa marcar 1001

while(chute != secretNumber) {
    var chute = prompt('Digite o número entre 1 e 1000')
    //se o chute for igual ao número secreto gere o alert de acerto
    if (chute == secretNumber){
        alert('Acertou!')
    } else if(chute>secretNumber) {
        alert('Não está certo... o número secreto é menor')
        //se o chute for menor ao número secreto gere o alert
    } else if (chute<secretNumber){
        alert('Não está certo... o número secreto é maior')
        //se o chute for maior ao número secreto gere o alert
    }
}