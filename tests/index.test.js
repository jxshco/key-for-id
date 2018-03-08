import keyForID from '../src'

test('gets correct key', () => {
  expect(keyForID([{name: 'Josh'}, {name: 'Steven'}, {name: 'Sarah'}], 'name', 'Sarah')).toBe(2)
})
