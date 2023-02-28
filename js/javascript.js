let jogador1 = 'X'
let jogador2 = 'O'
let jogador1_select11 = "", jogador2_select22 ,vezes_jogada = 0
let c = 0, v_ganhada1, v_ganhada2 , tamanho_tabuleiro = ""
let valor_jogador1 = [],valor_jogador2 = [], valor, contador , jogador1_ganhou =0,jogador2_ganhou=0, jogador_1_placar =0 , jogador_2_placar = 0
let tabuleiro_marc = document.querySelectorAll('.tabuleiro_marc')
let ganhouEmpate = document.querySelector(".resultado_jogador")
let novoJ = document.querySelector(".novo_jogo")
let placar_1 = document.querySelector(".jogador_1")
let placar_2 = document.querySelector(".jogador_2")

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
            jogador_1_placar++         
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
            ganhou()
            placar()
           
    }
    if ((tabuleiro_marc[3].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[5].innerHTML == "X") || (tabuleiro_marc[3].innerHTML == "O" && tabuleiro_marc[4].innerHTML == "O"  && tabuleiro_marc[5].innerHTML == "O")){
        if(tabuleiro_marc[3].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[5].innerHTML == "X"){
            jogador1_ganhou ++
            jogador_1_placar ++
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
            ganhou()
            placar()
            
    }
    if ((tabuleiro_marc[6].innerHTML == "X" && tabuleiro_marc[7].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X") || (tabuleiro_marc[6].innerHTML == "O" && tabuleiro_marc[7].innerHTML == "O"  && tabuleiro_marc[8].innerHTML == "O")){
        if(tabuleiro_marc[6].innerHTML == "X" && tabuleiro_marc[7].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X"){
            jogador1_ganhou ++
            jogador_1_placar++
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
            ganhou()
            placar()
            
    }
    // EM CIMA / RETO
    if ((tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[3].innerHTML == "X"  && tabuleiro_marc[6].innerHTML == "X") || (tabuleiro_marc[0].innerHTML == "O" && tabuleiro_marc[3].innerHTML == "O"  && tabuleiro_marc[6].innerHTML == "O")){
        if(tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[3].innerHTML == "X"  && tabuleiro_marc[6].innerHTML == "X"){
            jogador1_ganhou ++
            jogador_1_placar ++
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
        
            ganhou()
            placar()
          
    }
    if ((tabuleiro_marc[1].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[7].innerHTML == "X") || (tabuleiro_marc[1].innerHTML == "O" && tabuleiro_marc[4].innerHTML == "O"  && tabuleiro_marc[7].innerHTML == "O")){
        if(tabuleiro_marc[1].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[7].innerHTML == "X"){
            jogador1_ganhou ++
            jogador_1_placar++
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
        
            ganhou()
            placar()
    }       
    if ((tabuleiro_marc[2].innerHTML == "X" && tabuleiro_marc[5].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X") || (tabuleiro_marc[2].innerHTML == "O" && tabuleiro_marc[5].innerHTML == "O"  && tabuleiro_marc[8].innerHTML == "O")){
        if(tabuleiro_marc[2].innerHTML == "X" && tabuleiro_marc[5].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X"){
            jogador1_ganhou ++
            jogador_1_placar++
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
        
            ganhou()
            placar()
    }        
    // TRANSVERSAL
    if ((tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X") || (tabuleiro_marc[0].innerHTML == "O" && tabuleiro_marc[4].innerHTML == "O"  && tabuleiro_marc[8].innerHTML == "O")){
        if(tabuleiro_marc[0].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[8].innerHTML == "X"){
            jogador1_ganhou ++
            jogador_1_placar++
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
            ganhou()
            placar()
            
    }
    if ((tabuleiro_marc[2].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[6].innerHTML == "X") || (tabuleiro_marc[2].innerHTML == "O" && tabuleiro_marc[4].innerHTML == "O"  && tabuleiro_marc[6].innerHTML == "O")){
        if(tabuleiro_marc[2].innerHTML == "X" && tabuleiro_marc[4].innerHTML == "X"  && tabuleiro_marc[6].innerHTML == "X"){
            jogador1_ganhou ++
            jogador_1_placar++
        }else{ 
            jogador2_ganhou++
            jogador_2_placar++
        }
            ganhou()
            placar()
           
    }
    

    empate()
    
}
function novoJogo(){
        for (let con = 0 ; con < tabuleiro_marc.length ; con++){
            tabuleiro_marc[con].innerHTML = ""
            jogador1_select11 = "", jogador2_select22 = ''
            ganhouEmpate.innerHTML = "JOGUE!!"
            c = 0,  tamanho_tabuleiro = ""
            jogador1_ganhou = 0 , jogador2_ganhou = 0
        } 
}

function empate(){
    for (let s =0 ; s < tabuleiro_marc.length; s++){
        if(tabuleiro_marc[s].innerHTML.length > 0){
            tamanho_tabuleiro++
        }
    }
    if(tamanho_tabuleiro == 45 && ganhouEmpate.innerHTML == "JOGUE!!"){
        ganhouEmpate.innerHTML = `EMPATEEE !! `
        setTimeout (()=>{
            novoJogo()
        },"1000")
    }
}

function ganhou(){
        
        if (jogador1_ganhou > 0){
            ganhouEmpate.innerHTML = `JOGADOR 1 GANHOU `
            alert('TERMINOU O JOGO, O JOGADOR 1 GANHOU ')
            setTimeout (()=>{
                novoJogo()
            },"300")
        }
        if (jogador2_ganhou > 0){
            ganhouEmpate.innerHTML = `JOGADOR 2 GANHOU `
            alert('TERMINOU O JOGO, O  O JOGADOR 2 GANHOU' )
            setTimeout (()=>{
                novoJogo()
            },"300")
        }
}
function placar(){
    placar_1.innerHTML = ""
    placar_2.innerHTML = ""
    placar_1.innerHTML = `JOGADOR X = ${jogador_1_placar}           `
    placar_2.innerHTML = `JOGADOR O = ${jogador_2_placar} `
}
function zerar(){
    jogador_1_placar=0, jogador_2_placar=0
    placar_1.innerHTML = `JOGADOR X = ${0}           `
    placar_2.innerHTML = `JOGADOR O = ${0} `
}
