import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'

const Message = ({ id, user, message, time, avatar, state }) => {
  let jsx = 0

  if (avatar === 1) {
    jsx = 'avatar01'
  }

  // console.log('state from message: ', state.users);
  // // on click, send id to deleteMessage function
  // const deleteItem = (e) => {
  //   e.preventDefault()
  //   deleteMessage(id)
  // }

  // const userName = () => {
  //   for (var i = 0; i < state.users.length; i++) {
  //     if (state.users[i].id === user) {
  //       console.log('OBJ FROM MESAGE', state.users[i].id);
  //     }
  //   }
  //   // let obj = state.users.filter(item => item.id === user)
  //   // console.log(obj);
  //   // return obj.id
  // }
  // background-image: url('./images/weather-partly-cloudy.png');
  // let style = "background-image: url('./images/avatar01.png')"
  // let jsx = 'avatar01'

{/* <div style={{'backgroundColor': color}}>{text}</div> */}
  return (
    <div>
      <div className="message-container">
        <div className="message-avatar" id={{jsx}}>
          avatar
        </div>
        <div className="message-holder">
          <div>
            <span className="user-name">{user}</span>
            {/* <span className="timestamp">{time}</span> */}
          </div>
          <div className="message">
            {message}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Message
