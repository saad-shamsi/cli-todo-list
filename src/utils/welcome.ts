import chalk from "chalk";
import chalkAnimation from "chalk-animation"

 const welcomeMessage= ()=> new Promise((res)=>setTimeout(res,2000));
export let message = async ()=>{
    let welcome = chalkAnimation.glitch(`Welcome To Our CLI-ToDo App`)
  
    
    await welcomeMessage();
    welcome.stop()
}
