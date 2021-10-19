document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault()
      taskHandler(e.target.new_task_description.value)
  })
});


function taskHandler (todo) {
    let li = document.createElement("li");
    li.textContent = todo
    document.querySelector("#tasks").appendChild(li)
}



