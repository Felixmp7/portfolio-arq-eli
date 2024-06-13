export const getYearsAgo = (targetDay: Date) => {
    const today = new Date();

    let difference = today.getFullYear() - targetDay.getFullYear();
    const monthDifference = today.getMonth() - targetDay.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < targetDay.getDate())) {
        difference--;
    }

    return difference;
};