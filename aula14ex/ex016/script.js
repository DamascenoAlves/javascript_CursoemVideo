function contar(){
    var inicio = document.getElementById('txtini');
    var fim = document.getElementById('txtfim');
    var passo = document.getElementById('txtpas');
    var contagem = document.getElementById('contagem')
    

    
    if((inicio.value != '') && (fim.value != '') && (passo.value != '')){    
        if(Number(passo.value)<=0){
            contagem.innerHTML=`Impossivel contar!`
            window.alert(`[ERRO] Passo inválido. Considerando passo igual a 1.`)
            passo=1;
        }
        contagem.innerHTML=``
        for (let index = Number(inicio.value); index <= Number(fim.value); index += Number(passo.value)) {

            contagem.innerHTML+=`${index} &#x1F449`
        }
        contagem.innerHTML+=` &#x1F3C1`
    }else{
        contagem.innerHTML = `Impossivel contar!`
        window.alert(`[ERRO] Insira os valores para executar a contagem`)
    }
}