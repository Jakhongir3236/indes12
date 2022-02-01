let icon = document.querySelectorAll('.cell')
let who_is_win = document.querySelector('.game--status')
let restart_button = document.querySelector('.game--restart')
let player = document.querySelector('.game--container')
let start = ['', '', '', '', '', '', '', '', '']
let computer = 'x'
let game_activ = true

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function result() {
    let computer =false
    for (let i = 0; i <=7; i++) {
        let wining=win[i]
        let a=board[wining[0]]
        let b=board[wining[1]]
        let c=board[wining[2]]
        if(a==''||b==''||c==''){
            continue
        }
        if(a==b &&b===c){
            computer = true
            break
        }
    }
    if(computer){
        who_is_win(onePlayer==='x'?user_o:computer_x)
    }
    if(!board.includes(''))
    who_is_win()
 }

let control=()=>{
    display.classList.remove(onePlayer),
    onePlayer=onePlayer==='x'?'o':'x'
    display.innerHTML=onePlayer
    display.classList.add(onePlayer)
}




who_is_win=(type)=>{
    switch(type){
        case user_o:
            who_is_win.innerHTML ='Siz yutdingiz'
            break
        case computer_x:
            who_is_win.innerHTML ='Computer yutdi'
            break
    }
    who_is_win.classList.remove('END')
}
let panda=(dell)=>{
    if(dell.innerHTML==='x'||dell.innerHTML==='o'){
        return false
    }
    return true

}


let updateboard=(index)=>{
    board[index] =onePlayer
}


let user=(cell, index)=>{
    if(panda(cell)&& game_activ){
        cell.innerHTML=onePlayer
        cell.classList.add(onePlayer)
        updateboard(index)
        result()
        control()
    }
}

let resetboard=()=>{
    board=['', '', '', '', '', '', '', '', '']
    game_activ=true
    who_is_win.classList.add('hode')

    if(onePlayer==='o'){
        control()
    }
    icon.forEach(cell=>{
        cell.innerHTML=''
        cell.classList.remove('pl')
    })
}


icon.forEach((cell, index)=>{
    cell.addEventListener('click', ()=>user(cell,index))
})











// ----------------------------restart_button----------------------------------
restart_button.onclick = () => {
    location.reload()
}



