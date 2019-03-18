import React from 'react'

const List = ({list}) => 
<div className='tile' key={list.id}>
    <h5>{list.title}</h5>
    <p>{list.body}</p>
</div>

export default List