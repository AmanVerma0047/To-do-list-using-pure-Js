document.getElementById("todoform").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page refresh

    const taskInput = document.getElementById("task");
    if (taskInput.value === "") {
        alert("Can't add empty task!");
        return; // 🚀 stop here, don’t call add()
    }
    add();
});



function add() {
    const todo = document.createElement('div');

    const check = document.createElement('input');
    check.type = "checkbox";
    check.setAttribute("id", "chkbx")

    const text = document.createElement('p');
    text.textContent = document.getElementById("task").value
    text.style.display = "inline"

    check.addEventListener("change", () => {
        if (check.checked) {
            text.style.textDecoration = "line-through"
        }
    });


    todo.appendChild(check)
    todo.appendChild(text)
    document.getElementById("showlist").appendChild(todo)
    document.getElementById("task").value = ""

}