const addTodo=document.getElementById("addTodo")
const complateTodo=document.getElementById("complateTodo")
const deleteTodo=document.getElementById("deleteTodo")
const newTodo=document.getElementById("newTodo")
const siyahi=document.getElementById("siyahi")
const clearCompletedButton = document.getElementById("clearCompleted");


addTodo.addEventListener("click",()=>{
 const newLi=document.createElement("li")
 newLi.innerHTML= `<li><input type="radio">${newTodo.value}</li>`
 


 
 siyahi.appendChild(newLi)
 newTodo.value=""
})



complateTodo.addEventListener("click",()=>{})




deleteTodo.addEventListener("click",()=>{



    
})

clearCompletedButton.addEventListener("click",()=>{

    const completedTodos = document.querySelectorAll(".completed");
    completedTodos.forEach((todo) => {
      todo.remove();
    });

})
