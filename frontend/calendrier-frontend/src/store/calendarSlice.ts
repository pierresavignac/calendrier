import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { weekService, dayService, installationService } from '../services/api';
import axios from 'axios';

// ... [Le reste du contenu du fichier calendarSlice.ts] ...