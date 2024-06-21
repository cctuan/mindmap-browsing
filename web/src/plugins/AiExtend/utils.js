
import OpenAI from 'openai';
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { HumanMessage } from "@langchain/core/messages";
import { z } from "zod";

function getPlainText(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.textContent || "";
}

export const extractParentNodesAsString = (mindMapNode) => {
  let currentNode = mindMapNode
  const parentNodes = [currentNode]
  window._currentNode = currentNode
  while (currentNode.parent) {
    parentNodes.push(currentNode.parent)
    currentNode = currentNode.parent
  }
  return `
    以下內容將依照關係性排序，從關係最近的節點內容到關係最遠的內容:\n
    ${parentNodes.map((node, index) => {
    if (index < parentNodes.length - 1) {
      return `
      節點${index + 1}:
      ${getPlainText(node.getPureData().data.text)}`
    } else {
      return `
      最近節點:
      ${getPlainText(node.getPureData().data.text)}`
    }
  }).join('\n')}
  `
}

const extractAssociatedNodesAsString = (mindMapNode, mindMap) => {
  const associatedNodeUids = mindMapNode.getData().associativeLineParents
  if (!associatedNodeUids || associatedNodeUids.length === 0) {
    return ''
  }
  const associatedContext = associatedNodeUids.map((uid) => {
    const node = mindMap.renderer.findNodeByUid(uid)
    return `${getPlainText(node.getPureData().data.text)}`
  }).join('\n')
  return `相關性資料參考: \n${associatedContext}\n`
}

const defaultPrompt = "You are a helpful mindmap assistant, you will generate 3 ideas extended from parent nodes and considering of associated nodeContext." 

export const extendIdeas = async (node, mindMap, promptSetting = defaultPrompt) => {
  const openaiApiKey = mindMap.getConfig('openaiApiKey')
  if (!openaiApiKey) {
    throw new Error('openaiApiKey is required')
    return
  }
  const content = extractParentNodesAsString(node)
  const associatedContext = extractAssociatedNodesAsString(node, mindMap)
  const model = new ChatOpenAI({
    temperature: 0.5,
    model: 'gpt-4o',
    apiKey: openaiApiKey, // This is the default and can be omitted
  })
  const responseSchema = z.object({
    result: z.array(z.string()).describe('Array of generated knowledge')
  })
  const modelWithStructuredOutput = model.withStructuredOutput(responseSchema);
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", promptSetting],
    ["human", `Parent Node Context: ${content}\n${associatedContext}\n`],
  ]);
  console.log({
    promptSetting,
    content,
    associatedContext,
  })
  try {
    const chain = prompt.pipe(modelWithStructuredOutput);
    const llmResult = await chain.invoke({});
    console.log({llmResult})
    return llmResult.result
  } catch (e) {
    console.error(e)
    return []
  }
}

// string[]


// set child node status to 'isChanged'


// update nodes based on context

// update parentNodes
export const aiUpdateNodes = async (node, mindMap, prompt) => {
  return await extendIdeas(node, mindMap, prompt)
}
