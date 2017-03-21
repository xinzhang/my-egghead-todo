import React from 'react';
import MyLink from './MyLink';
import renderer from 'react-test-renderer';

test('Link change the class when hovered', () => {
  const component = renderer.create(
    <MyLink page="http://www.google.com">Google</MyLink>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
      tree.props.onMouseLeave();
      // re-rendering
      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})
