import { Component } from "solid-js";
import Form from "./Form";

const RefuelingModal: Component = () => {
    let dialog: HTMLDialogElement | undefined;

    return (
        <>
            <div class="fixed right-2 bottom-2">
                <button
                    class="btn btn-circle btn-primary btn-lg"
                    type="button"
                    onClick={() => dialog!.showModal()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <title>cirlce</title>
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <dialog id="refueling_modal" class="modal" ref={dialog}>
                <div class="modal-box">
                    <form method="dialog">
                        {/* biome-ignore lint: closing modal won't work with addtional attributes */}
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <Form />
                </div>
                <form method="dialog" class="modal-backdrop opacity-0">
                    {/* biome-ignore lint: closing modal won't work with addtional attributes */}
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default RefuelingModal;
