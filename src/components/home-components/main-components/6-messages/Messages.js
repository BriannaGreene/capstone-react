import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import Message from './Message'

const Messages = ( state ) => {
  let messages = state.messages
  let user = state.auth.id

  const postMessage = (e) => {
    e.preventDefault()
    state.composeMessage({
      userId: user,
      message: e.target.message.value,
      state: messages
    })
    var frm = document.getElementsByName('message-form')[0]
    frm.reset()
    return false
  }

  const eachMessage = messages.map(message => (
    <Message
      key={message.id}
      id={message.id}
      user={message.user_id}
      message={message.message}
      time={message.created_at}
    />
  ))

  return (
    <div className="main-body">
      <div id="message-board">
        {eachMessage}
      </div>

      <div className="">
        <form  name="message-form" autoComplete="off" onSubmit={postMessage}>
            <input id="message-form" name="message" placeholder="Write a messsage!"/>
            {/* <button className="">POST!</button> */}
        </form>
      </div>

    </div>
  )
}

function mapStateToProps({ messages, auth }) {
  return { messages, auth }
}

export default connect(mapStateToProps, actions)(Messages)
