const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensor2Schema = new Schema({
    sensorNumber: {
      required: true,
      type: String,
    },
    sensorName: {
      required: true,
      type: String,
    },
    sensorCurrentTemp: {
      required: true,
      type: String,
    },
    sensorStatus: {
      required: true,
      type: String,
    },
    sensorHighAlarm: {
      required: true,
      type: String,
    },
    sensorLowAlarm: {
      required: true,
      type: String,
    },
  });

module.exports = mongoose.model('Sensor2', sensor2Schema);
// export default mongoose.model('Sensor2', sensor2Schema);