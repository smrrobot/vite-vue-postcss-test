import postcssNested from 'postcss-nested'
import autopreFixer from 'autoprefixer'
import nestedVars from 'postcss-nested-vars'
export default {
    plugins: [
        postcssNested(),
        autopreFixer(),
        nestedVars(),
    ]
  }