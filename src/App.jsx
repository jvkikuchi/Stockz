import React, { useState, useEffect, Fragment } from 'react'
import storageService from './services/storage'
import Forms from './components/Forms';

function App() {
  const[items, setItems] = useState([]);
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState('')

  useEffect(() => {
    storageService
      .getAll()
      .then(items =>{
        setItems(items)
      })
  }, [])

  const handleName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handlePrice = (event) => {
    console.log(event.target.value);
    setNewPrice(event.target.value)
  }

  const addItem = (event) => {
    event.preventDefault()

    const newItem = {
      name: newName, 
      price: newPrice
    }
  }

  return (
    <div className="App">
      <h1>Stockz</h1>
       <div>
        <ul>
          <Forms nameValue={newName} nameChange={handleName}
              priceValue={newPrice} priceChange={handlePrice}
              addItem={addItem}/>
            
            {items.map((item) =>
              <Fragment key={item.id}>
                <li>Item: {item.name}</li>
                <li>Preço: {item.price}</li>
                <li>ID: {item.id}</li>
                <li>Categoria: {item.category}</li>
                <li>Quantidade: {item.quantity}</li>
              </Fragment>
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
