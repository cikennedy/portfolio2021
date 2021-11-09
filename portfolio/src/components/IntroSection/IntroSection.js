import React from 'react';
import { Section } from '..';
import Photo from './Photo/Photo';
import Socials from './Socials/Socials';
import Intro from './Intro/Intro';

export default (props) => {
    const { user } = props;
    return (
        <Section>
            <Photo image={user.pic} />
            <Socials {...user.socialProfiles} />
            <Intro {...user} />
        </Section>
    )
}