import { MASK_TYPE } from './MASK_TYPE';

export interface IMasker {
  fullname(value: string): string;
  firstname(value: string): string;
  lastname(value: string): string;
  cellphone(value: string): string;
  address(): string;
  mask(type: MASK_TYPE, value): string;
}
