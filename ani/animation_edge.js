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
            id:'alview',
            type:'image',
            rect:['-28.1%','0px','1024px','400px','auto','auto'],
            clip:['rect(0px 1024pxpx 400pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"alview.jpg",'0px','0px','1024px','400px'],
            userClass:"ani_pic"
         },
         {
            id:'Text',
            type:'text',
            rect:['0px','0px','124px','351px','auto','auto'],
            text:"教學",
            align:"left",
            font:['微軟正黑體',100,"rgba(255,255,255,1)","600","none","normal"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['100px','14px','auto','auto','auto','auto'],
            clip:['rect(0px 204pxpx 63pxpx 0px)'],
            text:"卓越計畫",
            align:"left",
            font:['微軟正黑體',50,"rgba(255,255,255,1)","600","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '-292px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '243px'],
            ["style", "font-size", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '124px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "min-width", '1024px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "max-width", 'none'],
            ["style", "width", '100%']
         ],
         "${_alview}": [
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "width", '1024px'],
            ["style", "top", '0px'],
            ["style", "background-size", [1897,400], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '400px'],
            ["subproperty", "filter.blur", '20px'],
            ["style", "background-position", [-800,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,1024,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Text2}": [
            ["style", "top", '14px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '-110px'],
            ["style", "clip", [0,204,63,204], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: true,
         timeline: [
            { id: "eid151", tween: [ "style", "${_Text2}", "clip", [0,204,63,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,204,63,204]}], position: 2000, duration: 500 },
            { id: "eid107", tween: [ "style", "${_alview}", "background-size", [1897,400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1897,400]}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_alview}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid60", tween: [ "style", "${_alview}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 3000 },
            { id: "eid98", tween: [ "style", "${_alview}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-800,0]}], position: 0, duration: 15000 },
            { id: "eid149", tween: [ "style", "${_Text2}", "left", '100px', { fromValue: '-110px'}], position: 2000, duration: 500 },
            { id: "eid55", tween: [ "subproperty", "${_alview}", "filter.blur", '0px', { fromValue: '20px'}], position: 0, duration: 1500 },
            { id: "eid114", tween: [ "subproperty", "${_alview}", "filter.blur", '20px', { fromValue: '0.000000px'}], position: 12000, duration: 3000 },
            { id: "eid145", tween: [ "style", "${_Text}", "top", '0px', { fromValue: '-292px'}], position: 1500, duration: 500 }         ]
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
