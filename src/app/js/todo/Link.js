
import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Link extends Component {

    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {

        let activeView = null;
        let that = this;
        if (this.props.active) {
            activeView = <span>{this.props.children}</span>;
        } else {
            activeView = <a href="" onClick={e => {e.preventDefault();that.props.onClick()}}>
                {this.props.children}
            </a>
        }

        return (
            <div>
                {activeView}
            </div>
        );
    }
}