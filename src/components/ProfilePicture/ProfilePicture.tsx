import profile from './profile.webp';
import Image from 'next/image';

export function ProfilePicture() {
    return (
        <div className='slide'>
            <Image src={profile} alt='Mikhail Davydov' />
            <span className='circle circle-1'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='749px'
                    height='375px'>
                    <path
                        fillRule='evenodd'
                        fill='#ff8059'
                        d='M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 '
                    />
                </svg>
            </span>
            <span className='circle circle-2'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='416px'
                    height='209px'>
                    <path
                        fillRule='evenodd'
                        fill='#3aafc9'
                        d='M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 '
                    />
                </svg>
            </span>
            <span className='circle circle-3'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='416px'
                    height='209px'>
                    <path
                        fillRule='evenodd'
                        fill='#b9d1e4'
                        d='M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 '
                    />
                </svg>
            </span>
            <span className='circle circle-4'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='121px'
                    height='241px'>
                    <path
                        fillRule='evenodd'
                        fill='#676cdb'
                        d='M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 '
                    />
                </svg>
            </span>
            <span className='circle circle-5'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='232px'
                    height='117px'>
                    <path
                        fillRule='evenodd'
                        fill='rgb(255, 208, 65)'
                        d='M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 '
                    />
                </svg>
            </span>
        </div>
    );
}
