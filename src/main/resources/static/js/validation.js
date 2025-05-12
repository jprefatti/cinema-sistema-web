window.addEventListener('load', function() {
  function validarForm(formId, campos) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(e) {
      let valid = true;
      campos.forEach(c => {
        const value = form[c.name].value.trim();
        const errorEl = document.getElementById('erro-' + c.name);
        if (!c.validate(value)) {
          errorEl.textContent = c.message;
          valid = false;
        } else {
          errorEl.textContent = '';
        }
      });
      if (!valid) e.preventDefault();
    });
  }

  validarForm('filmeForm', [
    { name: 'titulo', validate: v => v.length >= 2, message: 'Título deve ter ao menos 2 caracteres.' },
    { name: 'sinopse', validate: v => v.length >= 10, message: 'Sinopse deve ter ao menos 10 caracteres.' },
    { name: 'genero', validate: v => v.length > 0, message: 'Gênero obrigatório.' },
    { name: 'ano', validate: v => !isNaN(v) && v >= 1900 && v <= new Date().getFullYear(), message: 'Ano inválido.' }
  ]);

  validarForm('analiseForm', [
    { name: 'comentario', validate: v => v.length >= 5, message: 'Comentário muito curto.' },
    { name: 'nota', validate: v => !isNaN(v) && v >= 1 && v <= 5, message: 'Nota deve ser entre 1 e 5.' }
  ]);
});