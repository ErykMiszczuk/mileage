import { createEffect, createSignal } from "solid-js";
import type { Component } from "solid-js";

const Form: Component = () => {
    const [distance, setDistance] = createSignal(42);
    const [fuelUsed, setFuelUsed] = createSignal(66);
    const today = new Date().toISOString().slice(0, 16);
    const [refillDate, setRefillDate] = createSignal(today);

    const addFuelRecord = (e: SubmitEvent) => {
        e.preventDefault();

        console.log(e);
    };

    createEffect(() => console.log(refillDate()));

    return (
        <form
            class="flex-col flex-items-stretch m-1 p-1"
            onSubmit={addFuelRecord}
        >
            <input
                type="number"
                name="distance"
                class="block"
                value={distance()}
                onInput={(e) => setDistance(e.currentTargetValue)}
            />
            <input
                type="number"
                name="fuelUsed"
                class="block"
                value={fuelUsed()}
                onInput={(e) => setFuelUsed(e.currentTargetValue)}
            />
            <input
                type="datetime-local"
                name="refillDate"
                class="block"
                value={refillDate()}
                onInput={(e) => setRefillDate(e.currentTargetValue)}
            />
            <button type="submit"> Submit </button>
        </form>
    );
};

export default Form;
