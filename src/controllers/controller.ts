import{tutor} from '../tutors-pet';
import { Request, Response } from 'express';

// --------------------------------------- Get All tutors----------------------------------
const getAllTutors = ((req: Request, res: Response) => {
    res.status(200).send(tutor)
})




// ---------------------------------------- Post tutor--------------------------------------
const postTutors = ((req: Request, res: Response) => {

    try {
        const idT = tutor[tutor.length - 1].id + 1
        const{id, name, phone, email, date_of_birth, zip_code, pets} = req.body

        const people = {id, name, phone, email, date_of_birth, zip_code, pets}
        people.id = idT

        tutor.push(people)
        res.status(201).json(people)
    } catch (error) {
        const{id, name, phone, email, date_of_birth, zip_code, pets} = req.body
        const people = {id, name, phone, email, date_of_birth, zip_code, pets}

        people.id = 1
        
        tutor.push(people)
        res.status(201).json(people)
    }
    
})



// ----------------------------------------- Post Pet --------------------------------------
const postPets = ((req: Request, res: Response) => {
    try {

    const{id, name, species, carry, weight, date_of_birth} = req.body
    const pets = {id, name, species, carry, weight, date_of_birth}
    const idTutor = req.params.tutorId;
    const index = tutor.findIndex(i => i.id == Number(idTutor))

    const idPet = tutor[index].pets[tutor[index].pets.length -1].id + 1
    pets.id = idPet

        if(index > -1){
            if(tutor[index].pets){
                tutor[index].pets.push(pets)
                res.status(201).json(pets)
            } else {
                tutor[index].pets = [pets]
                res.status(201).json(pets)
            }
            
        } else{
        res.status(400).send('Id tutor do not exist!') // Id tutor não correspondente
    }
    } catch (error) {

        const{id, name, species, carry, weight, date_of_birth} = req.body
        const pets = {id, name, species, carry, weight, date_of_birth}
        const idTutor = req.params.tutorId;

        const index = tutor.findIndex(i => i.id == Number(idTutor))
        pets.id = 1

            if(index > -1){                
                if(tutor[index].pets){
                    tutor[index].pets.push(pets)
                    res.status(201).json(pets)
                } else {
                    tutor[index].pets = [pets]
                    res.status(201).json(pets)
                }
                
            } else{
            res.status(400).send('Id does not exist!') // Id do tutor não correspondente
    }
    }
    
})



// --------------------------------------- Put Tutors ----------------------------------------

const putTutors = ((req: Request, res: Response) => {
    const id = req.params.Id
    const {name, phone, email, date_of_birth, zip_code} = req.body
    const person = tutor.find((person) => person.id == Number(id))
    
    if(!person){
        return res
        .status(404)
        .json({sucess: false, msg: `no tutor with id ${id}`}) // No tutor with id
    }
    const newPeople = tutor.map((person) => {
        if(person.id == Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})

// ---------------------------------------- Put Pet-------------------------------------------

const putPets = ((req: Request, res: Response) => {
    const id = req.params.petId
    const idT = req.params.tutorId
    const {name, species, carry, weight, date_of_birth} = req.body

    const indexTutor = tutor.findIndex(i => i.id == Number(idT))
    try {
        const indexPet = tutor[indexTutor].pets.findIndex(i => i.id == Number(id))

        if(indexTutor == -1){
            return res
            .status(404)
            .json({sucess: false, msg: `no tutor with id ${idT}`}) // Id do pet não correspondente
        } else if(indexPet == -1){
            return res
            .status(404)
            .json({success: false, msg: `no pet with id ${idT}`}) // Id do tutor não correspondente
        } else{
            const newPet = tutor[indexTutor].pets.map((pet) => {
                if(pet.id == Number(id)){
                    pet.name = name
                }
                return pet
            })
            res.status(200).json({success: true, data: newPet})
        }
    } catch (error) {
        res.send('no tutor no exist')
    }

    

})

// ------------------------------------ Delete Tutors -------------------------------------------

const deleteTutors = ((req: Request, res: Response) => {
    const id = req.params.Id
    try {
        const indexTutor = tutor.findIndex(i => i.id == Number(id))

        if(indexTutor == -1){
            return res
            .status(404)
            .json({success: false, msg: `no tutor with id ${id}`}) // Id do Tutor não correspondente
        }

        tutor.splice(indexTutor, 1);
        return res.status(200).json({success: true})

    } catch (error) {
        res.send('Id')
    }
    
})



// -------------------------------------- Delete Pets ------------------------------------------

const deletePets = ((req: Request, res: Response) => {
    const id = req.params.petId
    const idT = req.params.tutorId
    const indexTutor = tutor.findIndex(i => i.id == Number(idT))
    try {
        const indexPet = tutor[indexTutor].pets.findIndex(i => i.id == Number(id))

        if(indexTutor == -1){
            return res
            .status(404)
            .json({sucess: false, msg: `no tutor with id ${id}`}) // Id do Pet não correspondente
        } else if(indexPet == -1){
            return res
            .status(404)
            .json({success: false, msg: `no pet with id ${idT}`}) // Id do tutor não correspondente
        }

        tutor[indexTutor].pets.splice(indexPet, 1)
        res.status(200).send({success: true})

    } catch (error) {
        res.send(error)
    }

})

export default {getAllTutors, postTutors, postPets, putTutors, putPets, deleteTutors, deletePets}