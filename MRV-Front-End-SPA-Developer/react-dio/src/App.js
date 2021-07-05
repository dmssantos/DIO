import Item from './components/item'

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
    </>
  )
}

export default App