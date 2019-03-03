import React, { Component } from 'react';
import PhoneFrom from './components/PhoneFrom';
import PhoneInfoList from './components/PhoneInfoList';
import './CustomCss.css';
import MyModal from './MyModal';
import ModalPortal from './ModalPortal';


class App extends Component {

  id = 3;
  
  state={
    information: [
      {
        id : 0,
        name : '홍길동',
        phone : '010-000-0000'
      },
      {
        id: 1,
        name: '홍길동1',
        phone: '010-000-0001'
      },
      {
        id: 2,
        name: '홍길동2',
        phone: '010-000-0002'
      }
    ],
    keyword: '',
    modal: false,
    
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
      // information: information.concat({
      //   name: data.name,
      //   phone: data.phone,
      //   id = this.id++
      // })
      // information: information.comcat(Object.assign({
      //   id: this.id++
      // }))
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  handleOpenModal = () => {
    this.setState({
      modal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    return (
      <div>
        
        <button onClick={this.handleOpenModal}>모달열기</button>
        {this.state.modal && (
          <ModalPortal>
            <MyModal onClose={this.handleCloseModal} />
          </ModalPortal>
        )}


        <PhoneFrom onCreate={this.handleCreate}/>
        <div className="serchBox">
          <input 
            className="serch"
            value={this.state.keyword}
            onChange={this.handleChange}
            placeholder="검색...."
          />
        </div>
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
        {/* {JSON.stringify(this.state.information)} */}
      </div>
    );
  }
}

export default App;
