import Header from "./components/Header";
import NewNote from "./components/NewNote";
import NotesContainer from "./components/NotesContainer";
import { store } from "./app/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App w-screen h-screen bg-slate-100 dark:bg-neutral-800">
        <div className="w-full px-4 lg:px-0 lg:w-3/12  mx-auto h-screen">
          <Header />
          <NewNote />
          <NotesContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
