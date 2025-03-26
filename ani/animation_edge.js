/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['微軟正黑體']='';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            type:'text',
            rect:['1056px','300px','auto','auto','auto','auto'],
            text:"崑",
            font:['微軟正黑體',50,"rgba(0,0,0,1)","600","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "min-width", '1024px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '100%']
         ],
         "${_Text}": [
            ["style", "top", '300px'],
            ["transform", "skewX", '-10deg'],
            ["style", "font-family", '微軟正黑體'],
            ["style", "font-weight", '600'],
            ["style", "left", '1056px'],
            ["style", "font-size", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid10", tween: [ "style", "${_Text}", "left", '196px', { fromValue: '1056px'}], position: 0, duration: 431 },
            { id: "eid5", tween: [ "transform", "${_Text}", "skewX", '10deg', { fromValue: '-10deg'}], position: 0, duration: 431 },
            { id: "eid7", tween: [ "transform", "${_Text}", "skewX", '0deg', { fromValue: '10deg'}], position: 431, duration: 69 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-463673733");
