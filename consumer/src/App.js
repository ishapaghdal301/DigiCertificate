import logo from './logo.svg';
import './App.css';
import ConsumerHomePage from './components/ConsumerHomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ConsumerRequestPage from './components/ConsumerRequestPage';
import Documents from './components/Documents';


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <ConsumerHomePage />
    },
    {
      path:"/request",
      element: <ConsumerRequestPage />
    },{
      path:"/doc",
      element: <Documents />
    }
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );

}

export default App;
