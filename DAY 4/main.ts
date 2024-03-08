            // DAY 4 CHALLENGE;


      //Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.;

// Muhammad Ali, 3-6-2024

// This Program Print a Personal Message;
  
     let myname: string = "Muhammad Ali"
  
        console.log(`hello ${myname},would you like to learn some TypeScript today?`)
  


  // Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

        let friendsname: string [] = ["Ali, Ahsan , Zohaib"];
         
           for (let i = 0; i <friendsname.length; i++) {

        console.log(friendsname[i]);
     }



       //Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.


         let names: string[] = ["Ali", "Ahsan", "Zohaib"];
           for (let name of names) {
           console.log(`hello ${name}, If you are at home today, can you meet?`);
}