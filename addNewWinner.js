
function getWinners() {
/* Step 1: Make instance of request object...
...to make HTTP request after page is loaded*/

    initCookies();

    request = new XMLHttpRequest();
    request.credentials = "include";
    console.log("1 - request object created");

    let user = document.getElementById("").value;
    let d = new Date();
    let ms = d.getTime();
    setCookie("user", user, 10);

    // Step 2: Set the URL for the AJAX request to be Heroku app

    request.open("POST", "https://desolate-brook-01524.herokuapp.com/?user=" + user +
        "&date=" + d.toString() + "&time=" + ms.toString(), true);

    console.log("2 - opened request file");

    // Step 3: set up event handler/callback

    request.onreadystatechange = function() {
        console.log("3 - readystatechange event fired.");

        if (request.readyState == 4 && request.status == 200) {

            console.log("5 - done");
            result = request.responseText;
            //document.getElementById("data").innerHTML = result;


            
        }
        else if (request.readyState == 4 && request.status != 200) {

            //document.getElementById("data").innerHTML = "Something is wrong!  Check the logs to see where this went off the rails";

        }

        else if (request.readyState == 3) {

            //document.getElementById("data").innerHTML = "Too soon!  Try again";

        }

    }
    // Step 4: fire off the HTTP request
    request.send();
    console.log("4 - Request sent");
}