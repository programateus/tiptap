import { EditorState } from '@tiptap/pm/state'

import { getNodeAtPosition } from '../../../core/src/helpers/getNodeAtPosition.js'
import { findListItemPos } from './findListItemPos.js'

export const getNextListDepth = (typeOrName: string, state: EditorState) => {
  const listItemPos = findListItemPos(typeOrName, state)

  if (!listItemPos) {
    return false
  }

  const [, depth] = getNodeAtPosition(state, typeOrName, listItemPos.$pos.pos + 4)

  return depth
}
