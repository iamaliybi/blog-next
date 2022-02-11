module.exports = {
	important: true,
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontSize: {
				xs: ['1rem'],
				sm: ['1.2rem'],
				base: ['1.4rem'],
				lg: ['1.6rem'],
				xl: ['1.8rem'],
				'2xl': ['2rem'],
				'3xl': ['2.4rem'],
				'4xl': ['2.8rem'],
				'5xl': ['3.2rem'],
				'6xl': ['3.6rem'],
				'7xl': ['4rem'],
				'8xl': ['4.8rem'],
				'9xl': ['6.4rem'],
			},

			fontFamily: {
				sans: ['Poppins']
			},

			spacing: {
				0: '0px',
				1: '0.4rem',
				1.5: '6px',
				2: '0.8rem',
				3: '1.2rem',
				4: '1.6rem',
				5: '2rem',
				6: '2.4rem',
				7: '2.8rem',
				8: '3.2rem',
				9: '3.6rem',
				10: '4rem',
				11: '4.4rem',
				12: '4.8rem',
				14: '1.4rem',
				16: '1.6rem',
				18: '1.8rem',
				20: '2rem',
				24: '2.4rem',
				28: '2.8rem',
				32: '3.2rem',
				36: '3.6rem',
				40: '4rem',
				48: '4.8rem',
				56: '5.6rem',
				64: '6.4rem',
				72: '7.2rem',
				80: '8rem',
				88: '8.8rem',
			},

			colors: {
				current: 'currentColor',
				transparent: 'transparent',

				gray: {
					DEFAULT: 'rgb(242, 242, 242)',
				},

				primary: {
					DEFAULT: 'rgb(27, 33, 44)',
				},

				secondary: {
					DEFAULT: 'rgb(103, 118, 139)',
				}
			}
		},
	},
	plugins: [],
}
