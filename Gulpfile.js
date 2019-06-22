const { series, src, watch } = require('gulp')
const  shell = require('gulp-shell')
const clean = require('gulp-clean')

const output = [
  '*.aux',
  '*.bbl',
  '*.blg',
  '*.glg',
  '*.glo',
  '*.gls',
  '*.ist',
  '*.lof',
  '*.log',
  '*.lol',
  '*.out',
  '*.toc'
]

// set up tasks
const tex = () => shell([`lualatex cv-en`])
const purge = () => src(output).pipe(clean({force: true}))

exports.default = () => {
  watch(`contents/en/*.tex`, series(tex, purge))
}