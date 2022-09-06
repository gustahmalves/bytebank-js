import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta{
    constructor(saldoInicial,cliente,agencia){
      super(saldoInicial,cliente,agencia) //É solicitado os parametros da classe PAI, passamos o 0 como saldo inicial da conta corrente, e para cliente e agencia, usamos os parametros cliente e agencia do constructor. O SUPER referencia a classe PAI que está sendo invocada como modelo.
    }  
    
      sacar(valor){
        const taxa = 1.02;
        return super._sacar(valor,taxa);
      }
  
  }