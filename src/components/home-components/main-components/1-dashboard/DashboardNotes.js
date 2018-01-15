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
      notes: []
    }
  }

  componentDidMount() {
    console.log('stickies from dash notes.... ', this.props);
    if (this.props.stickies !== null) {
      this.setState({ notes: this.props.stickies })
    }
  }

  createSticky(e){
    e.preventDefault()
    this.props.newSticky(this.props.auth.id)
    window.location.href = '/'
  }


  render() {
    console.log('PROPS FROM DASH NOTES: ', this.state);
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
