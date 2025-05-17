

function GeneralInfo({nameHandle, numberHandle, emailHandle, name, email, number}){

    return(
        <>
        <h2>General Info</h2>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={nameHandle}></input>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={emailHandle} ></input>

        <label htmlFor="number">Number</label>
        <input type="tel" id="number" value={number} onChange={numberHandle}></input>
        </>
    )
}

export default GeneralInfo