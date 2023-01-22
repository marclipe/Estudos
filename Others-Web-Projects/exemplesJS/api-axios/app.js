var button = document.querySelector("#app"); 

if(button){
button.addEventListener('click', function() {
    axios
    .get('https://api.github.com/users')
    .then(function(response) {
        console.log(response.data[0].login)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally  (() => {
        console.log('finalizou')
    })
})
}