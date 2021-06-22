let weather = {
    apikey: "5d0ecc9a90e6a38c22a379f0396eaf37",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apikey
        ).then((response)=> response.json())
        .then((data)=>this.displayweather(data));

    },
    
    // to display the info about above quantites and fetch data from api we do like that
    displayweather: function(data){
const {name} =data;
const {icon,description}=data.weather[0];
const{temp,humidity}=data.main;
const{speed}=data.wind;
console.log(name,icon,description,temp,humidity,speed);
 // to display this info on page
document.querySelector(".city").innerText="Weather in "+ name;
document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
document.querySelector(".description").innerText=description;
document.querySelector(".temp").innerText=temp +"°C";
document.querySelector(".humidity").innerText="Humidity: "+ humidity + "%";
document.querySelector(".wind").innerText="Wind speed: "+ speed + "km/h";
    },
    // this get the content of the seaxrch bar
   search: function(){
this.fetchweather(document.querySelector(".search-box").value);
   }
 
};
document.querySelector(".search button").addEventListener("click",function(){
weather.search()
})
// isko karne se enter key dabane pe kaam kerega
document.querySelector(".search-box").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});
weather.fetchweather("Gorakhpur");