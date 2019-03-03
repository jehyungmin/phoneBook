import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as phoneActions from 'modules/phonebook'
import PhoneList from '../components/PhoneList';

class PhoneBookListContainer extends Component {

    handleRemove = (id) => {
        const { PhoneActions } = this.props;
        PhoneActions.remove({'id':id});
    }

    render() {
        const { phoneList } = this.props;
        const { handleRemove } = this;
        return (

            <div>
                <PhoneList 
                    phoneList={ phoneList }
                    onRemove={handleRemove}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        id: state.phonebook.get('id'),
        name: state.phonebook.get('name'),
        phone: state.phonebook.get('phone'),
        phoneList: state.phonebook.get('phoneList')
    }),
    (dispatch) => ({
        PhoneActions: bindActionCreators(phoneActions, dispatch)
    })
)(PhoneBookListContainer);