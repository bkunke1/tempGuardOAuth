const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Sensor {
        _id: ID!
        sensorNumber: String!
        sensorName: String!
        sensorCurrentTemp: String!
        sensorStatus: String!
        sensorHighAlarm: String!
        sensorLowAlarm: String!        
    }

    type SensorData {
        sensors: [Sensor!]!
        totalSensors: Int!
    }

    input SensorInputData {
        name: String!
        highAlarm: String!
        lowAlarm: String!
    }

    type RootQuery {
        sensors: SensorData!
    }

    type RootMutation {
        createSensor(sensorInput: SensorInputData): Sensor!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);