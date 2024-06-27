import React from 'react';
import { Chart as ChartJs, Tooltip, Legend, LinearScale, CategoryScale, Title, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJs.register(
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
  BarElement
);

const Barchart = () => {
  const handleIncomeState = useSelector((state) => state.income.userincome);
  const handleExpenseState = useSelector((state) => state.expense.userExpense);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'October', 'Nov', 'Dec'];

  const ActualMonths = [];
  const ActualIncome = [];
  const ActualExpense = [];

  handleIncomeState.forEach((val) => {
    const date = new Date(val.Date);
    const monthName = months[date.getMonth()];
    if (!ActualMonths.includes(monthName)) {
      ActualMonths.push(monthName);
    }
    ActualIncome.push(parseInt(val.Amount));
  });

  handleExpenseState.forEach((val) => {
    const expenseDate=new Date(val.Date)
    const ExpenseMonths=months[expenseDate.getMonth()]
    if(!ActualMonths.includes(ExpenseMonths)){
        ActualMonths.push(ExpenseMonths)
    }
   
    ActualExpense.push(parseInt(val.Amount));
  });

  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income and Expenses',
      },
    },
  };

  const data = {
    labels: ActualMonths,
    datasets: [
      {
        label: 'Income',
        data: ActualIncome,
        backgroundColor: 'green',
      },
      {
        label: 'Expense',
        data: ActualExpense,
        backgroundColor: 'red',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Barchart;
