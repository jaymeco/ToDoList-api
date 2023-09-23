import RespositoryDto from "../../Dto";

export default interface CreateTaskInputDto extends RespositoryDto {
  description: string;
}
