const ctx = document.getElementById('myChart')
const options = { method: 'GET' }
const euro = []
const libra = []
const dolar = []
const canadense = []

function carregarGrafico(){
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
      datasets: [
        {
          label: 'Euro',
          data: euro,
          fill: false,
          borderColor: 'rgb(35, 122, 92)',
          backgroundColor: 'rgb(35, 122, 92)',
          tension: 0,
        },
        {
          label: 'Dolar',
          data: dolar,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)',
          tension: 0,
        },
        {
          label: 'Dolar Canadense',
          data: canadense,
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
          tension: 0,
        },
        {
          label: 'Libra',
          data: libra,
          fill: false,
          borderColor: "midnightblue",
          backgroundColor: "midnightblue",
          tension: 0,
        },
      ],
    },
  })
  
}

window.addEventListener('load', loopDados())

async function loopDados() {
  let index = 1
  while (index <= 12) {
    await buscarDados(index)

    index++
  }
  carregarGrafico()
}

async function buscarDados(index) {
  await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-${index
      .toString()
      .padStart(2, '0')}-02/currencies/eur/brl.json`,
    options,
  )
    .then((response) => response.json())
    .then((response) => euro.push(response.brl))
    .catch((err) => console.error(err))

    await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-${index
        .toString()
        .padStart(2, '0')}-02/currencies/cad/brl.json`,
      options,
    )
      .then((response) => response.json())
      .then((response) => canadense.push(response.brl))
      .catch((err) => console.error(err))

      await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-${index
          .toString()
          .padStart(2, '0')}-02/currencies/gbp/brl.json`,
        options,
      )
        .then((response) => response.json())
        .then((response) => libra.push(response.brl))
        .catch((err) => console.error(err))

        await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-${index
            .toString()
            .padStart(2, '0')}-02/currencies/usd/brl.json`,
          options,
        )
          .then((response) => response.json())
          .then((response) => dolar.push(response.brl))
          .catch((err) => console.error(err))
}

