// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import countryList from '../hbs/counters.hbs';
// import countryCards from '../hbs/counteryCard.hbs';

// const { error } = require('@pnotify/core');
// const countriesListEl = document.querySelector('.js-countries-list');

// export default function rendersInterfaceConditionally(country) {

//     const markUp = countryCards(country);
//             const newList = countryList(country);

//     if (country.length === 1) {
//         countriesListEl.insertAdjacentHTML('beforeend', markUp)
//     } else if (country.length >= 2 && country.length <= 10) {
//         countriesListEl.insertAdjacentHTML('beforeend', newList)
//     } else {
//         error({
//             text: 'Уточните запрос!',
//             type: 'error',
//             delay: 1000,
//         });
//     }

//     // if(r.length > 10) {
//     //     error({
//     //         text: 'Уточните запрос!',
//     //         type: 'error',
//     //         delay: 1000,
//     //     });
//     // } else if(r.length >= 2 && r.length <= 10) {
//     //     countriesListEl.insertAdjacentHTML('beforeend', countersList(r.name))
//     // } else{
//     //     console.log(r)
//     // }
// }