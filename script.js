




document.getElementById("entrar").addEventListener('click', function(){

let senha =  Number(document.getElementById("senha").value)
let i = 1;

while (i <= 3) {


    if (senha === 123456) {
        alert("Senha correta");
        break;
    } else {
        alert("Senha incorreta. Você só pode fazer isso mais 3 vezes. Tentativa: " + i);
        i++;
        
    }
}


})