import React, { useState } from "react";

const ComponentInput = () => {
    const [userRegistration,setuserRegistration] = useState({
          username : "",
          email    : "",
          password : "",
          phone    : "",
        
    });
    const [records,setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value= e.target.value;
        console.log(name,value);
        setuserRegistration({...userRegistration,[name]:value})
       }
       const handleSubmit = (e) => {
              e.preventDefault();
              const newRecord = {...userRegistration,id:new Date().getTime().toString()}
              setRecords([...records,newRecord])
              setuserRegistration({
                username : "",
                email    : "",
                password : "",
                phone    : "",
              })
              
       }
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">fullname</label>
                <input type="text" autoComplete="off" 
                value={userRegistration.username}
                onChange={handleInput}
                name="username" id="username" />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" autoComplete="off"  
                value={userRegistration.email}
                onChange={handleInput}
                name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="text" autoComplete="off"  
                value={userRegistration.password}
                onChange={handleInput}
                name="password" id="password" />
            </div>
            <div>
                <label htmlFor="phone">phone</label>
                <input type="text" autoComplete="off"  
                value={userRegistration.phone}
                onChange={handleInput}
                name="phone" id="phone" />
            </div>
            <button type="submit">Registration</button>

            </form>
            <div>
                {
                    records.map((curElem) => {
                        return(
                            <div key={curElem.id}>
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                                <p>{curElem.phone}</p>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
} 
export default ComponentInput;