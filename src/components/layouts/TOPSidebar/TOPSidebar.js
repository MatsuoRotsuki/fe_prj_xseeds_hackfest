import React, { useState } from "react";
import styles from "./TOPSidebar.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

function TOPSidebar() {
  const [role, setRole] = useState("teacher");
  const listFunctionnalityForAll = [
    { name: "home", url: "./test-list", icon: "ti ti-home" },
    { name: "Post", url: "./post", icon: "ti ti-layout-list-post" },
  ];
  const listFunctionalityForTeacher = [
    ...listFunctionnalityForAll,
    {
      name: "Question Manager",
      url: "./question-manager-for-teacher",
      icon: "ti ti-list-ol",
    },
    { name: "Add Question", url: "./add-question", icon: "ti ti-pencil-alt" },
  ];
  const listFunctionalityForStudent = [
    ...listFunctionnalityForAll,
    {
      name: "Wrong Question",
      url: "./Wrong-Question-List",
      icon: "ti ti-face-sad",
    },
    { name: "Achievement", url: "./Achievement", icon: "ti ti-bar-chart" },
  ];
  return (
    <div
      className={clsx(
        "text-xl w-[238px] h-[900px] bg-white shadow-sm shadow-black top-[80px]",
        styles.TOPSidebar
      )}
    >
      <ul className={styles.sidebar_list}>
        {role === "teacher" &&
          listFunctionalityForTeacher.map((item, index) => (
            <li className={styles.sidebar_list_item} index={index}>
              <span className={clsx(item.icon, styles.icon)}></span>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        {role === "student" &&
          listFunctionalityForStudent.map((item, index) => (
            <li className={styles.sidebar_list_item} index={index}>
              <span className={clsx(item.icon, styles.icon)}></span>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TOPSidebar;