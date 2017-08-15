var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filterChapter(html) {
  var $ = cheerio.load(html)
  var chapters = $('.chapter')
  var courseData = []

  // Filter raw code
  chapters.each(function(item) {
    var chapter  = $(this)
    var chapterTitle = chapter.find('strong').text().trim()
    var videos = chapter.find('.video').children('li')

    var chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    }

    videos.each(function(item) {
      var video = $(this).find('.J-media-item')
      var videoID = video.attr('href').split('video/')[1]
      var videoTitle = video.text().trim()
      
      chapterData.videos.push({
        id: videoID,
        title: videoTitle
      })
    })

    courseData.push(chapterData)
  })

  return courseData
}

function printCourseInfo(courses) {
  let counter = 0
  courses.forEach(function(item) {
    console.warn(++counter)

    console.log(item)
  })
}

http.get(url, function(res) {
  var html = ' '

  res.on('data', function(data) {
    html += data
  })

  res.on('end', function() {
    var courses = filterChapter(html)

    printCourseInfo(courses)
  })
}).on('error', function() {
  console.error('download error')
})