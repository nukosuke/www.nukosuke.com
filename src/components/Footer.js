import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>ブログ</h2>
            <p>日々の作業ログや技術ネタについて書いています。もしよければのぞいてみてください (*ΦωΦ*)</p>
            <ul className="actions">
                <li><a href="https://nukosuke.hatenablog.jp" className="button">&raquo; のぞいてみる</a></li>
            </ul>
        </section>
        <section>
            <h2>Info</h2>
            <dl className="alt">
                <dt><i class="fa fa-building"></i> Office</dt>
                <dd>渋谷 &bull; 東京</dd>
                <dt><i class="fa fa-home"></i> Home</dt>
                <dd>川崎 &bull; 神奈川</dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/pg_nukosuke" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/nukosuke" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://medium.com/@nukosuke" className="icon fa-medium alt"><span className="label">Medium</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; nukosuke.com</p>
    </footer>
);

export default Footer;
