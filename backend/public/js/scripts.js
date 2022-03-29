/* Modo Oscuro */
/* const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

toggleTheme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
    }
}) */

/* Paleta de Colores */
/* const toggleColors = document.getElementById('toggle-colors');
const rootStyle = document.documentElement.style;


toggleColors.addEventListener("click", (e)=>{
rootStyle.setProperty('--primary-color', e.target.dataset.color)
}) */

/* Cambio de Idioma */

/* const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        textToChange.innerHTML = texts[section][value]
    }

}

const flagsElement = document.getElementById("flags");

flagsElement.addEventListener("click", (e) =>{
    console.log(e.target)
    changeLanguage(e.target.parentElement.dataset.language)
}); */


//Agregando la clase active al primer boton
$(document).ready(function(){
    $('.button_portfolio[category="all"]').addClass('product__list_active');
//Filtrando Productos
    $('.button_portfolio').click(function(){
        let catProduct = $(this).attr('category');
        console.log(catProduct)
        $('.button_portfolio').removeClass('product__list_active');
        $(this).addClass('product__list_active');

        //Ocultando Productos
        

        $('.project__item').css('transform', 'scale(0)');
function hideProducts(){
    $('.project__item').hide();
} setTimeout(hideProducts,300);


        //Mostrando Productos
        function showProducts(){
            $('.project__item[category="'+catProduct+'"]').show();
            $('.project__item[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProducts, 300);
                
    });
    //Mostrando todos los productos
    
    $('.button_portfolio[category="all"]').click(function(){
        function showAll(){

            $('.project__item').show();
            $('.project__item').css('transform', 'scale(1)');
        } setTimeout(showAll, 300)
    })
});