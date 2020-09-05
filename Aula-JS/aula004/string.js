// Retorna o tamanho de uma string
const textSize = 'texto'.length
console.log(`Quantidade de letras: ${textSize}`)

// Retorna um array quebrando a string por um delimitador
const splitedText = 'Texto'.split('x')
console.log(`\nArray com as posições separadas pelo delimitador: `, splitedText)

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log('\nSubistituição de valor: ', replacedText)

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1)
console.log('\nùltima letra de uma string: ', lastChar)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log('\nVValor da string da primeira letra menos a última: ', allWithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a última: ', secondToEnd)

// Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.slice(0, 2)
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos)
