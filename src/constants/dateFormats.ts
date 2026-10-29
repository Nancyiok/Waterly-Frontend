const DATE_FORMATS = {
  isoDate: "YYYY-MM-DD",
  month: "MMM",
  weekDay: "ddd",
  dayMonth: "D MMM",
  dayMonthYear: "D MMM YYYY",
  weekDayDayMonth: "ddd, D MMM",
  weekDayDayFullMonth: "ddd, D MMMM",
  fullWeekDayDayFullMonth: "dddd, D MMMM",
  weekDayDayMonthTime: "ddd, D MMM HH:mm",
  time: "HH:mm",
} as const;

export { DATE_FORMATS };
