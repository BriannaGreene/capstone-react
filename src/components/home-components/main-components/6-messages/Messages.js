import React from 'react'
import Message from './Message'

const Messages = () => {

  const postMessage = (e) => {
    console.log(e.target.message.value);
    e.preventDefault()
    // composeMessage({
    //   id: messages.length+1,
    //   name: e.target.name.value,
    //   message: e.target.message.value
    // })
    var frm = document.getElementsByName('message-form')[0];
   // frm.submit(); // Submit
   frm.reset();  // Reset
   return false;
  }

  // const eachMessage = filtered.map(message => (
  //   <Message
  //     key={message.id}
  //     id={message.id}
  //     name={message.name}
  //     message={message.message}
  //     deleteMessage={deleteMessage}
  //   />
  // ))


  return (
    <div className="">
      <div id="message-board">
        Message Area
      </div>

      <div className="">
        <form  name="message-form" autocomplete="off" onSubmit={postMessage}>
            <input id="message-form" name="message" placeholder="Write a messsage!"/>
            {/* <button className="">POST!</button> */}
        </form>
      </div>


    </div>
  )
}



export default Messages
