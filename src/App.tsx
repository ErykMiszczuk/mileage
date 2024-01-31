import LineChart from "./components/LineChart";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
    return (
        <main class="bg-base-300 h-screen p-2 flex flex-col">
            <span class="secondary">Mileage</span>

            <div class="flex-1 grid grid-cols-4 gap-2">
                <div class="bg-base-200 p-4 rounded-box">
                    <Form />
                </div>
                <div class="col-span-2 bg-base-200 p-4 rounded-box">
                    <Table />
                </div>
                <div class="bg-base-200 p-4 rounded-box">
                    <LineChart />
                </div>
            </div>
        </main>
    );
}

export default App;
