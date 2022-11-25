// type UF = 'PE' | 'SP' | 'MG';

//Mostrar a cidade do usuário
interface User {
  name: string;
  address?: {
    city: string;
    UF: string;
  };
  //   sayHello: () => void;
}

function showCity(user: User) {
  return user.address?.city;
}

const response = showCity({
  name: 'MarcLipe',
  address: {
    city: 'Barras',
    UF: 'PI'
  }
});

console.log(response);
