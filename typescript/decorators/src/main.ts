//Decorators - fazer anotação da versão da API

// function looger(text: string) {
//   return (target: any) => {
//     console.log(target, text);
//   };
// }

// @looger('Cataline')
// class Api {}

function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setApiVersion('1.0.0')
class API {}

console.log(new API());
