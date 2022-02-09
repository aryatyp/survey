




const form = document.querySelector(".loginForm");
if (form) {
	writeData();
}

function writeData() {
    firebase.database().ref("user").set({
            Name: document.getElementById("q1").value,
            ID: document.getElementById("q2").value,
            Q1: document.getElementById("q3").value,
            Q2: document.getElementById("q4").value,
            Q3: document.getElementById("q5").value,
            Q4: document.getElementById("q6").value,
            Q5: document.getElementById("q7").value,
            Q6: document.getElementById("q8").value
        }

    );
}