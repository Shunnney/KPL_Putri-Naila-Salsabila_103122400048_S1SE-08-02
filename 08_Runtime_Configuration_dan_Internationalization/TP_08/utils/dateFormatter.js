export function formatDate(date, locale, formatOptions) {
  return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}