import Task from "../../entities/Task";

export default interface TaskService {
  list(): Promise<Task[]>
}
