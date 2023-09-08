const ctx = document.getElementById('doughnutchart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
            },
        ],
    },
    options: {
        plugins: {
            tooltip: {
                enabled: false, // <-- this option disables tooltips
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                    drawTicks: false,
                },
            },
        },
    },
});
