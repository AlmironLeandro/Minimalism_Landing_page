const githubIcon = document.getElementsByClassName('modal__icon__github')

const githubLink = document.getElementById('icon')

let num = 0

githubLink.addEventListener('click', ()=>
{
    num++
    console.log(num);
    if(num % 2 == 0)
    {
        console.log('desactive');
 
        githubIcon[0].classList.remove('modal__icon__github--desactive')
        githubIcon[0].classList.remove('modal__icon__github--active')
        githubIcon[0].classList.add('modal__icon__github--desactive')
    }
    else
    {
        githubIcon[0].classList.remove('modal__icon__github--desactive')
        githubIcon[0].classList.remove('modal__icon__github--active')
        githubIcon[0].classList.add('modal__icon__github--active')
    }
    
})






