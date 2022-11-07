function mostraDesc(id, btn){
    let desc = document.getElementById(id);
    let botao = document.getElementById(btn);
    if(desc.style.display == 'block'){
        desc.style.animation = 'fadeOut .3s'
        setTimeout(() => { desc.style.display = 'none'; }, 290);
        
        botao.innerHTML = ("Mostrar mais");
    }else{
        desc.style.animation = 'fadeIn .3s';
        desc.style.display = 'block';
        botao.innerHTML = ("Mostrar menos");
    }
}