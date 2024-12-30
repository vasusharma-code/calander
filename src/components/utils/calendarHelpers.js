export const formatDate = (date) => {
  return date.toISOString().split('T')[0];
};

export const getStartOfMonth = (date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return firstDay;
};

export const getDaysInMonth = (date) => {
  const days = [];
  const startOfMonth = getStartOfMonth(date);
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  
  for (let i = 1; i <= lastDate.getDate(); i++) {
    days.push(new Date(date.getFullYear(), date.getMonth(), i));
  }

  return days;
};
