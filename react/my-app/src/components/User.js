import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';
import axios from 'axios';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : true 
    };
  }
  onClickEvent =(e) => {
    console.log(this);
    this.setState({
     isVisible : !this.state.isVisible
  }
  )
  }

  onDeleteUser = async (dispatch,e) => {
    const {id} = this.props;
    // delete request
     await axios.delete(`http://localhost:3004/users/${id}`);
    // Consumer dispatch
    dispatch ({type : "DELETE_USER",payload:id});

  }
  componentWillUnmount(){
    console.log("Component Will Unmount");
  }
  static defaultProps = {
    name: "bilgi yok",
    salary: "bilgi yok",
    department: "bilgi yok",
    id:"bilgi yok"
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
    
  };
  render() {
    // destructuring
    const { name, department, salary } = this.props;
    const {isVisible} = this.state
    return (<UserConsumer>
      {
        value => {
          const {dispatch} = value;
          return (
            <div className='col-md-8 mb-4'>
            <div className='card' style={isVisible ?{backgroundColor : "#c4ccbf"} : null}> 
              <div className='card-hearder d-flex justify-content-between'>
                <h4 className='d-inline'onClick={this.onClickEvent}>{name}</h4>
                <i onClick={this.onDeleteUser.bind(this,dispatch)} className='far fa-trash-alt' style={{cursor : "pointer"}}></i>
              </div>
              <hr/>
              {
                isVisible ? (<div className='card-body'>
                <p className='card-text'> maaş : {salary} </p>
                <p className='card-text'> departman : {department} </p>
                </div>) : null
              }
            </div>
            </div>
          );
        }
      }

    </UserConsumer>)
  }
}

export default User;