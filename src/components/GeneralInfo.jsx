

function GeneralInfo(){

    return(
        <>
        
        <label htmlFor="name">Name</label>
        <input id="name" placeholder="Name"></input>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="email"></input>

        <label htmlFor="number">Number</label>
        <input id="number" placeholder="number"></input>
        </>
    )
}

export default GeneralInfo