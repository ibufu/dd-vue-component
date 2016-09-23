/**
 * @param {Date} month
 * @returns {Date}
 * @description 获取某个月的第一天
 */
export function getFirstDayOfMonth(month) {
    return new Date(month.getFullYear(), month.getMonth(), 1);
}

/**
 * @param {any} month
 * @returns
 * @description 获取某个月的天数
 */
export function getDayCountInMonth(month) {
    const resultDate = getFirstDayOfMonth(month);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
}

/**
 * @param  {Date} month
 * @returns  {Date[]}
 * @description 获取某个月的所有日期
 */
export function getDayOfMonth(month) {
    const daysInMonth = getDayCountInMonth(month);
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(month.getFullYear(), month.getMonth(), i));
    }

    return days;
}

export function getRows(month) {
    const rows = [];
    let week = [];

    const days = getDayOfMonth(month);

    const addWeek = (item) => {
        const emptyDays = 7 - week.length;
        const nextMonthDayCount = rows.length
            ? getDayCountInMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
            : 0;

        for (let i = 0; i < emptyDays; ++i) {
            if (rows.length) {
                item.push(new Date(month.getFullYear(), month.getMonth() + 1, i + 1));
            } else {
                item.unshift(new Date(month.getFullYear(), month.getMonth() - 1, nextMonthDayCount - i))
            }
        }

        rows.push(item);
    };

    days.map((day) => {
        if (week.length > 0 && day.getDay() === 1) {
            addWeek(week);
            week = [];
        }

        week.push(day);

        if (days.indexOf(day) === days.length - 1) {
            addWeek(week);
        }
    });

    return rows;
}
