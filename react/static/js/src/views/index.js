/**
 * Created by chen on 1/15/16.
 */
define(['Vue','text!indexTpl'], function(Vue, html){
    var View = Vue.extend({
        template: html
    });

    return View;
})