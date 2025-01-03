import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utlis/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainCointainer from './components/MainCointainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
      path:"/",
      element:<MainCointainer />
    },
    {
      path:"watch",
      element:<WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div> 
        <Head />
        <RouterProvider router={appRouter}>
        <Body />
        </RouterProvider>
        {/**
         * Head
         * Body
         * -Sidebar
         *  - Menu Items
         * Main Cointainer
         *  - ButtonList
         *  - Video Cointainer
         *    - Video Card 
        */}
      </div>
    </Provider>
  );
}

export default App;
