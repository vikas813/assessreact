import React from "react";
import {useParams} from 'react-router-dom';
const ViewEmployee=()=>{
    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();
    const employee = empList.find((emp) => emp.id === +id);
    return(
        <>
            <h3>Id : {employee.id}</h3>
            <h3>Name : {employee.name}</h3>
            <h3>Department : {employee.department}</h3>
            <h3>Salary : {employee.salary}</h3>
        </>
    );

}

export default ViewEmployee;