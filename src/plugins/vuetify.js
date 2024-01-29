/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults:{
    global: {
        vBtn: {
          variant:"tonal",
          color: "blue"
        },
        VTextField: {
          variant:"outlined"
        }
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
      dark:{
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          background: '#000000',
        },
      }
    },
  },
})
