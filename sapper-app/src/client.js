import '../src/common/style/water.css';
import '../src/common/style/global.css';

import * as sapper from '@sapper/app';

sapper.start({
    target: document.querySelector('#sapper'),
});
