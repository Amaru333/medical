import { useState } from "react";

const CalendarRow = ({ firstDay, lastDayInMonth, row, currentMonth, currentYear }) => {
  const activeDay = useState(new Date().getDate())[0];

  let content = [];
  //first row with empty spaces
  if (!row) {
    for (let i = 0; i < firstDay; i++) {
      content.push(<td></td>);
    }
    content.push(<td className="relative py-3 px-2 md:px-3 cursor-pointer hover:text-blue-500 text-center text-gray-800">1</td>);
    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      content.push(
        <>
          {activeDay === i + 1 && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear ? (
            <td className="relative py-3 px-2 md:px-3 cursor-pointer hover:text-blue-500 text-center text-gray-800">
              <span className="rounded-full" style={{ backgroundColor: "#02bf90", padding: "0.7rem", color: "white" }}>
                {i + 1}
              </span>
            </td>
          ) : (
            <td className="relative py-3 px-2 md:px-3 cursor-pointer hover:text-blue-500 text-center text-gray-800">{i + 1}</td>
          )}
        </>
      );
    }

    return <>{content}</>;
  }
  //other rows
  for (let i = 1; i <= 7; i++) {
    if (i + (7 * row - firstDay) <= lastDayInMonth) {
      content.push(
        <>
          {activeDay === i + (7 * row - firstDay) && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear ? (
            <td className="relative py-3 px-2 md:px-3 cursor-pointer hover:text-blue-500 text-center text-gray-800" style={{ width: "14.28%" }}>
              <span className="rounded-full" style={{ backgroundColor: "#02bf90", padding: "0.7rem", color: "white" }}>
                {i + (7 * row - firstDay)}
              </span>
            </td>
          ) : (
            <td className="relative py-3 px-2 md:px-3 cursor-pointer hover:text-blue-500 text-center text-gray-800">{i + (7 * row - firstDay)}</td>
          )}
        </>
      );
    }
  }
  return <>{content}</>;
};

export default CalendarRow;
