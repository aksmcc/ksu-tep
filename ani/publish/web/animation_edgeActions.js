
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){$(".ani_pic").css({"margin":"auto","position":"relative"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){Symbol_2.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Down-level'
(function(symbolName){})("Down-level");
//Edge symbol end:'Down-level'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_2");
//Edge symbol end:'Symbol_2'
})(jQuery,AdobeEdge,"EDGE-463673733");