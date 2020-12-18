

fetch('https://swapi.dev/api/people/1')
  .then( res => res.json())
  .then( json => {

  const table = document.querySelector('table')

  // const birthNameHeader = document.getElementById('name')
  // const birthYearHeader = document.getElementById('birthYear')
  // const heightHeader = document.getElementById('height')
  // const massHeader = document.getElementById('mass')


  const row = table.insertRow()

    const birthNameData = row.insertCell()
    birthNameData.innerHTML = json.name

    const birthYearData = row.insertCell()
    birthYearData.innerHTML = json.birth_year


    const heightData =  row.insertCell()
    heightData.innerHTML = json.height


    const massData =  row.insertCell()
    massData.innerHTML = json.mass

    document.body.appendChild(table) 
  


  console.log(table)
})





//----------------------------------------------------------------

// fetch('https://swapi.dev/api/people/1')
//   .then( res => res.json())
//   .then( json => {

//   const table = document.createElement('table') 


//   const nameHeader = table.insertRow(0)
//   const birthHeader = table.insertRow(0)
//   const heightHeader = table.insertRow(0)
//   const massHeader = table.insertRow(0)

//   nameHeader.innerHTML = "Name";
//   birthHeader.innerHTML = "Birth Year";
//   heightHeader.innerHTML = "Height";
//   massHeader.innerHTML = "Mass";

//   const birthNameData = nameHeader.insertCell(0)
//   birthNameData.innerHTML = json.name

//   const birthYearData = birthHeader.insertCell(0)
//   birthYearData.innerHTML = json.birth_year

//   const heightData = heightHeader.insertCell(0)
//   heightData.innerHTML = json.height

//   const massData = massHeader.insertCell(0)
//   massData.innerHTML = json.mass


//  document.body.appendChild(table)
  


//   console.log(table)
// })
//------------------------------------------------


    // const personRow = document.createElement('tr')
    //    const birthNameRow = document.createElement('tr')
    //    const birthYearRow = document.createElement('tr')
    //    const heightRow = document.createElement('tr')
    //    const massRow = document.createElement('tr')



    //    personRow.appendChild(birthNameData, birthYearData, heightData, massData)

    //    birthNameRow.appendChild(birthNameData)
    //    birthYearRow.appendChild(birthYearData)
    //   heightRow.appendChild(heightData)
    //    massRow.appendChild(massData)

    //    birthNameData.innerHTML = json.name
    //    birthYearData.innerHTML = json.birth_year
    //    heightData.innerHTML = json.height
    //    massData.innerHTML = json.mass

    //    birthName.appendChild(birthNameRow)
    //    birthYear.appendChild(birthYearRow)
    //    height.appendChild(heightRow)
    //    mass.appendChild(massRow)





// const getPerson = async (namesList) => {
//   for(result of namesList){
//       const tr = document.createElement('td')
//       const td = document.createElement('td')
//       tr.appendChild(td)
//       table.appendChild(tr) 
//       td.innerHTML = result.data
    
//       console.log(res.data)
//     }
//   }

  // for(let i = 0; i <= 20; i++){
  //     const birthName = await fetch(namesList)
  //     const birthNameJson = await birthName.json()
  //     const nameData = birthNameJson.name;

  // const tr = document.createElement('td')
  // const td = document.createElement('td')
  // tr.appendChild(td)
  // table.appendChild(tr) 
  // td.innerHTML = nameData[i]
    
  //     console.log(nameData)
  //   }
  // }




// const secondResponse = await fetch(userApi)
// const secondUserJson = await secondResponse.json()
// const secondUser = secondUserJson.results[0].name.first

