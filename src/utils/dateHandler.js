import { format, parse, isValid, parseISO } from "date-fns";

export const DateHandler = (function () {
  return {
    format: function (date, inFormat, outFormat) {
      const parsedDate = parse(date, inFormat, new Date());
      return isValid(parsedDate) ? format(parsedDate, outFormat) : date;
    },
    formatUtc: function (date, outFormat) {
      const parsedDate = parseISO(date);
      return isValid(parsedDate) ? format(parsedDate, outFormat) : date;
    },
    isValid: function (date, format) {
      const parsedDate = parse(date, format, new Date());
      return isValid(parsedDate);
    },
  };
})();
