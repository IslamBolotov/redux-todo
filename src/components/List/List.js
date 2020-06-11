import React from 'react';
import Card from './Card';
import {connect} from 'react-redux'
import { changeStatus } from '../../redux/actions/app-actions';
import {Delete} from '../../redux/actions/app-actions'


function List(props) {
    
 
    return (
        <ul className="names">
            {props.data.map((task, index) => (
                <Card 
                key = {index}
                title = {task.title}
                status = {task.status}
                onDelete ={() => props.Delete(index)}
                onChange ={() => props.changeStatus(index)}
                />
            ))}
        </ul>
    );
}

const mapStateToProps = (state) => state.AppReducer

const mapDispatchToProps = (dispatch) => ({

    changeStatus: (index) => dispatch(changeStatus(index)),
    Delete: (index) => dispatch(Delete(index))

})

export default connect(mapStateToProps, mapDispatchToProps)(List);
