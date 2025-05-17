

function GeneralInfo(){

    return(
        <>
        <h2>General Info</h2>
        <label htmlFor="name">Name</label>
        <input id="name" ></input>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ></input>

        <label htmlFor="number">Number</label>
        <input type="number" id="number" ></input>
        </>
    )
}

export default GeneralInfo