// Funzione per generare numeri pseudo-casuali basati su un seed
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
};

// Simula il recupero degli orari disponibili per una data specifica
export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
          result.push(i + ":00");
      }
      if (random() < 0.5) {
          result.push(i + ":30");
      }
  }
  return result;
};

// Simula l'invio del modulo
export const submitAPI = function (formData) {
  return true;
};
