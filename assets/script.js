var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('#name');

// Current Day Weather Styles
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var wind =document.querySelector('.wind');
var humidity = document.querySelector('.humidity');

// Forecast Day 1 Weather Styles
var desc1 = document.querySelector('.desc1');
var temp1 = document.querySelector('.temp1');
var wind1 =document.querySelector('.wind1');
var humidity1 = document.querySelector('.humidity1');
var icon1 = document.querySelector('.icon1');

// Forecast Day 2 Weather Styles
var desc2 = document.querySelector('.desc2');
var temp2 = document.querySelector('.temp2');
var wind2 =document.querySelector('.wind2');
var humidity2 = document.querySelector('.humidity2');

// Forecast Day 3 Weather Styles
var desc3 = document.querySelector('.desc3');
var temp3 = document.querySelector('.temp3');
var wind3 =document.querySelector('.wind3');
var humidity3 = document.querySelector('.humidity3');

// Forecast Day 4 Weather Styles
var desc4 = document.querySelector('.desc4');
var temp4 = document.querySelector('.temp4');
var wind4 =document.querySelector('.wind4');
var humidity4 = document.querySelector('.humidity4');

// Forecast Day 5 Weather Styles
var desc5 = document.querySelector('.desc5');
var temp5 = document.querySelector('.temp5');
var wind5 =document.querySelector('.wind5');
var humidity5 = document.querySelector('.humidity5');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=imperial&appid=d5bb39acbc5aa5ebe2e3a8a3f59c416d')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {

    // Current Weather Output

        var nameValue = data['city']['name'];
        var tempValue0 = data['list'][0]['main']['temp'];
        var windValue0 = data['list'][0]['wind']['speed'];
        var humidityValue0 = data['list'][0]['main']['humidity'];
        var descValue0 = data['list'][0]['weather'][0]['description'];

        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue0+' °F';
        wind.innerHTML = windValue0+' MPH';
        humidity.innerHTML = humidityValue0+'%';
        desc.innerHTML = descValue0;

    // Forecast Day 1 Weather Output

        var iconValue1 = data['list'][1]['weather'][0]['icon'];
        var tempValue1 = data['list'][1]['main']['temp'];
        var windValue1 = data['list'][1]['wind']['speed'];
        var humidityValue1 = data['list'][1]['main']['humidity'];
        var descValue1 = data['list'][1]['weather'][0]['description'];


        // icon1.innerHTML = iconValue1+`<img src="icons/${icon}.png">`;
        temp1.innerHTML = tempValue1+' °F';
        wind1.innerHTML = windValue1+' MPH';
        humidity1.innerHTML = humidityValue1+'%';
        desc1.innerHTML = descValue1;


    // Forecast Day 2 Weather Output

        var tempValue2 = data['list'][2]['main']['temp'];
        var windValue2 = data['list'][2]['wind']['speed'];
        var humidityValue2 = data['list'][2]['main']['humidity'];
        var descValue2 = data['list'][2]['weather'][0]['description'];

        temp2.innerHTML = tempValue2+' °F';
        wind2.innerHTML = windValue2+' MPH';
        humidity2.innerHTML = humidityValue2+'%';
        desc2.innerHTML = descValue2;

    // Forecast Day 3 Weather Output

        var tempValue3 = data['list'][3]['main']['temp'];
        var windValue3 = data['list'][3]['wind']['speed'];
        var humidityValue3 = data['list'][3]['main']['humidity'];
        var descValue3 = data['list'][3]['weather'][0]['description'];

        temp3.innerHTML = tempValue3+' °F';
        wind3.innerHTML = windValue3+' MPH';
        humidity3.innerHTML = humidityValue3+'%';
        desc3.innerHTML = descValue3;

    // Forecast Day 4 Weather Output

        var tempValue4 = data['list'][4]['main']['temp'];
        var windValue4 = data['list'][4]['wind']['speed'];
        var humidityValue4 = data['list'][4]['main']['humidity'];
        var descValue4 = data['list'][4]['weather'][0]['description'];

        temp4.innerHTML = tempValue4+' °F';
        wind4.innerHTML = windValue4+' MPH';
        humidity4.innerHTML = humidityValue4+'%';
        desc4.innerHTML = descValue4;


    // Forecast Day 5 Weather Output

        var tempValue5 = data['list'][5]['main']['temp'];
        var windValue5 = data['list'][5]['wind']['speed'];
        var humidityValue5 = data['list'][5]['main']['humidity'];
        var descValue5 = data['list'][5]['weather'][0]['description'];

        temp5.innerHTML = tempValue4+' °F';
        wind5innerHTML = windValue4+' MPH';
        humidity5.innerHTML = humidityValue4+'%';
        desc5.innerHTML = descValue4;

    // Display date with moment.js

        var a = moment().format('dddd, MMMM Do').toString();
        document.getElementById("todaysdate").innerHTML = a;

        var newDate1 = moment().add(1, 'day').format('ddd, MMMM Do').toString();
        document.getElementById("forecast-one").innerHTML = newDate1;

        var newDate2 = moment().add(2, 'day').format('ddd, MMMM Do').toString();
        document.getElementById("forecast-two").innerHTML = newDate2;

        var newDate3 = moment().add(3, 'day').format('ddd, MMMM Do').toString();
        document.getElementById("forecast-three").innerHTML = newDate3;

        var newDate4 = moment().add(4, 'day').format('ddd, MMMM Do').toString();
        document.getElementById("forecast-four").innerHTML = newDate4;

        var newDate5 = moment().add(5, 'day').format('ddd, MMMM Do').toString();
        document.getElementById("forecast-five").innerHTML = newDate5;
        

    })



    .catch(err => alert("Please enter an accurate city name."))
})
