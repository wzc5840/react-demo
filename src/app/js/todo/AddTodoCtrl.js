
import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class AddTodoCtrl extends Component {

    static propTypes = {
        onSumbit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        let that = this;

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!that.input.value.trim()) {
                            return
                        }
                        that.props.onSumbit(that.input.value);
                        that.input.value = ''
                    }}
                >
                    <input ref={(ref) => this.input = ref} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}