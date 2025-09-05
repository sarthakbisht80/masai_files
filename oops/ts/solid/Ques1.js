var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.createTask = function (name) {
        console.log("Creating task: ".concat(name));
    };
    return TaskService;
}());
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (to) {
        console.log("Sending email to ".concat(to));
    };
    return EmailService;
}());
var taskService = new TaskService();
taskService.createTask("Finish report");
var emailService = new EmailService();
emailService.sendEmail("user@example.com");
