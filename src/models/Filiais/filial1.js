export default class Filial1 {
    constructor(nome_Escola, fundacao, cargo, quantiaAlunos, quantiaTurmas, contato, email) {
      this.id = this.generateId();
      this.nome_Escola =nome_Escola ;
      this.fundacao = fundacao;
      this.cargo =cargo ;
      this.quantiaAlunos = quantiaAlunos;
      this.quantiaTurmas =quantiaTurmas ;
      this.contato = contato ;
      this.email =email ;
    }
  
    generateId() {
      return Math.floor(Math.random() * 1000);
    }
  }