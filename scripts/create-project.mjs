import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rawArg = process.argv[2] ?? ''
const folderName = rawArg.trim().replace(/[\\/]+$/, '')

if (
  !folderName ||
  folderName === '.' ||
  folderName === '..' ||
  /[\\/]/.test(folderName)
) {
  console.error('Usage: npm run weekly:create <folder_name>')
  console.error('Example: npm run weekly:create week1')
  process.exit(1)
}

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = dirname(scriptDir)
const starterDir = resolve(projectRoot, 'starter')
const projectsDir = resolve(projectRoot, 'projects')
const targetDir = resolve(projectsDir, folderName)

if (!existsSync(starterDir)) {
  console.error(`Error: Starter directory '${starterDir}' not found.`)
  process.exit(1)
}

if (existsSync(targetDir)) {
  console.error(
    `Error: Target directory 'projects/${folderName}' already exists.`,
  )
  process.exit(1)
}

mkdirSync(projectsDir, { recursive: true })

console.log(`Creating new project folder: projects/${folderName}...`)
cpSync(starterDir, targetDir, {
  recursive: true,
  filter: (src) => {
    const name = basename(src)
    return name !== 'node_modules' && name !== 'dist'
  },
})

console.log(`Successfully created projects/${folderName}.`)
console.log(`Next: cd projects/${folderName} && npm install && npm run dev`)
