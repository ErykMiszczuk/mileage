import LineChart from "./components/LineChart";
import Form from "./components/Form";
import Table from "./components/Table";
import RefuelingModal from "./components/RefuelingModal";
import { Component, Show, createSignal, onMount } from "solid-js";
import { init } from "./store/fuelUsageStore";
import Options from "./components/Options";
import { Portal } from "solid-js/web";

const App: Component = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const [showForm, setShowForm] = createSignal(true);

    function handleQueryChange(e: MediaQueryListEvent | MediaQueryList) {
        if (e.matches) {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    }
    mediaQuery.addEventListener("change", handleQueryChange);
    handleQueryChange(mediaQuery);

    onMount(() => {
        init();
    });

    return (
        <main class="bg-base-300 min-h-screen lg:h-screen pb-2 flex flex-col">
            <div class="flex items-center p-2">
                <span class="secondary">Mileage</span>
                <div class="flex-1" />
                <Options />
            </div>

            <div class="flex-1 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-2">
                <div class="bg-base-200 p-4 rounded-box flex justify-center">
                    <LineChart />
                </div>
                <div class="lg:col-span-2 bg-base-200 p-4 rounded-box">
                    <Table />
                </div>
                <Show when={showForm()}>
                    <div class="bg-base-200 p-4 rounded-box">
                        <Form />
                    </div>
                </Show>
            </div>

            <Show when={!showForm()}>
                <Portal mount={document.getElementById("modal-space")!}>
                    <RefuelingModal />
                </Portal>
            </Show>
            <div id="modal-space" />
        </main>
    );
};

export default App;
