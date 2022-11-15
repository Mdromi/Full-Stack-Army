const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes')
const adminAttendanceRoute = require('./admin-attendanceRoute')
const studentAttendanceRoute = require('./student-attendanceRoute')
const authenticate = require('../middleware/authenticate')



router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', authenticate, userRoutes);
router.use('/api/v1/admin/attendance', authenticate, adminAttendanceRoute)
router.use('/api/v1/student/attendance', authenticate, studentAttendanceRoute)
// router.use('/api/v1/users', userRoutes);

module.exports = router;