Sensitive-mask
----

Sensitive information masking utility

# Install
```
npm i sensitive-mask -S
```

# Usage
```
import Masker from 'sensitive-mask';

const masker = Masker('ko'); // locale, currently only support Korean locale
const masked = masker.cellphone('010-1122-3344');

console.log(masked);
// console logged '010-****-****'
```
