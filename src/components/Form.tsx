import { createSignal } from "solid-js";
import type { Component } from "solid-js";
import {
    state,
    createRefueling,
    withSaveToLocalstore,
} from "./../store/fuelUsageStore";

const Form: Component = () => {
    const [distance, setDistance] = createSignal(0);
    const [fuelUsed, setFuelUsed] = createSignal(0);
    const today = new Date().toISOString().slice(0, 16);
    const [refillDate, setRefillDate] = createSignal(today);

    const addFuelRecord = (e: SubmitEvent) => {
        e.preventDefault();
        withSaveToLocalstore(() =>
            createRefueling(distance(), fuelUsed(), refillDate()),
        );
        console.info(state);
    };

    return (
        <form class="flex-col flex-items-stretch" onSubmit={addFuelRecord}>
            <label class="form-control w-full">
                <div class="label">Distance</div>
                <input
                    type="number"
                    name="distance"
                    class="input input-bordered input-neutral"
                    value={distance()}
                    onInput={(e) => setDistance(parseFloat(e.target.value))}
                />
            </label>
            <label class="form-control w-full">
                <div class="label">Fuel</div>
                <input
                    type="number"
                    name="fuelUsed"
                    class="input input-bordered input-neutral"
                    value={fuelUsed()}
                    onInput={(e) => setFuelUsed(parseFloat(e.target.value))}
                />
            </label>
            <label class="form-control w-full">
                <div class="label">Date</div>
                <input
                    type="datetime-local"
                    name="refillDate"
                    class="input input-bordered input-neutral"
                    value={refillDate()}
                    onInput={(e) => setRefillDate(e.target.value)}
                />
            </label>
            <div class="w-full pt-4 flex justify-center">
                <button
                    type="submit"
                    class="btn btn-outline btn-wide btn-primary"
                >
                    Add refueling
                </button>
            </div>
        </form>
    );
};

export default Form;
