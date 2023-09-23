import CreateTaskInputDto from "../../DTOs/repositories/Task/inputs/Create.dto";
import Task from "../../entities/Task";

export default interface TaskRepository {
  getAll(): Promise<Task[]>;

  create(dto: CreateTaskInputDto): Promise<Task>;
}
