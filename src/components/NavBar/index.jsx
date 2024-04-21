import React from "react";
import s from "./index.module.css";
import logo from "./img/icons8-reminders (1).svg";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Обновлять каждую секунду
    return () => clearInterval(intervalId); // Очистить интервал при размонтировании компонента
  }, []);

  // Функция для получения полного названия дня недели
  const getDayName = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  // Функция для получения полного названия месяца
  const getMonthName = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };

  return (
    <div className={s.mainDiv}>
      <div className={s.needToInline}>
        <div className={s.logoDiv}>
          <img className={s.logo} src={logo} alt="Logo" />
          <h1>todo</h1>
        </div>

        <div className={s.navBarDiv}>
          <p>Home</p>
          <p>Todo</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>
      </div>

      <div className={s.dateDiv}>
        <p className={s.date}>
          {getDayName(currentDate)} {currentDate.getDate()}th,{" "}
          {getMonthName(currentDate)}
        </p>
        <p className={s.time}>{currentDate.toLocaleTimeString()}</p>
      </div>

      <div className={s.addToDo}>
        <input type="text" placeholder="Add todo.." />
        {/* <button>+</button> */}
        <button class={s.button_inside}>+</button>
      </div>
    </div>
  );
}
