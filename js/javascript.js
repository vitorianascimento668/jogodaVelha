let jogador1 = 'X'
let jogador2 = 'O'
let jogador1_select11 , jogador2_select22, vezes_jogada = 0
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
    //LATERALMENTE
    if ((tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[1].innerHTML == "X"  && tabuleiro_marc[2].innerHTML == "X") || (tabuleiro_marc[0].innerHTML == "O" && tabuleiro_marc[1].innerHTML == "O"  && tabuleiro_marc[2].innerHTML == "O")){
        if(tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[1].innerHTML == "X"  && tabuleiro_marc[2].innerHTML == "X"){
            jogador1_ganhou ++
        }else{ 
            jogador2_ganhou++
        }
            ganhou()
    }
    if ((tabuleiro_marc[3].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[5].innerHTML == "X") || (tabuleiro_marc[3].innerHTML == "O" && tabuleiro_marc[4].innerHTML == "O"  && tabuleiro_marc[5].innerHTML == "O")){
        if(tabuleiro_marc[3].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[5].innerHTML == "X"){
            jogador1_ganhou ++
        }else{ 
            jogador2_ganhou++
        }
            ganhou()
    }
    if ((tabuleiro_marc[6].innerHTML == "X" && tabuleiro_marc[7].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X") || (tabuleiro_marc[6].innerHTML == "O" && tabuleiro_marc[7].innerHTML == "O"  && tabuleiro_marc[8].innerHTML == "O")){
        if(tabuleiro_marc[6].innerHTML == "X" && tabuleiro_marc[7].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X"){
            jogador1_ganhou ++
        }else{ 
            jogador2_ganhou++
        }
            ganhou()
    }
    // EM CIMA / RETO
    if ((tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[3].innerHTML == "X"  && tabuleiro_marc[6].innerHTML == "X") || (tabuleiro_marc[0].innerHTML == "O" && tabuleiro_marc[3].innerHTML == "O"  && tabuleiro_marc[6].innerHTML == "O")){
        if(tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[3].innerHTML == "X"  && tabuleiro_marc[6].innerHTML == "X"){
            jogador1_ganhou ++
        }else{ 
            jogador2_ganhou++
        }
            ganhou()
    } // TRANSVERSAL
    if ((tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X") || (tabuleiro_marc[0].innerHTML == "O" && tabuleiro_marc[4].innerHTML == "O"  && tabuleiro_marc[8].innerHTML == "O")){
        if(tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X"){
            jogador1_ganhou ++
        }else{ 
            jogador2_ganhou++
        }
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