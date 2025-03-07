import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchWeeks,
  setCurrentWeekId,
  fetchTasks
} from '../store/calendarSlice';
import { TaskItem } from '../store/tasksSlice';
import { format, parseISO, addDays, isWeekend } from 'date-fns';
import { fr } from 'date-fns/locale';
import { RootState } from '../store';

// ... [Le reste du contenu du fichier WeekView.tsx] ...