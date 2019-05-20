import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
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
        bitcoin: state.bitcoin
    };
}

export default connect(mapStateToProps, { fetchBitcoin })(Loot);