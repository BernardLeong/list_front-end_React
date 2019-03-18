import React, { Component } from 'react'
import axios from 'axios'
import ListLoop from './ListLoop'
import NewListButton from './NewListButton'
import update from 'immutability-helper'

class ListContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: [],
            editListId: null
        }
    }

    componentDidMount() {
      axios.get('http://localhost:3001/api/v1/lists.json')
      .then(response => {
        this.setState({lists: response.data})
      })
      .catch(error => console.log(error))
    }

    addNewIdea = () => {
      const body = {list: {title: '', body: ''} }
      axios.post(
        'http://localhost:3001/api/v1/lists',
        body
      ).then(response => {
        console.log(response)
        const updateList = update(this.state.lists, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          lists: updateList,
          editListId: response.data.id
        })
      })
      .catch(error => console.log(error))
    }
    
  render() {
   

    const lists = this.state.lists
    const listId = this.state.editListId

    return (
      <div>
      <NewListButton addNewIdea={this.addNewIdea}/>
        <ListLoop lists={lists} editListId={listId} />
      </div>
    )
  }
}

export default ListContainer