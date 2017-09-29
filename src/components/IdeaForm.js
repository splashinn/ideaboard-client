import React, { Component } from 'react'
import axios from 'axios'

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="tile">
        <form>
          <input className='input' type="text"
            name="title" placeholder='Enter a Title' />
          <textarea className='input' name="body"
            placeholder="What's your idea?"></textarea>
        </form>
      </div>
    );
  }
}

export default IdeaForm
