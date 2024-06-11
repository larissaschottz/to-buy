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
      text: "Sabão em pó",
      category: "Casa",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Banana",
      category: "Comida",
      isCompleted: false,
    }
  ])

  return (
    <div className="app">
      <h1>Lista de Compras</h1>
      <div className="tobuy-list">
        {tobuy.map((tobuy) => (
          <div className="tobuy">
            <div className="content">
              <p>{tobuy.text}</p>
              <p className="category">({tobuy.category})</p>
            </div>
            <div>
              <button>Comprado</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
