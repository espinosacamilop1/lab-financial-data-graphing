window.onload = () => {
    const url = `http://api.coindesk.com/v1/bpi/historical/close.json`
    axios.get(url).then((responseFromApi) => {
        console.log(responseFromApi);

        const timesSeries = responseFromApi.data.bpi;
      
        const labels = Object.keys(timesSeries);

        const prices = labels.map((label) => timesSeries[label]);
        console.log(labels, prices);


    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Bitcoin Prices",
            data: prices,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });









    })
}