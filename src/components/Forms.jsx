const Forms = ({nameValue, nameChange, priceValue, priceChange, addItem}) => {
    return(
      <div>
        <h2 className="bg-blue-200">Add a new</h2>
        <form onSubmit={addItem}>
          <div>
            Item: <input value={nameValue} onChange={nameChange}></input>
            <br></br>
            Number: <input value={priceValue} onChange={priceChange}></input>
          </div>
          <button type="submit">add</button>
        </form>
      </div>
    )
}
  
export default Forms