import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import './checkout.css'
import axios from 'axios';


class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false, contentHeight:500, email:"", phone:"" }
    this.storeEmail = this.storeEmail.bind(this);
    this.storePhone = this.storePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log("hi ");
    const parameters = {
      name: "ABC",
      message: "Hello",
      email:"ani979@gmail.com"
    }
  }

  storeEmail(event) {
    this.setState({email: event.target.value});
  }

  storePhone(event) {
    this.setState({phone: event.target.value});
  }

  render() {
    
    return (
      <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      closeOnDocumentClick
    >
      <span> 
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input type="text" value={this.state.email} onChange={this.storeEmail} />
          </label>
          <label>
            phone:
            <input type="text" value={this.state.phone} onChange={this.storePhone} />
          </label>
          <button> FinalCheckout </button>
        </form>   
      </span>
    </Popup>)
  }
}

export default Checkout

// PayButton
// export const Checkout = ({ onPayClick }) => (
//   openPopup({onPayClick})
// );

// const openModal = () => {
//   setState({ open: true })
// }

// const closeModal = () => {
//   setState({ open: false })
// }

// const openPopup = ({onPayClick}) => {
//   console.log("Show");
  
//   return (
//     <div>
//       <button className="button" onClick={openModal}>
//         Controlled Popup
//       </button>
//       <Popup
//         open={state.open}
//         closeOnDocumentClick
//         onClose={closeModal}
//       >
//         <div className="modal">
//           <a className="close" onClick={closeModal}>
//             &times;
//           </a>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
//           omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
//           ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
//           doloribus. Odit, aut.
//         </div>
//       </Popup>
//     </div>
//   )
// }
// Checkout.PropTypes = {
//   onPayClick: PropTypes.func.isRequired,
//   openPopup:PropTypes.func.isRequired
// }

