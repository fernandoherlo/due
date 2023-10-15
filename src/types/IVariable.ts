import { IApp, IInstruction } from '~/src/vite-env';

export interface IVariable extends IInstruction {
  _app: IApp;
  value: any;

  start: () => Promise<void>;
  end: () => Promise<void>;
  update: (newVariable: IVariable) => Promise<void>;
}
