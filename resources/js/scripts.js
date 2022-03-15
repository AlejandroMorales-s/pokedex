const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != '200') {
            //console.log(res);
            inicioError();
            noWork();
            pokeError('resources/icons/wrong.gif');
        }else {
            pokeErrorOk();
            inicio();
            work();
            return res.json();
        }
        //console.log(res);
    }).then((data) => {
        console.log(data);
        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let defense = data.stats[2].base_stat;
        let specialAttack = data.stats[3].base_stat;
        let specialDefense = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;
        let pokeImg = data.sprites.other.dream_world.front_default;
        pokeHp(hp);
        pokeAttack(attack);
        pokeDefense(defense);
        pokeSAttack(specialAttack);
        pokeSDefense(specialDefense);
        pokeSpeed(speed);
        pokeImage(pokeImg);  
        pokemon();
    })
}
const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
    document.getElementById('error').classList.remove('no-display');
}
const pokeError = (url) => {
    document.getElementById('error').classList.remove('no-display');
    document.getElementById('pokeError').classList.remove('no-display');
    const pokeError = document.getElementById('pokeError');
    pokeError.src = url;
}
const pokeErrorOk = () =>{
    document.getElementById('error').classList.add('no-display');
    document.getElementById('pokeError').classList.add('no-display');
}
const pokeHp = (hp) => {
    const pokeHp = document.getElementById('hp').innerHTML = `Hp: ${hp}`;
}
const pokeAttack = (attack) => {
    const pokeAttack = document.getElementById('attack').innerHTML = `Attack: ${attack}`;
}
const pokeDefense = (defense) => {
    const pokeDefense = document.getElementById('defense').innerHTML = `Defense: ${defense}`;
}
const pokeSAttack = (specialAttack) => {
    const pokeSAttack = document.getElementById('sAttack').innerHTML = `Special-Attack: ${specialAttack}`;
}
const pokeSDefense = (specialDefense) => {
    const pokeSDefense = document.getElementById('sDefense').innerHTML = `Special-Defense: ${specialDefense}`;
}
const pokeSpeed = (speed) => {
    const pokeSpeed = document.getElementById('speed').innerHTML = `Speed: ${speed}`;
}
const pokemon = () => {
    const input = document.getElementById('pokeName');
    let name = input.value.toLowerCase().trim();
    const pokemon = document.getElementById('nombre').innerHTML = `${capitalize(name)}`;
}
const inicio = () => {
    let contiene = document.getElementById('inicio').classList.contains('no-display')
    if (contiene == false) {
        document.getElementById('inicio').classList.add('no-display');
    }else{
        //console.log('se');
    }
}
const work = () => {
    let contiene = document.getElementById('work').classList.contains('no-display');
    if (contiene == false) {
        //console.log('se');
    }else {
        document.getElementById('work').classList.remove('no-display');
    }
}
const noWork = () => {
    document.getElementById('work').classList.add('no-display');
}
const inicioError = () => {
    document.getElementById('inicio').classList.add('no-display');
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}