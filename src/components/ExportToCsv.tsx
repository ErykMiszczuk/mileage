import { Component } from "solid-js";
import { exportToCSV } from "../store/fuelUsageStore";

const ExportToCsv: Component = () => {
    let download: HTMLAnchorElement | undefined;

    function createFile(data: string, filename: string) {
        if (download === undefined) return;

        const file = new Blob([data], { type: "utf-8" });
        const url = URL.createObjectURL(file);
        download.href = url;
        download.download = filename;
        download.click();
    }

    function createFilename() {
        const t = new Date().toISOString();
        return `refueling-report-${t}.csv`;
    }

    return (
        <>
            <input
                type="button"
                class="btn btn-ghost"
                value="Export to CSV"
                onClick={() => createFile(exportToCSV(), createFilename())}
            />
            <a
                href="body"
                id="download"
                class="invisble"
                style="display: none; width: 0; height: 0;"
                hidden
                ref={download}
            >
                download
            </a>
        </>
    );
};

export default ExportToCsv;
