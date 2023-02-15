import {Twitter} from './Twitter';
import {Linkedin} from './Linkedin';
import {Github} from './Github';

export function SocialLinks() {
    return (
        <>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/azproduction/en/'>
                <Linkedin />
            </a>
            <a target='_blank' rel='noreferrer' href='https://github.com/azproduction'>
                <Github />
            </a>
            <a target='_blank' rel='noreferrer' href='https://twitter.com/azproduction'>
                <Twitter />
            </a>
        </>
    );
}
