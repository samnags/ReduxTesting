import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'


describe('CommentList', () => {
  let component;

  beforeEach(() => {
    // need to push props into component
    // third argument of renderComponent is props
    const props = { comments: ['New Comment', 'Other new Comment']}
    component = renderComponent(CommentList, null, props )
  })

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  })

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other new Comment');
  })


})
