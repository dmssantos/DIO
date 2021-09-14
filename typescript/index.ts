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

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const evt = event.currentTarget as HTMLInputElement;
  console.log(evt.value)
})
