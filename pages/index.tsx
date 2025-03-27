import {Layout} from '../src/components/Layout';
import {SocialLinks} from '../src/components/SocialLinks';
import {DownloadCv} from '../src/components/DownloadCv';
import {ProfilePicture} from '../src/components/ProfilePicture/ProfilePicture';

const Index = () => (
    <Layout>
        <section className='section section-started'>
            <div className='container'>
                <div className='hero-started'>
                    <ProfilePicture />
                    <div className='content'>
                        <div className='titles'>
                            <div className='subtitle'>Staff Frontend Engineer & Tech&nbsp;Leader</div>
                            <h2 className='title'>Misha Davydov</h2>
                        </div>
                        <div className='description'>
                            <p>
                                Based in Berlin, I lead advanced frontend and mobile projects, crafting powerful GraphQL
                                APIs, React, Node.js, and React Native apps with AI integration driving superior digital
                                experiences.
                            </p>
                            <div className='social-links'>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                    <div className='info-list'>
                        <ul>
                            <li>
                                Based in <strong>Berlin</strong>
                            </li>
                            <li>
                                Experience <strong>{new Date().getFullYear() - 2006}+ Years</strong>
                            </li>
                            <li>
                                Date of Birth <strong>02 April 1986</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className='section section-bg section-parallax section-parallax-1' id='about-section'>
            <div className='container'>
                {/* Section Heading */}
                <div className='m-titles'>
                    <h2 className='m-title'>About Me</h2>
                </div>
                <div className='row row-custom'>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right'>
                        {/* Section numbers */}
                        <div className='numbers-items'>
                            <div className='numbers-item'>
                                <div className='icon'>
                                    <svg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 28 28'>
                                        <path
                                            fill='currentColor'
                                            d='m4 16 11 .001a2 2 0 0 1 1.995 1.85l.005.15V20.5c-.001 4.2-4.287 5.5-7.5 5.5-3.149 0-7.329-1.249-7.495-5.251L2 20.5V18c0-1.054.816-1.918 1.85-1.995L4 16Zm13.22.001L24 16c1.054 0 1.918.816 1.995 1.85L26 18v2c-.001 3.759-3.43 5-6 5-1.058 0-2.259-.215-3.309-.725.752-.894 1.24-2.032 1.302-3.464L18 20.5v-2.499c0-.702-.249-1.34-.654-1.85L17.22 16 24 16l-6.78.001ZM9.5 3a5.5 5.5 0 1 1-.001 11.001A5.5 5.5 0 0 1 9.5 3Zm11 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z'
                                        />
                                    </svg>
                                </div>
                                <div className='num'>114</div>
                                <div className='title'>
                                    Developers <br />
                                    Mentored
                                </div>
                            </div>
                            <div className='numbers-item'>
                                <div className='icon'>
                                    <svg
                                        height='32'
                                        width='32'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'>
                                        <path
                                            fill='currentColor'
                                            d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z'
                                        />
                                    </svg>
                                </div>
                                <div className='num'>23</div>
                                <div className='title'>
                                    Launched <br />
                                    Web Apps
                                </div>
                            </div>
                            <div className='numbers-item'>
                                <div className='icon'>
                                    <a target='_blank' rel='noreferrer' href='https://speakerdeck.com/azproduction'>
                                        <svg height='32' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                                            <path
                                                fill='currentColor'
                                                d='M176 0C123 0 80 43 80 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z'
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className='num'>13</div>
                                <div className='title'>
                                    Public <br />
                                    Talks
                                </div>
                            </div>
                            <div className='numbers-item'>
                                <div className='icon'>
                                    <svg xmlns='http://www.w3.org/2000/svg' height='32' width='32' viewBox='0 0 56 56'>
                                        <path
                                            fill='currentColor'
                                            d='M8.969 51.004c.984 0 1.781-.773 1.781-1.781V36.215c.586-.258 2.79-1.102 6.234-1.102 8.672 0 14.11 4.242 22.36 4.242 3.656 0 5.015-.398 6.797-1.195 1.617-.726 2.672-1.945 2.672-4.101V10.246c0-1.242-1.079-1.992-2.438-1.992-1.148 0-3.305 1.008-7.336 1.008-8.25 0-13.664-4.266-22.36-4.266-3.656 0-5.038.398-6.82 1.195-1.617.727-2.671 1.97-2.671 4.102v38.93c0 .96.82 1.78 1.78 1.78Z'
                                        />
                                    </svg>
                                </div>
                                <div className='num'>3</div>
                                <div className='title'>
                                    Teams <br />
                                    Led
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
                        {/* Section Profile */}
                        <div className='profile-box'>
                            <div className='text'>
                                <p>
                                    My name is Mikhail Davydov. I am a Staff Frontend Engineer and Tech Leader with
                                    a&nbsp;passion for creating exceptional user interfaces and developing
                                    frontend-centric APIs that empower teams. My primary tech stack comprises
                                    TypeScript, React, React&nbsp;Native, Node.js, and GraphQL.
                                </p>
                                <p>
                                    In 2014, I relocated to Germany, marking the beginning of a robust international
                                    career. Over the years, I have contributed to several high-impact startups, where I
                                    honed my skills as a full-stack developer and led technical teams as a Tech Lead—an
                                    experience that has perfectly paved the way for my current role as a Staff Frontend
                                    Engineer. My drive for continuous progress means that AI and LLM tools are a regular
                                    part of my daily workflow, accelerating development while my core technical
                                    expertise remains central to every decision.
                                </p>
                                <p>
                                    I have also earned recognition as a public speaker, delivering over ten
                                    presentations at prominent international conferences. My commitment to
                                    knowledge-sharing led me to teach JavaScript and related web technologies for two
                                    years, mentoring hundreds of aspiring developers. I consistently stay up-to-date
                                    with modern technology by engaging with a diverse range of industry resources and
                                    digital platforms.
                                </p>
                                <p>
                                    Fun fact: I once spent a year working at a uranium enrichment plant. In my spare
                                    time, I enjoy exploring analog photography.
                                </p>
                                <DownloadCv />
                                <div className='signature'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section section-parallax section-parallax-2' id='resume-section'>
            <div className='container'>
                {/* Section Heading */}
                <div className='m-titles'>
                    <h2 className='m-title'>My Resume</h2>
                </div>
                <div className='row row-custom'>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
                    <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
                        {/* Description */}
                        <div className='text'>
                            <p>
                                As a Staff Frontend Engineer & Tech Leader, I serve as a pivotal link between various
                                teams, including backend, design, dev-ops, legal, product, data, HR, and PR. Ensuring
                                cohesive execution and technical excellence. My core expertise in TypeScript, React,
                                React&nbsp;Native, Node.js, and GraphQL drives the development of innovative frontend
                                solutions, while I remain committed to cultivating a collaborative and high-performing
                                engineering culture.
                            </p>
                            <p>
                                I actively contribute to critical architectural and strategic decisions, lead
                                team-building initiatives, and conduct workshops and mentoring sessions. Beyond internal
                                collaboration, I represent the company at public speaking engagements, author technical
                                articles, and teach JavaScript and web technologies in both corporate and academic
                                settings. As a maintainer of essential frontend libraries, I ensure our components and
                                coding standards consistently reflect industry best practices.
                            </p>
                            <p>
                                Whether launching a project from the ground up or evolving an established codebase, my
                                goal is to deliver outstanding products that propel the company forward.
                            </p>
                        </div>
                        {/* Services */}
                        <div className='p-title'>EXPERIENCE</div>
                        <div className='services-items'>
                            <div className='services-col'>
                                <div className='services-item'>
                                    <div className='icon'>
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 630 630' width='64'>
                                            <rect width='630' height='630' fill='#f7df1e' />
                                            <path d='m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z' />
                                        </svg>
                                    </div>
                                    <div className='title'>JavaScript/TypeScript</div>
                                    <div className='text'>
                                        <p>
                                            Expert knowledge in JavaScript and TypeScript. I bring deep expertise in
                                            contemporary ECMAScript standards, leveraging modern web APIs and TypeScript
                                            to deliver high-quality, scalable web solutions grounded in object-oriented
                                            and functional programming paradigms.{' '}
                                            <i>19+ years of active work experience.</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='services-col'>
                                <div className='services-item'>
                                    <div className='icon'>
                                        <svg
                                            width='64'
                                            viewBox='0 0 256 282'
                                            xmlns='http://www.w3.org/2000/svg'
                                            preserveAspectRatio='xMinYMin meet'>
                                            <g fill='#8CC84B'>
                                                <path d='M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z' />
                                                <path d='M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z' />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='title'>Node.js</div>
                                    <div className='text'>
                                        <p>
                                            Advanced expertise in Node.js, used to solve business needs by optimizing
                                            team efficiency and accelerating market delivery. My expertise in V8,
                                            asynchronous I/O, and design patterns delivers scalable backend solutions,
                                            leveraging JavaScript unity for streamlined development.{' '}
                                            <i>10+&nbsp;years of active work experience.</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='services-col'>
                                <div className='services-item'>
                                    <div className='icon'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='-11.5 -10.23174 23 20.46348'
                                            width='64'>
                                            <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
                                            <g stroke='#61dafb' strokeWidth='1' fill='none'>
                                                <ellipse rx='11' ry='4.2' />
                                                <ellipse rx='11' ry='4.2' transform='rotate(60)' />
                                                <ellipse rx='11' ry='4.2' transform='rotate(120)' />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='title'>React</div>
                                    <div className='text'>
                                        <p>
                                            Expert knowledge of React guts, optimisations, component composition,
                                            maintaining of company-wide components libraries, cross-team component
                                            sharing via Module Federation. <i>10+ years of active work experience.</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='services-col'>
                                <div className='services-item'>
                                    <div className='icon'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='-11.5 -10.23174 23 20.46348'
                                            width='64'>
                                            <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
                                            <g stroke='#61dafb' strokeWidth='1' fill='none'>
                                                <ellipse rx='11' ry='4.2' />
                                                <ellipse rx='11' ry='4.2' transform='rotate(60)' />
                                                <ellipse rx='11' ry='4.2' transform='rotate(120)' />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='title'>React Native</div>
                                    <div className='text'>
                                        <p>
                                            Advanced expertise in React Native combined with a robust end-to-end
                                            deployment process that significantly shortens deployment, review, and
                                            testing cycles—ensuring faster time-to-market without compromising quality.{' '}
                                            <i>6+ years of active work experience.</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='services-col'>
                                <div className='services-item'>
                                    <div className='icon'>
                                        <svg viewBox='-5 -5 34 34'>
                                            <defs>
                                                <linearGradient
                                                    id='gradient-fill'
                                                    x1='0'
                                                    y1='34'
                                                    x2='34'
                                                    y2='0'
                                                    gradientUnits='userSpaceOnUse'>
                                                    <stop offset='0' stopColor='#5f5195' />
                                                    <stop offset='0.2' stopColor='#98509d' />
                                                    <stop offset='1' stopColor='#ff6f4e' />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d='M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z'
                                                fill='url(#gradient-fill)'
                                            />
                                        </svg>
                                    </div>
                                    <div className='title'>AI and LLM</div>
                                    <div className='text'>
                                        <p>
                                            Deep integration of AI technologies into various workflows including code
                                            generation, QA, scripting, project management, and exploratory projects to
                                            drive innovation, enhance efficiency. I leverage LLM solutions to boost
                                            performance while ensuring safeguard of intellectual property.{' '}
                                            <i>3+ Years of collaboration experience.</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='services-col'>
                                <div className='services-item'>
                                    <div className='icon'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlSpace='preserve'
                                            viewBox='0 0 400 400'
                                            width='64'>
                                            <path
                                                fill='#E535AB'
                                                d='m57.468 302.66-14.376-8.3 160.15-277.38 14.376 8.3z'
                                            />
                                            <path fill='#E535AB' d='M39.8 272.2h320.3v16.6H39.8z' />
                                            <path
                                                fill='#E535AB'
                                                d='m206.348 374.026-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z'
                                            />
                                            <path
                                                fill='#E535AB'
                                                d='m54.482 132.883-8.3-14.375 160.21-92.5 8.3 14.375z'
                                            />
                                            <path
                                                fill='#E535AB'
                                                d='m342.568 302.663-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5z'
                                            />
                                            <path fill='#E535AB' d='M330.9 107.5h16.6v185h-16.6z' />
                                            <path
                                                fill='#E535AB'
                                                d='m203.522 367-7.25-12.558 139.34-80.45 7.25 12.557z'
                                            />
                                            <path
                                                fill='#E535AB'
                                                d='M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9'
                                            />
                                        </svg>
                                    </div>
                                    <div className='title'>GraphQL</div>
                                    <div className='text'>
                                        <p>
                                            Expert knowledge of client-centric services based on GraphQL and Federation
                                            and extensive experience with the Apollo/Cosmo toolchain. Authored multiple
                                            Architectural Decision Records (ADRs) to boost efficiency, enhance
                                            standards, and streamline processes.{' '}
                                            <i>6+ Years of integration experience in multiple companies.</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='services-item'>
                            <div className='title'>I work every day with</div>
                            <div>
                                React, React Native, React Routing, Webpack, Nodejs, GraphQL, Apollo, Jest, Typescript,
                                Git, Webstorm, Npm and various LLM Coding Assistants and of course wonderful people.
                            </div>
                        </div>
                        <div className='services-item'>
                            <div className='title'>I can tune well</div>
                            <div>
                                Jira, Linear, Redux, React Native, Jest, Storybook, RxJS, Ramda, Eslint, Prettier, Helm,
                                Docker, Kubernetes, AWS, MongoDB, IndexedDB, GitlabCI, Jenkins, Puppeteer, Playwrite,
                                Detox, Various AI Coding Toos.
                            </div>
                        </div>
                        <div className='services-item'>
                            <div className='title'>Willing to learn</div>
                            <div>Rust, Golang, Kotlin</div>
                        </div>
                        <div className='skills-items'>
                            <div className='p-title'>LANGUAGES</div>
                            <div className='skills-item'>
                                <div className='name'>Russian</div>
                                <div className='dots dots-100'>
                                    <div className='dots-row'>
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                    </div>
                                </div>
                                <div className='value'>
                                    <span className='num'>Native</span>
                                </div>
                            </div>
                            <div className='skills-item'>
                                <div className='name'>English</div>
                                <div className='dots dots-90'>
                                    <div className='dots-row'>
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                    </div>
                                </div>
                                <div className='value'>
                                    <span className='num'>C1+</span>
                                </div>
                            </div>
                            <div className='skills-item'>
                                <div className='name'>German</div>
                                <div className='dots dots-50'>
                                    <div className='dots-row'>
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                        <div className='dot' />
                                    </div>
                                </div>
                                <div className='value'>
                                    <span className='num'>B1</span>
                                </div>
                            </div>
                        </div>
                        {/* History */}
                        <div className='history-left'>
                            <div className='history-items'>
                                <div className='p-title'>EDUCATION</div>
                                <div className='history-item'>
                                    <div className='date'>2003 - 2008</div>
                                    <div className='name'>Master in Computer Science</div>
                                    <div className='subname'>Kalashnikov Izhevsk STU</div>
                                </div>
                            </div>
                            <div className='history-items'>
                                <div className='p-title'>WORK</div>
                                <div className='history-item'>
                                    <div className='date'>Mar 2024 - Present</div>
                                    <div className='name'>Food Tech Start-Up</div>
                                    <div className='subname'>Staff Frontend Engineer, Tech&nbsp;Leader</div>
                                    <div className='text'>
                                        <p>
                                            Led a team of 5 to design and deploy a high-performance React Native mobile
                                            application. Managed the full development cycle—from production to
                                            deployment—while driving the company-wide GraphQL initiative. Tech: React
                                            Native, TypeScript, GraphQL, Node.js
                                        </p>
                                    </div>
                                </div>
                                <div className='history-item'>
                                    <div className='date'>Feb 2021 - Mar 2024</div>
                                    <div className='name'>ARRIVAL Germany</div>
                                    <div className='subname'>Principal Frontend Engineer</div>
                                    <div className='text'>
                                        <p>
                                            Architecture and development of projects for ARRIVAL factories,
                                            robofacturing design and internal programming language. Maintenence of
                                            internal design system library. Tech: TypeScript, Node.js, React.js, GraphQL
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='history-right'>
                            <div className='history-items history-items__no-title'>
                                <div className='history-item'>
                                    <div className='date'>Feb 2015 - Feb 2021</div>
                                    <div className='name'>Matterway</div>
                                    <div className='subname'>Senior JavaScript Developer, Tech Leader</div>
                                    <div className='text'>
                                        <p>
                                            Architecture and development of 4 generations of company products. Studio –
                                            visual IDE. Assistant – mobile automation runner. Marketplace – space for
                                            assistant automation skills. Tech: TypeScript, Node.js, React.js, GraphQL
                                        </p>
                                    </div>
                                </div>
                                <div className='history-item'>
                                    <div className='date'>Aug 2014 - Feb 2015</div>
                                    <div className='name'>deltamethod</div>
                                    <div className='subname'>Senior JavaScript Developer</div>
                                    <div className='text'>
                                        <p>
                                            Development of company key product – Campaign Suite! Helping Junior
                                            developers to grow. Tech: JavaScript, CSS3/HTML5, Twitter Flight, React.js,
                                            BEM
                                        </p>
                                    </div>
                                </div>
                                <div className='history-item'>
                                    <div className='date'>Jan 2011 - Aug 2014</div>
                                    <div className='name'>Yandex</div>
                                    <div className='subname'>Senior JavaScript Developer, Tech Leader</div>
                                    <div className='text'>
                                        <p>
                                            Active development of Yandex Mail, Yandex Weather, Yandex Chat and Yandex
                                            Taxi. Thanks to Yandex I was conduct a number of talks at major Russian and
                                            European conferences. Taught JavaScript and other web technologies for 2
                                            years at Yandex Interface School.
                                        </p>
                                    </div>
                                </div>
                                <div className='history-item'>
                                    <div className='date'>Sep 2006 - Jan 2011</div>
                                    <div className='name'>Various companies</div>
                                    <div className='subname'>Senior JavaScript Developer</div>
                                    <div className='text'>
                                        Follow my{' '}
                                        <a
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://www.linkedin.com/in/azproduction/en/'>
                                            Linkedin
                                        </a>{' '}
                                        to find more.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='clear' />
                        <DownloadCv />
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);
export default Index;
