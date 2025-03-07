import { format, parseISO, isWeekend } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatDate = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'd MMMM yyyy', { locale: fr });
};

export const formatDayHeader = (date: string) => {
  const dayDate = parseISO(date);
  return format(dayDate, 'EEEE d', { locale: fr });
};

export const isWeekendDay = (date: string) => {
  return isWeekend(parseISO(date));
};

export const getCurrentWeek = () => {
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - today.getDay() + 1);
  
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  
  return {
    startDate: format(monday, 'yyyy-MM-dd'),
    endDate: format(sunday, 'yyyy-MM-dd')
  };
};