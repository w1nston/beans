import { BeansRepository } from '../data-provider/beansRepository';
import { UseCase } from './useCase';

export function listBeans(repository: BeansRepository): UseCase {
  return {
    execute: () => repository.findAll(),
  };
}
