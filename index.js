
const table = document.querySelector('table')
  for(let i = 1; i <= 50; i++){

  const url = fetch(`https://swapi.dev/api/people/${i}`)
  .then( res => res.json())
  .then( json => {

  

    const row = table.insertRow()

    const birthNameData = row.insertCell()
    birthNameData.innerHTML = json.name

    const birthYearData = row.insertCell()
    birthYearData.innerHTML = json.birth_year


    const heightData =  row.insertCell()
    heightData.innerHTML = json.height


    const massData =  row.insertCell()
    massData.innerHTML = json.mass
  })



    document.body.appendChild(table) 
  
}
