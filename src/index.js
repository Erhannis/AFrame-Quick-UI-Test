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
require("aframe-quick-ui");
