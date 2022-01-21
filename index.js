function newTask(title, descrption) {
  const task = {
    //PROPERTIES
    title,
    descrption,
    complete: false,


    //METHOD
    logTaskState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      task.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
console.log(tasks);
