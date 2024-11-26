const React = require("react");

// Mock delle principali funzioni e componenti di react-router-dom
module.exports = {
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  useNavigate: jest.fn(), // Mock della funzione useNavigate
  useParams: jest.fn(() => ({})), // Mock della funzione useParams (restituisce un oggetto vuoto)
  useLocation: jest.fn(() => ({
    pathname: "/",
    search: "",
    hash: "",
    state: null,
    key: "mockKey",
  })), // Mock della funzione useLocation
};
