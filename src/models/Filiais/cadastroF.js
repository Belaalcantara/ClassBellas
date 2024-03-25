import { user } from "../../data/FirstFilial/user";
import Filial1 from "./filial1";

class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, nome_Escola, fundacao, cargo, responsavel, endereco,  quantia_Alunos, quantia_Turma, contato, email) {
    const user = this.get(id);

    if (user) {
        user.nome_Escola=nome_Escola ;
        user.fundacao=fundacao;
        user.cargo=cargo ;
        user.endereco=endereco ;
        user.responsavel=responsavel ;
        user.quantia_Alunos=quantia_Alunos;
        user.quantia_Truma=quantia_Turma ;
        user.contato=contato ;
        user.email=email ;
    }
    return user;
  }
}

const usersRepository = new UsersRepository();
const newUser = new Filial1(user.nome_Escola, user.fundacao,  user.cargo,user.responsavel, user.quantia_Alunos, user.quantia_Turmas, user.contato, user.email || 0);

usersRepository.add(newUser);

export default usersRepository;