import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer'
import ToggleSwitch from "./components/ToggleSwitch";
import SearchElement from "./components/SearchElement";
import ToDoList from "./components/ToDoList.tsx";

function App() {
  return (
    <div>

        <h1>React Assignment</h1>

        <Timer />
        {/* Component for toggle button */}
        <ToggleSwitch />

        {/* Component for the search filter */}
        <SearchElement />

        {/* To Do List */}
        <ToDoList />
    </div>
  );
}

export default App;
