// chart 1

var ctx = document.getElementById("chart-bars").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad",],
    datasets: [
      {
        label: "Income",
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 0,
        borderSkipped: false,
        backgroundColor: "#FB7D5B",
        data: [100, 40, 60, 80, 40,20,80,],
        maxBarThickness: 15,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: true,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 400,
          beginAtZero: true,
          padding: 15,
          font: {
            size: 14,
            family: "Open Sans",
            style: "normal",
            lineHeight: 5,
          },
          color: "grey",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: true,
        },
      },
    },
  },
});

// end chart 1
