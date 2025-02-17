<p align="center">
  <a href="https://onchainkit.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./site/docs/public/logo/v0-15.png">
      <img alt="OnchainKit logo vibes" src="./site/docs/public/logo/v0-15.png" width="auto">
    </picture>
  </a>
</p>

# OnchainKit

<p align="left">
  React components and TypeScript utilities to help you build top-tier onchain apps.
<p>

<p align="left">
  <a href="https://www.npmjs.com/package/@coinbase/onchainkit" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/@coinbase/onchainkit?colorA=21262d&colorB=21262d&style=flat">
      <img src="https://img.shields.io/npm/v/@coinbase/onchainkit?colorA=f6f8fa&colorB=f6f8fa&style=flat" alt="Version">
    </picture>
  </a>
  <a href="https://github.com/coinbase/onchainkit/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/l/@coinbase/onchainkit?colorA=21262d&colorB=21262d&style=flat">
      <img src="https://img.shields.io/npm/l/@coinbase/onchainkit?colorA=f6f8fa&colorB=f6f8fa&style=flat" alt="MIT License">
    </picture>
  </a>
  <a href="https://www.npmjs.com/package/@coinbase/onchainkit" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/dm/@coinbase/onchainkit?colorA=21262d&colorB=21262d&style=flat">
      <img src="https://img.shields.io/npm/dm/@coinbase/onchainkit?colorA=f6f8fa&colorB=f6f8fa&style=flat" alt="Downloads per month">
    </picture>
  </a>
  <a href="https://bundlephobia.com/result?p=@coinbase/onchainkit" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flat.badgen.net/bundlephobia/minzip/@coinbase/onchainkit">
      <img width="146" height="20" src="https://flat.badgen.net/bundlephobia/minzip/@coinbase/onchainkit" alt="Minified + gzip package size for @coinbase/onchainkit in KB" class="badge--in-table"></a>
    </picture>
  </a>
</p>

<br />

## Documentation

For documentation and guides, visit [onchainkit.xyz](https://onchainkit.xyz/).

## Quickstart

To integrate OnchainKit into your project, begin by installing the necessary packages.

```bash
# Yarn: Add library
yarn add @coinbase/onchainkit viem@2.x

# or

# Use NPM
npm install @coinbase/onchainkit viem@2.x

# Use PNPM
pnpm add @coinbase/onchainkit viem@2.x
```

## Components

#### Display ENS [avatars](https://onchainkit.xyz/identity/avatar), Attestation [badges](https://onchainkit.xyz/identity/badge), and ENS [names](https://onchainkit.xyz/identity/name).

```tsx
const EAS_SCHEMA_ID = '0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9';
const ACCOUNT_ADDRESS = '0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9';

<OnchainKitProvider chain={base} schemaId={EAS_SCHEMA_ID}>
  <div className="flex h-10 items-center space-x-4">
    <Avatar address={ACCOUNT_ADDRESS} showAttestation />
    <div className="flex flex-col text-sm">
      <b>
        <Name address={ACCOUNT_ADDRESS} />
      </b>
      <Name address={ACCOUNT_ADDRESS} showAddress />
    </div>
  </div>
</OnchainKitProvider>;
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./site/docs/public/assets/onchainkit-identity.png">
  <img alt="OnchainKit logo vibes" src="./site/docs/public/assets/onchainkit-identity.png" width="auto">
</picture>

#### Convert your web page into a [Frame](https://onchainkit.xyz/frame/frame-metadata)

```tsx
import { FrameMetadata } from '@coinbase/onchainkit';

export default function HomePage() {
  return (
    ...
    <FrameMetadata
      buttons={[
        {
          label: 'Tell me the story',
        },
        {
          action: 'link',
          label: 'Link to Google',
          target: 'https://www.google.com'
        },
        {
          action: 'post_redirect',
          label: 'Redirect to cute pictures',
        },
      ]}
      image={{
       src: 'https://zizzamia.xyz/park-3.png',
       aspectRatio: '1:1'
      }}
      input={{
        text: 'Tell me a boat story',
      }}
      postUrl="https://zizzamia.xyz/api/frame"
    />
    ...
  );
}
```

## Utilities

If you're seeking basic TypeScript utilities, we have plenty of ready-to-use options available.

##### Frames

- [getFrameHtmlResponse](https://onchainkit.xyz/frame/get-frame-html-response)
- [getFrameMessage](https://onchainkit.xyz/frame/get-frame-message)
- [getFrameMetadata](https://onchainkit.xyz/frame/get-frame-metadata)

##### Identity

- [getAvatar](https://onchainkit.xyz/identity/get-avatar)
- [getAttestations](https://onchainkit.xyz/identity/get-attestations)
- [getName](https://onchainkit.xyz/identity/get-name)
- [useName](https://onchainkit.xyz/identity/use-name)
- [useAvatar](https://onchainkit.xyz/identity/use-avatar)

##### Farcaster

- [getFarcasterUserAddress](https://onchainkit.xyz/farcaster/get-farcaster-user-address)

##### XMTP

- [getXmtpFrameMessage](https://onchainkit.xyz/xmtp/get-xmtp-frame-message)
- [isXmtpFrameRequest](https://onchainkit.xyz/xmtp/is-xmtp-frame-request)

## Design

All our component designs are open-sourced. You can access the [Figma file](https://www.figma.com/community/file/1370194397345450683) to use them for your onchain project.

<a href="https://www.figma.com/community/file/1370194397345450683">
  <p>Figma - How to use</p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./site/docs/public/assets/onchainkit-figma-design-how-to-use.png">
    <img alt="OnchainKit logo vibes" src="./site/docs/public/assets/onchainkit-figma-design-how-to-use.png" width="auto">
  </picture>
  <p>Figma - Components</p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./site/docs/public/assets/onchainkit-figma-design-components.png">
    <img alt="OnchainKit logo vibes" src="./site/docs/public/assets/onchainkit-figma-design-components.png" width="auto">
  </picture>
</a>

## Community ☁️ 🌁 ☁️

Check out the following places for more OnchainKit-related content:

- Follow [@zizzamia](https://github.com/zizzamia) ([X](https://twitter.com/zizzamia), [Warpcast](https://warpcast.com/zizzamia)) for project updates
- Join the discussions on our [OnchainKit warpcast channel](https://warpcast.com/~/channel/onchainkit)

## Authors

- [@zizzamia](https://github.com/zizzamia) ([X](https://twitter.com/hey_shells), [Warpcast](https://warpcast.com/zizzamia)), Eng Lead
- [@0xchiaroscuro](https://github.com/0xchiaroscuro) ([X](https://twitter.com/chiaroscuro), [Warpcast](https://warpcast.com/chiaroscuro)), Design Lead
- [@taycaldwell](https://github.com/taycaldwell) ([X](https://twitter.com/taycaldwell_)), Dev Rel Lead

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
