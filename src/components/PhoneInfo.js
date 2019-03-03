import React, { Component, Fragment } from 'react';
import '../CustomCss.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class PhoneInfo extends Component {

    state = {
        edit: false,
        naem: '',
        phone: '',
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { info, onUpdate } = this.props;
        if(this.state.edit){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }else{
            this.setState({
                name: info.name,
                phone: info.phone,
            });
        }

        this.setState({
            edit : !this.state.edit,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const { name, phone} = this.props.info;
        const { edit } = this.state;
        const style = {
            // border: '1px solid black',
            padding: '8px',
            margin: '8px',
            background: 'white',
            borderRadius: '5px',
            margin: '0.5rem',
            height: '30px',
            display: 'flex',
            minHight: '50px',
            lineHight:'50px',
        };

        console.log(name);

        return (
            <div style={style} className="shadow">
                {
                    edit ? (
                        <Fragment>
                            
                                <input 
                                    name="name"
                                    className="modified"
                                    onChange={this.handleChange}
                                    value={this.state.name} 
                                />
                                <input 
                                    name="phone"
                                    className="modified"
                                    onChange={this.handleChange} 
                                    value={this.state.phone}
                                />
                            
                        </Fragment>
                    ) : (
                        <Fragment>
                            <b className="nameSpace">{name}</b>
                            
                            ({phone})
                        </Fragment>
                    )
                }

                <FontAwesomeIcon icon={faTrashAlt} className="removeBtn icon" onClick={this.handleRemove} />
                {
                    edit 
                    ? <FontAwesomeIcon className="icon" icon={faCheck} onClick={this.handleToggleEdit}/>
                    : <FontAwesomeIcon className="icon" icon={faRedoAlt} onClick={this.handleToggleEdit}/>
                }
            </div>
        );
    }
}

export default PhoneInfo;