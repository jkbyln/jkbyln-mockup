# Plugins
require 'autoprefixer-rails'



http_path = "/"
css_dir = "site/assets/dist/css"
sass_dir = "site/assets/src/sass"
images_dir = "site/assets/src/img"
javascripts_dir = "site/assets/src/js"



# Autoprefix
on_stylesheet_saved do |filename|
  css = File.read(filename)
  File.open(filename, 'w') do |io|
    io << AutoprefixerRails.process(css)
  end
end
