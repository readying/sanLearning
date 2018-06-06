import _ from 'lodash';
import './style.css';
import Icon from './cx.png';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], '*******');
    element.classList.add('hello');

    // add png
    var myIcon = new Image();
    myIcon.scr = Icon;

    return element;
}

document.body.appendChild(component());