import React from 'react'

const Message = ({ id, user, message, time, avatar, state }) => {
  let image = ''
  if (avatar === 1) { image = 'avatar01' }
  if (avatar === 2) { image = 'avatar02' }
  if (avatar === 3) { image = 'avatar03' }
  if (avatar === 4) { image = 'avatar04' }
  if (avatar === 5) { image = 'avatar05' }
  if (avatar === 6) { image = 'avatar06' }
  if (avatar === 7) { image = 'avatar07' }
  if (avatar === 8) { image = 'avatar08' }
  if (avatar === 9) { image = 'avatar09' }

  return (
    <div>
      <div className="message-container">
        <div className="message-avatar" id={image}></div>
        <div className="message-holder">
          <div>
            <span className="user-name">{user}</span>
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
