let jogador1 = 'X'
let jogador2 = 'O'
let jogador1_select11 , jogador2_select22
let valor_jogador1 = [],valor_jogador2 = [], valor, contador , jogador1_ganhou =0,jogador2_ganhou=0
let tabuleiro_marc = document.querySelectorAll('.tabuleiro_marc')
let ganhouEmpate = document.querySelector(".resultado_jogador")
let c = 0

tabuleiro_marc.forEach((tabuleiro)=>{
    tabuleiro.addEventListener("click", ()=>{
        if(tabuleiro.innerHTML ==  ""){
            if (c==0){
                jogador1_select11 = true
                jogador2_select22 = false
                valor_jogador1.push(tabuleiro.getAttribute("data-tab"))
    
               setTimeout(()=>{
                c++
               },"100")
            }
            if (c==1){
                jogador1_select11 = false
                jogador2_select22 = true
                valor_jogador2.push(tabuleiro.getAttribute("data-tab"))
                setTimeout(()=>{
                    c--
                   },"100")
                
            }
            if (jogador1_select11 == true){
                tabuleiro.innerHTML += jogador1}
            if (jogador2_select22 == true){
                tabuleiro.innerHTML += jogador2
            }
            jogo()
        }
        
    })
})
function jogo(){
    if (valor_jogador1[0] == "1" && valor_jogador1[1] == "2"  && valor_jogador1[2] == "3" || valor_jogador2[0] == "1" && valor_jogador2[1] == "2"  && valor_jogador2[2] == "3"){
        if(valor_jogador1[0] == "1" && valor_jogador1[1] == "2"  && valor_jogador1[2] == "3"){
            jogador1_ganhou ++
        }else{
            jogador2_ganhou++
        }
            ganhou()
    }
    if (valor_jogador1[0] == "1" && valor_jogador1[1] == "4"  && valor_jogador1[2] == "7" || valor_jogador2[0] == "1" && valor_jogador2[1] == "4"  && valor_jogador2[2] == "7"){
        ganhou()
    }
    if (valor_jogador1[0] == "1" && valor_jogador1[1] == "4"  && valor_jogador1[2] == "7" || valor_jogador2[0] == "1" && valor_jogador2[1] == "4"  && valor_jogador2[2] == "7"){
        ganhou()
    }

}
function ganhou(){
        if (jogador1_ganhou > 0){
            ganhouEmpate.innerHTML = `JOGADOR 1 GANHOU `
        }
        if (jogador2_ganhou > 0){
            ganhouEmpate.innerHTML = `JOGADOR 2 GANHOU `
        }
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