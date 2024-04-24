import { For, onMount, type Component } from "solid-js";
import { state } from "../store/fuelUsageStore";

const Table: Component = () => {
    onMount(() => console.log("Table mounted: ", state));
    return (
        <div class="flex justify-center">
            <table class="min-w-full shadow-md">
                <thead>
                    <tr class="border-b daisy-border-color">
                        <th class="py-3 px-4 text-left" />
                        <th class="py-3 px-4 text-left">Date</th>
                        <th class="py-3 px-4 text-left">Distance (km)</th>
                        <th class="py-3 px-4 text-left">Fuel (litre)</th>
                        <th class="py-3 px-4 text-left">
                            Distance per litre (km/l)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <For each={state.data}>
                        {(item, index) => (
                            <tr class="border-b daisy-border-color">
                                <th class="py-3 px-4">{index() + 1}</th>
                                <td class="py-3 px-4">{item.refuelingDate}</td>
                                <td class="py-3 px-4">{item.distance}</td>
                                <td class="py-3 px-4">{item.fuelUsed}</td>
                                <td class="py-3 px-4">
                                    {(item.distance / item.fuelUsed).toFixed(2)}
                                </td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
