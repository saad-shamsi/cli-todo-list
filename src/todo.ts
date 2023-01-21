import chalk from "chalk";
import inquirer from "inquirer";
import { repetationOfFlow } from "./utils/startAgain.js";

let todoLists: string[] = [];
let startAgain = true;

export const todoFunc = async () => {
  do {
    let answer: { option: string } = await inquirer.prompt([
      {
        name: "option",
        type: "list",
        choices:
          todoLists.length > 0
            ? ["Add Task", "Check-Status", "Remove Task","Exit"]
            : ["Add Task"],
        message: chalk.blueBright(
          "Select the option to add , remove or check-status "
        ),
      },
    ]);
    switch (answer.option) {
      case "Add Task":
        let { newItem }: { newItem: string } = await inquirer.prompt([
            {
              name: "newItem",
              type: "input",
              message: "Enter a Task in todo List",
            },
          ]);
          todoLists.push(newItem);
          console.log(todoLists);
    
          startAgain = await repetationOfFlow();
        break;
          case"Check-Status":
          if (todoLists.length > 1) {
            console.log(chalk.cyanBright`Your Tasks In Que are : `, todoLists);
          }
    
          if (todoLists.length === 1) {
            console.log(chalk.cyanBright`Your Task In Que is : `, todoLists);
          }
    
          //  console.log(elements);
    
          startAgain = await repetationOfFlow();
          break
          case"Remove Task":
          const removeItem: { remove: string } = await inquirer.prompt([
            {
              name: "remove",
              // type:"Input",
              type: "list",
              choices: [...todoLists],
    
              message: "which task you want to delete",
            },
          ]);
    
          todoLists = todoLists.filter((t) => t !== removeItem.remove);
          console.log(chalk.redBright(`your selected todo has been removed!`));
    
          startAgain = await repetationOfFlow();
          break;
          
          default : 
           console.log(chalk.yellowBright(`thank you so much!   Your remaining tasks are : `)) 
          
        console.table( todoLists)
        
           
          
          
           ;
    }
   
  } while (startAgain !== false);
};
