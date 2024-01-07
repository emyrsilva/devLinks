function toggleMode(){
    const html = document.documentElement

    if(html.classList.contains('ligth')) {
        html.classList.remove('ligth')
    } else {
        html.classList.add('ligth')
    }

  //  html.classList.toggle('ligth') - faz a mesma função acima

    const img = document.querySelector('#perfil img')  

    if(html.classList.contains('ligth')) {
        img.setAttribute("src", "./imagens/avatar-ligth.png")
    } else {
        img.setAttribute("src", "imagens/avatar-dark.png")
    }
}
