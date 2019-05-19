import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
    render() {
        return (
            <div>
                <h3 className='balance'>
                    Wallet Balance: {this.props.balance}
                </h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        balance: state
    };
}

export default connect(mapStateToProps, null)(Wallet);