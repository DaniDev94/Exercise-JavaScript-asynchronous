// 2.1-------------------------------------------------->

const runTimeOut = async () => {
    const promise = await new Promise(() => {
        setTimeout(() => {
            console.log('Time out aaasync!')
        }, 2000)
    })
    return promise;
};

runTimeOut();

// 2.2-------------------------------------------------->

const getCharacters = async () => {
    try {
        const resutl = await fetch('https://rickandmortyapi.com/api/character');
        const resutlToJson = await resutl.json()
        return resutlToJson;
    } catch (err) {
        console.log(err)
    }

}

/* function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}
 */

const init = async () => {
    const finalResult = await getCharacters();
    console.log(finalResult);
}

window.onload = init();


