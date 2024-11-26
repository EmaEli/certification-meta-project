import { initializeTimes, updateTimes } from "./ReservationManager";
import { fetchAPI } from "../../utils/api";

// Mock di fetchAPI
jest.mock("../../utils/api", () => ({
  fetchAPI: jest.fn(), // Mock della funzione fetchAPI
}));

describe("ReservationManager API Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Resetta i mock prima di ogni test
  });

  test("initializeTimes should fetch available times for today", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes); // Mock del risultato della chiamata API

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1); // Assicuriamoci che fetchAPI venga chiamata

    // Normalizziamo la data rimuovendo la precisione eccessiva
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Mantieni solo la parte rilevante (giorno)

    const calledWithDate = fetchAPI.mock.calls[0][0]; // Ottieni il valore passato a fetchAPI
    calledWithDate.setHours(0, 0, 0, 0); // Normalizza anche la data passata

    expect(calledWithDate).toEqual(today); // Confronto delle date normalizzate
    expect(result).toEqual(mockTimes); // Controlla che i risultati siano corretti
  });

  test("updateTimes should fetch available times for the given date", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes); // Simula il risultato della chiamata API

    const action = { type: "UPDATE", payload: new Date("2024-11-27") }; // Usa un oggetto Date come payload
    const result = updateTimes([], action);

    expect(fetchAPI).toHaveBeenCalledTimes(1); // Assicurati che fetchAPI sia stata chiamata
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2024-11-27")); // Controlla che sia stata chiamata con la data corretta
    expect(result).toEqual(mockTimes); // Controlla che i risultati siano corretti
  });

  test("updateTimes should return current state if action type is unknown", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN", payload: new Date("2024-11-27") };

    const result = updateTimes(initialState, action);

    expect(result).toBe(initialState); // Controlla che lo stato iniziale venga restituito invariato
    expect(fetchAPI).not.toHaveBeenCalled(); // Assicurati che fetchAPI non sia stata chiamata
  });
});
