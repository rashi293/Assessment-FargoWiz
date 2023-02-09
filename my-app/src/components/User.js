import React from 'react';
import './User.css';

const User = (props) => {

    const handleDelete = () => {
        props.onDelete(props.id);
    }


    return (
        <div className='list'>
            <span> <b>Title</b> {props.title} </span>
            <span><b>Body</b> {props.body}</span>
            <span>
                <button id='new-quote' onClick={handleDelete}>Delete</button>
            </span>

        </div>
    );
}

export default User;