import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

      constructor(cliente,agencia){
        super(0,cliente,agencia) //É solicitado os parametros da classe PAI, passamos o 0 como saldo inicial da conta corrente, e para cliente e agencia, usamos os parametros cliente e agencia do constructor. O SUPER referencia a classe PAI que está sendo invocada como modelo.
          ContaCorrente.numeroDeContas += 1; //Como o atributo é estático, ele está em todas as contas correntes igualmente, por isso é chamado dessa forma. Deve-se delcalar o atributo como estático na criação.
      }

      sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor,taxa);
      }
    }