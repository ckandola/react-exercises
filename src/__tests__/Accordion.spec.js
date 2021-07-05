import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/Accordion/AccordionItem';

configure({adapter: new Adapter()});

describe('Accordion tests', () => {
    it('contains the correct questions and answers', () => {
        const component = renderer.create(<Accordion title={'Tests'} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('has the correct response when clicked', () => {
        it('has no answers showing before a click', () => {
            const accordionItem = shallow(<AccordionItem question={'q'} answer={'a'} />);
            const answers = accordionItem.find('.accordion-answer');
            expect(answers).toHaveLength(0);
        });
        it('has answer showing after a click', () => {
            const accordionItem = shallow(<AccordionItem question={'q'} answer={'a'} />);
            const button = accordionItem.find('.accordion-btn');
            button.simulate('click');
            const answers = accordionItem.find('.accordion-answer');
            expect(answers).toHaveLength(1);
        });
        it('has no answers when an opened item is closed', () => {
            const accordionItemWrapper = shallow(<AccordionItem question={'q'} answer={'a'} />);
            const button = accordionItemWrapper.find('.accordion-btn');
            button.simulate('click');
            button.simulate('click');
            const answers = accordionItemWrapper.find('accordion-answer');
            expect(answers).toHaveLength(0);
        });

    }, 10000);
});
