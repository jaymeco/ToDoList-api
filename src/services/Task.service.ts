import TaskRepository from '../app/contracts/repositories/Task.repo';
import Contract from '../app/contracts/services/Task.service';
import Task from '../app/entities/Task';

export default class TaskService implements Contract {
  constructor(readonly taskRepo: TaskRepository) { }

  public async list(): Promise<Task[]> {
    const tasks = await this.taskRepo.getAll();

    return tasks;
  }
}
