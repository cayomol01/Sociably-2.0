import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native'

import InterestsScreen from '../InterestsScreen';

test('renders correctly', () => {
    const tree = renderer.create(<InterestsScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});
