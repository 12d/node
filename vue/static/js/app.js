
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var App = Vue.extend({

});
Vue.use(VueRouter);
var router = new VueRouter();

router.map({
    '/bar':{
        component: Bar
    },
    '/foo':{
        component: Foo
    }
});

router.start(App, '#app');