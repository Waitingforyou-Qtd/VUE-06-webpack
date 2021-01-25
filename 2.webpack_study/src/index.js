import $ from 'jquery'
import './css/1.css'
$(function () {
  $('li:odd').css('backgroundColor', 'blue')
  $('li:even').css('backgroundColor', 'red')
})
