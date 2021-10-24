import UserList from "./components/userList/UserList";
// redux
import { Provider } from 'react-redux';
import store from './store';
// FullCalendar
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 


function App() {



  return (
    <Provider store={store}>
      <div className='container w-50'>
        <UserList />
       </div>
       <div className="w-50 m-auto">
        <FullCalendar 
          height="650px"
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
            { title: 'event 1', date: '2021-10-22' },
          ]}
        />
      </div>
    </Provider>
  );
}

export default App;