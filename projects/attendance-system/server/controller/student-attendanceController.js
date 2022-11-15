const {addMinutes, isAfter} = require('date-fns')
const StudentAttendance = require('../models/StudentAttendance')
const AdminAttendance = require('../models/AdminAttendance');
const error = require('../utils/error');

const getAttendance = async (req, res, next) =>  {
    const { id } = req.params
    
    try {
        const adminAttendance = await AdminAttendance.findById(id)
        if(!adminAttendance) {
            throw error('Invalid Attendance ID', 400)
        }

        if(adminAttendance.status === 'COMPLETED') {
            throw error('AdminAttendance Already Completed')
        }

        const attendance = await StudentAttendance.findOne({
            user: req.user._id,
            adminAttendance: id
        })
        if(attendance) {
            throw error('Already Register', 400)
        }

        const studentAttendance = new StudentAttendance({
            user: req.user._id,
            adminAttendance: id
        })

        await studentAttendance.save()
        return res.status(201).json(studentAttendance)

    } catch(e) {
        next(e)
    }
}

const getAttendanceStatus = async (_req, res, next) =>  {
    try {
        const running = await AdminAttendance.findOne({status: 'RUNNING'})
        if(!running) {
            throw error('Not Running', 400)
        }
        const started = addMinutes(new  Date(running.createdAt), running.timeLimit)

        if(isAfter(new Date(), started)) {
            running.status = 'COMPLETED'
            await running.save()
        }
        return res.status(200).json(running)

    } catch(e) {
        next(e)
    }
}

module.exports = {
    getAttendance,
    getAttendanceStatus
}