fs               = require 'fs'
axis             = require 'axis'
rupture          = require 'rupture'
autoprefixer     = require 'autoprefixer-stylus'
js_pipeline      = require 'js-pipeline'
css_pipeline     = require 'css-pipeline'
records          = require 'roots-records'
collections      = require 'roots-collections'
excerpt          = require 'html-excerpt'
moment           = require 'moment'
cleanUrls        = require 'clean-urls'
config           = require 'roots-config'
SitemapGenerator = require 'sitemap-generator'
lodash           = require 'lodash'


monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  locals:
    postExcerpt: (html, length, ellipsis) ->
      excerpt.text(html, length || 100, ellipsis || '...')
    dateFormat: (date, format) ->
      moment(date).format(format)
    sortByKey: (obj) ->
      lodash.sortBy(obj, [ (o) ->
          new Date(o.date)
        ]).reverse()

  extensions: [
    records(
      menu: { file: "data/menu.json" }
      site: { file: "data/site.json" }
      files: { file: "data/files.json" }      
    ),
    config(
      menu: 'hide'
      header: 'show'
      about: 'hide'
      services: 'show'
      offers: 'hide'
      blog: 'hide'
    ),
    collections(folder: 'blog', layout: 'blogpost'),
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
