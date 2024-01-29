import Form from "./components/Form";

function App() {
    return (
        <main class="bg-base-300 h-screen p-2 flex flex-col">
            <span class="secondary">Mileage</span>

            <div class="flex-1 grid grid-cols-4 gap-2">
                <div class="bg-base-200 p-4 rounded-box">
                    <Form />
                </div>
                <div class="col-span-2 bg-base-200 p-4 rounded-box">
                    <div class="flex justify-center">
                        <table class="min-w-full shadow-md">
                            <thead>
                                <tr class="border-b daisy-border-color">
                                    <th class="py-3 px-4 text-left" />
                                    <th class="py-3 px-4 text-left">Date</th>
                                    <th class="py-3 px-4 text-left">
                                        Distance (km)
                                    </th>
                                    <th class="py-3 px-4 text-left">
                                        Fuel (litre)
                                    </th>
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
                </div>
                <div class="bg-base-200 p-4 rounded-box">
                    Imagine chart here
                </div>
            </div>
        </main>
    );
}

export default App;
