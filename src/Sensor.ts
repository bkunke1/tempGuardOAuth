import mongoose from 'mongoose';

const sensor = new mongoose.Schema({
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

export default mongoose.model('Sensor', sensor);
