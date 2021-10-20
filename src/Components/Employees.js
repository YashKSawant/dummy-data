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
          <p>Want to get add in this list?? Enter your details below..</p>
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
        <h3 className="info">Here is the graphical representaion of data.</h3>
        <button
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          More Info
        </button>
        {showInfo && (
          <Chart ageData={ages} salaryData={salaries} nameData={names} />
        )}
      </section>
    </div>
  );
};

export default Employees;
