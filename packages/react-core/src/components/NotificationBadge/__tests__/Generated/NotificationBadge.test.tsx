/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { NotificationBadge } from '../../NotificationBadge';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('NotificationBadge should match snapshot (auto-generated)', () => {
  const view = shallow(
    <NotificationBadge isRead={false} children={<div>ReactNode</div>} className={'string'} aria-label={'string'} />
  );
  expect(view).toMatchSnapshot();
});
