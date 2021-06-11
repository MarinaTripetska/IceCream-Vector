(() => {
        const refs = {
          openModalBtn: document.querySelector('[data-modal-open-shakes]'),
          closeModalBtn: document.querySelector('[data-modal-close-shakes]'),
          modal: document.querySelector('[data-modal-shakes]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle('is-hidden-shakes');
        }
})();