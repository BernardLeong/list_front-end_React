import React from 'react'

const NotifyUser = (props) => {


    return(
    <span className="notification">
        {props.notify}
    </span>
    )
}  

export default NotifyUser;
