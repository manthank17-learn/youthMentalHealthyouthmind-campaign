document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});

// existing year / nav toggle code should remain above this
document.addEventListener('DOMContentLoaded', function(){
  // make sure previous init code (year, nav toggle) stays
  // ---- New interactive cards logic ----
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('cardModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.querySelector('.modal-close');

  function openModal(title, desc) {
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
  }

  cards.forEach(card=>{
    card.addEventListener('click', ()=> {
      const title = card.getAttribute('data-title') || 'Details';
      const desc = card.getAttribute('data-desc') || '';
      openModal(title, desc);
    });
  });

  modalClose && modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{
    if (e.target === modal) closeModal();
  });
});
