import { listBeans } from '../../../application/use-case/listBeans';
import { createBeansRepositoryMemoryFactory } from '../../../interface-adapters/data-proivder/beansRepositoryMemory';

export const beans = {
  description: 'Fetches a list of beans.',
  resolve: () => listBeans(createBeansRepositoryMemoryFactory()).execute(),
};
