export default abstract class Entity<EntityValue, Relations = any> {
  protected releatedEntities: Relations | null = null;

  constructor(protected readonly value: EntityValue) { }

  public hasValue() {
    return this.value !== null && this.value !== undefined;
  }

  public toJson(): EntityValue {
    return this.value;
  }

  public setRelation(relation: keyof Relations, value: Entity<any, any>) {
    this.releatedEntities = {
      [relation]: value,
    } as any;
  }

  public get relations(): Relations {
    if(!this.releatedEntities) {
      throw new Error('Set Relations first before use!');
    }

    return this.releatedEntities;
  }
}
