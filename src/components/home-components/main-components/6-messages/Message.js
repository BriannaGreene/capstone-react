import React from 'react'

const Message = ({ id, user, message, time }) => {

  // // on click, send id to deleteMessage function
  // const deleteItem = (e) => {
  //   e.preventDefault()
  //   deleteMessage(id)
  // }

  return (
    <div>
      <div className="message-container">
        <div className="">
          {user}
        </div>
        <div className="">
          {message}
        </div>
        <div>
          {time}
        </div>
        {/* <div className="">
          <button className="" onClick={deleteItem}><i className={`fa fa-trash`}></i></button>
        </div> */}
      </div>
    </div>
  )

}

export default Message
