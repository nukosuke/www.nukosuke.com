import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import avatar from '../assets/images/avatar.jpg';
import Timeline from '../components/Timeline';

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
              { key: 'blog', value: '技術ブログ' }
          ]}
        />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <span className="image left">
                <img src={avatar} alt="" />
              </span>
              <div className="content">
                <header className="major">
                  <h2>{siteMetadata.author}</h2>
                </header>
                <ul className="icons" style={{fontSize: 14}}>
                  <li><span className="fa fa-building-o"></span>&nbsp;&nbsp;mixi inc.</li>
                  <li><span className="fa fa-briefcase"></span>&nbsp;&nbsp;Engieer</li>
                </ul>
                <p>業務では主にサーバサイドを担当していますが, 実はTypeScriptが好きです.</p>
                <Timeline
                  items={[
                    { title: '2011-2015 立命館大学 情報理工学部 情報システム学科' },
                    { title: '2015-2017 奈良先端科学技術大学院大学(NAIST) 情報科学研究科' },
                    { title: '2017-現在 株式会社ミクシィ XFLAGスタジオ' },
                  ]}
                />
                <footer className='major'>
                  <p style={{textAlign: 'right'}}>
                    Resume:
                    [<Link to="/career/resume">JP</Link>|<Link to="/career/resume_en">EN</Link>]
                  </p>
                </footer>
              </div>
            </div>
          </section>

          <section id="career" className="main special">
            <header className="major">
              <h2>しごと</h2>
            </header>
            <p>社内ID・決済基盤や前払い式決済アプリの開発、運用に携っています.</p>
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
