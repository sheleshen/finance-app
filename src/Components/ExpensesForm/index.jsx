import "components/ExpensesForm/style.css";
import Button from "components/Button";
import { useState } from "react";

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

const categories = unsortedCategories.sort();

const ExpensesForm = () => {
  const [spending, setSpending] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleClick = () => {
    const newExpens = {
      spending,
      category,
    };

    // Надо записать новые данные const newExpens в область расходов, пока не знаю как, но их видно в консоли

    console.log(newExpens);
    setSpending("");
    setCategory(categories[0]);
  };

  return (
    <div className="flex gap-4 justify-center py-16">
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
      {<Button title="Добавить" handleClick={handleClick} type="submit" />}
    </div>
  );
};

export default ExpensesForm;
