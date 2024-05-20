function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src', 'imagens/criança-menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/adolescente-homem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }else{
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src', 'imagens/criança-menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/adolescente-mulher.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }else{
                img.setAttribute('src', 'imagens/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}