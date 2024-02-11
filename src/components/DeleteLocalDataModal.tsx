import localforage from "localforage";
import { Component } from "solid-js";
import { Portal } from "solid-js/web";

const DeleteLocalDataModal: Component = () => {
    let dialog: HTMLDialogElement | undefined;

    async function deleteLocalData() {
        try {
            await localforage.clear();
            dialog!.showModal();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <input
                type="button"
                class="btn btn-ghost"
                value="Delete saved data"
                onClick={() => dialog!.showModal()}
            />
            <Portal mount={document.getElementById("modal-space")!}>
                <dialog id="delete_local_data_modal" class="modal" ref={dialog}>
                    <div class="modal-box">
                        <form method="dialog">
                            {/* biome-ignore lint: closing modal won't work with addtional attributes */}
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        Do you want to delete local data?
                        <div class="modal-action">
                            <button
                                type="button"
                                class="btn btn-ghost"
                                value="Cancel"
                                onClick={() => dialog!.showModal()}
                            />
                            <button
                                type="button"
                                class="btn btn-error"
                                value="Delete saved data"
                                onClick={() => deleteLocalData()}
                            />
                        </div>
                    </div>
                    <form method="dialog" class="modal-backdrop opacity-0">
                        {/* biome-ignore lint: closing modal won't work with addtional attributes */}
                        <button>close</button>
                    </form>
                </dialog>
            </Portal>
        </>
    );
};

export default DeleteLocalDataModal;
