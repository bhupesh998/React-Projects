import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import Events from './components/Events/Events.jsx';
import EventDetails from './components/Events/EventDetails.jsx';
import NewEvent from './components/Events/NewEvent.jsx';
import EditEvent from './components/Events/EditEvent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/events" />,
  },
  {
    path: '/events',
    element: <Events />,

    children: [
      {
        path: '/events/new',
        element: <NewEvent />,
      },
    ],
  },
  {
    path: '/events/:id',
    element: <EventDetails />,
    children: [
      {
        path: '/events/:id/edit',
        element: <EditEvent />,
      },
    ],
  },
]);

const queryClient = new QueryClient()


// Tanstack query helps with sending HTTP request and keeping UI in sync 
// we can do it with useEffect and fetch also but tanstack query simplifies the process

//some advantyages
// if we change the tab and come back to our app then it automatically processes and fetches the data , we don't need to explicityly send the request to backend
// in case data is changed on backend then it also sends the request to fetch the data 
function App() {

  return <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />;
  </QueryClientProvider>
 
}

export default App;
