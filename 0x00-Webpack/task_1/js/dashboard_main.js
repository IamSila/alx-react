import $ from 'jquery';
import _ from 'lodash';

const count = 0;

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id = "count"></p>`);
$('body').append('<p>Copyright - ALX</p>');


function updateCounter() {
    count++;
    $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
