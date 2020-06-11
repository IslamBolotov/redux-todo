import React, { Component } from "react";
import { connect } from 'react-redux'
import {addTask, changeTitle} from '../../redux/actions/app-actions'

class AddTask extends Component {

    handleChangeTitle = (event) => {
        this.props.changeTitle(event.target.value)

    }

  

    handleAdd = () => {
        this.props.addTask()
    }

    render(){
        return (
            <div className = "add-task">
                <label>Name</label>
               <input value = {this.props.title} onChange = {this.handleChangeTitle} />
               <button onClick = {this.handleAdd}>add</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => state.AppReducer

const mapDispatchToProps = (dispatch) => ({
    addTask: () => dispatch(addTask()),
    changeTitle: (value) => dispatch(changeTitle(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

