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
