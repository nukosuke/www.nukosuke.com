import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import avatar from '../assets/images/avatar.jpg';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    };
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {
    const { siteMetadata } = this.props.data.site;
    return (
      <Layout>
        <Helmet title={siteMetadata.title} />

        <Header
          title={siteMetadata.title}
          description={siteMetadata.description}
        />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav
          sticky={this.state.stickyNav}
          items={[
              { key: 'intro', value: '自己紹介' },
              { key: 'career', value: 'しごと' },
              { key: 'links', value: 'リンク' },
              { key: 'blog', value: '技術ブログ' }
          ]}
        />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <span className="image left"><img src={avatar} alt="" /></span>
              <div className="content">
                <header className="major">
                  <h2>{siteMetadata.author}</h2>
                </header>
                <ul className="icons" style={{fontSize: 14}}>
                  <li><span className="fa fa-building-o"></span>&nbsp;&nbsp;mixi inc.</li>
                  <li><span className="fa fa-briefcase"></span>&nbsp;&nbsp;CRE; Customer Reliability Engieer</li>
                </ul>
                <p>業務では主にサーバサイドを担当していますが, 実はTypeScriptが好きです.</p>
              </div>

            </div>
          </section>

          <section id="career" className="main special">
            <header className="major">
              <h2>しごと</h2>
            </header>
            <p>CREとしてカスタマーサポートシステムを開発したり, ログ調査を行ったりしています.</p>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>フロントエンド</h3>
                <p>JavaScript / TypeScript / React / Vue / Angular / jQuery</p>
              </li>
              <li>
                <span className="icon major style3 fa-server"></span>
                <h3>サーバサイド</h3>
                <p>Ruby / Rails / Go / Node.js / Elixir / Phoenix / AWS / GCP / Terraform / Docker</p>
              </li>
              <li>
                <span className="icon major style5 fa-keyboard-o"></span>
                <h3>開発環境</h3>
                <p>macOS / Ubuntu / CentOS / Emacs / eshell / fish</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/career" className="button"><span className="fa fa-briefcase"></span> 学歴・職歴</Link></li>
              </ul>
            </footer>
          </section>

          <section id="links" className="main special">
            <header className="major">
              <h2>リンク</h2>
              <p>わたしに関連するリンク集です.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong></strong> Open Source
              </li>
            </ul>
            <ul className="alt">
            <li>hoge</li>
            <li>hugaa</li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="blog" className="main special">
            <header className="major">
              <h2>技術ブログ</h2>
              <p>日々の作業ログや技術ネタについて書いています. もしよければのぞいてみてください.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><a href="https://blog.nukosuke.com" className="button"><span className="fa fa-book"></span> ブログ</a></li>
                <li><a href="https://nukosuke.hatenablog.jp" className="button"><span className="fa fa-book"></span> 旧ブログ</a></li>
              </ul>
            </footer>
          </section>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title description author
      }
    }
  }
`;
