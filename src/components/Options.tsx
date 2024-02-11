import { Component } from "solid-js";
import DeleteLocalDataModal from "./DeleteLocalDataModal";

const Options: Component = () => {
    return (
        <details class="dropdown dropdown-bottom dropdown-end">
            <summary class="m-1 btn">Options</summary>
            <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                    <input
                        type="button"
                        class="btn btn-ghost"
                        value="Export to CSV"
                    />
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
