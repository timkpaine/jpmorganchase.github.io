/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const ReactDOM = require('react-dom');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoBlurb = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoBlurb>
            { <p>Leading the way in open source tools for finance and beyond.</p> }
          </PromoBlurb>
          <PromoSection>
            { <Button href={docUrl('projects')}>Projects</Button>}
            { <Button href={docUrl('sponsorships')}>Sponsorships</Button>}
            { <Button href={docUrl('contact')}>Contact</Button>}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
        className={props.className}
        style={props.style}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <Block layout="threeColumn"
      className="otherbg productShowcaseSection paddingBottom"
      style={{textAlign: 'center'}}
      background="dark">
        {[
          {
            content: 'Tools for financial analytics, blockchain, and more',
            title: 'Projects',
            image: `img/code.svg`,
            imageAlign: 'top',

          },
          {
            content: '',
            title: 'Committed to open source.',
            // image: `${baseUrl}img/code.svg`,
            // imageAlign: 'bottom',
          },
          {
            content: 'Supporting open source organizations and conferences',
            title: 'Partnerships',
            image: `img/handshake-o.svg`,
            imageAlign: 'top',
          },

        ]}
      </Block>
    );

    const ProjectCallout = () => (
      <div>
      <Block layout="oneColumn"
      className="mini productShowcaseSection paddingBottom"
      style={{textAlign: 'center'}}
      background="dark">
        {[
          {
            title: 'Featured Projects',
          }
        ]}
      </Block>
      <Block layout="twoColumn"
      className="productShowcaseSection paddingBottom"
      style={{textAlign: 'center'}}>
        {[
          {
            image: `img/quorum-logo2.png`,
            imageAlign: 'left',

          },
          {
            content: 'Quorum is an Ethereum-based distributed ledger protocol with transaction/contract privacy and new consensus mechanisms.',
            title: 'Quorum',
          },

        ]}
      </Block>
      <Block layout="twoColumn"
      className="productShowcaseSection paddingBottom"
      style={{textAlign: 'center'}}>
        {[
          {
            content: 'A streaming data visualization engine for Javascript, Perspective makes it simple to build real-time & user configurable analytics entirely in the browser.',
            title: 'Perspective',
          },
          {
            image: `img/perspective-logo.png`,
            imageAlign: 'right',
          },

        ]}
      </Block>
      </div>
    );
    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <ProjectCallout />
        </div>
      </div>
    );
  }
}

module.exports = Index;
