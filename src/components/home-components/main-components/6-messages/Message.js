import React from 'react'

const Message = ({ id, name, message, deleteMessage }) => {

  // // on click, send id to deleteMessage function
  // const deleteItem = (e) => {
  //   e.preventDefault()
  //   deleteMessage(id)
  // }

  return (
    <div>
      <div className="">
        <div className="">
          {name}
        </div>
        <div className="">
          {message}
        </div>
        {/* <div className="">
          <button className="" onClick={deleteItem}><i className={`fa fa-trash`}></i></button>
        </div> */}
      </div>
    </div>
  )

}

export default Message
