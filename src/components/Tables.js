import React from 'react'

export default function Tables(props) {
const students=[

    { id: 1, name: 'John', roll: 'A1', marks: 85 },
    { id: 2, name: 'Emily', roll: 'B2', marks: 92 },
    { id: 3, name: 'Michael', roll: 'A3', marks: 78 },
    { id: 4, name: 'Sophia', roll: 'B4', marks: 89 },
    { id: 5, name: 'William', roll: 'A5', marks: 95 }



]

    return (



<>
      

<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name </th>
      <th scope="col">Roll Number </th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  <tbody>
  {students.map((student) => (
    <tr>
     <td>{student.id}</td>
 <td>{student.name}</td>
   <td>{student.roll}</td>
   <td>{student.marks}</td>
 </tr>
   
))}
    </tbody>
</table>
</>
    )
}


