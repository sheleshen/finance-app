import "components/ExpensesForm/style.css";
import Button from "components/Button";
import { useState } from "react";

const ExpensesForm = ({addExpense, unsortedCategories}) => {
  const [spending, setSpending] = useState("");
  const [category, setCategory] = useState(unsortedCategories[0]);

  const categories = unsortedCategories.sort();

  const handleClick = (event) => {
    event.preventDefault()

    const expense = {
      spending,
      category,
    };

    // Надо записать новые данные const expense в область расходов
    addExpense(expense)

    console.log(expense);
    setSpending("");
    setCategory(categories[0]);
  };

  return (
    <form className="flex gap-4 justify-center py-16">
      <input
        onChange={(event) => setSpending(event.target.value)}
        value={spending}
        name="spending"
        type="number"
        min="0"
        placeholder="00,00"
        className="px-6 py-3 text-lg border border-solid rounded-full stroke-field text-slate-900 stroke-outline"
      />
      <select
        onChange={(event) => setCategory(event.target.value)}
        value={category}
        name="category"
        className="px-6 py-3 text-lg border border-solid rounded-full stroke-field text-slate-900 stroke-outline"
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      {<Button title="Добавить" handleClick={handleClick} type="button" />}
    </form>
  );
};

export default ExpensesForm;
