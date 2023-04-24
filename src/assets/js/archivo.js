let imag = document.getElementById("img");
let inpu = document.getElementById("input");

inpu.onchange = (e) => {
  if (inpu.files[0]) imag.src = URL.createObjectURL(inpu.files[0]);
};
