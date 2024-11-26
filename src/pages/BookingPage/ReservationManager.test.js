import { initializeTimes, updateTimes } from "./ReservationManager";
import { fetchAPI } from "../../utils/api";
import { act } from "react"; // Per gestire aggiornamenti di stato e DOM

// Mock della funzione fetchAPI
jest.mock("../../utils/api", () => ({
  fetchAPI: jest.fn(),
}));

describe("ReservationManager API Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Resetta i mock prima di ogni test
  });

  test("initializeTimes should fetch available times for today", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes); // Simula il risultato di fetchAPI

    let result;
    act(() => {
      result = initializeTimes(); // Usa act per eventuali aggiornamenti
    });

    expect(fetchAPI).toHaveBeenCalledTimes(1); // Assicura che fetchAPI venga chiamata

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalizza la data
    const calledWithDate = fetchAPI.mock.calls[0][0];
    calledWithDate.setHours(0, 0, 0, 0); // Normalizza anche il parametro passato

    expect(calledWithDate).toEqual(today); // Verifica che sia stata usata la data corretta
    expect(result).toEqual(mockTimes); // Controlla che i risultati siano corretti
  });

  test("updateTimes should fetch available times for the given date", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes); // Simula il risultato di fetchAPI

    const action = { type: "UPDATE", payload: new Date("2024-11-27") };
    let result;
    act(() => {
      result = updateTimes([], action); // Usa act per gestire aggiornamenti
    });

    expect(fetchAPI).toHaveBeenCalledTimes(1); // Assicura che fetchAPI sia stata chiamata
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2024-11-27")); // Controlla l'argomento passato
    expect(result).toEqual(mockTimes); // Verifica il risultato corretto
  });

  test("updateTimes should return current state if action type is unknown", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN", payload: new Date("2024-11-27") };

    let result;
    act(() => {
      result = updateTimes(initialState, action);
    });

    expect(result).toBe(initialState);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
