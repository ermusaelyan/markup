import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import s from "./Popup.module.css";
import CloseIcon from "../../icons/CloseIcon.tsx";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={s.overlay}>
            <div className={s.popup} ref={popupRef}>
                <button
                    onClick={onClose}
                    className={s.closeButton}
                >
                    <CloseIcon />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Popup;
