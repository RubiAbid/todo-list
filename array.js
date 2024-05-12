#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    // Prompt the user to enter a task and whether they want to add more tasks
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todo list?", // Prompt for task input
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more in your list?", // Prompt for adding more tasks
            default: false, // Default value set to false, indicating initially not to add more
        },
    ]);
    // Push the entered task to the todos array
    todos.push(addTask.todo);
    // Update the condition based on the user's choice to add more tasks
    condition = addTask.addMore;
    // print the current list of tasks
    console.log(todos);
}
// If the user chose not to add more tasks, print the final list
if (!condition) {
    console.log("This is your final list:");
    console.log(todos);
}
