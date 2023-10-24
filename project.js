const addTodo = document.getElementById("addTodo");
const newTodo = document.getElementById("newTodo");
const siyahi = document.getElementById("siyahi");
const clearCompletedButton = document.getElementById("clearCompleted");
const showAll=document.getElementById("showAll")
const showActive=document.getElementById("showActive")
const showCompleted=document.getElementById("showCompleted")



addTodo.addEventListener("click", () => {
    if (newTodo.value.trim() !== "") {
        const newLi = document.createElement("li");
        newLi.innerHTML = `
            <li>
                <input type="checkbox">
                <span>${newTodo.value}</span>
            </li>
        `;

        siyahi.appendChild(newLi);
        newTodo.value = "";

        
    }
});



clearCompletedButton.addEventListener("click", () => {
    const completedItems = siyahi.querySelectorAll('li input[type="checkbox"]:checked');
    completedItems.forEach((item) => {
        item.parentElement.parentElement.remove();
    });
   
});

     showAll.addEventListener("click", () => {

        showAll.addEventListener("click", () => {
            const checkboxes = siyahi.querySelectorAll('li input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                checkbox.checked = true;
            });
        });
        
         
     })


     showActive.addEventListener("click", () => {

        const todoItems = siyahi.querySelectorAll('li');
        todoItems.forEach((item) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
        
     })
       

     showCompleted.addEventListener("click", () => {



        const umumi = siyahi.querySelectorAll('li');
        umumi.forEach((item) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
        
     })







