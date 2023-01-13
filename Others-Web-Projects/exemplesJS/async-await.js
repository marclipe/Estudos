const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Marcos')
    }, 2000);
})

// async function exec() {
//     const response = await myPromise()
//     console.log(response)

//     //...
// }

const exec = async() => {
    const response = await myPromise()
    console.log(response)
}

exec()