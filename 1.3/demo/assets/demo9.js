KISSY.use("dom,event,anim,gallery/switchable/1.3/,node", function(S, DOM, Event, Anim, Switchable) {
    //通过DOM元素新建手风琴
    Switchable.Accordion('#accordion2', {
        'triggerCls': 'trigger',
        'panelCls': 'hesper-cats-list',
        'multiple': 'true',
        'activeTriggerCls': 'collapse'
    });
});