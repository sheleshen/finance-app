import "components/Expenses/style.css";
import ExpensesForm from "components/ExpensesForm";
import { useState } from "react";

const Expenses = () => {

  const unsortedCategories = [
    "Путешествия",
    "Развлечения",
    "Образование",
    "Еда",
    "Одежда",
    "Ипотека",
    "ЖКХ",
    "Здоровье",
    "Связь",
    "Транспорт",
    "Косметика",
  ];

  /* Если сделать localStorage, то появлется пустая строка и  сумма равно NAN*/

  // const initialization = JSON.parse(localStorage.getItem('expenses')) || []
  // const [expenses, setExpenses] = useState([initialization]);

  const [expenses, setExpenses] = useState([]);

  /* Для  localStorage*/
  // useEffect(() => {
  //   localStorage.setItem('expenses', JSON.stringify(expenses));
  // }, [expenses]);


  const addExpense = (expense) => {
    const newExpense = [...expenses, expense]
    setExpenses(newExpense)

    //аналог setExpenses([...expenses, expense])
  }

  const currentDate = new Date().toLocaleDateString();

  let totalExpense = expenses.reduce((curretSum, currentItem) => curretSum + parseInt(currentItem.spending), 0)

  return (
    <div className="bg-expenses mt-16 rounded-t-60">
      <ExpensesForm addExpense={addExpense} unsortedCategories={unsortedCategories}/>
      <div className="max-w-7xl m-auto pb-16">

        <p className="text-3xl font-bold text-center pb-5">
          Общая сумма: {totalExpense} руб.
        </p>
        {expenses.map((expense) => (

          <div className="flex justify-between pb-3">
            <div className="flex gap-5 items-center">
              <p className=" text-gray-500 font-semibold text-base">
                {currentDate}
              </p>
              <p className="text-3xl font-bold">
                {expense.category}
              </p>
            </div>
            <p className="text-3xl">
              - {expense.spending} руб.
              </p>
          </div>

        ))}
        
      </div>
    </div>
  );
};

export default Expenses;
