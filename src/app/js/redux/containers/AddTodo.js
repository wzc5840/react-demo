import { connect } from 'react-redux'
import {addTodo} from '../actions'
import AddTodoCtrl from '../../todo/AddTodoCtrl';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSumbit: (...args) => {
            dispatch(addTodo(...args));
        },
    }
}

const AddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodoCtrl)

export default AddTodo;