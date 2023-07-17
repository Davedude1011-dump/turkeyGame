var GroundArea = document.querySelector(".ground")
console.log(GroundArea)
var Turkeys = []
var TurkeyBucks = 0
var AutoSweater = false

function AddTurkey() {
    var NewTurkey = {HasSweater: false, PercentX: Math.floor(Math.random() * 100) + 1, PercentY: Math.floor(Math.random() * 100) + 1, TurkeyID: Turkeys.length+1}
    Turkeys.push(NewTurkey)

    var NewTurkeyElement = document.createElement("div")
    NewTurkeyElement.classList.add("turkey")
    NewTurkeyElement.id = Turkeys.length

    NewTurkeyElement.onclick = function() {
        if (Turkeys[Number(this.id) - 1].HasSweater == false) {
            TurkeyBucks ++
            document.querySelector(".turkey-bucks-counter").textContent = TurkeyBucks
            Turkeys[Number(this.id) - 1].HasSweater = true
            document.getElementById(Turkeys[Number(this.id) - 1].TurkeyID).style.backgroundImage = "url('images/TURKEYSWEATER.png')"
            document.getElementById(Turkeys[Number(this.id) - 1].TurkeyID).style.cursor = "cursor"
        }
    }

    GroundArea.appendChild(NewTurkeyElement)

    console.log(Turkeys)
}
AddTurkey()

function MoveTurkeys() {
    for (let i = 0; i < Turkeys.length; i++) {
        console.log(Turkeys[i].TurkeyID)
        var CurrentTurkey = document.getElementById(Turkeys[i].TurkeyID)
        var RandomX = Math.floor(Math.random() * 100) + 1
        var RandomY = Math.floor(Math.random() * 100) + 1

        console.log(CurrentTurkey)

        CurrentTurkey.style.left = RandomX + "%"
        CurrentTurkey.style.top = RandomY + "%"
    }
}


function loopFunction() {
    MoveTurkeys()
}
function loopFunctionTen() {
    for (let i = 0; i < Turkeys.length; i++) {
        if (Turkeys[i].HasSweater) {
            document.getElementById(Turkeys[i].TurkeyID).style.backgroundImage = "url('images/TURKEY.png')"
            document.getElementById(Turkeys[i].TurkeyID).style.cursor = "pointer"
            Turkeys[i].HasSweater = false
        }
        else {
            if (AutoSweater) {
                TurkeyBucks ++
                document.querySelector(".turkey-bucks-counter").textContent = TurkeyBucks
                Turkeys[i].HasSweater = true
                document.getElementById(Turkeys[i].TurkeyID).style.backgroundImage = "url('images/TURKEYSWEATER.png')"
                document.getElementById(Turkeys[i].TurkeyID).style.cursor = "cursor"
            }
            console.log("ji")
        }
    }
}

const intervalId = setInterval(loopFunction, 1000);
const intervalIdTen = setInterval(loopFunctionTen, 10000);





document.getElementById("turkey-1").addEventListener("click", function() {
    if (TurkeyBucks >= 10) {
        AddTurkey()
        TurkeyBucks-= 10
        document.querySelector(".turkey-bucks-counter").textContent = TurkeyBucks
    }
})
document.getElementById("turkey-10").addEventListener("click", function() {
    if (TurkeyBucks >= 100) {
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        AddTurkey()
        TurkeyBucks-= 10
        document.querySelector(".turkey-bucks-counter").textContent = TurkeyBucks
    }
})
document.getElementById("auto-sweater").addEventListener("click", function() {
    if (TurkeyBucks >= 50) {
        AutoSweater = true
        console.log("ji")
    }
})


function handleKeyPress(event) {
    // Check if the pressed key is "t" (either uppercase or lowercase)
    if (event.key === 't' || event.key === 'T') {
        AddTurkey()
        AddTurkey()
        AddTurkey()
        AddTurkey()
        AddTurkey()
        AddTurkey()
        AddTurkey()
        AddTurkey()
        AddTurkey()
        AddTurkey()
    }
}

// Add an event listener to the document for the "keydown" event
document.addEventListener('keydown', handleKeyPress);