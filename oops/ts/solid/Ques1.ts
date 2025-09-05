
class TaskService {
  createTask(name: string) {
    console.log(`Creating task: ${name}`);
  }
}

class EmailService {
  sendEmail(to: string) {
    console.log(`Sending email to ${to}`);
  }
}

const taskService = new TaskService();
taskService.createTask("Finish report");

const emailService = new EmailService();
emailService.sendEmail("user@example.com");
