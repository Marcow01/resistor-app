import { useRef, useState } from "react";
import React, { Suspense } from 'react';
import { NewtonsCradle } from '@uiball/loaders'
import { FiChevronUp, FiChevronDown, FiRefreshCcw } from "react-icons/fi";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const App = () => {
  
  const cylinder = useRef();
  const fita1_preto = useRef();
  const fita1_branco = useRef();
  const fita1_amarelo = useRef();
  const fita1_verde = useRef();
  const fita1_cinza = useRef();
  const fita1_roxa = useRef();
  const fita1_azul = useRef();
  const fita1_laranja = useRef();
  const fita1_vermelho = useRef();
  const fita1_marrom = useRef();

  const fita2_preto = useRef();
  const fita2_branco = useRef();
  const fita2_amarelo = useRef();
  const fita2_verde = useRef();
  const fita2_cinza = useRef();
  const fita2_roxa = useRef();
  const fita2_azul = useRef();
  const fita2_laranja = useRef();
  const fita2_vermelho = useRef();
  const fita2_marrom = useRef();

  const fita3_preto = useRef();
  const fita3_branco = useRef();
  const fita3_amarelo = useRef();
  const fita3_verde = useRef();
  const fita3_cinza = useRef();
  const fita3_roxa = useRef();
  const fita3_azul = useRef();
  const fita3_laranja = useRef();
  const fita3_vermelho = useRef();
  const fita3_marrom = useRef();

  const multiplicador_cinza = useRef();
  const multiplicador_laranja = useRef();
  const multiplicador_preto = useRef();
  const multiplicador_marrom = useRef();
  const multiplicador_vermelho = useRef();
  const multiplicador_ouro = useRef();
  const multiplicador_amarelo = useRef();
  const multiplicador_verde = useRef();
  const multiplicador_azul = useRef();

  const tolerancia_marrom = useRef();
  const tolerancia_vermelha = useRef();
  const tolerancia_ouro = useRef();
  const tolerancia_cinza = useRef();

  const grupo3 = useRef();

  function onLoad(spline) {
      const obj = spline.findObjectByName('Cylinder');
      const obj2 = spline.findObjectByName('fita1-preto')
      const obj3 = spline.findObjectByName('fita1-branco')
      const obj4 = spline.findObjectByName('fita1-amarelo')
      const obj5 = spline.findObjectByName('fita1-azul')
      const obj6 = spline.findObjectByName('fita1-vermelho')
      const obj7 = spline.findObjectByName('fita1-cinza')
      const obj8 = spline.findObjectByName('fita1-laranja')
      const obj9 = spline.findObjectByName('fita1-verde')
      const obj10 = spline.findObjectByName('fita1-marrom')
      const obj11 = spline.findObjectByName('fita1-roxa')

      const obj12 = spline.findObjectByName('fita2-preto')
      const obj13 = spline.findObjectByName('fita2-branco')
      const obj14 = spline.findObjectByName('fita2-amarelo')
      const obj15 = spline.findObjectByName('fita2-azul')
      const obj16 = spline.findObjectByName('fita2-vermelho')
      const obj17 = spline.findObjectByName('fita2-cinza')
      const obj18 = spline.findObjectByName('fita2-laranja')
      const obj19 = spline.findObjectByName('fita2-verde')
      const obj20 = spline.findObjectByName('fita2-marrom')
      const obj21 = spline.findObjectByName('fita2-roxa')
      
      const obj22 = spline.findObjectByName('tolerancia-marrom')
      const obj23 = spline.findObjectByName('tolerancia-vermelha')
      const obj24 = spline.findObjectByName('tolerancia-ouro')
      const obj25 = spline.findObjectByName('tolerancia-cinza')

      const obj26 = spline.findObjectByName('fita3-preto')
      const obj27 = spline.findObjectByName('fita3-marrom')
      const obj28 = spline.findObjectByName('fita3-vermelho')
      const obj29 = spline.findObjectByName('fita3-amarelo')
      const obj30 = spline.findObjectByName('fita3-laranja')
      const obj31 = spline.findObjectByName('fita3-verde')
      const obj32 = spline.findObjectByName('fita3-azul')
      const obj33 = spline.findObjectByName('fita3-roxa')
      const obj34 = spline.findObjectByName('fita3-branco')
      const obj35 = spline.findObjectByName('fita3-cinza')

      const obj36 = spline.findObjectByName('multiplicador-cinza')
      const obj37 = spline.findObjectByName('multiplicador-laranja')
      const obj38 = spline.findObjectByName('multiplicador-preto')
      const obj39 = spline.findObjectByName('multiplicador-marrom')
      const obj40 = spline.findObjectByName('multiplicador-vermelho')
      const obj41 = spline.findObjectByName('multiplicador-ouro')
      const obj42 = spline.findObjectByName('multiplicador-amarelo')
      const obj43 = spline.findObjectByName('multiplicador-verde')
      const obj44 = spline.findObjectByName('multiplicador-azul')
      const obj45 = spline.findObjectByName('grupo3')

      grupo3.current = obj45;

      fita1_preto.current = obj2;
      fita1_branco.current = obj3;
      fita1_amarelo.current = obj4;
      fita1_azul.current = obj5;
      fita1_vermelho.current = obj6;
      fita1_cinza.current = obj7;
      fita1_laranja.current = obj8;
      fita1_verde.current = obj9;
      fita1_marrom.current = obj10;
      fita1_roxa.current = obj11;
      cylinder.current = obj;

      fita2_preto.current = obj12;
      fita2_branco.current = obj13;
      fita2_amarelo.current = obj14;
      fita2_azul.current = obj15;
      fita2_vermelho.current = obj16;
      fita2_cinza.current = obj17;
      fita2_laranja.current = obj18;
      fita2_verde.current = obj19;
      fita2_marrom.current = obj20;
      fita2_roxa.current = obj21;

      fita3_preto.current = obj26;
      fita3_branco.current = obj34;
      fita3_amarelo.current = obj29;
      fita3_azul.current = obj32;
      fita3_vermelho.current = obj28;
      fita3_cinza.current = obj35;
      fita3_laranja.current = obj30;
      fita3_verde.current = obj31;
      fita3_marrom.current = obj27;
      fita3_roxa.current = obj33;

      multiplicador_cinza.current = obj36;
      multiplicador_laranja.current = obj37;
      multiplicador_preto.current = obj38;
      multiplicador_marrom.current = obj39;
      multiplicador_vermelho.current = obj40;
      multiplicador_ouro.current = obj41;
      multiplicador_amarelo.current = obj42;
      multiplicador_verde.current = obj43;
      multiplicador_azul.current = obj44;

      tolerancia_marrom.current = obj22;
      tolerancia_vermelha.current = obj23;
      tolerancia_ouro.current = obj24;
      tolerancia_cinza.current = obj25;

      let inputMultiplicador = document.getElementById('inputMultiplicador');
      inputMultiplicador.value = valorMultiplicador;

      let inputTolerancia = document.getElementById('inputTolerancia');
      inputTolerancia.value = valorTolerancia;
      
      let inputFaixa3 = document.getElementById('inputFaixa3');
      inputFaixa3.value = valorFita3;

      let inputFaixa2 = document.getElementById('inputFaixa2');
      inputFaixa2.value = valorFita2;

      let inputFaixa1 = document.getElementById('inputFaixa1');
      inputFaixa1.value = valorAtual;

      verificarAnel();
      verificarAnel2();
      funcaoDupla();
      //verificarAnel3();
      verificarMultiplicador();
      verificarTolerancia();
      operacao();
    }

    function verificarTolerancia(){ 
      if(valorTolerancia == (-1)){
        valorTolerancia = valorTolerancia + 1;
      }

      if(valorTolerancia == 0){
        let toleranciaVisor = document.getElementById('faixaTolerancia');
        toleranciaVisor.innerText = '1';
        
        tolerancia_marrom.current.visible = true;
        tolerancia_vermelha.current.visible = false;
        tolerancia_ouro.current.visible = false;
        tolerancia_cinza.current.visible = false;
        

      }

      if(valorTolerancia == 1){
        let toleranciaVisor = document.getElementById('faixaTolerancia');
        toleranciaVisor.innerText = '2';

        tolerancia_marrom.current.visible = false;
        tolerancia_vermelha.current.visible = true;
        tolerancia_ouro.current.visible = false;
        tolerancia_cinza.current.visible = false;
        

      }

      if(valorTolerancia == 2){
        let toleranciaVisor = document.getElementById('faixaTolerancia');
        toleranciaVisor.innerText = '5';

        tolerancia_marrom.current.visible = false;
        tolerancia_vermelha.current.visible = false;
        tolerancia_ouro.current.visible = true;
        tolerancia_cinza.current.visible = false;

      }

      if(valorTolerancia == 3){
        let toleranciaVisor = document.getElementById('faixaTolerancia');
        toleranciaVisor.innerText = '10';

        tolerancia_marrom.current.visible = false;
        tolerancia_vermelha.current.visible = false;
        tolerancia_ouro.current.visible = false;
        tolerancia_cinza.current.visible = true;

      }

      if(valorTolerancia == 4){
        valorTolerancia = valorTolerancia - 1;
        console.log('está em 3')
      }
      

    }

    function verificarMultiplicador() {
      if (valorMultiplicador == (-1)){
        valorMultiplicador = valorMultiplicador + 1;
      }

      if(valorMultiplicador == 0){

        multiplicador_cinza.current.visible = true;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = false;

        valorMultiplicar = (-2);
      }

      if(valorMultiplicador == 1){

        multiplicador_laranja.current.visible = true;
        multiplicador_cinza.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = false;
        valorMultiplicar = (-1);
      }

      if(valorMultiplicador == 2){
        
        multiplicador_cinza.current.visible = false;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = true;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = false;
        valorMultiplicar = 0;
      }

      if(valorMultiplicador == 3){
        
        multiplicador_cinza.current.visible = false;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = true;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = false;
        valorMultiplicar = 1;
      }

      if(valorMultiplicador == 4){
        
        multiplicador_cinza.current.visible = false;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = true;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = false;
        valorMultiplicar = 2;
      }

      if(valorMultiplicador == 5){
        
        multiplicador_cinza.current.visible = false;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = true;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = false;
        valorMultiplicar = 3;
      }

      if(valorMultiplicador == 6){
       
        multiplicador_cinza.current.visible = false;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = true;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = false;
        valorMultiplicar = 4;
      }

      if(valorMultiplicador == 7){
        
        multiplicador_cinza.current.visible = false;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = true;
        multiplicador_azul.current.visible = false;
        valorMultiplicar = 5;
      }

      if(valorMultiplicador == 8){
        
        multiplicador_cinza.current.visible = false;
        multiplicador_laranja.current.visible = false;
        multiplicador_preto.current.visible = false;
        multiplicador_marrom.current.visible = false;
        multiplicador_vermelho.current.visible = false;
        multiplicador_ouro.current.visible = false;
        multiplicador_amarelo.current.visible = false;
        multiplicador_verde.current.visible = false;
        multiplicador_azul.current.visible = true;
        valorMultiplicar = 6;
      }

      if (valorMultiplicador == 9){
        valorMultiplicador = valorMultiplicador - 1;
        console.log('está em 9')
      }
    }


    function verificarAnel2() {
      if (valorFita2 == (-1)){
        valorFita2 = valorFita2 + 1;
      }

      if(valorFita2 == 0){
        fita2_preto.current.visible = true;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '0';
      }

      if(valorFita2 == 1){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '1';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = true;  
        fita2_roxa.current.visible = false;

        
      }

      if(valorFita2 == 2){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '2';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = true;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

        
      }

      if(valorFita2 == 3){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '3';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = true;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

        
      }

      if(valorFita2 == 4){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '4';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = true;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

        
      }

      if(valorFita2 == 5){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '5';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = true;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

        
      }

      if(valorFita2 == 6){

        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '6';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = true;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

       
      }

      if(valorFita2 == 7){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '7';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = true;

       
      }

      if(valorFita2 == 8){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '8';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = false;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = true;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

        
      }

      if(valorFita2 == 9){
        let valorDiv2 = document.getElementById('faixa2');
        valorDiv2.innerText = '9';

        fita2_preto.current.visible = false;
        fita2_branco.current.visible = true;
        fita2_amarelo.current.visible = false;
        fita2_azul.current.visible = false;
        fita2_vermelho.current.visible = false;
        fita2_cinza.current.visible = false;
        fita2_laranja.current.visible = false;
        fita2_verde.current.visible = false;
        fita2_marrom.current.visible = false;
        fita2_roxa.current.visible = false;

        
      }

      if (valorFita2 == 10){
        valorFita2 = valorFita2 - 1;
        console.log('está em 9')
      }
    }

    function verificarAnel(){
        if (valorAtual == (-1)){
          valorAtual = valorAtual + 1;
        }
    
        if(valorAtual == 0){
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '';

          console.log('está em 0')
          fita1_preto.current.visible = true;
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;
          
          
        }
    
        if (valorAtual == 1){
          console.log('está em 1')  
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '1';

          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = true;
          fita1_roxa.current.visible = false;
          
          
        }
    
        if(valorAtual == 2){
          console.log('está em 2')
          let valorDiv = document.getElementById('faixa1');
          valorDiv.innerText = '2';
          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = true;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;

          
        }
    
        if(valorAtual == 3){
          console.log('está em 3')
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '3';

          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = true;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;


          
        }
    
        if(valorAtual == 4){
          console.log('está em 4')
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '4';

          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = true;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;

          
        }

        if(valorAtual == 5){
          console.log('está em 5')
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '5';

          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = true;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;


        }

        if(valorAtual == 6){
          console.log('está em 6')
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '6';

          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = true;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;


        }

        if(valorAtual == 7){
          console.log('está em 7')
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '7';

          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = true;

        
        }

        if(valorAtual == 8){
          console.log('está em 8')
          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '8';
          fita1_preto.current.visible = false
          fita1_branco.current.visible = false;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = true;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;


        }

        if(valorAtual == 9){
          console.log('está em 9')

          let valorDiv = document.getElementById('faixa1')
          valorDiv.innerText = '9';

          fita1_preto.current.visible = false
          fita1_branco.current.visible = true;
          fita1_amarelo.current.visible = false;
          fita1_azul.current.visible = false;
          fita1_vermelho.current.visible = false;
          fita1_cinza.current.visible = false;
          fita1_laranja.current.visible = false;
          fita1_verde.current.visible = false;
          fita1_marrom.current.visible = false;
          fita1_roxa.current.visible = false;

        }

        if (valorAtual == 10){
          valorAtual = valorAtual - 1;
          console.log('está em 9')
        }
      }

      function verificarAnel3(){
        if (valorFita3 == (-1)){
          valorFita3 = valorFita3 + 1;
        }
    
        if(valorFita3 == 0){
          console.log('está em 0')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '0';

          fita3_preto.current.visible = true;
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;

         
        }
    
        if (valorFita3 == 1){
          console.log('está em 1')    
          
          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '1';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = true;
          fita3_roxa.current.visible = false;


        }
    
        if(valorFita3 == 2){
          console.log('está em 2')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '2';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = true;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;

        }
    
        if(valorFita3 == 3){
          console.log('está em 3')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '3';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = true;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;
          
        }
    
        if(valorFita3 == 4){
          console.log('está em 4')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '4';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = true;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;

        }

        if(valorFita3 == 5){
          console.log('está em 5')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '5';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = true;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;

        }

        if(valorFita3 == 6){
          console.log('está em 6')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '6';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = true;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;

        }

        if(valorFita3 == 7){
          console.log('está em 7')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '7';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = true;

        }

        if(valorFita3 == 8){
          console.log('está em 8')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '8';
          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = true;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;

        }

        if(valorFita3 == 9){
          console.log('está em 9')

          let valorDiv = document.getElementById('faixa3')
          valorDiv.innerText = '9';
          fita3_preto.current.visible = false
          fita3_branco.current.visible = true;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;

        }

        if (valorFita3 == 10){
          valorFita3 = valorFita3 - 1;
          console.log('está em 9')
        }
      }


/////////////////////////////////
    
  let contagem = 0;

    function funcaoDupla(){
      if(contagem==0){
        contagem++;
        document.getElementById('3digitoInput').style.display = 'flex';
        document.getElementById('3digito').style.display = 'flex';
        verificarAnel3();
      }

      else{
        contagem--;
        document.getElementById('3digitoInput').style.display = 'none';
        document.getElementById('3digito').style.display = 'none';

          fita3_preto.current.visible = false
          fita3_branco.current.visible = false;
          fita3_amarelo.current.visible = false;
          fita3_azul.current.visible = false;
          fita3_vermelho.current.visible = false;
          fita3_cinza.current.visible = false;
          fita3_laranja.current.visible = false;
          fita3_verde.current.visible = false;
          fita3_marrom.current.visible = false;
          fita3_roxa.current.visible = false;
        
      }

    }
    let valorAtual = 3;
    let valorFita2 = 1;
    let valorFita3 = 0;
    let valorMultiplicador = 0;
    let valorMultiplicar;
    let valorTolerancia = 2;

    function somarMultiplicador(){
      valorMultiplicador = valorMultiplicador + 1;
      console.log(valorMultiplicador)
      let inputMultiplicador = document.getElementById('inputMultiplicador');
      inputMultiplicador.value = valorMultiplicador;
      verificarMultiplicador();
      operacao();
    }

    function subtrairMultiplicador(){
      valorMultiplicador = valorMultiplicador - 1;
      let inputMultiplicador = document.getElementById('inputMultiplicador');
      inputMultiplicador.value = valorMultiplicador;
      verificarMultiplicador();
      operacao();
      console.log(valorMultiplicador)
    }

    function somarTolerancia(){
      valorTolerancia = valorTolerancia + 1;
      console.log(valorTolerancia)
      let inputTolerancia = document.getElementById('inputTolerancia');
      inputTolerancia.value = valorTolerancia;
      verificarTolerancia();
      operacao();
    }

    function subtrairTolerancia(){
      valorTolerancia = valorTolerancia - 1;
      let inputTolerancia = document.getElementById('inputTolerancia');
      inputTolerancia.value = valorTolerancia;

      verificarTolerancia();
      operacao();
      console.log(valorTolerancia)
    }


    function somar2(){
      valorFita2 = valorFita2 + 1;
      console.log(valorFita2)

      let inputFaixa2 = document.getElementById('inputFaixa2');
      inputFaixa2.value = valorFita2;

      verificarAnel2();
      operacao();
  }

  function subtrair2(){
    valorFita2 = valorFita2 - 1;
    console.log(valorFita2);
    let inputFaixa2 = document.getElementById('inputFaixa2');
      inputFaixa2.value = valorFita2;
    verificarAnel2();
    operacao();
  }

  function somar3(){
    valorFita3 = valorFita3 + 1;
    console.log(valorFita3)
    let inputFaixa3 = document.getElementById('inputFaixa3');
      inputFaixa3.value = valorFita3;

    verificarAnel3();
    operacao();
}

  function subtrair3(){
    valorFita3 = valorFita3 - 1;
    console.log(valorFita3);
    let inputFaixa3 = document.getElementById('inputFaixa3');
      inputFaixa3.value = valorFita3;
    verificarAnel3();
    operacao();
  }

    function somar(){
        valorAtual = valorAtual + 1;
        console.log(valorAtual);
        
        let inputFaixa1 = document.getElementById('inputFaixa1');
        inputFaixa1.value = valorAtual;

        verificarAnel();
        operacao();

    }

    function subtrair(){
        valorAtual = valorAtual - 1;
        console.log(valorAtual);

        let inputFaixa1 = document.getElementById('inputFaixa1');
        inputFaixa1.value = valorAtual;

        verificarAnel();
        operacao();
    }

    function operacao(){
      let resultado = document.getElementById('resultado').textContent;
      resultado = parseInt(resultado, 10);
      resultado = Math.pow(10, (valorMultiplicar)) * resultado;
      let resultadoOperacao = document.getElementById('resultadoOperacao');
      resultadoOperacao.innerText = resultado;

      console.log(resultado)
    }

    function letsGo(){
      let inputFaixa1 = document.getElementById('inputFaixa1').value;
      let inputFaixa2 = document.getElementById('inputFaixa2').value;
      let inputFaixa3 = document.getElementById('inputFaixa3').value;
      let inputMultiplicador = document.getElementById('inputMultiplicador').value;
      let inputTolerancia = document.getElementById('inputTolerancia').value;

      valorAtual = inputFaixa1;
      valorFita2 = inputFaixa2;
      valorFita3 = inputFaixa3;
      valorMultiplicador = inputMultiplicador;
      valorTolerancia = inputTolerancia;

      verificarAnel();
      verificarAnel2();
      verificarAnel3();
      verificarMultiplicador();
      verificarTolerancia();
      operacao();
    }

  return(
    <div className='App'>
      <Suspense fallback={<NewtonsCradle size={40} speed={1.4} color="black"/>}>

      <header>
        <nav>
            <a>resistor.app</a>
            <a>siect 2022</a>
        </nav>
      </header>

      <div>
        <button type="button" id="alterar-resi" onClick={funcaoDupla}><FiRefreshCcw/><a> alterar resistor</a></button>
      </div>

      <Spline scene="https://prod.spline.design/qNQnzpJFAEdX8FxU/scene.splinecode" onLoad={onLoad}/>
        
      <main>
        <article id='caixa0'>
          <section className="lcd2">
            <div>
              <a><a id="resultadoOperacao"></a>Ω ± <a id="faixaTolerancia">1</a>%</a> 
            </div>
          </section>
        </article>
        
        <article id='caixa1'>
        <div className="seletores-resistencia-numerico">
          <div className="itens-botoes"> 
            <a>1° digito:</a>
            <input type='number' min="0" max="9" id='inputFaixa1' onChange={letsGo}></input>
          </div>

          <div className="itens-botoes">
            <a>2° digito:</a>
            <input type='number' min="0" max="9"  id='inputFaixa2' onChange={letsGo}></input>
          </div>

          <div id='3digitoInput' className="itens-botoes">
            <a>3° digito:</a>
            <input type='number' min="0" max="9"  id='inputFaixa3' onChange={letsGo}></input>
          </div>

          <div className="itens-botoes">
            <a>multiplicador:</a>
            <input type='number' min="0" max="9"  id='inputMultiplicador' onChange={letsGo}></input>
          </div>

          <div className="itens-botoes">
            <a>tolerância:</a>
            <input type='number' min="0" max="9"  id='inputTolerancia' onChange={letsGo}></input>
          </div>
          
        </div>
        </article>

        <article id='caixa2'>
          <div className="seletores-resistencia">
            <div className="itens-botoes">
            <a>1° dígito:</a>
            <button type="button" onClick={somar} className='botao-up-or-down'><FiChevronUp/></button>
            <button type="button" onClick={subtrair} className='botao-up-or-down'><FiChevronDown/></button>
           </div>

           <div className="itens-botoes">
            <a>2° dígito:</a>
            <button type="button" onClick={somar2} className='botao-up-or-down'><FiChevronUp/></button>
            <button type="button" onClick={subtrair2} className='botao-up-or-down'><FiChevronDown/></button>
           </div>

           <div id='3digito' className="itens-botoes">
            <a>3° dígito:</a>
            <button type="button" onClick={somar3} className='botao-up-or-down'><FiChevronUp/></button>
            <button type="button" onClick={subtrair3} className='botao-up-or-down'><FiChevronDown/></button>
           </div>

           <div className="itens-botoes">
            <a>multiplicador:</a>
            <button type="button" onClick={somarMultiplicador} className='botao-up-or-down'><FiChevronUp/></button>
            <button type="button" onClick={subtrairMultiplicador} className='botao-up-or-down'><FiChevronDown/></button>
           </div>

           <div className="itens-botoes">
            <a>tolerância:</a>
            <button type="button" onClick={somarTolerancia} className='botao-up-or-down'><FiChevronUp/></button>
            <button type="button" onClick={subtrairTolerancia} className='botao-up-or-down'><FiChevronDown/></button>
           </div>
        </div>
        </article>
      </main>
      
      <section className="lcd">
        <div>
          <a id="resultado"><a id="faixa1"></a><a id="faixa2"></a><a id='faixa3'></a></a><a>Ω ± %</a>
        </div>
      </section>
      
      </Suspense>
      
      {/*<button type="button" onClick={moveObj} className='botao-up-or-down'>botão para teste</button>*/ }
        
    </div>
  )};
