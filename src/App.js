import './App.css';
import ContactPage from './modules/contactPage/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ContactPage />
    <ToastContainer />
    </>
  );
}

export default App;
