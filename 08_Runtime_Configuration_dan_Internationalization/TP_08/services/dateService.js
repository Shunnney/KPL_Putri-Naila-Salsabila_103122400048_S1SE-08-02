import { i18nConfig } from '../config/i18n.js';
import { formatDate } from '../utils/dateFormatter.js';

export function getCurrentFormattedDate() {
  return formatDate(
    new Date(),
    i18nConfig.locale,
    i18nConfig.dateFormat
  );
}