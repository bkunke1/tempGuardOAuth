const Sensor2 = require('../models/Sensor2');
const validator = require('validator');

module.exports = {
  createSensor: async function (
    args: { sensorInput: { name: any; highAlarm: any; lowAlarm: any } },
    req: any
  ) {
    const errors = [];
    if (validator.isEmpty(args.sensorInput.name)) {
      errors.push({ message: 'High Alarm is invalid.' });
    }

    let sensorList = await Sensor2.find();
    console.log('created sensor # ', sensorList.length);

    const sensor = new Sensor2({
      sensorNumber: sensorList.length + 1,
      sensorName: args.sensorInput.name,
      sensorCurrentTemp: args.sensorInput.highAlarm - 5,
      sensorStatus: 'Normal',
      sensorHighAlarm: args.sensorInput.highAlarm,
      sensorLowAlarm: args.sensorInput.lowAlarm,
    });
    const createdSensor = await sensor.save();
    return { ...createdSensor._doc, _id: createdSensor._id.toString() };
  },
  editSensor: async function (
    args: { sensorInput: { _id: any, name: any; highAlarm: any; lowAlarm: any; calibrationTemp: any; } },
    req: any
  ) {
    const errors = [];
    if (validator.isEmpty(args.sensorInput.name)) {
      errors.push({ message: 'High Alarm is invalid.' });
    }

    let editedSensor = await Sensor2.findById(args.sensorInput._id);
    console.log('updating sensor # ', editedSensor.sensorNumber);

    editedSensor.sensorName = args.sensorInput.name;
    editedSensor.sensorCurrentTemp = args.sensorInput.calibrationTemp;
    editedSensor.sensorHighAlarm = args.sensorInput.highAlarm;
    editedSensor.sensorLowAlarm = args.sensorInput.lowAlarm;

    const updatedSensor = await editedSensor.save();
    return { ...updatedSensor._doc, _id: updatedSensor._id.toString() };
  },
  sensors: async function() {
    const totalSensors = await Sensor2.find().countDocuments();
    const sensors = await Sensor2.find().sort({ sensorNumber: 1 });
    return {
      sensors: sensors.map((p: { _doc: any; }) => {
        // return {...p._doc, _id: p._id.toString()}
        return {...p._doc}
      }),
      totalSensors: totalSensors 
    }
  }
};
