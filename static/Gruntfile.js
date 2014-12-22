module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      'built': {
        options: {
          compress: true
        },
        files: [{
          expand: true,
          src: ['style/d.less'],
          dest: '_/',
          ext: '.css'
        }]
      }
    },

    concat: {
      'built': {
        files: {
          '_/script/d.js': [
            'script/prettify.js',
            'script/scrolltop.js'
          ],
        },
      },
    },

    uglify: {
      'built': {
        files: {
          '_/script/d.js': ['_/script/d.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['less', 'concat', 'uglify']);

};