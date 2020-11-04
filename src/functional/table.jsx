import React from "react";
import {useHistory} from 'react-router-dom'


const Table=({empList,updateValue})=>{
const headers=['ID', 'Name', 'Department', 'Salary','Action']


        return(
            <table>
                <thead>
                    <tr>
                        {headers.map((header)=><th>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {empList.map((data,index)=>
                    <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.department}</td>
                    <td>{data.salary}</td>
                    <td><BtnBlock id = {index} updateValue={updateValue}/></td>
                    </tr>)}
                </tbody>




            </table>
        )




}
const BtnBlock=({id,updateValue})=>{
    let history = useHistory();
    return(
        <>
            <button onClick={()=>{
                history.push(`/view/${id}`);
            }}> View</button>

            <button onClick={()=>{
                history.push(`/update/${id}`);
            }}> Update</button>

            <button onClick={()=>{
                let empList=JSON.parse(localStorage.getItem('empList'));
                empList=empList.filter(emp=>emp.id !== id);
                window.confirm("click ok to delete" ) &&
                localStorage.setItem('empList',JSON.stringify(empList));
                updateValue();
                history.push('/');
            }}> Delete</button>
        </>
    );
}

export default Table;