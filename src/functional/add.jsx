import React, {useState} from "react";

const AddEmp =({id,updateValue})=>{
    const[name,setName]=useState('');
    const[department,setDepartment]=useState('');
    const[salary,setSalary]=useState(100);

    const empList = JSON.parse(localStorage.getItem('empList'));

    const val1=(event)=>{
        setName(event.target.value);
    }
    const val2=(event)=>{
        setDepartment(event.target.value);
    }
    const val3=(event)=>{
        setSalary(event.target.value);
    }
    return(
        <div>
         Name: <input type="text"
            name='name'
            value={name}
            onChange={val1} /><br/>
         Department:    <input type="text"
            name='department'
            value={department}
            onChange={val2} /><br/>
         Salary:    <input type="integer"
            name='salary'
            value={salary}
            onChange={val3} /><br/>
            
            
         <button class="button button1" 
         onClick={() => {
             const employee = {id, name, department, salary};
             empList.push(employee);
             localStorage.setItem('empList', JSON.stringify(empList));
             localStorage.setItem('id', id+1);
             updateValue();
           
        }}>
        
        Submit</button>      
            
        </div>
            

    );
}
export default AddEmp;
