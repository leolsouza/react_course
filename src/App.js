import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>  
      <Todo text='Master React'/>  
      <Todo text='Explore the full React course'/>  
      
    </div>
  );
}

export default App;
// é uma aplicação mais dinamica vendo que serão feitas novas caixas
// uma função deve ser feita sempre em letra maiuscula, para diferenciar das tags html