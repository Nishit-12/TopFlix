import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Nishit Patel</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                        <a href="https://www.facebook.com" target="_blank">
                            <i><FaFacebookF /></i>
                        </a>

                            <Link href="https://www.twitter.com" target='_blank'><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com" target='_blank'><i > <FaInstagram/>  </i></Link>
                            <Link href="https://www.linkedin.com" target='_blank'><i > <FaLinkedinIn /> </i></Link>
                            <Link href="https://www.youtube.com" target='_blank'><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/contact">Contact US</Link></li>
                            <li><Link href="/about">About US</Link></li>
                            <li><Link href="/">Get started</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/contact">Contact US</Link></li>
                            <li><Link href="/about">About US</Link></li>
                            <li><Link href="/">Get Started</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><Link href="/">Profile</Link></li>
                            <li><Link href="/">My account</Link></li>
                            <li><Link href="/">Prefrences</Link></li>
                            <li><Link href="/">Purchase</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Shows</li>
                            <li><Link href="/movies">Check Out</Link></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/"> Nishit Patel.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;