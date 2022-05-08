import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import PetList from './PetList';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders title', () => {
    const { getByRole } = render(
        <Router>
            <Provider store={store}>
                <PetList />
            </Provider>
        </Router>
    );
      
    expect(getByRole('heading')).toHaveTextContent('My Pets')
});
