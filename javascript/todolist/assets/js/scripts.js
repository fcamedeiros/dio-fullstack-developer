function adicionaToDo() {
    var textoWrapper = document.getElementById("txtTarefa");

    if(textoWrapper.value === ""){
        return;
    }

    const lista = document.getElementById('lista');
    const item  = document.createElement('li');

    item.innerHTML = `<div class="linhaItem"><input type="checkbox" name='checkItem' onClick="pressed();"><p name="itemLinha" style="text-decoration:none">${textoWrapper.value}</p></input></div>`; 

    lista.appendChild(item);

    textoWrapper.value = "";
}

function pressed(id) {
    var arrayChecks = document.getElementsByName('checkItem');
    var arrayTexts  = document.getElementsByName('itemLinha');

    for(var i = 0; i < arrayChecks.length; i++) {
        if(arrayChecks[i].checked){
            arrayTexts[i].style.textDecoration = "line-through";
        } else {
            arrayTexts[i].style.textDecoration = "none"
        }
    }
}