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

    input SensorInputData {
        name: String!
        highAlarm: String!
        lowAlarm: String!
    }

    type RootQuery {
        hello: String
    }

    type RootMutation {
        createSensor(sensorInput: SensorInputData): Sensor!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);