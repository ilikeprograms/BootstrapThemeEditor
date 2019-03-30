export enum VariableTypes {
  color = 'color',
  size = 'size',
  fontweight = 'fontweight'
}

export interface IVariable<T> {
  id: string;
  type: T;
  value: string;
  variable: string;
  label: string;
  component: string;
}

export type IColorType = IVariable<VariableTypes.color>;
