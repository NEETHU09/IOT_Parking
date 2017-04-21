import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';

import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const styles = {
  customWidth: {
    width: 200,
  },
  button: {
    margin: 12,
  },
};
const style = {
  margin: 12,
  width:100,
};

export default class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {loc: "Electronic City", floor: "Ground Floor",bookingDate:{},fromTime:{},toTime:{}};

    this.handleChangeLoc = this.handleChangeLoc.bind(this);
    this.handleChangeFloor = this.handleChangeFloor.bind(this);
    // this.handleBookingDate = this.handleBookingDate.bind(this);
    // this.handleFromTime = this.handleFromTime.bind(this);
    // this.handleToTime = this.handleToTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLoc(event,index,value) {
    this.setState({loc:value});
    //console.log(value+" : loc");
  }

  handleChangeFloor(event,index,value) {
    this.setState({floor:value});
    //console.log(value+" : floor");
  }

  handleBookingDate  (event,date)  {
    this.setState({bookingDate:date});
    // console.log("Date"+date);
  }
  handleFromTime  (event,fromTime)  {
    this.setState({fromTime:fromTime});
    //console.log("fromTime"+fromTime);
  }
  handleToTime  (event,toTime)  {
    this.setState({toTime:toTime});
    //console.log("toTime"+toTime);
  }
  // handleStartTime(event,index,value) {
  //   this.setState({startTime:value});
  //   // console.log(value+" : floor");
  // }
  // handleEndTime(event,index,value) {
  //   this.setState({endTime:value});
  //   // console.log(value+" : floor");
  // }

  // handleChangeDate(event,index,date) {
  //   console.log(date+" : date");
  //   this.setState({date});
  // }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Value from Submit");
    // console.log(this.state.value);
  }

  render() {
    return (
      <div>
      <Card className="container" >
      <form action="/" onSubmit={this.handleSubmit}>
      <h2 className="dash_head">Book Parking</h2>
        <SelectField value={this.state.loc} onChange={this.handleChangeLoc} style={styles.customWidth} autoWidth={true}>
          <MenuItem value={"Electronic City"} primaryText="Electronic City"/>
          <MenuItem value={"Sarjapur"} primaryText="Sarjapur"/>
          <MenuItem value={"koramangala"} primaryText="koramangala"/>
          <MenuItem value={"Whitefield"} primaryText="Whitefield"/>
      </SelectField>
        <br/>
        <SelectField value={this.state.floor} onChange={this.handleChangeFloor} style={styles.customWidth} autoWidth={true}>
          <MenuItem value={"Ground Floor"} primaryText="Ground Floor"/>
          <MenuItem value={"First Floor"} primaryText="First Floor"/>
          <MenuItem value={"Second Floor"} primaryText="Second Floor"/>
          <MenuItem value={"Third Floor"} primaryText="Third Floor"/>
        </SelectField>
      <br/>

        <DatePicker hintText="Parking date" value={this.state.bookingDate} onChange={this.handleBookingDate.bind(this)}/>

        <TimePicker format="24hr" hintText="From Time" value={this.state.fromTime} onChange={this.handleFromTime.bind(this)}/>
        <TimePicker format="24hr" hintText="To Time" value={this.state.toTime} onChange={this.handleToTime.bind(this)}/>

      <div className="button-line">
        <RaisedButton type="submit" label="Book Parking" value="Submit" primary />
      </div>
      <div>


      </div>
      </form>
      </Card>
    </div>
    );
  }
}

// alert({this.state.bookingDate});
// const DatePickerExampleSimple = () => (
//   <DatePicker hintText="Parking date" value={this.state.bookingDate} onChange={this.handleBookingDate}/>
//   );
// const TimePickerExampleSimple = () => (
//   <TimePicker hintText="From Time" value={this.state.startTime} onChange={this.handleStartTime}/>
//   <TimePicker hintText="To Time"  value={this.state.endTime} onChange={this.handleEndTime}/>
//   );
//
//   const RaisedButtonExampleSimple = () => (
//     <RaisedButton label="Submit" onClick={this.handleSubmit} primary={true} style={style} />
//     );


// <h2 className="dash_head">Book Parking</h2>
//   <SelectField value={this.state.loc} onChange={this.handleChangeLoc} style={styles.customWidth} autoWidth={true}>
//     <MenuItem value={"Electronic City"} primaryText="Electronic City"/>
//     <MenuItem value={"Sarjapur"} primaryText="Sarjapur"/>
//     <MenuItem value={"koramangala"} primaryText="koramangala"/>
//     <MenuItem value={"Whitefield"} primaryText="Whitefield"/>
// </SelectField>
//   <br/>
//   <SelectField value={this.state.floor} onChange={this.handleChangeFloor} style={styles.customWidth} autoWidth={true}>
//     <MenuItem value={"Ground Floor"} primaryText="Ground Floor"/>
//     <MenuItem value={"First Floor"} primaryText="First Floor"/>
//     <MenuItem value={"Second Floor"} primaryText="Second Floor"/>
//     <MenuItem value={"Third Floor"} primaryText="Third Floor"/>
//   </SelectField>
// <br/>

        //  <RaisedButton input type="submit" value="Submit" label="Submit" primary={true} style={style}/>
// const DatePickerExampleSimple = () => (
//   <DatePicker hintText="Parking date" value={this.state.date} onChange={this.handleChangeDate}/>
//   );
//
// <DatePicker hintText="Parking date" value={this.state.date} onChange={this.handleChangeDate}/>
// <TimePicker hintText="From Time" />
// <TimePicker hintText="To Time" />

// const DatePickerExampleSimple = () => (
//
//   );
// const TimePickerExampleSimple = () => (
//
//   );

// <input type="submit" value="Submit" />
// const RaisedButtonExampleSimple = () => (
//     <RaisedButton label="Submit" value="Submit" onChange={this.handleSubmit} primary={true} style={style} />
//     );
  //   render() {
  //     return (
  //       <div>
  //       <Card className="container">
  //
  //         <h2 className="dash_head">Book Parking</h2>
  //         <a className="mdi mdi-map-marker mdi-24px mdi-dark"></a>
  //         <SelectField floatingLabelText="Location" value={this.state.value} onChange={this.handleChangeLoc} style={styles.customWidth} autoWidth={false} ref="loc">
  //           <MenuItem value={1} primaryText="Electronic City" />
  //           <MenuItem value={2} primaryText="Sarjapur" />
  //           <MenuItem value={3} primaryText="koramangala" />
  //           <MenuItem value={4} primaryText="Whitefield" />
  //         </SelectField>
  //         <br/>
  //         <a className="mdi mdi-map-marker mdi-24px mdi-dark"></a>
  //         <SelectField floatingLabelText="Floor" value={this.state.value} onChange={this.handleChangeLoc} style={styles.customWidth} autoWidth={false}>
  //           <MenuItem value={1} primaryText="Ground Floor" />
  //           <MenuItem value={2} primaryText="First Floor" />
  //           <MenuItem value={3} primaryText="Second Floor" />
  //           <MenuItem value={4} primaryText="Third Floor" />
  //         </SelectField>
  //
  //         const DatePickerExampleSimple = () => (
  //           <DatePicker hintText="Parking date" />
  //         );
  //         const TimePickerExampleSimple = () => (
  //           <TimePicker hintText="From Time" />
  //           <TimePicker hintText="To Time" />
  //         );
  //           const RaisedButtonExampleSimple = () => (
      // <RaisedButton label="Submit" value="Submit" onChange={this.handleSubmit} primary={true} style={style} />
      // );
  //
  //       </Card>
  //
  //       </div>
  //     );
  //   }
  // }
  //


//
// <CardTitle
//   title="Dashboard"
//   subtitle="You should get access to this page only after authentication."
// />
//
// {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
