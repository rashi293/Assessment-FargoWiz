import React, { useState } from 'react';
import './Home.css';
import User from './User';

const Home = () => {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        // console.log("clicked");
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
            const data = await response.json();
            console.log(data);
            setUsers(data);

        } catch (err) {
            console.error(err);
        }
    }

    const deleteData = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            return
        } else {
            setUsers(users.filter((user) => {
                return user.id !== id;
            }))
        }

    }


    return (
        <div>
            <div id="buttons">
                <button onClick={fetchData} id="new-quote">Fetch Api Data</button>
            </div>

            {users.map((user) => (
                <User id={user.id} key={user.id} title={user.title} body={user.body} onDelete={deleteData} />
            ))}


        </div>
    );
}

export default Home;