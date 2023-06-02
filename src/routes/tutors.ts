import {Router} from 'express'
import{tutor} from '../tutors-pet'

const router = Router();

// Get all Tutors
router.get('/tutor/pet', (req, res) => {
    res.status(200).send(tutor)
})

// Post Tutor

router.post('/tutor', (req, res) => {
    const{id, name, phone, email, date_of_birth, zip_code, pets} = req.body
    const people = {id, name, phone, email, date_of_birth, zip_code, pets}
    tutor.push(people)
    res.status(201).json(people)
    
})

// Post Pet

router.post('/pet/:tutorId', (req, res) => {
    const{id, name, species, carry, weight, date_of_birth} = req.body
    const pets = {id, name, species, carry, weight, date_of_birth}
    const idTutor = req.params.tutorId;
    let idExist = false;
    const index = tutor.findIndex(i => i.id == Number(idTutor))
    tutor.map((param) => {
        if(id == idTutor){
           idExist = true
        }
    })
    tutor[index].pets.push(pets)
    res.status(201).json(pets)   
})

// Put Tutor

router.put('/tutor/:Id', (req, res) => {
    const id = req.params.Id
    const {name, phone, email, date_of_birth, zip_code} = req.body
    const person = tutor.find((person) => person.id == Number(id))
    
    if(!person){
        return res
        .status(404)
        .json({sucess: false, msg: `no person with id ${id}`})
    }
    const newPeople = tutor.map((person) => {
        if(person.id == Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})


// Put Pet
router.put('/pet/:petId/tutor/:tutorId', (req, res) => {
    const id = req.params.petId
    const idT = req.params.tutorId
    const {name, species, carry, weight, date_of_birth} = req.body

    const pet = tutor.find((pet) => pet.id == Number(id))
    const person = tutor.find((person) => person.id == Number(id))

    if(!pet){
        return res
        .status(404)
        .json({sucess: false, msg: `no pet with id ${id}`})
    }
    const newPet = tutor.map((pet) => {
        if(pet.id == Number(id)){
            pet.name = name
        }
        return pet
    })
    res.status(200).json({success: true, data: newPet})
})

// Delete Tutor

router.delete('/tutor/:tutorId',(req, res) => {
    const {id} = req.body
    const person = tutor.find((person) => person.id === Number(req.params.tutorId))
    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `no tutor with id ${id}`})
    }
    const newPeople = tutor.filter((person) => person.id !== Number(req.params.tutorId));
    return res.status(200).json({success:true, data: newPeople})
})

// Delete Pet

router.delete('/tutor/:tutorId/pet/:petId',(req, res) => {
    const {id} = req.body
    const pet = tutor.find((pet) => pet.id === Number(req.params.petId))
    if(!pet){
        return res
        .status(404)
        .json({sucess: false, msg: `no pet with id ${id}`})
    }
})




export {router}