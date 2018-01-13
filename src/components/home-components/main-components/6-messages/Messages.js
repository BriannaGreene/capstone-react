import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import Message from './Message'

const Messages = ( state ) => {
  let messages = state.messages
  let user = state.auth

  let avatars = [
    'avatar01.png',
    'avatar02.png',
    'avatar03.png',
    'avatar04.png',
    'avatar05.png',
    'avatar06.png',
    'avatar07.png',
    'avatar08.png',
  ]

  const postMessage = (e) => {
    e.preventDefault()
    state.composeMessage({
      userId: user.id,
      message: e.target.message.value,
      state: messages
    })
    var frm = document.getElementsByName('message-form')[0]
    frm.reset()
    return false
  }

  const eachMessage = messages.map(message => {
    let name = ""
    let avatar = 0
    for (var i = 0; i < state.users.length; i++) {
      if (message.user_id == state.users[i].id) {
        name = `${state.users[i].first_name} ${state.users[i].last_name}`
        avatar = avatars[state.users[i].avatar]
      }
    }

    return(
      <Message
        key={message.id}
        id={message.id}
        // user={message.user_id}
        user={name}

        message={message.message}
        time={message.created_at}
        avatar={avatar}
        state={state}
      />
    )

  })

  return (
    <div id="message-body">
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

function mapStateToProps({ messages, auth, users }) {
  return { messages, auth, users }
}

export default connect(mapStateToProps, actions)(Messages)
