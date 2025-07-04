import { DEFAULT_USER_CONFIG } from './constants'
import { spawn } from 'cross-spawn'
import dayjs from 'dayjs'
import fg, { Options } from 'fast-glob'
import fse from 'fs-extra'
import path from 'path'

export async function globDocs(
  path = DEFAULT_USER_CONFIG.docs,
  options?: Options | undefined,
) {
  return await fg.glob('**/*.{jsx,tsx,md,mdx}', {
    ignore: ['node_modules/**', 'client/**', 'server/**'],
    cwd: path,
    deep: 3,
    ...options,
  })
}

const cache = new Map<string, number>()

export function getGitTimestamp(file: string) {
  const cached = cache.get(file)

  if (cached) return cached

  if (!fse.existsSync(file)) return 0

  return new Promise<number | undefined>((resolve, reject) => {
    const child = spawn(
      'git',
      ['log', '-1', '--pretty="%ai"', path.basename(file)],
      { cwd: path.dirname(file) },
    )

    let output = ''

    child.stdout.on('data', (d) => (output += String(d)))

    child.on('close', () => {
      if (output) {
        const timestamp = dayjs(output).unix()

        cache.set(file, timestamp)

        resolve(timestamp)
      } else {
        resolve(undefined)
      }
    })

    child.on('error', reject)
  })
}

export async function promiseLimit<T, R>(
  arr: T[],
  limit: number,
  asyncFn: (item: T) => Promise<R>,
): Promise<R[]> {
  const ret: R[] = new Array(arr.length)
  const executing: Promise<void>[] = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const p = (async () => {
      const res = await asyncFn(item)

      ret[i] = res
    })()

    executing.push(p)

    if (executing.length >= limit) {
      await Promise.race(executing)
    }
  }

  await Promise.all(executing)

  return ret
}
