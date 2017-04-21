const mongoose = require('mongoose');

const BookingDetailsSchema = new mongoose.Schema({
  name :String,
  location:String,
  floor:String,
  date:Date,
  fromTime:String,
  toTime:String,
  parkingSlotNo:String
});

var bookingDetailsModel = mongoose.model('bookingDetails',BookingDetailsSchema,'bookingdetails');
var bookingdetail = {};

bookingdetail.getAllBookingDetails = function(callback){
  bookingDetailsModel.find({},callback);
}

bookingdetail.findOne = function(bookingdetail,callback){
  bookingDetailsModel.findOne({name:bookingdetail.name,location:bookingdetail.location,
                              floor:bookingdetail.floor,date:bookingdetail.date,
                              fromTime:bookingdetail.fromTime,
                              toTime:bookingdetail.toTime,
                              parkingSlotNo:bookingdetail.parkingSlotNo},callback);
}

bookingdetail.addingBookingDetails = function(bookingdetailObject,callback){
   var newBookingDetails =new bookingDetailsModel(bookingdetailObject);
    return newBookingDetails.save(callback);
}

module.exports = mongoose.model('BookingDetails', BookingDetailsSchema);
