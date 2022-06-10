module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 1px 3px -1px #0e749033, 0 3px 5px -2px #0e749044, inset 2px 2px 5px 1px #fffc',
        'glass-hover':
          '0 3px 5px -1px #0e749033, 0 8px 15px -5px #0e749044, inset 2px 2px 5px 1px #fffc',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0) rotate(45deg)' },
          '100%': { transform: 'translate(0, 10%) rotate(60deg)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out 0s infinite alternate',
        float2: 'float 5s ease-in-out -2s infinite alternate',
        float4: 'float 5s ease-in-out -4s infinite alternate',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
