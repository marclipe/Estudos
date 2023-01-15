const button = document.querySelector('#app button'); 

button.addEventListener('click', function(){
    axios.get('https://api.github.com/users');
})