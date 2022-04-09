let choice = document.getElementsByName('exampleRadios');
let price = document.getElementById("price");
let order = document.getElementById("order");
let result = document.getElementById("result");

order.addEventListener("click", function () {
    if (parseInt(price.value) >= 1) {
        for (i = 0; i < choice.length; i++) {
            if (choice[i].checked) {
                result.innerHTML = `<p id="rest" >The rest of your money is : ${parseInt(price.value) - 1}</p>
                            <img src="image/${i}.png" class="img-fluid" alt="Responsive image">`
            }
        }
        choice.checked = false;
        price.value = "";
    }
    else
        alert("please enter price more than {0}JD")
})