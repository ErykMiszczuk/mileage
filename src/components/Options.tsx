import { Component } from "solid-js";
import DeleteLocalDataModal from "./DeleteLocalDataModal";
import ExportToCsv from "./ExportToCsv";

const Options: Component = () => {
    return (
        <details class="dropdown dropdown-bottom dropdown-end">
            <summary class="m-1 btn">Options</summary>
            <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                    <ExportToCsv />
                </li>
                <li>
                    <input
                        type="button"
                        class="btn btn-ghost"
                        value="Import CVS"
                    />
                </li>
                <li>
                    <DeleteLocalDataModal />
                </li>
            </ul>
        </details>
    );
};

export default Options;
