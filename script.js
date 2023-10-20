// const inputBox = document.getElementById('inputBox');
// const submitBtn = document.getElementById('submitBtn');
// const resultBox = document.querySelector('#resultBox');

// submitBtn.addEventListener('click', function () {
//     const countryName = inputBox.value;
//     const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

//     async function geteDets() {
//         const response = await fetch(url);
//         const data = await response.json();
//         const flagImg = data[0].flags.png;
//         const Name = data[0].name.common;
//         const continant = data[0].region;
//         const population = data[0].population;
//         const currency = (Object.keys(data[0].currencies)[0])
//         const capital = data[0].capital[0];
//         const commonLang = data[0].languages.hin;
//         console.log(commonLang);

//         resultBox.innerHTML = `<div id="imgAndName">
//         <img src="${flagImg}"
//             alt="Reload">

//         <h1 id="countryName">${Name}</h1>
//     </div>
//     <div id="otherDets">
//         <h2>Capital: <span>${capital}</span></h2>
//         <h2>Continent: <span>${continant}</span></h2>
//         <h2>Population: <span>${population}</span></h2>
//         <h2>Currency: <span>${currency}</span></h2>
//         <h2>Common Language: <span>${commonLang}</span></h2>
//     </div>`
//     }
//     geteDets();
//     inputBox.value = ''
// })

// // *************************Another Way=> Using appendChild and createElement Method***************************

const inputBox = document.getElementById('inputBox');
const submitBtn = document.getElementById('submitBtn');
const resultBox = document.querySelector('#resultBox');

submitBtn.addEventListener('click', function () {
    const countryName = inputBox.value;
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    async function getCountryDetails() {
        const response = await fetch(url);
        const data = await response.json();
        const flagImg = await data[0].flags.png;
        const Name = data[0].name.common;
        const continent = data[0].region;
        const population = data[0].population;
        const currency = Object.keys(data[0].currencies)[0];
        const capital = data[0].capital[0];
        const commonLang = data[0].languages.hin;


        const imgAndNameDiv = document.createElement('div');
        imgAndNameDiv.id = 'imgAndName';

        const img = document.createElement('img');
        img.src = flagImg;
        img.alt = 'Flag';
        imgAndNameDiv.appendChild(img);

        const countryNameHeading = document.createElement('h1');
        countryNameHeading.id = 'countryName';
        countryNameHeading.textContent = Name;
        imgAndNameDiv.appendChild(countryNameHeading);

        const otherDetsDiv = document.createElement('div');
        otherDetsDiv.id = 'otherDets';


        function createDetailElement(label, value) {
            const detailHeading = document.createElement('h2');
            const detailSpan = document.createElement('span');
            detailHeading.textContent = `${label}: `;
            detailSpan.textContent = value;
            detailHeading.appendChild(detailSpan);
            otherDetsDiv.appendChild(detailHeading);
        }

        createDetailElement('Capital', capital);
        createDetailElement('Continent', continent);
        createDetailElement('Population', population);
        createDetailElement('Currency', currency);
        createDetailElement('Common Language', commonLang);

        // Clear the resultBox and append the new elements
        resultBox.innerHTML = '';
        resultBox.appendChild(imgAndNameDiv);
        resultBox.appendChild(otherDetsDiv);
    }

    getCountryDetails();
});
