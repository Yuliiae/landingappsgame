const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let popupBg = document.querySelector(".popup__bg");
let popup = document.querySelector(".container");
let openPopupButtons = document.querySelectorAll(".subscribe");
let closePopupButton = document.querySelector(".logo_pic");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});
closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});

let details = document.querySelector("details");

details.addEventListener("toggle", () => {
  if (details.open) {
    details.querySelector("summary span").textContent = "Read Less";
    details.classList.add("opened");
  } else {
    details.querySelector("summary span").textContent = "Read More";
    details.classList.remove("opened");
  }
});

const input = document.getElementById("phone");
input.addEventListener("keydown", (e) => {
  if (input.value.length == 4) {
    input.value += "-";
  }
  if (e.key === "Backspace" && input.value.length == 5) {
    input.value = input.value.slice(0, -1);
  }

  if (input.value.length == 12) {
    document.querySelector(".sub").classList.add("green");
    document.querySelector(".squareg").classList.add("opacit");
    document.querySelector(".sub").removeAttribute("disabled")
  }
  if (input.value.length < 12) {
    document.querySelector(".sub").classList.remove("green");
    document.querySelector(".squareg").classList.remove("opacit");
  }
});

document.getElementById("firstbtn").onclick = (e) => {
  e.preventDefault()
  document.querySelector(".formone").style.display = "none";
  
  document.querySelector(".form__title").style.display = "none";

  document.querySelector(".formtwo").style.display = "block";
};


const newva = document.querySelectorAll(".four")

newva.forEach( (input, index) => {
input.addEventListener("input", () => {
  if (index == [newva.length - 1]){
    document.getElementById('agree').removeAttribute('disabled')
    document.getElementById('agree').classList.add("green")
    document.querySelector('.read__text').classList.add("mrgtop")
    document.querySelector('.apeartext').style.display = "block"
  } 
  if (input.value.length == 1) {
    if(!newva[index + 1]) return
newva[index + 1].focus()
}

  document.querySelector('.tonumber').onclick = () => {
  document.querySelector(".formone").style.display = "block"
  document.querySelector(".form__title").style.display = "block"
  document.querySelector(".formtwo").style.display = "none"
  document.querySelector(".apeartext").style.display = "none"
  document.querySelector(".phone").value = "";
  document.querySelector(".sub").classList.remove("green");
  document.querySelector(".squareg").classList.remove("opacit");
  document.querySelectorAll(".four").forEach(text => {
    text.value = "";
   })
document.getElementById("agree").classList.remove("green")
document.querySelector(".sub").setAttribute("disabled", "")

   }
   document.querySelector('.tosms').onclick = () => {
    document.querySelectorAll(".four").forEach(text => {
      text.value = "";
     })
     document.getElementById("agree").classList.remove("green")
document.querySelector(".sub").setAttribute("disabled", "")

   }
})
}) 

document.getElementById("agree").onclick = (e) => {
 e.preventDefault()
document.querySelector('.notification').style.display = "block"
popupBg.classList.remove("active");
    popup.classList.remove("active");
    document.querySelector(".formone").style.display = "block"
    document.querySelector(".formtwo").style.display = "none"
    document.querySelector(".phone").value = "";
    document.querySelector(".sub").classList.remove("green");
    document.querySelector(".squareg").classList.remove("opacit");
    document.querySelectorAll(".four").forEach(text => {
      text.value = "";
     })
  document.getElementById("agree").classList.remove("green")
  document.querySelector(".sub").setAttribute("disabled", "")
  
}
