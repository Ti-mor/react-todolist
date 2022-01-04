import React, { Component, Fragment } from "react";

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>learning react</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList