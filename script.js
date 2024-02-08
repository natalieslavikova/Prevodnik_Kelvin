const celsia = Number(prompt("Zadej stupně Celsia"))

const prevod = celsia + 273.16

document.body.innerHTML += `<h2> ${celsia} °C je ${prevod} K</h2>`;