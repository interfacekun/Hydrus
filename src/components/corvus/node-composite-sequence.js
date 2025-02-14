import Aquila from 'orion-aquila'
import BTCompositeNode from './node-composite'

class BTSequenceNode extends BTCompositeNode {
  constructor (config) {
    super(Aquila.Utils.lodash.merge({
      type: 'sequence',
      label: {
        icon: 'sequence',
        title: 'Sequence',
        fill: '#A0522D',
        subtitles: ['序列']
      }
    }, config))
  }
}

export default BTSequenceNode
