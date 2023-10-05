 let SignupBtn = document.getElementById("SignupBtn");
        let signin = document.getElementById("signin");
        let Signfield = document.getElementById("namefield");
        let title = document.getElementById("title");
        
        Signin.onclick = function(){
            namefield.style.maxHeight = "0";
            title.innerHTML ="sign In";
            SignupBtn.classList.add("diasble");
            signin.clasList.remove("disbale");
        }

        SignupBtn.onclick = function(){
            namefield.style.maxHeight = "60px";
            title.innerHTML ="sign Up";
            SignupBtn.classList.remove("diasble");
            signin.clasList.add("disbale");
        }
