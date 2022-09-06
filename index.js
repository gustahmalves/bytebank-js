import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";

const d1 = new Diretor("Maria", 13000, 111111);
d1.cadastrarSenha(123456);
const c1 = new Cliente("Juvenal", 2222, 2345);
const g1 = new Gerente("Lais", 8000, 2222222);
g1.cadastrarSenha(321321);

const diretorestaLogado = SistemaAutenticacao.login(d1, 123456);
const clienteEstaLogado = SistemaAutenticacao.login(c1, 1);
const gerenteEstaLogado = SistemaAutenticacao.login(g1, 321321);

console.log(diretorestaLogado, clienteEstaLogado, gerenteEstaLogado);
