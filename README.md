# Project

This project aims to create a static site template, built around Metalsmith and NetlifyCMS, that limits the use of javascript as much as possible on the frontend. Javascript can definitely be added, but I wanted to avoid it as much as possible for the base template.

The no JS goal comes from two sources: 1) to focus more on learning how far one can go with just CSS and 2) because I know some people in the FOSS community that are very much against remote code being executed in their browser and thought it would be an interesting challenge to cater to that desire a bit.

__Browser Compatibility notes__:
* Uses flexbox CSS feature so will not work with browsers older then 2015. See https://caniuse.com/#feat=flexbox.

# Tech used
* [Metalsmith](https://metalsmith.io/) as the static site generator.
* Numerous Metalsmith plug-ins. See the package.json for the full list.
* [NetlifyCMS](https://www.netlifycms.org/) for an admin panel to make edits a bit easier.
* [Pug](https://pugjs.org/api/getting-started.html) (formerly Jade) for the template engine.
* [Node.js](https://nodejs.org/en/) of course which Metalsmith runs on.

# Features
* MIT Licensed
* __Basic functionality via pure HTML and CSS for visitors.__
    * By removing Javascript from the basic functionality, pages will load and run faster. 
    * You can add JS for any customization you wish to do. 
    * The admin panel via NetlifyCMS of course needs a good amount of JS.
* __Tries to be responsive.__
    * I'm no expert web designer, but I tried to make it mobile friendly.
* __Splits CSS styling between two files for easier customization.__
    * The function.css file handles all the basic functionality provided by the template.
    * Add a style.css to customize it to your needs. See the example-style.css to see how to do this.
* __Admin panel allows for customization of the website.__
    * Many basic site stuff like title, favicon, etc
    * Add items to the navbar and sub-navbar menus.
    * Position the navbar in 4 different places. (left, right, top, and beside header)
    * Position sidebar. (left or right)
    * Name of your posts (can call it News, Blog, Thoughts, etc)
* __Supports posts for a Blog/News.__
    * List of most recent posts in sidebar.
    * Posts can be tagged. Tag cloud is added to sidebar.
    * Posts have a short summery generated for any lists they belong in.

    
# Usage

1. Clone/Fork the repo.
1. Customize
    * Remove the example documents (src/documents/\*) and example images (src/files/images/*).
    * Add a src/files/css/style.css based on src/files/css/example-style.css
    * Add any tweaks you want to the templates. Specifically the files in src/templates/partials/ called stylesheets.pug, scripts.pug, and possibly header.pug.
    * Add an image for your favicon at src/files/images/favicon.png or customize the location in the stylesheets.pug partial.
1. Create a new repo and push to it (assuming you didn't just fork this one).
1. Update src/files/admin/config.yml to point at your own github/bitbucket/etc repo.
1. Follow [instructions on NetlifyCMS](https://www.netlifycms.org/docs/backends-overview/) to set it up with your online git repository provider.
    * You will probably want to run it on Netlify or some other static site hosting provider. Or you can try to roll your own system for generating and serving static sites.
1. Setup with a static site service like Netlify (netlify.com).
1. Start editing content via the /admin/index.html entry point.

# ToDo
* Work more on this document.
* Actually test and fix positioning for all sidebar and navbar positions. Especially on mobile.
* Expand Admin panel customization.
* Add pure CSS Modal for "main" html tag images. [Maybe this?](https://codepen.io/Idered/pen/vytkH)
* Need to work out a better way to propagate changes from this main repo to forks without messing up the changes done by the forks.
