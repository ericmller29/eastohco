var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    Handlebars  = require('handlebars'),
    fs          = require('fs'),
    watch = require('metalsmith-watch'),
    serve = require('metalsmith-serve'),
    dateFormatter = require('metalsmith-date-formatter'),
    sass = require('metalsmith-sass'),
    env = process.env.mode,
    drafts = require('metalsmith-drafts'),
    excerpts = require('metalsmith-excerpts'),
    sitemap = require('metalsmith-sitemap');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbs').toString());
Handlebars.registerPartial('projects', fs.readFileSync(__dirname + '/templates/partials/projects.hbs').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbs').toString());

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a == b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
});

var metalsmith = Metalsmith(__dirname)
	.use(collections({
		pages: {
			pattern: 'content/pages/*.md'
		},
        projects: {
            pattern: 'content/projects/*.md'
        },
		posts: {
			pattern: 'content/posts/*.md',
            sortBy: 'publishedDate',
            reverse: true
		},
        navItems: {
            sortBy: 'navOrder'
        }
	}))
	.use(dateFormatter({
    	dates: [{
    		key: 'publishedDate',
    		format: 'MMMM DD, YYYY'
    	}]
	}))
	.use(sass({
		file: 'screen.css',
		outputDir: 'css/'
	}))
    .use(drafts())
    .use(markdown())
    .use(excerpts())
    .use(permalinks({
      	linksets: [
      		{
      			match: { collection: 'pages' },
      			pattern: ':title'
      		},
      		{
      			match: { collection: 'posts' },
      			pattern: 'blog/:title'
      		}
      	]
    }))
    .use(templates({
    	engine: 'handlebars',
    	directory: './templates'
    }))
    .use(sitemap({
        hostname: 'http://www.eastoh.co'
    }));
    
if(env === 'dev'){
    metalsmith
	.use(serve({
		port: 1234
	}));
}

metalsmith.destination('./build')
    .build(function(err, files) {
        if (err) { console.log(err) }
    });
