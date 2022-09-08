// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: '#4d6fff',
    brand: {
      50: '#0000FF',
      100: '#b1d3ff',
      500: '#4d6fff',
    },
    error: { 500: '#e53e3e' },
    primaryDark: '#0000FF',
    secondary: '#87b17c',
    secondaryDark: '#008000',
    highlight: '#00c9a7',
    warning: '#ffc75f',
    danger: '#e53e3e',
    white: '#ffffff',
    doctor: '#f9f9f9',
    superSilver: '#eeeeee',
    windSweptBeach: '#e3e5e5',
    gravelFint: '#bbbbbb',
    squant: '#666666',
    black: '#010101',
    dark: '#23262F',
  },
  styles: {
    global: {
      body: {
        fontFamily: `'Lexend', sans-serif`,
        fontWeight: 400,
      },
      heading: {
        heading: `'Lexend', sans-serif`,
        fontWeight: 700,
      },
      a: {
        textDecoration: 'none',
        fontSize: '15px',
        padding: '0 6px',
        fontWeight: 'bold',
        color: 'primary',
        _hover: {
          color: 'dark',
          textDecoration: 'underline',
          border: 'none ',
        },
        _activeLink: { color: 'primary', boxShadow: 'none' },
        _active: {
          color: 'primary',
          textDecoration: 'underline',
          border: 'none ',
          outline: 'none ',
        },
        _focus: {
          color: 'primary',
          textDecoration: 'underline',
          border: 'none ',
          outline: 'none ',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: '10px',
        fontSize: '16px',
        height: '45px',
        bg: 'primary',
        color: 'white',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
      sizes: {
        sm: (props) => ({
          fontWeight: 500,
          height: '40px',
          fontSize: '14px',
          padding: '8px 12px',
          width: props.withicon === 'true' ? '40px' : '80px',
        }),
        md: (props) => ({
          fontWeight: 500,
          height: '45px',
          fontSize: '16px',
          padding: '8px 12px',
          width: props.withicon === 'true' ? '50px' : '100px',
        }),
        lg: (props) => ({
          fontWeight: 500,
          height: '50px',
          fontSize: '18px',
          padding: '8px 12px',
          width: props.withicon === 'true' ? '75px' : '150px',
        }),
      },
      variants: {
        solid: (props) => ({
          bg:
            props.mode === 'primary'
              ? 'primary'
              : props.mode === 'secondary'
              ? 'secondary'
              : 'primary',
          color: 'white',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          _hover: {
            _disabled: {
              background:
                props.mode === 'primary'
                  ? 'primary'
                  : props.mode === 'secondary'
                  ? 'secondary'
                  : 'primary',
            },
            bg:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
          },
          _focus: {
            bg:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
            boxShadow:
              props.mode === 'primary'
                ? '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #e7ebff'
                : props.mode === 'secondary'
                ? '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
                : '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
          },
          _disabled: {
            opacity: 0.2,
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary'
              : props.mode === 'secondary'
              ? 'secondary'
              : 'primary',
          border:
            props.mode === 'primary'
              ? '1px solid #8331ff'
              : props.mode === 'secondary'
              ? '1px solid #263238'
              : '1px solid #8331ff',
          borderColor:
            props.mode === 'primary'
              ? 'primary'
              : props.mode === 'secondary'
              ? 'secondary'
              : 'primary',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          _hover: {
            color:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
          },
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
            boxShadow:
              props.mode === 'primary'
                ? '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #e7ebff'
                : props.mode === 'secondary'
                ? '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
                : '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
          },
          _disabled: {
            //TODO: set up styles for this disabled
          },
        }),
        ghost: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary'
              : props.mode === 'secondary'
              ? 'secondary'
              : 'primary',
          boxShadow: 'none',
          _hover: {
            color:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
          },
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
          },
        }),
        link: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary'
              : props.mode === 'secondary'
              ? 'secondary'
              : 'primary',
          boxShadow: 'none',
          _hover: {
            color:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
          },
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
          },
        }),
        naked: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary'
              : props.mode === 'secondary'
              ? 'secondary'
              : 'primary',
          boxShadow: 'none',
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primaryDark'
                : props.mode === 'secondary'
                ? 'secondaryDark'
                : 'primaryDark',
          },
        }),
      },
    },
    Input: {
      baseStyle: {
        field: {},
      },
      sizes: {
        sm: {
          fontWeight: 500,
          height: '40px',
          fontSize: '14px',
          padding: '8px 12px',
        },
        md: {
          fontWeight: 500,
          height: '45px',
          fontSize: '16px',
          padding: '8px 12px',
        },
        lg: {
          fontWeight: 500,
          height: '50px',
          fontSize: '18px',
          padding: '8px 12px',
        },
      },
      variants: {
        outline: {
          field: {
            border: '1px solid',
            borderColor: 'superSilver',
            boxShadow: 'none',
            _invalid: {
              border: '1px solid #e53e3e',
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                border: '1px solid #e53e3e',
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _placeholder: {
              color: 'gravelFint',
            },
            _hover: {
              border: '1px solid #bbbbbb',
              outline: 'none',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'primary',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        filled: {
          field: {
            bg: 'superSilver',
            _invalid: {
              border: '1px solid #e53e3e',
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                border: '1px solid #e53e3e',
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _placeholder: {
              color: 'gravelFint',
            },
            _hover: {
              bg: 'windSweptBeach',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'primary',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        flushed: {
          field: {
            borderBottom: '1px solid',
            borderBottomColor: 'superSilver',
            _invalid: {
              borderBottom: '1px solid #e53e3e',
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                borderBottom: '1px solid #e53e3e',
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _placeholder: {
              color: 'gravelFint',
            },
            _hover: {
              borderBottom: '1px solid #bbbbbb',
              outline: 'none',
            },
            _focus: {
              borderBottom: '1px solid',
              borderBottomColor: 'primary',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        unstyled: {
          field: {
            _placeholder: {
              color: 'gravelFint',
            },
            _invalid: {
              color: 'danger',
            },
          },
        },
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Radio: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Select: {
      baseStyle: {
        field: {},
      },
      sizes: {
        sm: {
          fontWeight: 500,
          height: '40px',
          fontSize: '14px',
          padding: '8px 12px',
        },
        md: {
          fontWeight: 500,
          height: '45px',
          fontSize: '16px',
          padding: '8px 12px',
        },
        lg: {
          fontWeight: 500,
          height: '50px',
          fontSize: '18px',
          padding: '8px 12px',
        },
      },
      variants: {
        outline: {
          field: {
            border: '1px solid',
            borderColor: 'superSilver',
            boxShadow: 'none',

            _invalid: {
              border: '1px solid #e53e3e',
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                border: '1px solid #e53e3e',
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },

            _hover: {
              border: '1px solid #bbbbbb',
              outline: 'none',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'primary',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        filled: {
          field: {
            bg: 'superSilver',
            _invalid: {
              border: '1px solid #e53e3e',
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                border: '1px solid #e53e3e',
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },

            _hover: {
              bg: 'windSweptBeach',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'primary',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        flushed: {
          field: {
            borderBottom: '1px solid',
            borderBottomColor: 'superSilver',
            _invalid: {
              borderBottom: '1px solid #e53e3e',
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                borderBottom: '1px solid #e53e3e',
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _hover: {
              borderBottom: '1px solid #bbbbbb',
              outline: 'none',
            },
            _focus: {
              borderBottom: '1px solid',
              borderBottomColor: 'primary',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        unstyled: {
          field: {
            _invalid: {
              color: 'danger',
            },
          },
        },
      },
    },
    Switch: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Tag: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },

  breakpoints: {
    xs: '300px',
    sm: '600px',
    md: '800px',
    lg: '1000px',
    xl: '1200px',
    '2xl': '1400px',
  },
});
export default theme;
