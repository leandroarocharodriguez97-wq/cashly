let currentSection = '';

function openSection(section) {
  currentSection = section;
  document.getElementById('modalTitle').innerText =
    'Agregar a ' + section.charAt(0).toUpperCase() + section.slice(1);
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function saveData() {
  const amount = document.getElementById('amount').value;
  if (!amount) return;

  const data = JSON.parse(localStorage.getItem(currentSection)) || [];
  data.push({ amount: Number(amount), date: new Date() });

  localStorage.setItem(currentSection, JSON.stringify(data));
  document.getElementById('amount').value = '';
  closeModal();
}
