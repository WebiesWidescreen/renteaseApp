export const getDateRange = (day: number, month: string) => {
     // Map month names to month numbers (0-indexed)
     const monthMap: { [key: string]: number } = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
    };

    // Check if the month is valid
    if (!(month in monthMap)) {
        throw new Error('Invalid month name');
    }

    const year = new Date().getFullYear(); // Current year
    const monthIndex = monthMap[month]; // Get the month index from the map

    // Get fromDate: (day + 1) for the specified month
    const fromDate = new Date(year, monthIndex, day + 1);

    // Get toDate: same day (day + 1) but in the next month
    const toDate = new Date(year, monthIndex + 1, fromDate.getDate());

    return {
        fromDate,
        toDate,
    };
};