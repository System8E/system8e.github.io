const epochtext = document.getElementById("epochthingy")

function showdate() {
    let datee = Date.now() / 1000
    epochtext.textContent = `epoch is ${datee} (i think)`
}