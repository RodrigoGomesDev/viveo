import { RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const colors: ResolvableTo<RecursiveKeyValuePair<string, string>> = {
  'viveo-primary': {
    100: '#6de0db',
    200: '#124c57',
  },
};
