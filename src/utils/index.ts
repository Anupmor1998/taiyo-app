/* eslint-disable @typescript-eslint/no-unused-vars */
export const convertToAverageMonthCases = (data: any) => {
  const averageMonthCases: any = {};

  for (const date in data) {
    const [month, _day, year] = date?.split('/');
    const monthYear = `${getMonthName(parseInt(month))} ${year}`;

    if (!averageMonthCases[monthYear]) {
      averageMonthCases[monthYear] = {
        totalCases: data[date],
        numDays: 1,
      };
    } else {
      averageMonthCases[monthYear].totalCases += data[date];
      averageMonthCases[monthYear].numDays++;
    }
  }

  for (const monthYear in averageMonthCases) {
    averageMonthCases[monthYear] = Math.round(
      averageMonthCases[monthYear].totalCases /
        averageMonthCases[monthYear].numDays
    );
  }

  return averageMonthCases;
};

// Function to get the month name from month number
export const getMonthName = (monthNumber: number) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[monthNumber - 1];
};
