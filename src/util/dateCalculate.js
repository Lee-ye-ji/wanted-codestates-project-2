import dateFormat from './dateFormat';

//  날짜와 날짜 사이 모든 날짜 구하기
const getDatesStartToLast = (startDate, lastDate) => {
  const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  if (!(regex.test(startDate) && regex.test(lastDate)))
    return 'Not Date Format';
  const result = [];
  const curDate = new Date(startDate);
  while (curDate <= new Date(lastDate)) {
    result.push(curDate.toISOString().split('T')[0]);
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
};

function dateCalculate() {
  const date = dateFormat();
  return getDatesStartToLast(date[0], date[1]);
}

export default dateCalculate;
