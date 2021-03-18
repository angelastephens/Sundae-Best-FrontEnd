function SundaeForm() {
    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:3001/sundaes', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"sundae":{
        "name": document.getElementById("name").value,
        "scoops": document.getElementById("scoops").value,
        "ice_cream_flavors": document.getElementById("ice_cream_flavors").value,
        "toppings": document.getElementById("toppings").value,
        
    }})
    })
    .then (response => {
        if(response.ok){ 
            alert('You have submitted the form.')
            document.getElementById("new_sundae").reset()
        } else {
            alert("form submission failed ")
            return response.text().then(error => Promise.reject(error))
        }
    })
    
      }

      
    return(
      <div className="wrapper">
        <h1>Create Your Favorite Sundae</h1>
        <form onSubmit={handleSubmit} id="new_sundae">
        <fieldset>
           <label>
             <p>Name</p>
             <input name="name" id="name" />
             <p>Pick your scoops</p>
             <input name="scoops" id="scoops" />
             <p>Pick your Ice Cream Flavors</p>
             <input name="ice_cream_flavors" id="ice_cream_flavors" />
             <p>Pick your Toppings</p>
             <input name="toppings" id="toppings" />
           </label>
         </fieldset>
         <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default SundaeForm
