document.querySelector('#add-time')
    .addEventListener('click', cloneField);
// addEventListener precisa argumentar qual o tipo de evento (click) e a ação (cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    // caso não seja passado o argumento true no cloneNode, o js vai repricar a div vazia, sem clonar os devidos filhos.

    const fields = newFieldContainer.querySelectorAll('input');
    // comando para selecionar todos os inputs do componente newFieldContainer

    // comando para limpar cada um dos campos
    fields.forEach(function(field) {
        field.value = '';
    });

    const neuButoon = " <button type='button' id='exluir-time'> + Excluir Horário</button>"
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
    document.querySelector('#add-time').appendChild(neuButoon)
        // esse trecho do código sinaliza ao js onde o elemento da linha 6 deve ser colocado. como filho do id schedule-items
        //COLOCAR A OPÇÃO EXCLUIR 
};