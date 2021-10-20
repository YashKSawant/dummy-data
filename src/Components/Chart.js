import React from 'react';
import { Doughnut, defaults, Bar } from 'react-chartjs-2';
import { Breakpoint } from 'react-socks';
defaults.plugins.legend.position = 'bottom';

const Chart = ({ ageData, salaryData, nameData }) => {
  if (ageData) {
    var age21 = 0;
    var age31 = 0;
    var age41 = 0;
    var age51 = 0;
    var ageDiff = [];
    ageData.map((age) => {
      if (age >= 21 && age <= 30) {
        age21++;
      } else if (age >= 31 && age <= 40) {
        age31++;
      } else if (age >= 41 && age <= 50) {
        age41++;
      } else {
        age51++;
      }
      return (ageDiff = [age21, age31, age41, age51]);
    });
  }

  return (
    <section className="chart">
      <div>
        <Breakpoint small down>
          <Doughnut
            data={{
              labels: ['21-30', '31-40', '41-50', '51 and Above'],
              datasets: [
                {
                  label: '# Employees',
                  data: ageDiff,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                  ],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
            }}
            height={400}
            width={200}
          />
        </Breakpoint>
      </div>
      <div>
        <Breakpoint medium up>
          <Bar
            data={{
              labels: nameData,
              datasets: [
                {
                  label: 'Age',
                  data: ageData,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                  ],
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
            }}
            height={400}
            width={200}
          />
        </Breakpoint>
      </div>
    </section>
  );
};

export default Chart;
