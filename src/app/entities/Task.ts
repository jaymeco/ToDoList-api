import CreateTaskInputDto from "../DTOs/entities/Task/inputs/Create.dto";
import Entity from "./Entity";

interface EntityValue {
  description: string;
  id: number;
  done: boolean;
  initial_date: Date;
  finish_date: Date | null;
}

export default class Task extends Entity<EntityValue> {
  private constructor(value: EntityValue) {
    super(value);
  }

  public static create(dto: CreateTaskInputDto) {
    return new Task({
      id: dto.id,
      done: false,
      finish_date: null,
      initial_date: new Date(),
      description: dto.description,
    });
  }

  get initialDate() {
    return this.value.initial_date;
  }

  get description() {
    return this.value.description;
  }

  get id() {
    return this.value.id;
  }
}
