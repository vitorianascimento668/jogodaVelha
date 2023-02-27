let jogador1 = 'X'
let jogador2 = 'O'
let jogador1_select11 , jogador2_select22
let valor_jogador = [], valor, contador
let tabuleiro_marc = document.querySelectorAll('.tabuleiro_marc')
let c = 0

tabuleiro_marc.forEach((tabuleiro)=>{
    tabuleiro.addEventListener("click", ()=>{
        if(tabuleiro.innerHTML ==  ""){
            if (c==0){
                jogador1_select11 = true
                jogador2_select22 = false
                valor_jogador.push(tabuleiro.getAttribute("data-tab"))
    
               setTimeout(()=>{
                c++
               },"100")
            }
           
        }
        
    })
})
function jogo(){
    
}

/*
1-)verifica quem está jogando, jogador 1 ou jogador2
2-)Atribuir o valor na tela e deixa-lo guardado em alguma var
3-)
4-) 
5-)
6-)
7-)
8-)
9-)
10-)
*/