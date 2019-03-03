import React, {Component}from 'react';
import PhoneFrom from 'components/PhoneFrom';
// import PhoneInfoList from '../components/PhoneInfoList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as phoneActions from 'modules/phonebook'
// import { escapeComponent } from '../../node_modules/uri-js';


// const PhoneBookContainer = () => {

class PhoneBookContainer extends Component{
    handleChange = (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)
        const {PhoneActions} = this.props;
        // PhoneActions.change("aa")
        PhoneActions.change({[e.target.name]: e.target.value})
    }

    handleInsert = () => {
        const{ id, name, phone } = this.props;
        const { PhoneActions } = this.props;

        PhoneActions.insert({id, name, phone});
        PhoneActions.change({'name':'', 'phone':''})
    }

    render(){
        const {name, phone} = this.props;
        const { handleChange, handleInsert} = this;
    return (
        <div>
            <PhoneFrom 
                handleInsert={handleInsert}
                handleChange={handleChange}
                name={name}
                phone={phone}
                />
            
        </div>
    );
    }
};

export default connect(
    (state) => ({
        //state 리덕스 전역 state
        id: state.phonebook.get('id'),
        name: state.phonebook.get('name'),
        phone: state.phonebook.get('phone'),
        phoneList: state.phonebook.get('phoneList')
    }),
    (dispatch) => ({
        PhoneActions: bindActionCreators(phoneActions, dispatch)
    })
)(PhoneBookContainer);