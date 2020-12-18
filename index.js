const table = document.querySelector("table");
const btn = document.querySelector("#load");

btn.addEventListener("click", function () {
  getData();
  table.classList.remove("hidden");
  btn.style.display = "none";
});

async function getData() {
  for (let i = 1; i <= 10; i++) {
    const res = await fetch(`https://swapi.dev/api/people/${i}`);
    if (res.ok) {
      const data = await res.json();
      const row = table.insertRow();

      const birthNameData = row.insertCell();
      birthNameData.innerHTML = data.name;

      const birthYearData = row.insertCell();
      birthYearData.innerHTML = data.birth_year;

      const heightData = row.insertCell();
      heightData.innerHTML = data.height;

      const massData = row.insertCell();
      massData.innerHTML = data.mass;
    } else {
      console.error(`Error: ${res.status}`);
    }
  }
  document.body.appendChild(table);
}
