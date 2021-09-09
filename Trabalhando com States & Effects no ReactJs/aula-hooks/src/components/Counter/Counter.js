function Counter() {
  let quantity = 10;

  function upQuantity() {
    quantity = quantity + 1
  }

  return (
    <>
      <h1>{quantity}</h1>
      <button onClick={upQuantity}>Aumentar</button>
    </>
  )
}

export default Counter;