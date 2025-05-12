// 1. Fonction pour créer et afficher la modal
function createPillModal() {
  if (document.getElementById('pill-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'pill-modal';
  modal.innerHTML = `
    <div class="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center">
      <div class="bg-black border border-green-500 rounded-lg p-8 max-w-xl w-full text-center relative">
        <button id="close-pill-modal" class="absolute top-4 right-4 text-green-400 hover:text-green-300">✕</button>
        <h2 class="text-3xl text-green-400 mb-6">Choisissez Votre Voie</h2>
        <div class="flex justify-center space-x-8 mb-6">
          <button id="blue-pill" class="text-blue-500 hover:text-blue-400">
            <!-- SVG Blue Pill -->
            <p>Pilule Bleue</p>
          </button>
          <button id="red-pill" class="text-red-500 hover:text-red-400">
            <!-- SVG Red Pill -->
            <p>Pilule Rouge</p>
          </button>
        </div>
        <p class="text-green-400">Révélez la vérité ou restez dans l'ignorance...</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // 2. Écouteurs sur les 3 boutons de la modal
  document.getElementById('blue-pill').onclick = () => {
    alert("Vous choisissez l'illusion…");
    modal.remove();
  };
  document.getElementById('red-pill').onclick = () => {
    alert("Bienvenue dans la réalité !");
    modal.remove();
  };
  document.getElementById('close-pill-modal').onclick = () => {
    modal.remove();
  };
}

// 3. Au chargement, branche l’événement sur ton bouton statique
window.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('[data-pill-trigger]');
  if (trigger) {
    trigger.addEventListener('click', createPillModal);
  }
});
