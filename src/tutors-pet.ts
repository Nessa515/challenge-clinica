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
    
    // { 
    //     id: 2, 
    //     name: "Marcos Silva", 
    //     phone: 854545323895, 
    //     email: "marcos.silva@compasso.com", 
    //     date_of_birth: "1998-10-12 10:10", 
    //     zip_code: 12360000, 
        
    //     pets: 
        
    //     [ 
    //         { 
    //             id: 2, 
    //             name: "Puf", 
    //             species: "cat", 
    //             carry: "p", 
    //             weight: 5,
    //             date_of_birth: "1990-08-24 09:11" 
        
    //         } 
    //     ]   

    // },

    // { 
    //     id: 3, 
    //     name: "Mariana Paz", 
    //     phone: 854000323895, 
    //     email: "mariana.paz@compasso.com", 
    //     date_of_birth: "1998-10-12 11:10", 
    //     zip_code: 12363000, 
        
    //     pets: 
        
    //     [ 
    //         { 
    //             id: 3, 
    //             name: "Lupi", 
    //             species: "dog", 
    //             carry: "p", 
    //             weight: 5,
    //             date_of_birth: "1996-01-15 18:10" 
        
    //         } 
    //     ]   

    // }
]

export {tutor};