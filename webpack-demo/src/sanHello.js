import san from 'san';
import $ from 'jquery';

var MyApp = san.defineComponent({
    template: `<p>Hello {{name}}</p>`,

    initData: function() {
        return {
            name: 'San six'
        };
    }
})

$(document).ready(function() {
    var myApp = new MyApp();
    myApp.attach(document.body);
})