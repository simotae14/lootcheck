import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
    componentDidMount() {
        if(this.props.fetchBitcoin) {
            this.props.fetchBitcoin();
        }
    }
    render() {
        return (
            <h3>
                Bitcoin balance:
            </h3>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    };
}

export default connect(mapStateToProps, { fetchBitcoin })(Loot);