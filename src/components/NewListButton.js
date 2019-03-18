import React from 'react'

const NewListButton = (props) => {

    return(
        <button className="newListButton"
        onClick={props.addNewIdea} >
          New List
        </button >
    )
}

export default NewListButton;
