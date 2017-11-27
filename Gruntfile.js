module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src:  ['src/ajax-autocomplete/js/*.js','src/ajax-autocomplete/js/core/*.js','src/ajax-autocomplete/js/ajax/*.js'],
            dest: 'build/js/<%= pkg.name %>.min.js'
          }
        },
        cssmin: {
            combine: {
              files: {
                'build/css/ajax-autocomplete.min.css': ['src/ajax-autocomplete/css/*.css']
              }
            }
          }
      });
    
      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.loadNpmTasks('grunt-contrib-cssmin');
      
      // Default task(s).
      grunt.registerTask('default', ['uglify','cssmin']);
    
    };