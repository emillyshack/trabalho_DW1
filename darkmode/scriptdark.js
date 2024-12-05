/* cria evento ao mudar o chexbox*/
const changeThemBtn = document.querySelector("#change-them");

changeThemBtn.addEventListener("change", function(){
    document.body.classList.toggle("dark") /*se esta dark ele tira e vira ligth*/

})
