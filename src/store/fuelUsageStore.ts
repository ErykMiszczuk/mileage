import { createStore, produce, unwrap } from "solid-js/store";
import { toHashString } from "../helpers/hash";
import localforage from "localforage";

interface RefuelingRecord {
    id: string;
    distance: number;
    fuelUsed: number;
    refuelingDate: string;
}

interface RefuelingStore {
    data: RefuelingRecord[];
}

const [state, setState] = createStore<RefuelingStore>({
    data: [],
});

function createRefueling(
    distance: number,
    fuelUsed: number,
    refuelingDate: string,
) {
    setState(
        produce((s) => {
            const id = toHashString(distance, fuelUsed, refuelingDate);
            s.data.push({ distance, fuelUsed, refuelingDate, id });
        }),
    );
}

// biome-ignore lint: higher order function
async function withSaveToLocalstore<F extends (...args: any[]) => any>(
    func: F,
) {
    func();

    try {
        await localforage.setItem("refuelingRecords", unwrap(state.data));
    } catch (e) {
        console.error(e);
    }
}

async function init() {
    let res: RefuelingRecord[];
    try {
        const data = await localforage.getItem("refuelingRecords");
        console.info("Init data", data);
        if (data !== null && data !== undefined) res = data;
    } catch (e) {
        console.error(e);
    }

    console.log(res);
}

function exportToCSV() {
    let res = "id,distance,fuel_used,refueling_date\n";
    console.log("Getting data from store", state.data);
    for (const record of unwrap(state.data)) {
        console.log("Record", record);
        res += `"${record.id}",`;
        res += `"${record.distance}",`;
        res += `"${record.fuelUsed}",`;
        res += `"${record.refuelingDate}"`;
        res += "\n";
    }
    return res;
}

function importFromCSV(doc: string) {
    const splitDoc = doc.split("\n");
    for (const line of splitDoc) {
        const [_, rawDistance, rawFuelUsed, refuelingDate] = line.split(",");
        createRefueling(
            parseFloat(rawDistance),
            parseFloat(rawFuelUsed),
            refuelingDate,
        );
    }
}

export {
    state,
    init,
    createRefueling,
    exportToCSV,
    importFromCSV,
    withSaveToLocalstore,
};
