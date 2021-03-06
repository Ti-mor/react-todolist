import React, { Component } from "react"
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  // getInitListAction,
  initListData
} from './store/actionCreators'
import TodoListUI from './TodoListUI'

import 'antd/dist/antd.css';

class TodoList extends Component { // 容器组件
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    // setTimeout(() => {
    //   const data = ['hello', 'dell', 'lee']
    //   const action = getInitListAction(data)
    //   store.dispatch(action)
    // }, 0)
    const action = initListData()
    store.dispatch(action)
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
    return <TodoListUI
             inputValue={this.state.inputValue}
             list={this.state.list}
             handleInputChange={this.handleInputChange}
             handleBtnClick={this.handleBtnClick}
             handleItemDelete={this.handleItemDelete}
           />
  }
}

export default TodoList