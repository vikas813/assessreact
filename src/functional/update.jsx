import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

const UpdateEmployee=({updateValue})=>{
    const [name, setName] = useState(""),
     [department, setDepartment] = useState(""),
     [salary, setSalary] = useState();
    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();
    const employee = empList.filter((emp,index) => index === +id);
   // const index = empList.indexOf(employee);

    return (
        <div>
            Name : <input
                type = 'text' 
                name = 'name'
                placeholder = {employee[0].name}
                value = {name}
                onChange = {(e) => setName(e.target.value)}
            />
            Department : <input
                type = 'text' 
                name = 'department'
                placeholder = {employee[0].department}
                value = {department}
                onChange = {(e) => setDepartment(e.target.value)}
            />
            Salary : <input
                type = 'integer' 
                Salary = 'Salary'
                placeholder = {employee[0].salary}
                value = {salary}
                onChange = {(e) => setSalary(e.target.value)}
            />
            <button
                onClick = {() => {
                    
                        empList[id].name = name ? name : employee[0].name;
                        empList[id].department = department ? department : employee[0].department;
                        empList[id].salary = salary ? salary : employee[0].salary;
                    localStorage.setItem('empList', JSON.stringify(empList));
                    updateValue();
                   
                }}
            >Update Employee</button>
        </div>
    );
}
export default UpdateEmployee;