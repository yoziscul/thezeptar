import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.scss';

const lists = [{ name: 'Home', link: '#', image: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" style={{ marginLeft: '0.7px' }}><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" fill="#d3d3d3" /></svg>), }, { name: 'About Me', link: '#about', image: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" style={{ marginLeft: '0.01px', marginTop: '0.1px' }}><path d="M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z" fill="#d3d3d3" /></svg>), }, { name: 'Experience', link: 'experience', image: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="23" style={{ marginLeft: '-0.1px', marginTop: '2px' }}><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z" fill="#d3d3d3" /></svg>), }, { name: 'Projects', link: 'experience/#projects', image: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="25" style={{ marginLeft: '1.99px', marginTop: '1.5px' }}><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z" fill="#d3d3d3" /></svg>), }, { name: 'Endpoints', link: 'api', image: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" style={{ marginLeft: '2.1px', marginTop: '1.5px' }}><path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" fill="#d3d3d3" /></svg>), }, { name: 'Contact', link: '#contact', image: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22.4" style={{ marginLeft: '1px', marginTop: '1.5px' }}><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" fill="#d3d3d3" /></svg>) }];

export default function Navbar() {
    const [activeToggle, setActiveToggle] = useState(false);
    const inactiveToggle = !activeToggle;

    useEffect(() => {
        const list = document.querySelectorAll(`.${styles.list}`);
        const lists = document.querySelector('.lists');

        for (let i = 0; i < list.length; i++) {
            list[i].onclick = () => {
                let j = 0;

                while (j < list.length) list[j++].classList.remove(styles.list_active);

                if (!list[i].classList.contains('logo_icon')) list[i].classList.add(styles.list_active);
            };
        }

        document.querySelector('.menu_button_list').onclick = () => {
            lists.classList.toggle(styles.list_menu_active);
            lists.classList.contains(styles.list_menu_active) ? lists.classList.remove(styles.list_menu_closing) : lists.classList.add(styles.list_menu_closing);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50">
            <div className="menu_button p-4 w-[80px] h-[80px] bg-[#12313b] rounded-br-[16%]">
                <div className={`${styles.list} menu_button_list`} onClick={() => {
                    setActiveToggle(inactiveToggle);
                    document.querySelector(`.${styles.icon}`).classList.toggle(styles.icon_active);
                }}>
                    <svg className={styles.icon} viewBox="0 0 100 100" width="80">
                        <path className={styles.icon_line} d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                        <path className={styles.icon_line} d="m 70,50 h -40" />
                        <path className={styles.icon_line} d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                    </svg>

                    <div className={styles.popper}>
                        <h4 className={styles.popper_text}>{inactiveToggle ? 'Open' : 'Close'} Menu</h4>
                    </div>
                </div>
            </div>
            <ul className="lists bg-[#12313b] p-4 flex-col min-h-screen gap-4 absolute box-border hidden left-[-80px] top-[65px]">
                <li className="scale-[.75] w-full bg-white h-[2px] rounded-[1px] opacity-[.06]"></li>

                {lists.map((list, index) => (
                    <li key={index}>
                        <a href={`/${list.link}`} className={styles.list}>
                            {list.image}
                            <div className={styles.popper}>
                                <h4 className={styles.popper_text}>{list.name}</h4>
                            </div>
                        </a>
                    </li>
                ))}

                <li className="scale-[.75] w-full bg-white h-[2px] rounded-[1px] opacity-[.06]"></li>
            </ul>
        </div>
    );
}
