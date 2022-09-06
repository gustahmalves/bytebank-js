//Classe abstrata

export class Conta{
  constructor(saldoInicial,cliente,agencia){
    this._saldo = saldoInicial;
    this._cliente = cliente; //usando o assessor do get cliente, por isso estamos usando "cliente" e não #cliente
    this._agencia = agencia;
    if(this.constructor == Conta) 
      throw new Error ('Você não deveria instanciar a classe Conta')
  }

  set cliente(novoValor){
    if (novoValor instanceof Cliente)
  this._cliente = novoValor;
 }
  get cliente(){return this._cliente}

  get saldo(){return this._saldo}

 //Método abstrato, força que todas as classes que herdaram a classe conta tenham um método SACAR implementado na própria classe. Caso a implementação seja esquecida, o método sacar herdado não vai funcionar.
  sacar(valor){
     throw new Error('O método sacar da classe PAI Conta é abstrato')
  }

  _sacar(valor,taxa){
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }else{
      console.log(`Você não possui saldo suficiente para este saque. Seu saldo é de R$${this._saldo}`)
    }     
  } 
  depositar(valor){
    if(valor <= 0) return;

    this._saldo += valor;
  }
  transferir(valor,conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
