import { Planet, User } from './age.logic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';






$(document).ready(() => {
  const mars = new Planet('Mars', 1.88);
  const jupiter = new Planet("Jupiter", 11.86)
  const mercury = new Planet("Mercury", .24)
  const venus = new Planet("Venus", .62);
  let user = {};


  $('#form-cont').submit(event => {
    event.preventDefault();
    $('.form-cont').addClass('no-display')
    let age = $('#age').val();
    let name = $('#name').val();
    let sex = $('#sex').val();
    user = new User(age, sex, name)
    user.calculateExpectancy()

  })

}); 