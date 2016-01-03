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
    drafts = require('metalsmith-drafts');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbs').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbs').toString());
Handlebars.registerHelper('excerpt', function(body){
    var excerpt = body.split('\n');

    return excerpt[0].replace('<p>', '').replace('</p>', '') + '...';
});
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
    }));
    
if(env === 'dev'){
    metalsmith.use(
    	watch({
    		paths: {
    			"${source}/**/*": true,
    			"templates/**/*": "**/*.hbs"
    		},
    		livereload: true
    	})
    )
	.use(serve({
		port: 1234
	}));
}

metalsmith.destination('./build')
    .build(function(err, files) {
        if (err) { console.log(err) }
    });
