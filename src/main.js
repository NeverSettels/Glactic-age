import { Planet, User } from './age.logic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';




let planetsHTML = ` <h2 id='click-on-planet'>Click on a planet</h2>
<div class="planets ">
  <div class='planet' id='mercury'><img src="https://nineplanets.org/wp-content/uploads/2019/09/mercury.png"
      alt="Mercury">
  </div>

  <div class='planet' id='mars'><img
      src="https://i.pinimg.com/originals/40/25/d8/4025d8936c88b454a95b857beac7eaec.png" alt="Mars">
  </div>

  <div class='planet' id='venus'>
    <img
      src="https://vignette.wikia.nocookie.net/thesolarsystem6361/images/6/6e/Venus_surface_spacepedia.png/revision/latest/scale-to-width-down/340?cb=20180322151813"
      alt="Venus">

  </div>

  <div class='planet' id='jupiter'>
    <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/04/planet-jupiter-1.png?fit=800%2C800"
      alt="Jupiter">
  </div>
</div>`

$(document).ready(() => {
  const mars = new Planet('Mars', 1.88);
  const jupiter = new Planet("Jupiter", 11.86)
  const mercury = new Planet("Mercury", .24)
  const venus = new Planet("Venus", .62);
  let user = {};


  $('.form-cont').submit(event => {
    event.preventDefault();
    $('.form-cont').addClass('no-display')
    let age = $('#age').val();
    let name = $('#name').val();
    let sex = $('#sex').val();
    user = new User(age, sex, name)
    calculateExpectancy()
    $('#planet-cont').html(planetsHTML)
  })

}); 