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

  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    const newExpense = [...expenses, expense]
    setExpenses(newExpense)

    //аналог setExpenses([...expenses, expense])
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="bg-expenses mt-16 rounded-t-60">
      <ExpensesForm addExpense={addExpense} unsortedCategories={unsortedCategories}/>
      <div className="max-w-7xl m-auto pb-16">

        {expenses.map((expense) => (

          <div className="flex justify-between">
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
