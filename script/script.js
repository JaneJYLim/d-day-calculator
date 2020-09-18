
const container = document.querySelector(".input-container");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const clickBtn = document.querySelector("#clickBtn");
const res_container = document.querySelector(".res-container");

clickBtn.addEventListener("click", gapTime);
function gapTime() {

    var input_date = new Date(year.value, (month.value-1), day.value).getTime();
    //현재시간
    var current_date = new Date().getTime();

    var gap =  current_date - input_date ;

    var res = Math.floor(gap / (1000*60*60*24));
    res_container.innerHTML = res;
}
