import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <header className="major"><h2 className="major">Info</h2></header>
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
        <section>
          <header className="major"><h2>お問い合わせ</h2></header>
          <form action="https://formspree.io/39.nuko+www@gmail.com" method="POST">
            <label for="email">メールアドレス</label>
            <input type="email" name="email" required />
            <label for="email">本文</label>
            <textarea name="body" required></textarea>
            <button type="submit">送信</button>
          </form>
        </section>
        <p className="copyright">&copy; nukosuke.com (*ΦωΦ*)</p>
    </footer>
);

export default Footer;
