import React, { Component } from 'react'
import { Button, Input, List } from "antd";

const TodoListUI = (props) => { // 无状态组件
  return (
    <div style={{ margin: 10 }}>
      <Input
        style={{ marginRight: 10, width: 300 }}
        placeholder="todo list"
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{ marginTop: 10, width: 300 }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>
        )}
      />
    </div>
  )
}

// class TodoListUI extends Component { // UI组件
//   render() {
//     return (
//       <div style={{margin: 10}}>
//         <Input
//           style={{marginRight: 10, width: 300}}
//           placeholder="todo list"
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           style={{marginTop: 10, width: 300}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI