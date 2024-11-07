const Check = document.querySelector("#btn")
const todoInput =document.querySelector("#todoInput")
const div =document.querySelector('#div')
function todolist () {
    const main=documet.createElement('div')

    const box=documet.createElement('input')
    box.setAttribute('type','checkbox')
    
    
    const title=document.createElement('span')
    title.textContent=todoInput.value
    
    const remove=createElement('button')
    remove.textContent='삭제'


        remove.addEventListener('click', (event) => {
            event.currentTarget
        })

        box.addEventListener('change', (event) => {
            if(box.checked){
                title.style.opacity = "0.5";
            }else{
                title.style.opacity = "1"
            }
        })

        main.appendChild(box)
        main.appendChild(title)
        main.appendChild(remove)

        div.appendChild(main)
        todoInput.value = ''
    }
