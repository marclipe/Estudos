const submitButton = document.querySelector("#app form button");
const zipCodeField = document.querySelector("#app form input");
const content = document.querySelector("#app main");

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault(); 

    let zipCode = zipCodeField.value

    zipCode = zipCode.replace(' ', '');
    zipCode = zipCode.replace('.', '');
    zipCode = zipCode.trim()

    axios
    .get('https://viacep.com.br/ws/' + zipCode + '/json/')
    .then(function(response) {
        if(response.data.erro) {
            throw new Error('CEP inválido')
        }

        content.innerHTML = '' //esvaziar a pesquisa
        createLine(response.data.logradouro);
        createLine(response.data.localidade + ' / ' + response.data.uf);
        createLine(response.data.bairro);

        console.log(response.data)
    })
    .catch(function(error) {
        console.log(error)
        content.innerHTML = ''
        createLine("Ops, algo deu errado!")
    })
}

function createLine(text) {
    var line = document.createElement('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)
}