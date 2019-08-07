/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'J.P. Morgan', // Title for your website.
  disableHeaderTitle: true,
  tagline: 'Open Source',
  url: 'https://jpmorganchase.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: 'website',
  organizationName: 'jpmorganchase',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'projects', label: 'Projects'},
    {doc: 'sponsorships', label: 'Sponsorships'},
    {doc: 'contact', label: 'Contact'},
    {blog: 'blog', label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo-white.png',
  footerIcon: 'img/logo-white.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00477a',
    secondaryColor: '#20232a',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} J.P. Morgan Chase`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/icon.png',
  twitterImage: 'img/icon.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/jpmorganchase/jpmorganchase.github.io',
};

module.exports = siteConfig;
