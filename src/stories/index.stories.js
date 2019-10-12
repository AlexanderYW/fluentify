/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

// import * as components from '../components'
import '../scss/fluentify.scss'
import FBtn from '../components/FBtn/FBtn.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { FBtn },
    template: '<f-btn @click="action">Hello Button</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { FBtn },
    template: '<f-btn @click="action">😀 😎 👍 💯</f-btn>',
    methods: { action: action('clicked') }
  }))
