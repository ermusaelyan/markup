import { useState } from "react";
import Popup from "../assets/components/Popup/Popup.tsx";

interface UsePopupReturn {
    showPopup: (content: React.ReactNode) => void;
    hidePopup: () => void;
    Popup: React.FC;
}

export const usePopup = (): UsePopupReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<React.ReactNode>(null);

    const showPopup = (content: React.ReactNode) => {
        setContent(content);
        setIsOpen(true);
    };

    const hidePopup = () => {
        setIsOpen(false);
        setContent(null);
    };

    const PopupWrapper: React.FC = () => (
        <Popup isOpen={isOpen} onClose={hidePopup}>
            {content}
        </Popup>
    );

    return { showPopup, hidePopup, Popup: PopupWrapper };
};
