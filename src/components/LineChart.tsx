import { createEffect, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";
import Chart from "chart.js/auto";
import { state } from "../store/fuelUsageStore";

const LineChart: Component = () => {
    // biome-ignore lint: element ref
    let canvas: HTMLCanvasElement | undefined = undefined;

    const [chart, setChart] = createSignal();
    const initialLabels = state.data.map((_, idx) => idx + 1);
    const initialValues = state.data.map((el) =>
        (el.distance / el.fuelUsed).toFixed(2),
    );

    createEffect(() => {
        if (chart()) {
            const labels = state.data.map((_, idx) => idx + 1);
            const values = state.data.map((el) =>
                (el.distance / el.fuelUsed).toFixed(2),
            );

            console.log("Chart instance ref: ", chart);
            console.log("Chart instance ref: ", chart());
            console.log("Values: ", values);
            console.log("Labels: ", labels);
            // biome-ignore lint: find proper type
            (chart() as any).data.labels = labels;
            // biome-ignore lint: find proper type
            (chart() as any).data.datasets[0].data = values;
            // biome-ignore lint: find proper type
            (chart() as any).update();
        }
    });

    onMount(() => {
        const data = {
            labels: initialLabels,
            datasets: [
                {
                    label: "Dataset 1",
                    data: initialValues,
                    borderColor: "rgb(54, 162, 235)",
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                },
            ],
        };

        const chart = new Chart(canvas!, {
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
        setChart(chart);
    });

    return (
        <>
            <canvas ref={canvas} width="256" height="256" />
        </>
    );
};

export default LineChart;
