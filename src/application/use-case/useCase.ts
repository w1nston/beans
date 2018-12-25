interface ExecuteFunc {
  (): any;
}

export interface UseCase {
  execute: ExecuteFunc;
}
