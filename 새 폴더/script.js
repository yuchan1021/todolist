const Check = document.querySelector("#btn")
const todoInput =document.querySelector("#todoInput")
const nuwdiv =document.querySelector("#nuwdiv")


Check.addEventListener('click', (event) => {
    const main = document.createElement('div') 

    const box = document.createElement('input')
    box.setAttribute('type','checkbox')
    
    
    const title = document.createElement('span')
    title.textContent=todoInput.value
    
    const remove = document.createElement('button') 
    remove.textContent='삭제'


        remove.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
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

        nuwdiv.appendChild(main)
        todoInput.value = ''
})
