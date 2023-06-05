import {Router} from 'express'
import{tutor} from '../tutors-pet'
import controller from '../controllers/controller';

const router = Router();

// Get all Tutors
router.get('/tutor/pet', controller.getAllTutors)

// Post Tutor
router.post('/tutor', controller.postTutors)

// Post Pet
router.post('/pet/:tutorId', controller.postPets)

// Put Tutor
router.put('/tutor/:Id', controller.putTutors)

// Put Pet
router.put('/pet/:petId/tutor/:tutorId', controller.putPets)

// Delete Tutor
router.delete('/tutor/:Id', controller.deleteTutors)

// Delete Pet
router.delete('/tutor/:tutorId/pet/:petId', controller.deletePets)


export {router}