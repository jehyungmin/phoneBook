import React, { Component } from 'react';
import '../CustomCss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class PhoneFrom extends Component {
    

    input= null;

    state={
        name: '',
        phone: '',
        showMe: false,
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate({
            name : this.state.name,
            phone : this.state.phone,
        });
        this.setState({
            name: '',
            phone: '',
        });
        this.input.focus();
    }

    operation(){
        this.setState({
            showMe:!this.state.showMe
        });
    }
    
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className="header">Phonebook</h1>
                <FontAwesomeIcon className="hideAndShow" icon={faPlus} onClick={() => this.operation()} />
                {
                    this.state.showMe?
                    <div className="inputBox shadow">
                        <input
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                            value={this.state.name}
                            ref={ref => this.input = ref}
                        />
                        <input
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                            value={this.state.phone}
                        />
                        
                        <button className="buttonStyle" type="submit" >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>:
                    null
                }
            </form>   
        );
    }
}
/////////////////////////////////////
export default PhoneFrom;