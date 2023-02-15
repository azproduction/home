export const parallax = () => {
    const section = document.querySelectorAll('.section');
    section.forEach((element) => {
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        div.classList.add('pbefore');
        div2.classList.add('pafter');
        element.appendChild(div);
        element.appendChild(div2);
        import('jarallax').then(({jarallax}) => {
            jarallax(document.querySelectorAll(`.section .pbefore`), {
                speed: 0.85,
                keepImg: true,
                videoVolume: 0
            });
            jarallax(document.querySelectorAll(`.section .pafter`), {
                speed: 0.85,
                keepImg: true,
                videoVolume: 0
            });
            jarallax(document.querySelectorAll(`.js-parallax`), {
                speed: 0.65,
                type: 'scroll'
            });
        });
    });
};
