import React from 'react';
import { connect } from 'react-redux';

import {newAccount} from '../actions';

class AddNewAccount extends React.Component {


    onFormSubmit = (event) => {
        event.preventDefault();


    }


    render() {

        return(

            <div>
                <h2>Add New Accountk</h2>
                <form className="form-group" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Account Holder's Name</label>
                        <input type="text" className="form-control" id="name" />
                        <label htmlFor="amount">Starting Amount</label>
                        <input type="text" className="form-control" id="amount" />

                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add Account</button>

                </form>
            </div>
        )
    }
}
export default AddNewAccount;