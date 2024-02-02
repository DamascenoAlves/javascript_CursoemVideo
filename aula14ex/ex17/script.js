function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        tab.innerHTML = `<option> Digite um número para calcular </option>`
        window.alert(`Por favor, digite um número!`)
        
    }else{
        let n = Number(num.value)
        tab.innerHTML = ``
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }

}