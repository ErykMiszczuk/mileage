import { createStore, produce } from "solid-js/store";

interface RefuelingRecord {
    distance: number;
    fuelUsed: number;
    refuelingDate: string;
}

interface RefuelingStore {
    data: RefuelingRecord[];
}
// interface RefuelingStore {
//     data: RefuelingRecord[];
//     createRefueling: (distance: number, fuel: number, date: Date) => void;
//     deleteRefueling: () => void;
//     updateRefueling: () => void;
//     importCSV: () => void;
//     exportCSV: () => void;
// }

// const useRefuelingDataStore = createWithSignal<RefuelingStore>(set => ({
//     data: [],
//     createRefueling: (distance: number, fuelUsed: number, refuelingDate: Date) => {
//         const refuel: RefuelingRecord = {
//             distance,
//             fuelUsed,
//             refuelingDate
//         }
//         set(state => ({ data: state.data.push(refuel)}))
//     },
//     deleteRefueling: () => {},
//     updateRefueling: () => {},
//     exportCSV: () => {},
//     importCSV: () => {},
// }))

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
            s.data.push({ distance, fuelUsed, refuelingDate });
        }),
    );
}

export { state, createRefueling };
