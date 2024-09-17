const objetosInterativos = document.querySelectorAll('.interativo');
const textoObjeto = document.querySelector('#objectname');

objetosInterativos.forEach(objeto => {
  objeto.addEventListener('mouseenter', (evt) => {
    // Exibir o nome do objeto quando o cursor passa por ele
    textoObjeto.setAttribute('value', 'Nome: ' + objeto.id);
  });

  objeto.addEventListener('mouseleave', (evt) => {
    // Limpar o texto quando o cursor sair do objeto
    textoObjeto.setAttribute('value', '');
  });
});