import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoList/>
    </div>
  );
}

export default App;
