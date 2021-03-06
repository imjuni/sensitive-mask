import { Masker as ko } from './i18n/ko/Masker';
import { IMasker } from './IMasker';

export * from './IMasker';
export * from './MASK_TYPE';

export function Masker(i18n: string = 'ko', maskChar: string = '*'): IMasker {
  if (i18n === 'ko') {
    return new ko(maskChar);
  }

  return new ko(maskChar);
}
