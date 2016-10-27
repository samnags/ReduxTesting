// importing things from
import {renderComponent, expect } from '../test_helper';

// importing component we're testing
import App from '../../src/components/app';

//
// // describe takes first argument of string and second argument of function
// describe ('App', () => {
//
//   // it also takes first argument of string and second of function
//   it('shows the correct text', () => {
//
//     // create an instance of App
//     const component = renderComponent(App);
//
//     // passing what we're testing into expect
//     expect(component).to.contain('React simple starter');
//
//   });
//
// });

// by wrapping specs within functions, Mocha execute tests and not worry about  handle throwing errors


// I want my comment box is displyaed within App

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  })


})
