document.getElementById('btn').addEventListener('click', async () => {
  const response = await fetch('/api/message');
  const data = await response.json();
  alert(data.message);
});