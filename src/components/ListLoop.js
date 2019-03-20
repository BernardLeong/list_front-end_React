import React from 'react'
import List from './List'
import ListForm from './ListForm'

const ListLoop = (props) => {
    const lists= props.lists.map((list)=>{
        if(props.editListId === list.id){
            return (
                <ListForm titleRef={props.titleRef} list={list} key={list.id} updateList={props.updateList} updateNotification={props.updateNotification} resetNotification={props.resetNotification} />
            )
        }else{
            return(
                <List onDelete={props.onDelete} onClick={props.onClick} list={list} key={list.id} />
            )
        }
    })
    return(
        <div>
            {lists}
        </div>
    )
}

export default ListLoop;