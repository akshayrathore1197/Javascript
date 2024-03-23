function clickHandler(color){
    document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")