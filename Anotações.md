### Entity-Component-System
#### Extensibility
Prévia estrutural para se escrever um componente:
```
AFRAME.registerComponent('foo', {
  schema: {
    bar: {type: 'number'},
    baz: {type: 'string'}
  },

  init: function () {
    // Do something when component first attached.
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something when the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});
```

Exemplo de base de projeto para criar componente levando em conta o ECS
```
index.html 
componentes/ 
  ball.js 
  collidable.js 
  grabbable.js 
  enemy.js 
  scoreboard.js 
  throwable.js
```

#### Usando o gerenciador de arquivos do sistema
Ao invês de colocar uma imagem ou textura diramente em uma entidade ou tipo primitivo, o correto para melhor desempenho é criar uma tag asset e incluir nela a tag ima que após isso será chamada para inclusão na entidade. Exemplo:<br>
```
<!-- Criação de assets para reutilização futura e gerenciamento de arquivos -->
<a-assets>
      <img id="boxTexture" src="/assets/icons/mYmmbrp.jpeg"></img>
      <img id="skyTexture" src="/assets/icons/sechelt.jpeg"></img>
      <img id="groundTexture" src="/assets/icons/floor.jpg"></img>
      <!-- Som ao iniciar a cena -->
      <!-- <audio src="/assets/audio/backgroundnoise.wav" autoplay preload=""></audio> -->
</a-assets>
```

### Getting Entities by Querying and Traversing
