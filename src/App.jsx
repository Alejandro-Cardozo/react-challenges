// Components
import Headers from './components/Headers';
import AddTodo from './components/AddTodo';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import Card from './components/Card';

// Context
import { TodoContextProvider } from './context/context';

function App() {
  return (
    <TodoContextProvider>
      <Card>
        <Headers text='things to do' />
        <TodoList />
        <TodoCounter />
        <AddTodo />
      </Card>
    </TodoContextProvider>
  );
}

export default App;
