import React, { useState } from 'react';
import Chart from './Chart';
import axios from 'axios';

const Employees = ({ employees, baseUrl }) => {
  const [addEmp, setAddEmp] = useState({
    firstName: '',
    lastName: '',
    age: '',
    employeeSalary: '',
  });
  const [employee, setEmployee] = useState(employees);
  const [showInfo, setShowInfo] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddEmp({ ...addEmp, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addEmp.firstName && addEmp.age && addEmp.employeeSalary) {
      const newEmployee = { ...addEmp, id: `${employee.length + 1}` };
      console.log(newEmployee);
      setEmployee([...employee, newEmployee]);
      setAddEmp({
        firstName: '',
        lastName: '',
        age: '',
        employeeSalary: '',
      });
      axios.post(baseUrl, newEmployee).then((response) => {
        console.log(response.data);
      });
    }
  };
  const ages = [];
  const salaries = [];
  const names = [];

  return (
    <div>
      <section className="employee-data">
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan="3">Top Employees</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((item) => {
                const { firstName, lastName, age, employeeSalary } = item;
                // console.log(data.firstName)
                ages.push(age);
                salaries.push(employeeSalary);
                names.push(firstName);
                return (
                  <tr key={item.id}>
                    <td>{`${firstName} ${lastName}`}</td>
                    <td>{age}</td>
                    <td>Rs. {employeeSalary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <article className="form">
          <form>
            <div className="form-control">
              <label htmlFor="firstName">First Name : </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={addEmp.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="lastName">Last Name : </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={addEmp.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="age">Age : </label>
              <input
                type="number"
                id="age"
                name="age"
                min="0"
                value={addEmp.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="employeeSalary">Employee Salary : </label>
              <input
                type="text"
                id="employeeSalary"
                name="employeeSalary"
                value={addEmp.employeeSalary}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
              Add Employee
            </button>
          </form>
        </article>
        <button
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          Click
        </button>
        {showInfo && (
          <Chart ageData={ages} salaryData={salaries} nameData={names} />
        )}

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, maxime
          rerum fugiat numquam rem voluptates id aspernatur quidem odit ipsam
          libero debitis alias earum minus cum consectetur. In, nulla veritatis.
          Sint nobis dolore tempore quibusdam aperiam perspiciatis sit. Quae
          totam voluptatibus assumenda praesentium voluptates veritatis, beatae
          autem ad culpa cum! Saepe dignissimos inventore doloremque. Voluptatem
          odit labore veniam placeat quos? Perferendis molestiae tempora
          necessitatibus, soluta nulla deleniti at vitae velit ex dolore non
          natus excepturi autem, ratione atque exercitationem ipsum veniam culpa
          aperiam illum aliquid quae quia sit? Blanditiis, architecto? Nemo
          harum quas explicabo reiciendis laboriosam culpa at ipsa rerum nostrum
          ratione quibusdam nulla quam quo blanditiis nesciunt, exercitationem
          voluptas fugiat dolorum aut odio totam qui. Voluptates, eum possimus?
          Et? Nobis quia eos vel a, deleniti quam sit blanditiis in porro
          nesciunt debitis asperiores ab quibusdam doloribus alias, sapiente
          fugiat explicabo laudantium laborum? Quod blanditiis, totam voluptatem
          adipisci cupiditate dolorem!
        </p>
      </section>
    </div>
  );
};

export default Employees;
