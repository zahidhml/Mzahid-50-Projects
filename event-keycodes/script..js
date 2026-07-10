const insert = document.getElementById('insert');

console.log('insert element:', insert);

window.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key, event.code, event.keyCode);

  insert.innerHTML = `
    <div class="key">
      ${event.key === ' ' ? 'Space' : event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>event.keyCode (deprecated)</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `;
});