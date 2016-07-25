import $ from 'jquery';
import _ from 'lodash';
import SPOTIPPOS from './SPOTIPPOS';

import '../sass/app.scss';

$('.spinner').delay(1000).fadeTo(300, 0, function(){$(this).remove()});

const app = new SPOTIPPOS();
