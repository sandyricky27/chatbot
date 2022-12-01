const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const kirim = document.getElementById("kirim")
let i = 0


const botPertanyaan = (data) => {
    return ["Haloo.. nama kamu Siapa ya?",
        `Haloo ${data?.nama}, Usia mu Berapa?`,
        `Owh ${data?.usia}, Kalau Hobimu apa?`,
        `Sama dong, aku juga hobi ${data?.hobi}, kamu punya pacar ga?`,
        `Ohhh..${data?.pacar}, oke kalau begitu`
    ]
}

pertanyaan.innerHTML = botPertanyaan()[0]

let userData = []

const botMulai = () => {
    if(jawaban.value.length < 1) return alert(error)

    i++
    if(i === 1){
        setTunggu({nama : jawaban.value})
    } else if(i === 2){
        setTunggu({usia : jawaban.value})
    } else if(i === 3){
        setTunggu({hobi : jawaban.value})
    } else if(i ===4){
        setTunggu({pacar : jawaban.value})
    } else if(i === 5) {
        finish()
    } else{
        end()
    }
}

function setTunggu(jawabanUser) {
    pertanyaan.innerHTML = botPertanyaan(jawabanUser) [i]
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finish() {
    pertanyaan.innerHTML = `udahan yaa terima kasih sudah mencobaa ${userData[0]}`
    jawaban.value = "oke"
}


function end (){
    alert(`terima kasih ${userData[0]}`)
    window.location.reload ()
}