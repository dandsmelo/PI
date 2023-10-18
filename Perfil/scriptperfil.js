//MODAL EDITAR PERFIL

function openEditModal() {
    document.getElementById('edit-modal').style.display = 'block';
}

  function closeEditModal() {
    document.getElementById('edit-modal').style.display = 'none';
  }

  function updateProfile() {
    const coverPhotoFile = document.getElementById('cover-photo-file').files[0];
    const profilePhotoFile = document.getElementById('profile-photo-file').files[0];
    const userName = document.getElementById('user-name-input').value;
    const userDescription = document.getElementById('user-description-input').value;

    if (coverPhotoFile) {
      const coverPhotoURL = URL.createObjectURL(coverPhotoFile);
      document.getElementById('ft-capa').src = coverPhotoURL;
    }

    if (profilePhotoFile) {
      const profilePhotoURL = URL.createObjectURL(profilePhotoFile);
      document.getElementById('foto').src = profilePhotoURL;
    }

    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-description').textContent = userDescription;

    closeEditModal();
  }

  //MODAL ADICIONAR PROJETO 

  function openAddProjetos() {
    document.getElementById('add-projetos').style.display = 'block';
  }

  function closeEditProjeto() {
    document.getElementById('add-projetos').style.display = 'none';
  }

  function updateProjeto() {
    const nomeProjeto = document.getElementById('nome-projeto').value;
    const descriProjeto = document.getElementById('descri-projeto').value;
    const linkProjeto = document.getElementById('link-projeto').value;
    const coverProjeto = document.getElementById('foto-projeto').files[0];

    if(coverProjeto){
      const coverProjetoURL= URL.createObjectURL(coverProjeto);
      document.getElementById('img').src = coverProjetoURL;
    }

    document.getElementById('nome').textContent = nomeProjeto;
    document.getElementById('descricao').textContent = descriProjeto;
    document.getElementById('') //TERMINAR

    closeEditProjeto();
  }