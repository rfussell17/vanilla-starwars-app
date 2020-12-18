const table = document.querySelector("table");
const btn = document.querySelector("#load");

btn.addEventListener("click", function () {
  getData();
  table.classList.remove("hidden");
  btn.style.display = "none";
});

async function getData() {
  for (let i = 1; i <= 10; i++) {
    await fetch(`https://swapi.dev/api/people/${i}`)
      .then((res) => res.json())
      .then((json) => {
        const row = table.insertRow();

        const birthNameData = row.insertCell();
        birthNameData.innerHTML = json.name;

        const birthYearData = row.insertCell();
        birthYearData.innerHTML = json.birth_year;

        const heightData = row.insertCell();
        heightData.innerHTML = json.height;

        const massData = row.insertCell();
        massData.innerHTML = json.mass;
      });

    document.body.appendChild(table);
  }
}
