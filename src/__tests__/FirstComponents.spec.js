import React from 'react';
import renderer from 'react-test-renderer';
import FirstComponents from '../components/FirstComponents';
import NamedComponent from '../components/FirstComponents/NamedComponent';

describe('First components test', () => {
    it('renders the default set of components correctly', () => {
        const firstComponents = renderer.create(<FirstComponents />);
        const tree = firstComponents.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('sets the NamedComponent name when it is given', () => {
        const namedComponent = renderer.create(<NamedComponent name="given" />);
        const instance = namedComponent.root;
        const name = instance.props.name;
        expect(name).toBe("given");
    });
});
