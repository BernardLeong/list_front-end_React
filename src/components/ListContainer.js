import React, { Component } from 'react'
import axios from 'axios'
import ListLoop from './ListLoop'
import NotifyUser from './NotifyUser'
import NewListButton from './NewListButton'
import update from 'immutability-helper'

class ListContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: [],
            editListId: null,
            notification: ''
        }
    }

    componentDidMount() {
      axios.get('http://localhost:3001/api/v1/lists.json')
      .then(response => {
        this.setState({lists: response.data})
      })
      .catch(error => console.log(error))
    }

    updateList = (list) => {
      const listIndex = this.state.lists.findIndex(x => x.id === list.id)
      const lists = update(this.state.lists, {
        [listIndex]: { $set: list }
      })
      this.setState({lists: lists})
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


    updateNotification = () => {
      this.setState({notification: "All changes saved"})
    }

    resetNotification = () => {
      this.setState({notification: ''})
    }
    
  render() {
   

    const lists = this.state.lists
    const listId = this.state.editListId

    return (
      <div>
      <NewListButton addNewIdea={this.addNewIdea}/>
      < NotifyUser notify={this.state.notification} />
        <ListLoop resetNotification={this.resetNotification}  updateNotification={this.updateNotification} updateList={this.updateList} lists={lists} editListId={listId} />
      </div>
    )
  }
}

export default ListContainer