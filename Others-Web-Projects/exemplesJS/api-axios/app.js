var button = document.querySelector("#app"); 

button.addEventListener('click', function() {
    axios.get('https://api.github.com/users')
    .then(function() {
        console.log('deu certo')
    })
    .catch(() => {
        console.log('deu ruim')
    })
})