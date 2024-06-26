import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const AppProvider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
};

export default AppProvider;

