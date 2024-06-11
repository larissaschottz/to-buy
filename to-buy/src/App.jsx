import { useState } from 'react'

function App() {
  const [tobuy, setTobuy] = useState([
    {
      id: 1,
      text: "Sabonete Facial",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Comprar sabão em pó",
      category: "Casa",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Frutas",
      category: "Comida",
      isCompleted: false,
    }
  ])

  return (
    <div>Olá React</div>
  )
}

export default App
