document.addEventListener("DOMContentLoaded", e => {
    let input = document.getElementById("input-form");
    let button = document.getElementById("submit");
    let div_data = document.getElementById("data");

    button.addEventListener("click", e => {
        if(input.value == ""){
            e.preventDefault();
            input.classList.remove("is-valid")
            input.classList.add("is-invalid")
        }
        else{
            e.preventDefault();
            let data = input.value;
            let data_split = input.value.split(",");
            div_data.innerText = data_split;
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    })
})