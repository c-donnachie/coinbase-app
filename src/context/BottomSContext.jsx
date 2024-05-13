import { createContext, useCallback, useState, useRef } from "react";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export const BottomSContext = createContext()

export const BottomSProvider = ({ children }) => {
    const sheetRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const snapPoins = ['48%']

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleExpandPress = useCallback(() => {
        sheetRef.current?.expand();
      }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);


    return (
        <BottomSContext.Provider
            value={{ sheetRef, isOpen, setIsOpen, snapPoins, handleClosePress, handleExpandPress }}
        >
            {children}
        </BottomSContext.Provider>
    )
}