import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Buttoncom from "./Buttoncom";



const Modal = forwardRef(function Modal({ children, buttoncaption }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();


            }
        }
    })

    return createPortal(
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>{children}
            <form method="dialog" className="mt-4 text-right">
                <Buttoncom>{buttoncaption}</Buttoncom>
            </form></dialog>,
        document.getElementById("modal-root")
    )
})
export default Modal;