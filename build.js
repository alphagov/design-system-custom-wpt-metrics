const nunjucks = require('nunjucks')

process.stdout.write(nunjucks.render('output.njk'))
