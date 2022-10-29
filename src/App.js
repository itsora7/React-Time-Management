import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Title} from './components/Title';
import {EntryList} from './components/EntryList';
import { Form } from './components/Form';
import { Listarea } from './components/Listarea';
import { BadList } from './components/BadList';



function App() {
  const handleOnSubmit = (e) => {}
  return (
    <div className ="wrapper">

    <div className ="container">
        <Title />
        {/* <div className ="row">
            <div className ="col text-center mt-5">
              <h1>How to manage time or Not to do list</h1>  
            </div>
        </div> */}

        <Form />
        {/* <form onSubmit={handleOnSubmit}>
            <div className ="row mt-3 g-2">
                <div className ="col-md-6">
                  <input name="task" type="text" className ="form-control" placeholder="" aria-label="First name" required/> 
                </div>
                <div className ="col-md-3">
                  <input name="hr" type="number" className ="form-control" min="1" placeholder="" aria-label="Last name" required/>
                </div>
                <div className ="col-md-3 d-grid gap-2">
                        <button className ="btn btn-primary"><i className ="fa-solid fa-plus"></i> Add new Task</button>
                </div>
              </div>
        </form> */}

        <Listarea />
        <div className ="row mt-5 g-2">
          <EntryList />
            {/* <div className ="col-md">
                <h2 className ="text-center">Entry List</h2>
                <hr />
                <table className ="table table-striped table-hover">
                    <tbody id="task-list">
                                     
                    </tbody>
                  </table>
            </div> */}
          <BadList />
            {/* <div className ="col-md">
                <h2 className ="text-center">Bad List</h2>
                <hr />
                <table className ="table table-striped table-hover">
                    <tbody id="bad-task"> </tbody>
                  </table>
                  <div className ="text-end">You could have saved = <span id="totalBadhr">0</span>hrs</div>
            </div> */}
        </div>

        {/* <!-- total hr area  --> */}
        <div className ="row fw-bold">
            <div className ="col">The total hours allocated = <span id="totalhrs">0</span>hrs</div>
        </div>
    </div>
</div>
  );
}

export default App;
