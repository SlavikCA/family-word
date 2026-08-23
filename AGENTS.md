# AGENTS.md

This project uses eleventy static site generator.
All files in ./_site are generated. They should not be modified, as they will be overwritten by eleventy.

To generate static files, run:

npx @11ty/eleventy

To serve generated files:

npx @11ty/eleventy --serve --port=9000 

Modification to files in ./src are hot-loaded to the browser while eleventy runs.
