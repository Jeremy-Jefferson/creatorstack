// Logger utility for better debugging
// In production, this could be replaced with a proper logging service

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const currentLogLevel = import.meta.env.DEV ? LOG_LEVELS.DEBUG : LOG_LEVELS.WARN;

const formatMessage = (level, message, data) => {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level}]`;
  
  if (data) {
    return { prefix, message, data };
  }
  return { prefix, message };
};

const log = (level, levelName, message, data) => {
  if (level < currentLogLevel) {
    return;
  }

  const formatted = formatMessage(levelName, message, data);

  switch (level) {
    case LOG_LEVELS.DEBUG:
      console.debug(formatted.prefix, formatted.message, formatted.data || '');
      break;
    case LOG_LEVELS.INFO:
      console.info(formatted.prefix, formatted.message, formatted.data || '');
      break;
    case LOG_LEVELS.WARN:
      console.warn(formatted.prefix, formatted.message, formatted.data || '');
      break;
    case LOG_LEVELS.ERROR:
      console.error(formatted.prefix, formatted.message, formatted.data || '');
      break;
    default:
      console.log(formatted.prefix, formatted.message, formatted.data || '');
  }
};

export const logger = {
  debug: (message, data) => log(LOG_LEVELS.DEBUG, 'DEBUG', message, data),
  info: (message, data) => log(LOG_LEVELS.INFO, 'INFO', message, data),
  warn: (message, data) => log(LOG_LEVELS.WARN, 'WARN', message, data),
  error: (message, data) => log(LOG_LEVELS.ERROR, 'ERROR', message, data),
};

export default logger;
