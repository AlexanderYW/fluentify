import FRadioGroup from './FRadioGroup'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FRadioGroup)
  }
}

use(Plugin)

export default Plugin

export {
  FRadioGroup
}
