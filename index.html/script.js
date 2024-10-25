const taskinput=document.getElementById("task-input")
const addtaskbtn=document.getElementById("add-task-btn")
const todolist=document.getElementById("todo-list")
const inprogreslist=document.getElementById("inprogres-list")
const completedlist=document.getElementById("Completed-list")

let draggedItem=null

addtaskbtn.addEventListener('click', addtask)

function addtask(){
    const taskText=taskinput.value.trim()
    if(taskText){
       const taskItem = creatTaskElement(taskText)
       todolist.appendChild(taskItem)
    }
}

function creatTaskElement(taskText) {
    const taskItem=document.createElement('li')
    taskItem.textContent=taskText
    taskItem.setAttribute('draggable','true')
    taskItem.addEventListener("dragstart",()=>{
        draggedItem=taskItem
    })
    taskItem.addEventListener("dragend",()=>{
        draggedItem=null
    })
    const deleteBtn=document.createElement("button")
    deleteBtn.textContent='Delete'
    deleteBtn.addEventListener('click',()=> taskItem.remove())
    taskItem.appendChild(deleteBtn)
    return taskItem
}
 const lists=[todolist,inprogreslist,completedlist]

 lists.forEach((ele) =>{
    ele.addEventListener('dragover',(e) =>e.preventDefault())
    ele.addEventListener('drop',()=>{
        if (draggedItem) {
            console.log(draggedItem)
            ele.appendChild(draggedItem)
        }
    })
 })















