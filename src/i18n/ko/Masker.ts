import { MASK_TYPE } from '../../MASK_TYPE';
import { IMasker } from '../../IMasker';

export class Masker implements IMasker {
  constructor(
    public readonly maskChar: string = '*'
  ) {}

  fullname(value: string): string {
    return value.replace(/(.)(.)(.+)/, `$1${this.maskChar}$3`);
  }

  firstname(value: string): string {
    return value.replace(/(.)(.+)/, `${this.maskChar}$2`)
  }

  lastname(value: string): string {
    return value;
  }

  cellphone(value: string): string {
    const indexOf = value.indexOf('-');

    if (indexOf < 0 && value.length <= 10) {
      return value.replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, `$1${this.maskChar.repeat(4)}$3`)
    } else if (indexOf < 0 && value.length <= 11) {
      return value.replace(/([0-9]{3})([0-9]{4})([0-9]{4})/, `$1${this.maskChar.repeat(4)}$3`)
    } else if (value.length <= 12) {
      return value.replace(/([0-9]{3})([-|])([0-9]{3})([-|])([0-9]{4})/, `$1-${this.maskChar.repeat(4)}-$5`);
    } else if (value.length <= 13) {
      return value.replace(/([0-9]{3})([-|])([0-9]{4})([-|])([0-9]{4})/, `$1-${this.maskChar.repeat(4)}-$5`);
    }

    return '';
  }

  address(): string {
    return '';
  }

  mask(type: MASK_TYPE, value): string {
    if (type === MASK_TYPE.FULL_NAME) {
      return this.fullname(value);
    } else if (type === MASK_TYPE.LAST_NAME) {
      return this.lastname(value);
    } else if (type === MASK_TYPE.FIRST_NAME) {
      return this.firstname(value);
    } else if (type === MASK_TYPE.CELL_PHONE) {
      return this.cellphone(value);
    } else if (type === MASK_TYPE.ADDRESS) {
      return this.address();
    }

    return '';
  }
}
