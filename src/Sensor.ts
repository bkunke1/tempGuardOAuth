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
    type: Number,
  },
  sensorHighAlarm: {
    required: true,
    type: Number,
  },
  sensorLowAlarm: {
    required: true,
    type: Number,
  },
});

export default mongoose.model('Sensor', sensor);
