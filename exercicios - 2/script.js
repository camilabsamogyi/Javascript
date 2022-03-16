function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        img.src = 'fotomanha2.png'
        document.body.style.background = '#F0A026'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#FF8D4B'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#2D3322'
    }
}
