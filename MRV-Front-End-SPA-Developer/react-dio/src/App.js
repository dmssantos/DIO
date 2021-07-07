import Item from './components/item'
import Card from './components/cards'

const App = () => {
  return (
    <>
      <h1>Minha Primeira Aplicação React</h1>
      <ul>
        <Item>
          tem 1
        </Item>
        <Item>
          tem 2
        </Item>
        <Item>
          tem 3
        </Item>
      </ul>
      <Card />
    </>
  )
}

export default App