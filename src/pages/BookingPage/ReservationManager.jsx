import React, { useReducer } from "react";
import BookingPage from "./BookingPage";
import { fetchAPI } from "../../utils/api"; // Importa fetchAPI

// Funzione che inizializza lo stato degli orari disponibili
export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today); // Usa fetchAPI per ottenere gli orari iniziali
};

// Funzione riduttrice per aggiornare lo stato degli orari disponibili
export const updateTimes = (state, action) => {
  switch (action.type) {
      case "UPDATE":
          const date = action.payload instanceof Date ? action.payload : new Date(action.payload);
          return fetchAPI(date); // Usa fetchAPI con un oggetto Date valido
      default:
          return state;
  }
};


function ReservationManager() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const updateAvailableTimes = (date) => {
      const selectedDate = date instanceof Date ? date : new Date(date);
      dispatch({ type: "UPDATE", payload: selectedDate });
  };
  

    return (
        <BookingPage
            availableTimes={availableTimes}
            updateAvailableTimes={updateAvailableTimes}
        />
    );
}

export default ReservationManager;
