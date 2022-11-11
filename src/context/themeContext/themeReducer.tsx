import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

/**
 * Nota: un Reducer no debería tener
 */
export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'gray',
  dark: false,
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'gray',
  dark: true,
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'rgba(255, 255, 255, 0.4)',
    notification: 'teal',
  },
};

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };
    case 'set_dark_theme':
      return { ...darkTheme };
    default:
      return state;
  }

};
