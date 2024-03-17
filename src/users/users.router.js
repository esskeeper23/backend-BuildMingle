const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')

router.get('/', userServices.getAllUsers)

//? ruta de informacion del usuario logeado

router.route('/me')
    .get(userServices.getMyUser)
    .patch(userServices.patchMyUser)
    .delete(userServices.deleteMyUser)



// /api/v1/users/:id
router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)


    module.exports = router