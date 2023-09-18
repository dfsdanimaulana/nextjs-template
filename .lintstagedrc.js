const path = require('path')

const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`

module.exports = {
    '*.{js,jsx,ts,tsx,json,css,scss,html}|!**/.lintstagedrc.js': [
        'npm run prettier:check',
        buildEslintCommand,
    ],
}
