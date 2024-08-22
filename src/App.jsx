import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer';

function App() {
  const [firstName, setfirstName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [age, setage] = useState("");
  const [subject, setsubject] = useState("");
  const [students, setstudents] = useState([""]);

  const addStudent=()=>{
    if (!firstName || !fatherName || !age || !subject) return alert('Please add student detail')
    setstudents([...students,{firstName,fatherName,age,subject}])
    setfirstName('')
    setfatherName('')
    setage('')
    setsubject('')
  }

  console.log(students);






  // const [students, setStudents] = useState([]);
  // const addStudent = () => {
  //   if (!firstName) return alert('Please add student Name')
  //   const arr = [...students, firstName,fatherName];
  //   console.log(arr);
  //   setStudents(arr);
  //   // setUserName("");
  // };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className=" rounded-lg py-5 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100 bg-green-500">
              Add Student Record
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e)=>setfirstName(e.target.value)}
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                   Father Name
                  </label>
                  <input
                    type="text"
                    value={fatherName}
                    onChange={(e)=>setfatherName(e.target.value)}
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                   Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e)=>setage(e.target.value)}
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e)=>setsubject(e.target.value)}
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Age
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div> 
              {/* <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div> */}
              <div className="p-2 w-full">
                <button onClick={addStudent} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Submit
                </button>
                              
                                  
                            
                          

<div class=" relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table  class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
       
        <thead class="text-xs text-white-700 uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
               
                <th scope="col" class="px-6 py-3 text-gray-100 ">
                    Student Name
                </th>
                <th scope="col" class="px-6 py-3 text-gray-100">
                  Father Name
                </th>
                <th scope="col" class="px-6 py-3 text-gray-100">
                    Age
                </th>
                <th scope="col" class="px-6 py-3 text-gray-100">
                  Subject
                </th>
                <th scope="col" class="px-6 py-3 ">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {students.map((data,ind)=>(
                                      
                                      
                                      <tr  key={ind}  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                      
                                      
                                      <td class="px-6 py-4">
                                      {data.firstName}
                                      </td>
                                      <td class="px-6 py-4">
                                      {data.fatherName}
                                      </td>
                                      <td class="px-6 py-4">
                                      {data.age}
                                      </td>
                                      <td class="px-6 py-4">
                                      {data.subject}
                                      </td>
                                         
                                      </tr>
                                   
                                 ))}
           
          
           
        </tbody>
    </table>
</div>

                            

        
                                 



                
                 
              </div>
              

            </div>
            
          </div>
          

          

        </div>
        
      </section>

    </>
  )
}

export default App
