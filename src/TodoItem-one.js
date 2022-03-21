import React, { Component } from "react"
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  render() {
    const { test, content } = this.props
    return (
      <div
        onClick={this.handleClick}
      >
        {test} - {content}
      </div>
    )
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
	content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
TodoItem.defaultProps = {
  test: 'hello react'
}

export default TodoItem