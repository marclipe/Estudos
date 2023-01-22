const saoPaulo = {
    name: 'São Paulo',
    population: 12_000_000,
    foundedIn: 1554,
    uf: 'SP'
}

for (const property in saoPaulo) {
    console.log(property, saoPaulo[property])
}
