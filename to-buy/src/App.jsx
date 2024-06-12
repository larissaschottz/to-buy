import { useState } from 'react';
import Tobuy from './components/Tobuy';
import './App.css';
import TobuyForm from './components/TobuyForm';
import Search from './components/Search';
import Filter from './components/Filter';


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
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTobuy = (text, category) => {
    const newTobuys = [...tobuy, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
    ];
    setTobuy(newTobuys);
  };

  const removeTobuy = (id) => {
    const newTobuys = [...tobuy];
    const filteredTobuy = newTobuys.filter((tobuy) =>
      tobuy.id !== id ? tobuy : null
    );
    setTobuy(filteredTobuy);
  };

  const completeTobuy = (id) => {
    const newTobuys = [...tobuy];
    newTobuys.map((tobuy) => tobuy.id === id ? tobuy.isCompleted = !tobuy.isCompleted : tobuy);
    setTobuy(newTobuys)
  };

  return (
    <div className="app">
      <h1>Lista de Compras</h1>
      <Search search={search} setSearch={setSearch}/>
      <TobuyForm addTobuy={addTobuy} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="tobuy-list">
        {tobuy
        .filter((tobuy) => filter === "All" ? true : filter === "Completed" ? tobuy.isCompleted : !tobuy.isCompleted)
        .filter((tobuy) => 
          tobuy.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => 
          sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((tobuy) => (
          <Tobuy key={tobuy.id} tobuy={tobuy} removeTobuy={removeTobuy} completeTobuy={completeTobuy}/>
        ))}
      </div>
    </div>
  )
}

export default App;
