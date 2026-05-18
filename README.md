## Code for my personal website

This website is built with Hugo, using blogdown. I use katherinehebert template to build mine, because it was awsome.  This README contains some useful things to remember. 

-   `blogdown::serve_site()` to serve the site locally and see changes as you make them.

-   `blogdown::build_site()` when finished updating the site. The site is configured to build directly into the `docs/` folder so it can be deployed to GitHub Pages.

To edit the content of the website,

-   `data/` folder contains the .yml files with the elements on the website.

-   `static/images` contains the images that can be inserted into the .yml files containing the content.

-   `config.yaml` contains contact info, the theme settings, and the GitHub Pages build output folder.

-   `layouts/partials/publications.html` to add publications.

-   `themes/hugo-story/assets/sass/libs/_vars.scss` to change the colour of text, buttons, hover links, backgrounds, etc.

