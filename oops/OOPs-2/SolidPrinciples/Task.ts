// class TaskManager {
//   createTask(name: string) {
//     console.log(`Creating task: ${name}`);
//   }

//   sendEmail(to: string) {
//     console.log(`Sending email to ${to}`);
//   }
// }

//In the given code as we can see in this class ther are two diffrent responsibilty
// so we neeed to refactor it by creating seprate clases
class TaskService {
  createTask(name: string) {
    console.log(`Creating task: ${name}`);
  }
}

class EmailServices {
  sendEmail(to: string) {
    console.log(`Sending email to ${to}`);
  }
}

let task1= new TaskService();
task1.createTask("Go to GYM");
let newEmail= new EmailServices();
newEmail.sendEmail("bishtsarthal80@gmail.com");
