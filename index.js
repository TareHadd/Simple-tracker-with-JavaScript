let count = 0;
let countEl = document.getElementById("entered")
let saveEl = document.getElementById("saved");

function increment()
{
    count ++;
    countEl.innerText = count;
}

function save()
{
    let countMark = count + " - "
    saveEl.textContent += countMark
    count = 0;
    countEl.innerText = count;
}
