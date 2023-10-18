function openModal(mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display ='block';
    document.body.style.overflow = 'hidden';

}

function closeModal(mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display ='none';
}

function salvarDados(oportunidadesId, eventosId, secretariaId) {
    console.log("Função salvarDados chamada!");
    let Oportunidades = document.getElementById('title1Input').value;
    let Eventos = document.getElementById('title2Input').value;
    let Secretaria = document.getElementById('title3Input').value;

    let oportunidadesElement = document.getElementById(oportunidadesId);
    let eventosElement = document.getElementById(eventosId);
    let secretariaElement = document.getElementById(secretariaId);

    // Atualiza o conteúdo dos elementos com os novos valores
    oportunidadesElement.innerText = Oportunidades;
    eventosElement.innerText = Eventos;
    secretariaElement.innerText = Secretaria;

    closeModal('dv-modal');

}

