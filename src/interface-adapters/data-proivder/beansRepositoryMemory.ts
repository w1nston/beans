import { Bean, createBeanFactory } from '../../application/entity/bean';
import { BeansRepository } from '../../application/data-provider/beansRepository';



export function createBeansRepositoryMemoryFactory(): BeansRepository {
  const beanFactory = createBeanFactory();
  return {
    findAll: () => [
      beanFactory.create('Bruna bönor'),
      beanFactory.create('Svarta bönor'),
      beanFactory.create('Vita bönor'),
    ],
  };
}
