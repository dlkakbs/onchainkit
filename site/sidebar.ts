import type { Sidebar } from 'vocs';

export const sidebar = [
  {
    text: 'Introduction',
    items: [{ text: 'Getting Started', link: '/getting-started' }],
  },
  {
    text: 'Frame',
    items: [
      { text: 'Introduction', link: '/frame/introduction' },
      {
        text: 'Components',
        items: [
          {
            text: 'FrameMetadata',
            link: '/frame/frame-metadata',
          },
        ],
      },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getFrameHtmlResponse',
            link: '/frame/get-frame-html-response',
          },
          {
            text: 'getFrameMessage',
            link: '/frame/get-frame-message',
          },
          {
            text: 'getFrameMetadata',
            link: '/frame/get-frame-metadata',
          },
        ],
      },
      {
        text: 'Framegear',
        link: '/frame/framegear',
      },
      {
        text: 'Types',
        link: '/frame/types',
      },
    ],
  },
  {
    text: 'Identity',
    items: [
      { text: 'Introduction', link: '/identity/introduction' },
      {
        text: 'Components',
        items: [
          {
            text: 'Avatar',
            link: '/identity/avatar',
          },
          {
            text: 'Badge',
            link: '/identity/badge',
          },
          {
            text: 'Name',
            link: '/identity/name',
          },
        ],
      },
      {
        text: 'Hooks',
        items: [
          {
            text: 'useName',
            link: '/identity/use-name',
          },
          {
            text: 'useAvatar',
            link: '/identity/use-avatar',
          },
        ],
      },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getAvatar',
            link: '/identity/get-avatar',
          },
          {
            text: 'getAttestations',
            link: '/identity/get-attestations',
          },
          {
            text: 'getName',
            link: '/identity/get-name',
          },
        ],
      },
      {
        text: 'Types',
        link: '/identity/types',
      },
    ],
  },
  /*
  {
    text: 'Wallet',
    items: [
      { text: 'Introduction', link: '/wallet/introduction' },
      {
        text: 'Components',
        items: [
          {
            text: 'ConnectAccount',
            link: '/wallet/connect-account',
          },
        ],
      },
      {
        text: 'Types',
        link: '/wallet/types',
      },
    ],
  },
  */
  {
    text: 'Farcaster',
    collapsed: true,
    items: [
      {
        text: 'Introduction',
        link: '/farcaster/introduction',
      },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getFarcasterUserAddress',
            link: '/farcaster/get-farcaster-user-address',
          },
        ],
      },
      {
        text: 'Types',
        link: '/farcaster/types',
      },
    ],
  },
  {
    text: 'XMTP',
    collapsed: true,
    items: [
      { text: 'Introduction', link: '/xmtp/introduction' },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getXmtpFrameMessage',
            link: '/xmtp/get-xmtp-frame-message',
          },
          {
            text: 'isXmtpFrameRequest',
            link: '/xmtp/is-xmtp-frame-request',
          },
        ],
      },
    ],
  },
] as const satisfies Sidebar;
