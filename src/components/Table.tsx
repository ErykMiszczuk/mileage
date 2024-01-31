import type { Component } from "solid-js";

const Table: Component = () => {
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
                    <tr class="border-b daisy-border-color">
                        <th class="py-3 px-4">1</th>
                        <td class="py-3 px-4">Today</td>
                        <td class="py-3 px-4">420</td>
                        <td class="py-3 px-4">35</td>
                        <td class="py-3 px-4">12</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
