(() => {
        const refs = {
          openModalBtn: document.querySelector('[data-modal-open-ice]'),
          closeModalBtn: document.querySelector('[data-modal-close-ice]'),
          modal: document.querySelector('[data-modal-ice]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle('is-hidden-ice');
        }
})();