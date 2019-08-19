var Tutor=require('./Tutorial.js');
exports.NodeTutorial = function () {
    return function pTutor () {
     var PTutor=Tutor
     PTutor.tutorial();
   }
 }
