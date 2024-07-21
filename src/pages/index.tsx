import * as React from 'react';
import { useState } from 'react';
import { Link, graphql, PageProps, HeadProps } from 'gatsby';
import { Waypoint } from 'react-waypoint';
import {
  Stack,
  Card,
  SkipNavContent,
  Image,
  HStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { FaBuilding, FaBriefcase } from 'react-icons/fa6';

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import avatar from '../assets/images/avatar.jpg';
import Timeline from '../components/Timeline';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};

const Index: React.FC<PageProps<DataProps>> = (props) => {
  const [stickyNav, setStickyNav] = useState<boolean>(false);

  const _handleWaypointEnter = () => {
    setStickyNav(false);
  };

  const _handleWaypointLeave = () => {
    setStickyNav(true);
  };

  const { siteMetadata } = props.data.site;

  return (
    <Layout>
      <Header
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <Waypoint onEnter={_handleWaypointEnter} onLeave={_handleWaypointLeave} />
      <Nav
        sticky={stickyNav}
        items={[
          { key: 'intro', value: '自己紹介' },
          { key: 'career', value: 'しごと' },
          { key: 'blog', value: '技術ブログ' },
        ]}
      />

      <Card p={16}>
        <Stack>
          <SkipNavContent as="section" id="intro">
            <div className="spotlight">
              <HStack>
                <Image
                  src={avatar}
                  borderRadius="full"
                  boxSize="16em"
                  alt="nukosuke"
                />
                <div className="content">
                  <Heading>{siteMetadata.author}</Heading>
                  <HStack>
                    <FaBuilding />
                    <Text>MIXI inc.</Text>
                    <FaBriefcase />
                    <Text>Engineer</Text>
                  </HStack>
                  <Text>
                    業務では主にサーバサイドを担当していますが,
                    実はTypeScriptが好きです.
                  </Text>
                  <Timeline
                    items={[
                      {
                        title:
                          '2011-2015 立命館大学 情報理工学部 情報システム学科',
                      },
                      {
                        title:
                          '2015-2017 奈良先端科学技術大学院大学(NAIST) 情報科学研究科',
                      },
                      { title: '2017-現在 株式会社ミクシィ XFLAGスタジオ' },
                    ]}
                  />
                  <footer className="major">
                    <p style={{ textAlign: 'right' }}>
                      Resume: [<Link to="/career/resume">JP</Link>|
                      <Link to="/career/resume_en">EN</Link>]
                    </p>
                  </footer>
                </div>
              </HStack>
            </div>
          </SkipNavContent>

          <SkipNavContent as="section" id="career">
            <header className="major">
              <h2>しごと</h2>
            </header>
            <p>
              社内ID・決済基盤や前払い式決済アプリの開発、運用に携っています.
            </p>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>フロントエンド</h3>
                <p>JavaScript / TypeScript / React / Vue / Angular / jQuery</p>
              </li>
              <li>
                <span className="icon major style3 fa-server"></span>
                <h3>サーバサイド</h3>
                <p>
                  Ruby / Rails / Go / Node.js / Elixir / Phoenix / AWS / GCP /
                  Terraform / Docker
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-keyboard-o"></span>
                <h3>開発環境</h3>
                <p>macOS / Ubuntu / CentOS / Emacs / eshell / fish</p>
              </li>
            </ul>
          </SkipNavContent>

          <SkipNavContent as="section" id="blog">
            <header className="major">
              <h2>技術ブログ</h2>
              <p>
                日々の作業ログや技術ネタについて書いています.
                もしよければのぞいてみてください.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://blog.nukosuke.com" className="button">
                    <span className="fa fa-book"></span> ブログ
                  </a>
                </li>
                <li>
                  <a href="https://nukosuke.hatenablog.jp" className="button">
                    <span className="fa fa-book"></span> 旧ブログ
                  </a>
                </li>
              </ul>
            </footer>
          </SkipNavContent>
          <Footer />
        </Stack>
      </Card>
    </Layout>
  );
};

export default Index;

export const Head = (props: HeadProps<DataProps>) => (
  <>
    <title>{props.data.site.siteMetadata.title}</title>
  </>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
