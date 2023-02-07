import { expect, test } from 'vitest'

test('add', () => {
  expect(1 + 1).toBe(2)
  expect('map'.slice(1)).toMatchSnapshot() // 快照，测试在第一次运行时，Vitest 会创建一个快照文件，测试时会对比
  expect('map'.slice(1)).toMatchInlineSnapshot('"ap"') // 内联快照，将快照更新为字符串，而不是创建快照文件
})
