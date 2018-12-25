import { Bean } from '../entity/bean';

interface FindAllFunction {
  (): Bean[]
}

export interface BeansRepository {
  findAll: FindAllFunction
}
