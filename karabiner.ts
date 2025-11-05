// paste it into the karabiner.ts editor
// https://karabiner.ts.evanliu.dev/editor

import {
  // rule and layers
  rule, layer, simlayer, hyperLayer, modifierLayer, duoLayer,
  // from / map()
  map, mapConsumerKey, mapPointingButton, mapSimultaneous, mapDoubleTap, mouseMotionToScroll,
  // to
  toKey, toConsumerKey, toPointingButton, toHyper, toSuperHyper, toMeh, to$, toApp, toPaste, toTypeSequence, toNone, toNotificationMessage, toRemoveNotificationMessage, toInputSource, toSetVar, toUnsetVar, toMouseKey, toMouseCursorPosition, toStickyModifier, toCgEventDoubleClick, toSleepSystem,
  // conditions
  ifApp, ifDevice, ifVar, ifDeviceExists, ifInputSource, ifKeyboardType, ifEventChanged,
  // utils
  withCondition, withMapper, withModifier, modifierKeyAliases, multiModifierAliases, LetterKeyCode, KeyAlias, ModifierKeyAlias, MultiModifierAlias,
  
} from 'karabiner.ts'

let rules = [
  
rule('AULAF87-simple_mod').manipulators([
  map('left_command').toHyper(),
  map('right_option').to('f17'),
  map('application').to('f19', '⌘⌥⌃⇧'),
  map('right_control').to('f20', '⌘⌥⌃⇧'),

  mapDoubleTap('left_shift').to('left_arrow', '⌘'),
  mapDoubleTap('right_shift').to('right_arrow', '⌘'),
]),

simlayer('semicolon', 'Sym-semicolon', 399)
  .options({'key_up_order': 'insensitive'})
  .manipulators([
    map('h').to('left_arrow'),
    map('j').to('down_arrow'),
    map('k').to('up_arrow'),
    map('l').to('right_arrow'),

    map('n').to('right_arrow', '⌘').to('return_or_enter'),
    map('c').to('left_arrow', '⌘').to('right_arrow', '⌘⇧').to('c', '⌘'),
    map('x').to('left_arrow', '⌘').to('right_arrow', '⌘⇧').to('x', '⌘'),
    map('s').to('right_arrow').to(',').to('spacebar'),
  ]),

hyperLayer('o','lunch-app')
  .leaderMode()
  .notification()
  .manipulators({
    a: toApp('Claude'),
    c: toApp('Visual Studio Code'),
    e: toApp('System Settings'),
    h: toApp('Google Chrome'),
    f: toApp('Finder'),
    u: toApp('UpNote'),
    k: toApp('KakaoTalk'),
    m: toApp('Mail'),
    o: toApp('Obsidian'),
    p: toApp('Microsoft Powerpoint'),
    r: toApp('Resilio Sync'),
    s: toApp('Safari'),
    t: toApp('Terminal'),
    z: toApp('Zotero'),
}),

hyperLayer('v','vim-mode')
  .leaderMode({sticky:true, escape:['escape', 'spacebar']})
  .notification()
  .manipulators([
    map('h').to('left_arrow'),
    map('j').to('down_arrow'),
    map('k').to('up_arrow'),
    map('l').to('right_arrow'),
])

]