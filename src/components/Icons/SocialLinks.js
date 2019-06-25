import React from 'react';

import CodeSandbox from './CodeSandbox';
import LinkedIn from './LinkedIn';
import GitHub from './GitHub';
import Twitter from './Twitter';

const IconsLinks = () => {
  return (
    <React.Fragment>
      <a
        href="https://codesandbox.io/u/donycisneros/sandboxes"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CodeSandbox Link"
      >
        <CodeSandbox />
      </a>
      <a
        href="https://www.linkedin.com/in/donycisneros"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Link"
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/donycisneros"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Link"
      >
        <GitHub />
      </a>
      <a
        href="https://twitter.com/donycisne"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Link"
      >
        <Twitter />
      </a>
    </React.Fragment>
  );
};

export default IconsLinks;
