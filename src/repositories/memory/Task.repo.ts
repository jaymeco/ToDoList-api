import TaskRepository from "../../app/contracts/repositories/Task.repo";
import CreateTaskInputDto from "../../app/DTOs/repositories/Task/inputs/Create.dto";
import Task from "../../app/entities/Task";

export default class TaskMemoryRepo implements TaskRepository {
  protected items: Task[];

  constructor() {
    this.items = [
      Task.create({ id: 1, description: 'Tarefa 1' }),
    ];
  }

  public async getAll(): Promise<Task[]> {
    return new Promise((resolve) => resolve(this.items));
  }

  public async create(dto: CreateTaskInputDto): Promise<Task> {
    const task = Task.create({
      id: (new Date()).getTime(),
      description: dto.description,
    });

    this.items.push(task);

    return new Promise((resolve) => resolve(task));
  }
}
