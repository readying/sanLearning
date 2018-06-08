import san, { DataTypes } from 'san';
import $ from 'jquery';
// const bootstrap = require('bootstrap');

var MyApp = san.defineComponent({
    template: '<p> Hello {{name}} </p>',
    initData: function() {
        return {
            name: 'san'
        };
    }
});

// 循环遍历数据
var MyApp2 = san.defineComponent({
    template: '<ul><li s-for="item in list">{{item}}</li></ul>',
    attached: function() {
        this.data.set('list', ['san', 'er', 'ss', 'ete']);
    }
})

var MyApp3 = san.defineComponent({
    template: '' +
        '<div>' +
        '<div class="form-inline">' +
        '<input class="form-control"  type="text" value="{= name =}" placeholder="姓名(string)">' +
        '<input class="form-control" type="number" value="{= age  =}" placeholder="年龄(number)">' +
        '<input class="form-control" value="{= info =}" placeholder="简介(string)">' +
        '</div>' +
        '<div>' +
        '信息: ' + '<button class="btn btn-default" on-click="resetData()">移除信息</button>' + '<br/>' +
        '姓名:' + '<span class="flex-1">{{name| upper}}!</span>' +
        '年龄: {{age | upper}}!' +
        '简介: {{info| upper}}!' +
        '</div>' +
        '</div>',
    resetData: function() {
        this.data.set('name', '');
        this.data.set('age', '');
        this.data.set('info', '');
    },
    dataTypes: {
        name: DataTypes.string,
        age: DataTypes.number,
        info: DataTypes.string
    }
})


$(document).ready(function() {
    var myApp = new MyApp3();
    myApp.attach(document.body);
})