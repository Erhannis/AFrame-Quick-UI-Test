/* // Do like this to replace controller models:
window.CONTROLLER_MODELS = {};
window.CONTROLLER_MODELS["vive-controls"] = {type: "json-model", data: {src: 'assets/models/controller_vive.json'}};

// I'm having trouble with model files, so if you want oculus controllers, include the following code here and copy in the model files
window.CONTROLLER_MODELS["oculus-touch-controls"] = {
  type: "obj-model",
  hands: {
      left: {obj: "assets/models/oculus-left-controller.obj", mtl: "https://cdn.aframe.io/controllers/oculus/oculus-touch-controller-left.mtl"},
      right: {obj: "assets/models/oculus-right-controller.obj", mtl: "https://cdn.aframe.io/controllers/oculus/oculus-touch-controller-right.mtl"}
  }
};
*/
/* // To set the color scheme, provide window.UI_COLORS with any of the following overrides:
window.UI_COLORS = {
         normal:"#909090",
          hover:"#88CCAA",
        pressed:"#DDFFDD",
       selected:"#DDAAAA", //TODO Selected isn't currently used for anything, oops
       override:"#88BBBB", // Override takes precendence over the other colors, when present in an object's `materials` list.  I use it for the tab buttons.
       btnColor:"#909090", // Note that btnColor usually overrides `normal`, since most visible things are buttons
  btnLabelColor:"#000000",
      textColor:"#FFFFFF"
};
*/

require("aframe-quick-ui");
