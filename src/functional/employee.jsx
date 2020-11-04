import React, {useState, useEffect} from 'react';
import AddEmp from "./add";
import Table from "./table";
import ViewEmployee from "./view";
import UpdateEmployee from './update'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Employee=()=> {
    const [empList,setEmpList]=useState([]);
    const [id, setId]=useState(1);
    
    
    function updateValue() {
        setEmpList(JSON.parse(localStorage.getItem('empList')));
        setId(+localStorage.getItem('id'));
    }

    useEffect(()=>{
        updateValue();
    }, []);

    return (
        
            <Router>
             <Link to={'/add'}><button>Add Employee</button></Link>
                <Switch>
                    <Route exact path = '/add'>
                        <AddEmp id = {id} updateValue = {updateValue} />
                    </Route>
                    <Route exact path = '/view/:id'>
                        <ViewEmployee updateValue = {updateValue} />
                    </Route>
                    <Route exact path = '/update/:id'>
                        <UpdateEmployee  updateValue = {updateValue}/>
                    </Route>
                    <Table empList = {empList} updateValue={updateValue} />
                    
                </Switch>
            </Router>
        );
  }
  export default Employee;