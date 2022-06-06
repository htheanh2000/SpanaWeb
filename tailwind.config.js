module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      caption: '0.75rem',
      headline: '1rem',
      body1: '1rem',
      body2: '0.875rem',
      h3: '2.4375rem',
      h4: '1.9375rem',
      h5: '1.5rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        'light-base-color-black': '#000000',
        'light-primary-color-10': '#dbd7f4',
        'light-primary-color-50': '#5541d7',
        'light-accent-2-color-70': '#d9790c',
        'light-text-link-color-purple': '#5541d7',
        'light-text-color-body-2': '#9a9ab0',
        'light-text-color-body-1': '#92929d',
        'light-primary-separator-color': '#e1e1fb',
        'light-secondary-separator-color': ' #e1e1e1',
        'light-error-color': '#f04461',
        'light-background-color-gray': '#e5e5e5',
        'light-secondary-system-color': '#f7f7fc',
        'fill-image-placeholder-color': '#e2e2ea',
        'fill-text-field-2': '#f6f6f7',
        'light-accent-1-color-85': '#287161',
        'light-accent-1-color-70': '#3caa91',
        'light-accent-1-color-50': '#42bda1',
        'light-accent-1-color-30': '#77cfbb',
        'light-accent-1-color-10': '#d9f2ec',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
