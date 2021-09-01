window.onload = () => {
    let myChart;
    const url = `http://api.coindesk.com/v1/bpi/historical/close.json`
    axios.get(url).then((responseFromApi) => {

        const timesSeries = responseFromApi.data.bpi;
      
        const labels = Object.keys(timesSeries);

        const prices = labels.map((label) => timesSeries[label]);

        document.getElementById("min-value").innerHTML = Math.min(...prices);
        
        document.getElementById('max-value').innerHTML = Math.max(...prices);
       
        
    const ctx = document.getElementById("myChart").getContext("2d");
    myChart = new Chart(ctx, {
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


    
    document.getElementById('submit-dates').addEventListener('click', () => {
        const fromDate = document.getElementById('start-date').value;
        const toDate = document.getElementById('end-date').value;
    
        const currency = 'BTC'
        axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}`)
        .then(dataFromApi => {
            console.log(dataFromApi)

            const bpi = dataFromApi.data.bpi;
          
            const labels = Object.keys(bpi);
    
            const prices = labels.map((label) => bpi[label]);
    
            document.getElementById("min-value").innerHTML = Math.min(...prices);
        
            document.getElementById('max-value').innerHTML = Math.max(...prices);
    
            const ctx = document.getElementById("myChart").getContext("2d");
          
            myChart.destroy();
            myChart = new Chart(ctx, {
                
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
        
    })

    document.getElementById("currency").addEventListener('change', () =>{
        const currencyValue = document.getElementById("currency").value;
        console.log(currencyValue)
       axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?currency=${currencyValue}`)
       .then((dataFromApi) =>{
           console.log(dataFromApi)

           const bpi = dataFromApi.data.bpi;
          
            const labels = Object.keys(bpi);
    
            const prices = labels.map((label) => bpi[label]);
    
            document.getElementById("min-value").innerHTML = Math.min(...prices);
        
            document.getElementById('max-value').innerHTML = Math.max(...prices);
    
            const ctx = document.getElementById("myChart").getContext("2d");
          
            myChart.destroy();
            myChart = new Chart(ctx, {
                
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
    })

}



