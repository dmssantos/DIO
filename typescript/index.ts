// function soma(a: number, b: number) {
//   return a + b;
// }
/*
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}


interface IFelino extends IAnimal {
  visãoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'médio',
  tipo: 'terrestre',
}
*/
/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const evt = event.currentTarget as HTMLInputElement;
  console.log(evt.value)
})
*/
/*
function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 5);
*/
/*
interface IUsuário {
  id: string,
  email: string,
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}


function redirecione (usuario: IUsuário) {
  if(usuario.cargo) {
    //redirecionar (usuario.cargo)
  }

  //redirecionar para area de usuario
}
*/

interface Cachorro {
  readonly nome: string,
  readonly idade: number,
  readonly parqueFavorito?: string,
}

type CachorroSomenteLeitura = {
  readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura {
  idade;
  nome;
  parqueFavorito;

  constructor(nome, idade) {
    this.nome = nome;
    this.nome = idade;
  }
}

const cao = new MeuCachorro('Apollo', 14);