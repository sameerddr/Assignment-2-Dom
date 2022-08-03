function addmore() {
    document.getElementById("error").innerHTML = "";

    let name = document.getElementById("name").value;
    name2 = document.getElementById("name2").value;
    name3 = document.getElementById("name3").value;
    if (name == "") {
        document.getElementById("error").innerHTML = "Please Enter Value";
    } else {
        let box = document.getElementById("box");
        let li = document.createElement("li");
        lii = document.createElement("li");
        liii = document.createElement("li");
        li.textContent = name;
        lii.textContent = name2;
        liii.textContent = name3;
        box.appendChild(li);
        box.appendChild(lii);
        box.appendChild(liii);

        let delbut = document.createElement("a");
        delbut.textContent = "x";
        delbut.href = "javascript:void(0)";
        li.appendChild(delbut);


    }
    document.getElementById("name").value;
    document.getElementById("name2").value;
    document.getElementById("name3").value;
}

let btn = document.querySelector("ul");
btn.addEventListener("click", function(e) {
            if (e.targer.tagname == "A") {
                e.target.parentElement.remove();
            }
        }