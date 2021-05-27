const Sensor2 = require('../models/Sensor2');

module.exports = {
    createSensor: async function(args: { sensorInput: { name: any; highAlarm: any; lowAlarm: any; }; }, req: any) {
        // const name = args.sensorInput.name;
        const sensor = new Sensor2({
            sensorNumber: 99,
            sensorName: args.sensorInput.name,
            sensorCurrentTemp: args.sensorInput.highAlarm - 5,
            sensorStatus: 'Normal',
            sensorHighAlarm: args.sensorInput.highAlarm,
            sensorLowAlarm: args.sensorInput.lowAlarm
        });
        const createdSensor = await sensor.save();
        return { ...createdSensor._doc, _id: createdSensor._id.toString() };
    }
}