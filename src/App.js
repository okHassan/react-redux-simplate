import { Provider } from "react-redux";
import Count from "./app/components/Count";
import { store } from "./app/redux/store"

function App() {

  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;