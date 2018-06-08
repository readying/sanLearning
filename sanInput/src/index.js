import { router } from 'san-router';
import App from './App.san';

router.add({
    rule: '/',
    Component: App,
    target: '#app'
})

router.start();