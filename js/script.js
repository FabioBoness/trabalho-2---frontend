document.addEventListener('DOMContentLoaded', function () {
  const formContato = document.getElementById('formContato');
  const modalSucessoEl = document.getElementById('modalSucesso');

  // Envio e validação do formulário de contato
  if (formContato) {
    formContato.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!formContato.checkValidity()) {
        event.stopPropagation();
        formContato.classList.add('was-validated');
        return;
      }

      if (modalSucessoEl) {
        const modalSucesso = new bootstrap.Modal(modalSucessoEl);
        modalSucesso.show();
      }

      formContato.reset();
      formContato.classList.remove('was-validated');
    });
  }

  // Fecha o menu no celular ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-link');
  const menuCollapse = document.getElementById('menuPrincipal');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (menuCollapse && menuCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(menuCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});
