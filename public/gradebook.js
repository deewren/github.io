async function fetchGradeData() {
  const res = await fetch('/api/grades');
  return await res.json();
}

function populateGradebook(data) {
  const tbody = document.querySelector('#gradeTable tbody');
  tbody.innerHTML = '';
  data.forEach(r => {
    const tr = document.createElement('tr');
    [r.student, r.assignment, r.score].forEach(text => {
      const td = document.createElement('td');
      td.textContent = text;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchGradeData();
  populateGradebook(data);
});
