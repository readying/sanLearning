import san, { DataTypes } from 'san';
import $ from 'jquery';
import './style.css';


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
        '<p>姓名:' + '<span class="text">{{name| upper}}</span></p>' +
        '<p>年龄: <span class="text">{{age | upper}}</span></p>' +
        '<p>简介: <span class="text">{{info| upper}}</span> </p>' +
        '</div>' +
        '</div>',
    initData: function() {
        return {
            name: '',
            age: 0,
            info: ''
        };
    },
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