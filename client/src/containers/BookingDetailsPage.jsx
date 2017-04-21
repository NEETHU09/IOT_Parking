// import React, { PropTypes } from 'react';
// import { Card, CardTitle, CardText } from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';
// import BookingDetails from '../components/BookingDetails.jsx';
// import ModalBookingDetails from '../components/ModalBookingDetails.jsx';
//
//
// class BookingDetailsPage extends React.Component {
//   constructor(props) {
//     super(props);
//
//     // this.state = {
//     //   msg :'Modal Window Will open now'
//     // };
//     // this.processForm = this.processForm.bind(this);
//   }
//   processForm(event) {
//     event.preventDefault();
//     // ModalBookingDetails();
//     console.log("Modal");
//
//   }
//   render() {
//     return (
//       <BookingDetails
//         onSubmit={this.processForm}
//       />
//     );
//   }
// }
// export default BookingDetailsPage;
//
//
//   // /**
//   //  * Process the form.
//   //  *
//   //  * @param {object} event - the JavaScript event object
//   //  */
//   // processForm(event) {
//   //   // prevent default action. in this case, action is the form submission event
//   //   event.preventDefault();
//   //
//   //   // create a string for an HTTP body message
//   //   // create an AJAX request
//   //   const xhr = new XMLHttpRequest();
//   //   xhr.open('post', '/auth/login');
//   //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   //   xhr.responseType = 'json';
//   //   xhr.addEventListener('load', () => {
//   //     if (xhr.status === 200) {
//   //       // success
//   //
//   //       // change the component-container state
//   //       this.setState({
//   //         errors: {}
//   //       });
//   //
//   //       // save the token
//   //       Auth.authenticateUser(xhr.response.token);
//   //
//   //
//   //       // change the current URL to /
//   //       this.context.router.replace('/');
//   //     } else {
//   //       // failure
//   //
//   //       // change the component state
//   //       const errors = xhr.response.errors ? xhr.response.errors : {};
//   //       errors.summary = xhr.response.message;
//   //
//   //       this.setState({
//   //         errors
//   //       });
//   //     }
//   //   });
//   //   xhr.send(formData);
//   //   console.log(formData);
//   // }
//
//   /**
//    * Change the user object.
//    *
//    * @param {object} event - the JavaScript event object
//    */
//   /**
//    * Render the component.
//    */
//
// //
// // BookingDetailsPage.contextTypes = {
// //   router: PropTypes.object.isRequired
// // };
//
//
// //   /**
// //    * Class constructor.
// //    */
// //   constructor(props) {
// //     super(props);
// //
// //     this.state = {
// //       secretData: ''
// //     };
// //   }
// //
// //   /**
// //    * This method will be executed after initial rendering.
// //    */
// //   componentDidMount() {
// //     const xhr = new XMLHttpRequest();
// //     xhr.open('get', '/api/dashboard');
// //     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// //     // set the authorization HTTP header
// //     // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
// //     xhr.responseType = 'json';
// //     xhr.addEventListener('load', () => {
// //       if (xhr.status === 200) {
// //         this.setState({
// //           secretData: xhr.response.message
// //         });
// //       }
// //     });
// //     xhr.send();
// //   }
// //
// //   /**
// //    * Render the component.
// //    */
// //   render() {
// //     return (<BookingDetails secretData={this.state.secretData} />);
// //   }
// //
// // }
