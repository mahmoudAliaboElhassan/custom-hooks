import SearchComponent from "./deboundeComp";
import UseDebounceAndDisapear from "./hooks/debounce";
import UseLocalStorage from "./hooks/localStorage";
import UseMediaQuery from "./hooks/useMediaQuery";
import styles from "./App.module.css";
import UseToggle from "./hooks/useToggle";

function App() {
  const { pumpCartQuantity } = styles;
  const [name, setName] = UseLocalStorage("title", "");
  const isSmallScreen = UseMediaQuery("(max-width: 600px)");
  const [isActive, setIsActive] = UseDebounceAndDisapear(500);
  const quantityStyle = `${isActive ? pumpCartQuantity : ""}`;

  const [isModalOpen, toggleModal] = UseToggle(false);
  return (
    <div className="App">
      <>{process.env.REACT_APP_NAME}</>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {isSmallScreen ? "small" : "big"}
      <SearchComponent />
      <button onClick={() => setIsActive(true)}>grow</button>

      <div class={quantityStyle}>will grow</div>
      {isModalOpen ? "opened" : "closed"}
      <button onClick={toggleModal}>change</button>
    </div>
  );
}

export default App;
