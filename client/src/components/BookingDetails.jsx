import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ModalBookingDetails from '../components/ModalBookingDetails.jsx';


export default class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Value from Booking Details");
  }

  render() {
    return (
      <div>
      <Card className="container" >
      <form action="/" onSubmit={this.handleSubmit}>
      <h2 className="home_head">Booking Details Page</h2>
        <h4>Name     : <br/><br/>
            Location : <br/><br/>
            Floor    : <br/><br/>
            Date     : <br/><br/>
            Time     : <br/><br/>
            Slot No  : <br/><br/>
          </h4>
          <div className="button-line">
            <RaisedButton type="submit" label="Open Modal Window" primary />
          </div>
      </form>
      </Card>
    </div>
    );
  }
}
export default BookingDetails;

// BookingDetails.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };



// export default class BookingDetails extends React.Component{
//
//   // constructor(props) {
//   //     super(props);
//   //     this.state = {value: 1}
//   //     this.handleChange=this.handleChange.bind(this);
//   //   }
//   //
//   //   handleChange(event, index, value){
//   //     this.setState({value});
//   //   }
//
//     render() {
//       return (
//         <div>
//         <Card className="container">
//           <h2 className="dash_head">Booking Details From Component</h2>
//         </Card>
//
//         </div>
//       );
//     }
//   }
