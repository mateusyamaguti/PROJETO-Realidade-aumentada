
// Registrando um componente chamado "custom-box"
AFRAME.registerComponent('custom-box', {
    schema: {
    color: {type: 'string', default: 'blue'},  // Definindo uma propriedade de cor com valor padrão
    metalness:{type: 'string', default:'0.8'}
    },
    init: function () {
        // Adicionando uma caixa 3D à entidade com a cor definida
        this.el.setAttribute('geometry', {
            primitive: 'box'
        });
        this.el.setAttribute('material', {
            color: this.data.color,
            metalness: this.data.metalness
        });
    }
});