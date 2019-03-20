import React, { Component } from 'react'
import axios from 'axios'

class ListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.list.title,
            body: this.props.list.body
            
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({[e.target.name]: e.target.value})
    }


    handleBlur = () => {
        const list = {
            title: this.state.title,
            body: this.state.body
        }
        let body = {list: list}
        axios.put(
            `http://localhost:3001/api/v1/lists/${this.props.list.id}`,
            body
        )
        .then(response => {
            console.log(response)
            this.props.updateList(response.data)
            this.props.updateNotification()
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className='tile'>
                <form onBlur={this.handleBlur}>
                <input className='input' type="text"
            name="title" value={this.state.title} ref={this.props.titleRef} onChange={this.handleInput} placeholder='Enter a Title' />
          <textarea className='input' name="body"
            placeholder='Describe your idea' onChange={this.handleInput} value={this.state.body}></textarea>
                </form>
            </div>
        )
    }
}

export default ListForm;