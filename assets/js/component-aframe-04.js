// Registro da componente sol (sun)
AFRAME.registerComponent('sun', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2F1024px-Map_of_the_full_sun.jpg?1540859304920' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 2 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente mercúrio (mercury)
AFRAME.registerComponent('mercury', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fmercurymap.jpg?1541102122291' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 0.5 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente vênus (venus)
AFRAME.registerComponent('venus', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fvenusmap.jpg?1541102155907' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 0.4 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente Terra (earth)
AFRAME.registerComponent('earth', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fearthmap1k.jpg?1541102064615' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 0.5 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente Marte (mars)
AFRAME.registerComponent('mars', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fmars_1k_color.jpg?1541102234577' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 0.4 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente Júpiter (jupiter)
AFRAME.registerComponent('jupiter', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fjupitermap.jpg?1541101634813' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 2.5 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente Saturno (saturn)
AFRAME.registerComponent('saturn', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fsaturnmap.jpg?1541102148468' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 1.8 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente Urano (uranus)
AFRAME.registerComponent('uranus', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Furanusmap.jpg?1541102150185' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 0.75 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});

// Registro da componente Netuno (neptune)
AFRAME.registerComponent('neptune', {
    schema: {
        src: { type: 'string', default: 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2Fneptunemap.jpg?1541102137305' }, // URL da imagem
        color: { type: 'string', default: '#FFF' }, // Adicionando cor padrão
        metalness: { type: 'number', default: 0 } // Adicionando metalness padrão
    },
    init: function () {
        const data = this.data;

        // Adicionando uma esfera 3D à entidade
        this.el.setAttribute('geometry', {
            primitive: 'sphere',
            radius: 2 // Definindo um raio para a esfera
        });

        // Definindo o material com a textura
        this.el.setAttribute('material', {
            src: data.src, // Corrigindo a atribuição da textura
            color: data.color,
            metalness: data.metalness
        });
            // Adicionando animação de rotação
            this.el.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000 // Duração da rotação em milissegundos
        });
    }
});