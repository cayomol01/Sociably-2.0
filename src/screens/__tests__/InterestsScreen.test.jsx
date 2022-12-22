import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native'

import InterestsScreen from '../InterestsScreen';

test('renders correctly', () => {
    const tree = renderer.create(<InterestsScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Test "Comedia" button', async () => {
    render(<InterestsScreen/>)

    const ComButton = await screen.findByText('Comedia')
    expect(ComButton).toBeTruthy()

    fireEvent(ComButton, 'press')
});

test('Test "Skip" button', async () => {
    render(<InterestsScreen/>)

    const SkipButton = await screen.findByText('Skip')
    expect(SkipButton).toBeTruthy()

    fireEvent(SkipButton, 'press')
});

test('Test "Next" button', async () => {
    render(<InterestsScreen/>)

    const NextButton = await screen.findByText('Next')
    expect(NextButton).toBeTruthy()

    fireEvent(NextButton, 'press')
});

describe('Testing correct tag keeping', function () {

    const logSpy = jest.spyOn(global.console, 'log')

    test('Testing blank tags', async () => {

        render(<InterestsScreen/>)

        const NextButton = await screen.findByText('Next')

        fireEvent(NextButton, 'press')

        expect(logSpy).toHaveBeenLastCalledWith([])

    });

    test('Testing enabling tag', async () => {

        render(<InterestsScreen/>)

        const Comedia = await screen.findByText('Comedia')
        const NextButton = await screen.findByText('Next')

        fireEvent(Comedia, 'press')

        fireEvent(NextButton, 'press')

        expect(logSpy).toHaveBeenLastCalledWith([ 'Comedia' ])

    });

    test('Testing disabling a tag', async () => {

        render(<InterestsScreen/>)

        const Comedia = await screen.findByText('Comedia')
        const NextButton = await screen.findByText('Next')

        fireEvent(Comedia, 'press')

        fireEvent(Comedia, 'press')

        fireEvent(NextButton, 'press')

        expect(logSpy).toHaveBeenLastCalledWith([])

    });

    test('Testing two tag', async () => {

        render(<InterestsScreen/>)

        const Comedia = await screen.findByText('Comedia')
        const Deportes = await screen.findByText('Deportes')
        const NextButton = await screen.findByText('Next')

        fireEvent(Comedia, 'press')

        fireEvent(Deportes, 'press')

        fireEvent(NextButton, 'press')

        expect(logSpy).toHaveBeenLastCalledWith([ 'Deportes', 'Comedia' ])

    });

});

