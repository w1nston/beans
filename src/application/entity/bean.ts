export interface Bean {
  name: string;
}

interface BeanFactoryCreateFunction {
  (name: string): Bean;
}

interface BeanFactory {
  create: BeanFactoryCreateFunction;
}

export function createBeanFactory(): BeanFactory {
  return {
    create: name => ({ name }),
  };
}
