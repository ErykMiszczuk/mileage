import { type Component, onMount } from "solid-js";
import Chart from "chart.js/auto";

const LineChart: Component = () => {
    // biome-ignore lint: element ref
    let canvas: HTMLCanvasElement | undefined = undefined;

    const labels = ["first", "second", "third"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [10, 17, 42],
                borderColor: "rgb(54, 162, 235)",
                backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
        ],
    };

    onMount(() => {
        new Chart(canvas!, {
            type: "line",
            data: data,
            options: {
                scales: {
                    y: {
                        ticks: {
                            color: "rgb(200, 203, 208)",
                        },
                        grid: {
                            color: "rgba(200, 203, 208, 0.2)",
                            tickColor: "rgba(200, 203, 208, 0.2)",
                        },
                    },
                    x: {
                        ticks: {
                            color: "rgb(200, 203, 208)",
                        },
                        grid: {
                            color: "rgba(200, 203, 208, 0.2)",
                            tickColor: "rgba(200, 203, 208, 0.2)",
                        },
                    },
                },
                responsive: true,
                color: "rgba(200, 203, 208, 0.2)",
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            color: "rgb(200, 203, 208)",
                        },
                    },
                    title: {
                        display: true,
                        text: "Chart.js Line Chart",
                        color: "rgb(200, 203, 208)",
                    },
                },
            },
        });
    });

    return (
        <>
            <canvas ref={canvas} width="256" height="256" />
        </>
    );
};

export default LineChart;
