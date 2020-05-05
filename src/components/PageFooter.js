import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; {config.authorName}</li>
        <li>
          Stay Safe - Created with love using <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
        </li>
      </ul>
    </footer>
  );
}
