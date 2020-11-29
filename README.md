This repo contains a static site template I made built around Metalsmith and NetlifyCMS.

Browser Compatibility notes:
* Uses flexbox so will not work with older browsers. (any browser newer then 2015 should be good, https://caniuse.com/#feat=flexbox) 

# Tech used
* [Metalsmith](https://metalsmith.io/) the static site generator.
* Numerous Metalsmith plug-ins. See the package.json for list.
* [NetlifyCMS](https://www.netlifycms.org/) for static site admin work.
* [Pug](https://pugjs.org/api/getting-started.html) (formerly Jade) for the template engine.
* [Node.js](https://nodejs.org/en/) of course which Metalsmith runs on.

# Features
* MIT Licensed
* __Basic functionality via pure HTML and CSS for visitors.__
    * By removing Javascript from the basic functionality, pages will load and run faster. 
    * You can add JS for any customizations you wish to do. 
    * The web-master of course needs JS to used the NetlifyCMS backend.
* __Tries to be responsive.__
    * I'm no expert web designer, but I tried to make it mobile friendly.
* __Splits CSS styling between two files for easier customization.__
    * The function.css file handles all the basic functionality provided by the template.
    * Add a style.css to customize it to your needs. See the example-style to see how to do this.
* __Admin backend allows for some customizations.__
    * Many basic site stuff like title, favicon, etc
    * Add items to the navbar and sub-navbar menus.
    * Position the navbar in 4 different places. (left, right, top, and beside header)
    * Position sidebar. (left or right)
    * Name of your posts (can call it News, Blog, Thoughts, etc)
* __Supports posts for a Blog/News.__
    * List of most recent posts in sidebar.
    * Posts can be tagged. Tag cloud is added to sidebar.
    * Posts can have a summery for when it is in a large list of posts. (i.e. pagination/tags pages)
    
# Usage

1. Clone the repo.
1. Customize
    * Remove example/test data and stylesheet.
    * Add a src/files/css/style.css based on src/files/css/example-style.css
    * Add any tweaks you want to the templates. Specifically the files in src/templates/partials/ called stylesheets.pug, scripts.pug, and possibly header.pug if you need to tweak that.
    * Add an image for your favicon at src/files/images/favicon.png or customise the location in the stylesheets.pug partial.
1. Update src/files/admin/config.yml to point at your own github/bitbucket/etc repo.
1. Follow [instructions on NetlifyCMS](https://www.netlifycms.org/docs/backends-overview/) to set it up with your online repo provider.
    * You will probably want to run it on Netlify or some other static site hosting provider. Or you can try to roll your own system for generating and serving static sites.
1. Start editing content via the /admin/index.html entry point.

# ToDo
* Work more on this document.
* Actually test and fix positioning for all sidebar and navbar positions. Especially on mobile.
* Expand Admin panel customizations.
* Add pure CSS Modal for "main" html tag images. [Maybe this?](https://codepen.io/Idered/pen/vytkH)
