import React, { useEffect, useState } from 'react'
import Toast, { toast } from 'react-hot-toast';
export default function Home() 
{

const [students, setStudents] = useState([])

function fetchStudents(){

  fetch('https://127.0.0.1:5000/students')
    .then((response) => response.json())
    .then((data) => {

    console.log(setStudents(data))
    });
}
useEffect(()=>{
       fetchStudents()
    }, [])

    // function to delete
    function deleteStudent(id){
         fetch(`https://127.o.o.1:5000/student/${id}`, {
            method: 'DELETE',
         })
        .then((response) => response.json())
        .then((json) => {
            if (data.success){
                fetchStudents()
                toast.success("Deleted successfully!")
            }
            else{
                toast.error("Failed to delete")
            }
        });
    
}
    return (
        <div className='max-w-7xl mx-auto'>

            <h4>Students {students && students.length}</h4>
            <div className='grid grid-cols-5 gap-4'>
                {
                    students && students.map((student)=>(
                        <div className='border p-4 border-yellow-400 rounded'>
                            <h3>Name : {student.name}</h3>
                            <h3>Course :{student.course}</h3>
                            <button type='button' class="focus-none text-white bg-red-700"></button>
                        </div>
                        ) 
                    )
                }
            </div>
            
            </div>
    )
}