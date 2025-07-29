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
var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.createTask = function (name) {
        console.log("Creating task: ".concat(name));
    };
    return TaskService;
}());
var EmailServices = /** @class */ (function () {
    function EmailServices() {
    }
    EmailServices.prototype.sendEmail = function (to) {
        console.log("Sending email to ".concat(to));
    };
    return EmailServices;
}());
var task1 = new TaskService();
task1.createTask("Go to GYM");
var newEmail = new EmailServices();
newEmail.sendEmail("bishtsarthal80@gmail.com");
