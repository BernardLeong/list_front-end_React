import React, { Component } from 'react'

class List extends Component {

    handleClick = () => {
        this.props.onClick(this.props.list.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.list.id)
    }

    render() {
        return(
        <div className="tile">
            <span className="deleteButton" onClick={this.handleDelete} >
                x
            </span>

            <h4 onClick={this.handleClick}>
                {this.props.list.title}
            </h4>
             <p onClick={this.handleClick}>
                {this.props.list.body}
             </p>
        </div>
        )
    }
}


export default List
// const List = ({list}) => 
// <div className='tile' key={list.id}>
//     <h5>{list.title}</h5>
//     <p>{list.body}</p>
// </div>