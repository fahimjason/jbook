import 'bulmaswatch/superhero/bulmaswatch.min.css';
// import CodeCell from "./components/code-cell";
import { Provider } from 'react-redux';
import { store } from './state';
import TextEditor from "./components/text-editor";

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <TextEditor />
        {/* <CodeCell /> */}
      </div>
    </Provider>
  );
}

export default App;
