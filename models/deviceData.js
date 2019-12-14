var db = require("../db");

var deviceDataSchema = new db.Schema({
    gps_speed:  [Number],
    gps_lat:    [Number],
    gps_long:   [Number],
    uv:         [Number],
    time:       { type: Date, required: true },
    timeAdded: Number,
    deviceId:   { type: String, required: true },
    APIkey:     { type: String, required: true },
    temperature: Number,
    humidity: Number,
    calories: Number,
    type: String,
    duration: Number
});

var DeviceData = db.model("DeviceData", deviceDataSchema);

module.exports = DeviceData;
