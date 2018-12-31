/* eslint-disable no-undef */
import FSelect from './FSelect.vue'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FSelect.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(
      this,
      '<FSelect :items="itemsArrayOfString" label="Awesome label for FSelect component" />',
      {
        components: {
          FSelect
        },
        data () {
          return {
            itemsArrayOfString: ['Hello', 'Nice', 'To', 'Meet', 'You']
          }
        }
      }
    )

    expect(vm.$el.querySelectorAll('.f-select select').length).to.be.equal(1)
  })
})
