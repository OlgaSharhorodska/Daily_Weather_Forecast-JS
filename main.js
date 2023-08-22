// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// !!! ЗВЕРНИ УВАГУ ЩО API_KEY ПІСЛЯ РЕЄСТРАЦІЇ ВАЛІДНИЙ 21 ДЕНЬ !!!.


const elements = {
    searhForm: document.querySelector('.js-search-form'),
    list: document.querySelector('.js-list')
}

elements.searhForm.addEventListener('submit', handlerSearch)

function handlerSearch(event) {
    event.preventDefault();
     
    const { city, days } = event.currentTarget.elements;
}


function serviceWeather(city, days) {
    const BASE_URL = "http://api.weatherapi.com/v1";
    const END_POINT = "/forecast.json";
    const API_KEY = "6f3bf7a06a84400a8c1181835232108";

    const params = new URLSearchParams({
        key: API_KEY,
        q: city,
        days: days,
        lang: "en",
    });

    fetch(`${BASE_URL}${END_POINT}?${params}`)
        .then(resp => {
            if (!resp.ok) {
        throw new Error(resp.statusText)
    }
})

}




