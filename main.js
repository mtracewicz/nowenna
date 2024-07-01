let compleated = Number(localStorage.getItem("compleated"));
compleated ??= 0;
const details = document.getElementById("details");
const days = document.querySelectorAll(".day");

let current;
days.forEach((day) => {
  const id = Number(day.innerText);
  day.onclick = (ev) => {
    special.innerText = (id <= 27) ? special_pt1 : special_pt2;
    details.showModal();
  };
  if (id <= compleated) {
    day.classList.add("done");
  }
  if (id > compleated + 1) {
    day.disabled = true;
  }
  if (id == compleated + 1){
    current = day;
  }
});

const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");
cancel.onclick = (e) => { details.close(); };
confirm.onclick = (e) => {
  details.close();
  compleated++; 
  localStorage.setItem("compleated", compleated); 
  current.classList.add("done");
  current = current.nextElementSibling;
  current.disabled= false;
};

const reset = document.getElementById("reset");
reset.onclick = (e) => {
  compleated = 0;
  localStorage.setItem("compleated", compleated); 
  days.forEach(day => {
    day.classList.remove("done");
    if(day.innerText != "1"){
      day.disabled = true;
    }
    current = days[0];
  })
  
}

const special_pt1 = "Pomnij, o miłosierna Panno Różańcowa z Pompejów, jako nigdy jeszcze nie słyszano, aby ktokolwiek z czcicieli Twoich, z Różańcem Twoim pomocy Twej wzywający, miał być przez Ciebie opuszczony. Ach, nie gardź prośbą moją, o Matko Słowa Przedwiecznego, ale przez święty Twój Różaniec i przez upodobanie, jakie okazujesz dla Twej świątyni w Pompejach, wysłuchaj mnie dobrotliwie. Amen.";
const special_pt2 = "Cóż Ci dać mogę, o Królowo pełna miłości? Moje całe życie poświęcam Tobie! Ile mi sił starczy, będę rozszerzać cześć Twoją, o Dziewico Różańca Świętego w Pompei, bo gdy Twej pomocy wezwałem, nawiedziła mnie łaska Boża. Wszędzie będę opowiadać o miłosierdziu, które mi wyświadczyłaś. O ile zdołam, będę rozszerzać nabożeństwo do Różańca świętego. Wszystkim głosić będę, jak dobrotliwie obeszłaś się ze mną, aby i niegodni tak jak ja, grzesznicy, z zaufaniem do Ciebie się udawali. O, gdyby cały świat wiedział, jak jesteś dobrą, jaką masz litość nad cierpiącymi, wszystkie stworzenia uciekałyby się do Ciebie. Amen";
const special = document.getElementById("special");