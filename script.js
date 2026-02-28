// ── Modal helpers ────────────────────────────────────────────
const backdrop = document.getElementById('modalBackdrop');
let currentModal = null;

function openModal(id) {
  if (currentModal) closeModal();
  const modal = document.getElementById('modal-' + id);
  if (!modal) return;
  backdrop.classList.add('active');
  modal.classList.add('active');
  currentModal = modal;
  document.addEventListener('keydown', onKeyDown);
}

function closeModal() {
  if (!currentModal) return;
  backdrop.classList.remove('active');
  currentModal.classList.remove('active');
  currentModal = null;
  document.removeEventListener('keydown', onKeyDown);
}

function onKeyDown(e) {
  if (e.key === 'Escape') closeModal();
}

// ── Request form submit ──────────────────────────────────────
function handleRequest(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();

  // Replace form with success message
  form.innerHTML = `
    <div class="success-msg">
      <span class="big-check">🌸</span>
      <p>Thank you, ${name}! We'll be in touch soon.</p>
    </div>
  `;

  // Auto-close after 3 seconds
  setTimeout(closeModal, 3000);
}

// ── Prevent modal content clicks from closing ────────────────
document.querySelectorAll('.modal').forEach(m => {
  m.addEventListener('click', e => e.stopPropagation());
});
