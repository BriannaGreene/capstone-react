import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import StickyNote from './StickyNote'

class DashboardNotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0,
      eachSticky: [],
      notes: [],
    }
  }

  createSticky(e){
    e.preventDefault()
    this.props.newSticky(this.props.auth.id)
    window.location.href = '/'
  }

  getRandomColor() {
    let colors = ["sticky-red", "sticky-orange", "sticky-yellow", "sticky-greene", "sticky-aqua", "sticky-blue", "sticky-midblue", "sticky-purple", "sticky-pink"]
    let randomColor = colors[Math.floor(Math.random() * 9)]
    return randomColor
  }

  render() {
    return (
      <div>
        <div className="sticky-container">
          { this.props.stickies === null ? console.log('HEYEHEYHEY!!') :
            this.props.stickies.map(note => {
              this.key += 1
              return(
                <StickyNote
                  key={note.id}
                  id={note.id}
                  note={note.note}
                  user_id={note.user_id}
                  state={this.props}
                  createSticky={this.createSticky.bind(this)}
                  color={this.getRandomColor.bind(this)}
                />
              )
            })}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, auth, stickies }) {
  return { users, auth, stickies }
}

export default connect(mapStateToProps, actions)(DashboardNotes)
