document.getElementById("addTaskBtn").addEventListener("click", function() {
    addTask();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Verifica se o campo de entrada não está vazio
    if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement("li");
        taskItem.classList.add("taskItem");
        taskItem.textContent = taskInput.value;

        taskList.appendChild(taskItem);

        // Limpa o campo de entrada após adicionar a tarefa
        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa.");
    }
}
