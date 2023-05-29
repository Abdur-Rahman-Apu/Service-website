CountDownTimer('6/10/2023 06:00 AM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = ` <span class="day">${days}</span> : `;
        document.getElementById(id).innerHTML += `<span class="hrs">${hours}</span>  : `;
        document.getElementById(id).innerHTML +=`<span class="min">${minutes}</span> : `;
        document.getElementById(id).innerHTML += `<span class="sec">${seconds}</span> `;
    }

    timer = setInterval(showRemaining, 1000);
}