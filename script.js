let addtaskbutton = document.getElementById("addtaskbutton");
let entertask = document.getElementById("entertask");



addtaskbutton.addEventListener("click", () => {
    taskdiv = document.createElement("div");
    document.getElementById("mainlist").appendChild(taskdiv);
    list = document.createElement("ul");
    list.setAttribute("class", "inline")
    document.getElementById("mainlist").appendChild(list);
    checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "inline");
    checkbox.setAttribute("id", "checkbox");
    document.getElementById("mainlist").appendChild(checkbox);
    let task = entertask.value;
    list.innerText = task;
})

let remove = document.getElementById("checkbox");

remove.addEventListener("click", () =>{
    list.style.textDecoration = "line-through"
})