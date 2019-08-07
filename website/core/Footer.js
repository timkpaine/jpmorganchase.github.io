/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Links</h5>
            <a href={`${this.props.config.baseUrl}projects`}>Projects</a>
            <a href={`${this.props.config.baseUrl}sponsorships`}>Sponsorships</a>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
          </div>
          <div>
            <h5>Github</h5>
              <a href="https://github.com/jpmorganchase">J.P. Morgan Chase</a>
              <a href="https://github.com/finos/quorum">Quorum</a>
              <a href="https://github.com/finos/perspective">Perspective</a>
              <a href="https://github.com/wepay">WePay</a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://twitter.com/jpmorgan"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a
              href="https://go-quorum.slack.com"
              target="_blank"
              rel="noreferrer noopener">
              Quorum Slack
            </a>
            <a
              href="https://gitter.im/finos/perspective"
              target="_blank"
              rel="noreferrer noopener">
              Perspective Gitter
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
