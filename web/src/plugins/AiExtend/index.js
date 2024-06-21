import { aiUpdateNodes } from './utils.js'
class AiExtend {
  //  构造函数
  constructor(opt = {}) {
    console.log('ai extend inited')
    this.mindMap = opt.mindMap
    this.bindEvent()
  }
  bindEvent() {
    this.mindMap.on('node_update', async (node) => {
      console.trace('node_update')
      // parent's children node remove requireUpdate status
      if (!node.parent) {
        return
      }
      const nodeTexts = await aiUpdateNodes(node.parent, this.mindMap)
      console.log({nodeTexts})
      nodeTexts.forEach((text, index) => {
        if (node.parent.children[index]) {
          const child = node.parent.children[index]

          const originalText = child.getPureData().data.text
          this.mindMap.execCommand('SET_NODE_TEXT', child, `${originalText}\n${text}`)
        } else {
          this.mindMap.execCommand('INSERT_CHILD_NODE',false, node.parent,
            {
              data: {
                text
              },
              children: []
            },
            []
          )
        }
      })
      node.parent.children.forEach((childNode) => {
        childNode.setNodeRequireUpdate(false)
      })
    })
    this.mindMap.command.add('INSERT_AI_CHILD_NODE', async (node, prompt) => {
      console.log('INSERT_AI_CHILD_NODE')
      console.log({prompt})
      const nodeTexts = await aiUpdateNodes(node, this.mindMap, prompt)
      console.log({nodeTexts})
      this.mindMap.execCommand('INSERT_MULTI_CHILD_NODE', node, 
        nodeTexts.map(item => {
          return {
            data: {
              text: item
            },
            children: []
          }
        })
      )
    })
  }
}

AiExtend.instanceName = 'doAiExtend'

export default AiExtend
