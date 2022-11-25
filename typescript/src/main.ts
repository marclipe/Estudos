type UF = 'PE' | 'SP' | 'MG'

//Mostrar a cidade do usuário
interface User {
    name: string, 
    address: {
        city: string, 
        UF: UF
    }
    sayHello: () => void
}

function showCity(user: User) {
    user.sayHello = () => console.log('cataline')
    user.address.UF = 'SP'
    return user.address.city
}