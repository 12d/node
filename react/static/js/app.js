require(['Vue','Router'], function(Vue, Router, Index){
    var Foo = Vue.extend({
        template: '<p>This is foo!</p>'
    })
    Vue.component('vue-foo', Foo);
    var Bar = Vue.extend({
        template: '<p>This is bar!<vue-foo/></p>'
    });
    var App = Vue.extend({
    });
    Vue.use(Router);
    var router = new Router();

    router.map({
        '/bar':{
            component: Bar
        },
        '/foo':{
            component: Foo
        },
        '/index':{
            component: loadingView('views/index')

        }
    });

    router.start(App, '#app');
window.router = router;
    function loadingView(viewPath){

        return function(resolve,reject){
            require([viewPath], function(View){
                resolve(View);

            })
            resolve(Bar)
        }
    }

})
