// const vocComprouOsProdutos = new Promise(function (resolve, reject) {
//     let products = ['Camisa', 'Sapato', 'Calça']

//     resolve(products)
// })

// console.log(vocComprouOsProdutos)


// var vocComprouOsProdutos = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         var products =  ['Camisa', 'Sapato', 'Calça']

//         resolve(products)
//     } , 3000)
    
// })

// vocComprouOsProdutos
// .then(function (products) {
//     console.log(products)
// })
// .catch(function(error){ 
//     console.log(error)
// })

const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 2000);
})

myPromise()
.then((response) => {
    console.log(response)
})