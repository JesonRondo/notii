module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      'built': {
        options: {
          compress: true
        },
        files: [{
          expand: true,
          src: ['style/d.less', 'style/r.less'],
          dest: '_/',
          ext: '.css'
        }]
      }
    },

    concat: {
      'built': {
        files: {
          '_/script/d.js': [
            'script/scrolling.js',
            'script/prettify.js',
            'script/d.js'
          ],
          '_/script/r.js': [
            'script/r.js'
          ]
        },
      },
    },

    uglify: {
      'built': {
        files: {
          '_/script/d.js': ['_/script/d.js'],
          '_/script/r.js': ['_/script/r.js'],
          'h5/dist/bundle.js': ['h5/dist/bundle.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['less', 'concat', 'uglify']);

};