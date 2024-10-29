// let boxEl = document.querySelector('a-box');
//     boxEl.addEventListener('mouseenter', function () {
//     boxEl.setAttribute('scale', {x: 4, y: 4, z: 4});
// });

AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
      to: {type: 'vec3', default: '4 4 4'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;
      this.el.addEventListener('mouseenter', function () {
        el.object3D.scale.copy(data.to);
      });
    }
  });