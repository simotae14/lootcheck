import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    constructor() {
        super();
        this.state = {
            balance: undefined
        };
    }
    updateBalance = e => this.setState({ balance: parseInt(e.target.value, 10)});

    deposit = () => this.props.deposit(this.state.balance);

    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <h3 className='balance'>
                    Wallet Balance: {this.props.balance}
                </h3>
                <br />
                <input
                    onChange={this.updateBalance}
                    className="input-wallet"
                />
                <button
                    className="btn-deposit"
                    onClick={this.deposit}
                >
                    Deposit
                </button>
                <button
                    className="btn-withdraw"
                    onClick={this.withdraw}
                >
                    Withdraw
                </button>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        balance: state
    };
}

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);