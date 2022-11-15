const {model, Schema} = require('mongoose');


const studendAttendanceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    adminAttendance: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendance',
        require: true
    }
}, {timestamps: true});

const StudentAttendance = model('studentAttendance', studendAttendanceSchema);
module.exports = StudentAttendance;