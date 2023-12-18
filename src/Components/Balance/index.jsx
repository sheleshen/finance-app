import "components/Balance/style.css";

const Balance = () => {

  /* Пройтись по новому массиву forEach или map с ценами expense.spending и сложить их parseInt ? */

  let sum = 0

  /* передать в forEach массив, импортировать */

  // expenses.forEach() {
  //   sum += parseInt(expense.spending);
  //   return sum
  // };

  return (
    <div className="max-w-7xl m-auto relative">
      <svg
        className="absolute linear-gradient"
        xmlns="http://www.w3.org/2000/svg"
        width="553"
        height="368"
        viewBox="0 0 553 368"
        fill="none"
      >
        <path
          d="M0.50819 119.167C-3.63846 87.4045 18.749 58.2939 50.512 54.1472L461.382 0.508173C493.145 -3.63848 522.256 18.749 526.402 50.512L552.272 248.675C556.419 280.438 534.032 309.548 502.269 313.695L91.3984 367.334C59.6354 371.48 30.5249 349.093 26.3783 317.33L0.50819 119.167Z"
          fill="url(#paint0_linear_748_31)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_748_31"
            x1="-6.99998"
            y1="50.5"
            x2="407.5"
            y2="330.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#624EF2" />
            <stop offset="1" stop-color="#D15EF7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container-blur mt-40 ml-28 pt-14 pl-14 pb-40 pr-14">
        <p className="text-2xl font-normal text-white">
          Мои расходы
          {/* Мой баланс  */}
        </p>
        <p className="text-6xl font-bold text-white pt-4">
          {/* - 50 000 руб. */}
          {sum}
          {/* Здесь будет выводиться баланс, сначала сделаем сумму расходов*/}
        </p>
      </div>
    </div>
  );
};

export default Balance;
