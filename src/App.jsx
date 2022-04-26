import React, { useState, useEffect, Fragment } from 'react'
import storageService from './services/storage'
import Forms from './components/Forms';

function App() {
  const[items, setItems] = useState([]);
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState('')

  useEffect(() => {
    const fetchitems = async () => {
      const data = await storageService.getAll()
      setItems(data)
    }

    fetchitems();
    
  }, [])

  const handleName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handlePrice = (event) => {
    console.log(event.target.value);
    setNewPrice(event.target.value)
  }

  const addItem = async (event) => {
    event.preventDefault()

    const newItem = {
      name: newName, 
      price: newPrice
    }

    await storageService
      .create(newItem)
      .then(returnedItem => {
        setItems(items.concat(returnedItem))
        setNewName('')
        setNewPrice('')
      })
      .catch( error => {
        console.log(error);
      })
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
                <br></br>
                <br></br>

                <li>Item: {item.name}</li>
                <li>Preço: R${item.price}</li>
                <li>ID: {item.id}</li>
                <li>Categoria: {item.category}</li>
                <li>Quantidade: {item.quantity}</li>
                <br></br>
              </Fragment>
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
