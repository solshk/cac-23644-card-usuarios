import React, {useState,useEffect} from 'react';

const Api = () => {
    //no te olvides de agregar el componente api en app.js
    const [users, setUsers] = useState([]); //aca vamos almacenar las fotos que vienen de la api

    //hacemos la peticion una sola vez y guardamos la info en una variable
    useEffect(()=>{
        fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(json => setUsers(json.data));
    }, []);

    console.log({users});

    return (
        
        <div>
            <h2> Ejemplo de API </h2>

            {users.map(user => (
                <div className="card m-auto" style={{width: "18rem"}}>
                <img className="card-img-top" src={user.avatar} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{user.first_name}{user.last_name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CV</a>
                </div>
            </div>
            ))}
        </div>

    )
}

export default Api;