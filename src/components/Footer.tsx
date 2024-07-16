import React from 'react';
import { Link } from 'gatsby';
import { FaMastodon, FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { SiMatrix, SiQiita, SiZenn } from 'react-icons/si';

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
  <footer id="footer">
    <section>
      <header className="major">
        <h2 className="major">Info</h2>
      </header>
      <dl className="alt">
        <dt>
          <i className="fa fa-building"></i> Location
        </dt>
        <dd>Shibuya-ku Tokyo, Japan</dd>
      </dl>
      <ul className="icons">
        <li>
          <a rel="me" href="https://mastodon.social/@nukosuke">
            <FaMastodon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/pg_nukosuke">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/nukosuke">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://matrix.to/#/@nukosuke:matrix.org">
            <SiMatrix />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@nukosuke">
            <FaMedium />
          </a>
        </li>
        <li>
          <a href="https://qiita.com/nukosuke">
            <SiQiita />
          </a>
        </li>
        <li>
          <a href="https://zenn.dev/nukosuke">
            <SiZenn />
          </a>
        </li>
      </ul>
    </section>
    <section>
      <header className="major">
        <h2>お問い合わせ</h2>
      </header>
      <form action="https://formspree.io/ox3vtaem@duck.com" method="POST">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" required />
        <label htmlFor="email">本文</label>
        <textarea name="body" required></textarea>
        <button type="submit">送信</button>
      </form>
    </section>
    <p className="copyright">&copy; nukosuke.com (*ΦωΦ*)</p>
  </footer>
);

export default Footer;
