import React, { useState, useEffect, Fragment } from 'react'
import storageService from './services/storage'


function App() {
  const[items, setItems] = useState([]);

  useEffect(() => {
    storageService
      .getAll()
      .then(items =>{
        setItems(items)
      })
  }, [])

  console.log(items);

  return (
    <div className="App">
       <div>
        <ul>
            {items.map((item) =>
              <Fragment key={item.id}>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.id}</li>
                <li>{item.category}</li>
                <li>{item.quantity}</li>
              </Fragment>
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
