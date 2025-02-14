import Aquila from 'orion-aquila'
import BTCompositeNode from './node-composite'

class BTParallelNode extends BTCompositeNode {
  constructor (config) {
    super(Aquila.Utils.lodash.merge({
      type: 'parallel',
      label: {
        icon: 'parallel',
        title: 'Parallel',
        fill: '#EE2C2C',
        subtitles: ['并行']
      }
    }, config))
  }
}

export default BTParallelNode
