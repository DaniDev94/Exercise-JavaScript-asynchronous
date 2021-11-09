// 1.1-------------------------------------------------->

/* const infoFetch = async () => {
    try {
        const result = await fetch('https://api.agify.io?name=michael');
        const resultToJson = await result.json();
        return resultToJson;
    } catch (err) {
        console.log(err);
    }
}

const init = async () => {
    const resolveResponse = await infoFetch();
    console.log(resolveResponse)
}


window.onload = init(); */



// 1.2-------------------------------------------------->

const baseUrl = 'https://api.nationalize.io?name='
const $$button = document.querySelector('button');

const getresult = async (name) => {
    try {
        const result = await fetch(`${baseUrl}${name}`)
        const resutlToJson = await result.json();
        return resutlToJson;
    } catch (err) {
        console.log(err);
    }
}

const search = async () => {
    const $$input = document.querySelector('input');
    let result = await getresult($$input.value);
    console.log(result);
    showSearch(result);
}

$$button.addEventListener('click', search);


// 1.3-------------------------------------------------->


const showSearch = (info) => {
    const newH2 = document.createElement('h2');
    newH2.innerHTML = `El nombre ${info.name} tiene un ${info.country[0].probability} porciento de ser de ${info.country[0].country_id} y un ${info.country[2].probability} porciento de ser de ${info.country[2].country_id}`;

    let newBtn = document.createElement('button');
    newBtn.textContent = 'X';

    const deletItem = () => newH2.remove();
    newBtn.addEventListener('click', deletItem);

    document.body.appendChild(newH2);
    newH2.appendChild(newBtn);
};


