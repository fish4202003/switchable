KISSY.use("event,gallery/switchable/1.3.1/,node", function (S, Event,Switchable) {
    var Slide = Switchable.Slide;
    S.ready(function (S) {
        Slide('#demo5', {
            contentCls : 'news-items',
            hasTriggers : false,
            effect : 'scrolly',
            easing : 'easeOutStrong',
            interval : 3,
            duration : .2
        });
    });
});
 