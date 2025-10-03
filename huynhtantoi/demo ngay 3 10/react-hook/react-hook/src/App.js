const ThemeContext = React.createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  const theme = React.useContext(ThemeContext);
  return <p>Theme hiện tại: {theme}</p>;
}
export default App;
