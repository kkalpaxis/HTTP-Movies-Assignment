import React, { useState, useEffect } from "react";
import axios from 'axios';

const initialState = {
    title: "",
    director: "",
    metascore: "",
    stars: []
};

const UpdatedMovie = props => {
    const [update, setUpdate] = useState(initialState);

    useEffect(()=>{
        const id = props.match.params.id
    })


    setUpdate({
        ...update,
        [event.target.name]: value
      });

  const changeHandler = event => {
      event.preventDefault();
      setUpdate({...update, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios
    .put(`http://localhost:5000/update-movie/${props.match.params.id}`, update )
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    })
    props.history.push('/')
    }

	return (
        <div>
        <h2>Update Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            value={update.title}
          />
          <input
            type="number"
            name="metascore"
            onChange={changeHandler}
            value={update.metascore}
          />
          <input
            type='text'
            name="director"
            onChange={changeHandler}
            value={update.director}
          />
          <input
            type="array"
            name="stars"
            onChange={changeHandler}
            value={update.stars}
          />
          <button className="form-button">Update Movie</button>
        </form>
      </div>
    );
}
	
export default UpdatedMovie