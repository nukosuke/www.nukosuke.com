import * as React from 'react';
import {
  FaBuilding,
  FaBluesky,
  FaMastodon,
  FaXTwitter,
  FaGithub,
  FaMedium,
} from 'react-icons/fa6';
import { SiMatrix, SiQiita, SiZenn } from 'react-icons/si';
import { Box, Stack, HStack, Text, Link, Center } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Box as="footer">
    <Stack>
      <header className="major">
        <h2 className="major">Info</h2>
      </header>
      <HStack>
        <FaBuilding />
        <Text>Location</Text>
        <Text>Shibuya-ku Tokyo, Japan</Text>
      </HStack>
      <HStack>
        <Link href="https://bsky.app/profile/nukosuke.bsky.social">
          <FaBluesky />
        </Link>
        <Link rel="me" href="https://mastodon.social/@nukosuke">
          <FaMastodon />
        </Link>
        <Link href="https://x.com/pg_nukosuke">
          <FaXTwitter />
        </Link>
        <Link href="https://github.com/nukosuke">
          <FaGithub />
        </Link>
        <Link href="https://matrix.to/#/@nukosuke:matrix.org">
          <SiMatrix />
        </Link>
        <Link href="https://medium.com/@nukosuke">
          <FaMedium />
        </Link>
        <Link href="https://qiita.com/nukosuke">
          <SiQiita />
        </Link>
        <Link href="https://zenn.dev/nukosuke">
          <SiZenn />
        </Link>
      </HStack>
    </Stack>
    <Stack>
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
    </Stack>
    <Center>
      <Text>&copy; nukosuke.com (*ΦωΦ*)</Text>
    </Center>
  </Box>
);

export default Footer;
