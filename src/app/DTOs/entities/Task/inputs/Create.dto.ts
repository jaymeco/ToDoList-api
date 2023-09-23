import EntityDto from "../../Dto";

export default interface CreateTaskInputDto extends EntityDto {
  description: string;
  id: number;
}
