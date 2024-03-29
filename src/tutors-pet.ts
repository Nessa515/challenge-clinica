type typePets = [
    {
        id: number,
        name: string,
        species: string,
        carry: string,
        weight: number,
        date_of_birth: string
    }
]

type typeTutor = [{
    id: number,
    name: string,
    phone: number,
    email: string,
    date_of_birth: string,
    zip_code: number,
    pets: typePets
     
    }
]

const tutor: typeTutor =
[ 
    { 
        id: 1, 
        name: "Jonh Doe", 
        phone: 85989323895, 
        email: "jonh.abreu@compasso.com", 
        date_of_birth: "1993-12-12 10:10", 
        zip_code: 61760000, 
        
        pets: 
        
        [ 
            { 
                id: 1, 
                name: "Lilo", 
                species: "dog", 
                carry: "p", 
                weight: 5,
                date_of_birth: "1993-12-12 10:10" 
        
            } 
        ]   

    }
]

export {tutor};