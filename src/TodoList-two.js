import React, { Component } from "react"
import { Button, Input, List } from "antd";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreators'

import 'antd/dist/antd.css';

// 普通组件
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{margin: 10}}>
        <Input
          style={{marginRight: 10, width: 300}}
          placeholder="todo list"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        <List
          style={{marginTop: 10, width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoList