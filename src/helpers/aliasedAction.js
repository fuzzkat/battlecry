// @flow

import aliases from 'aliases';

export default function aliasedAction(actionArg: string) {
  const alias = Object.entries(aliases).find(entry => entry[1] === actionArg);
  return alias ? alias[0] : actionArg;
}