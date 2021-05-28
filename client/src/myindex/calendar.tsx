import React, { useContext } from "react";
import { ThemeContext } from "../mycontext/context";
import { Calendar, Badge } from 'antd';
function Calendar1() {
  const resdata = useContext(ThemeContext);
  
  function getListData(value) {
      let day1 = Number(resdata.result.future[0].date.substring(8, 10));
      let day2 = Number(resdata.result.future[1].date.substring(8, 10));
      let day3 = Number(resdata.result.future[2].date.substring(8, 10));
      let day4 = Number(resdata.result.future[3].date.substring(8, 10));
      let day5 = Number(resdata.result.future[4].date.substring(8, 10));
      let listData;
      switch (value.date()) {
        case day1:
          listData = [
            { type: 'success', content: `${resdata.result.future[0].temperature} ` },
            { type: 'success', content: `${resdata.result.future[0].weather} ` },
            { type: 'success', content: `${resdata.result.future[0].direct} ` },
          ];
          break;
        case day2:
          listData = [
            { type: 'success', content: `${resdata.result.future[1].temperature} ` },
            { type: 'success', content: `${resdata.result.future[1].weather} ` },
            { type: 'success', content: `${resdata.result.future[1].direct} ` },
          ];
          break;
        case day3:
          listData = [
            { type: 'success', content: `${resdata.result.future[2].temperature} ` },
            { type: 'success', content: `${resdata.result.future[2].weather} ` },
            { type: 'success', content: `${resdata.result.future[2].direct} ` },
          ];

          break;
        case day4:
          listData = [
            { type: 'success', content: `${resdata.result.future[3].temperature} ` },
            { type: 'success', content: `${resdata.result.future[3].weather} ` },
            { type: 'success', content: `${resdata.result.future[3].direct} ` },
          ];
          break;
        case day5:
          listData = [
            { type: 'success', content: `${resdata.result.future[4].temperature} ` },
            { type: 'success', content: `${resdata.result.future[4].weather} ` },
            { type: 'success', content: `${resdata.result.future[4].direct} ` },
          ];
          break;
        default:
      }
      return listData || [];
  
  }
 

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  console.log(num);

  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}
return (
  <div className="mycontainer">
    <div className="choseline">
      <div className="choseleft">天气日历</div>
    </div>
    <div className="calendar">
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  </div>
)
}
export { Calendar1 }