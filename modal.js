// window.addEventListener('keydown', (event) => {
//     switch (event.keyCode) {
//       case 17:
//         isCtrl = true;
//         break;
//       case 72:
//         if (isCtrl) {
//           event.preventDefault();
//           isH = true;
//         }
//         break;
//     }
  
//     // se Ctrl e H forem pressionados altera a visibilidade da lista de estudantes (modal)
//     if (isCtrl && isH) {
//       switchStudentsList();
//     }
//   });
  
//   window.addEventListener('keyup', (event) => {
//     switch (event.keyCode) {
//       case 17:
//         isCtrl = false;
//         break;
//       case 72:
//         isH = false;
//         break;
//     }
//   });
  
//   // altera a visibilidade do modal, removendo ou adicionando a classe active
//   function switchStudentsList() {
//     if (studentsList.classList.contains('active')) {
//       hideStudentsList();
//       return;
//     }
//     showStudentsList();
//   }
  
//   function hideStudentsList() {
//     studentsList.classList.remove('active');
//   }
  
//   function showStudentsList() {
//     studentsList.classList.add('active');
//   }
function abrirModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}