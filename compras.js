const lista = document.querySelector("form")
const respLista = document.querySelector("pre")

const lista_compras = []
let contador = 1

lista.addEventListener('submit',(e) =>{
    e.preventDefault()
    
    const nomeitem = lista.produto.value.trim();
    const quantidade = parseInt(lista.quantidade.value.trim(), 10);

    if (nomeitem === "" || isNaN(quantidade)) return;

    // Verifica se o item já existe na lista
    let itemExistente = false;
    for (let i = 0; i < lista_compras.length; i++) {
        const partesItem = lista_compras[i].split(" ");
        const nomeExistente = partesItem.slice(1, -1).join(" ");
        const quantidadeExistente = parseInt(partesItem[partesItem.length - 1], 10);

        if (nomeExistente === nomeitem) {
            lista_compras[i] = `${partesItem[0]} ${nomeExistente} ${quantidadeExistente + quantidade}`;
            itemExistente = true;
            break;
        }
    }

    // Se o item não existir, adiciona um novo item na lista
    if (!itemExistente) {
        lista_compras.push(`${contador} ${nomeitem} ${quantidade}`);
        contador++;
    }

    respLista.innerText = lista_compras.join("\n");


    lista.produto.value = "";
    lista.quantidade.value = "";
    lista.produto.focus();
     

})