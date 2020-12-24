import React from 'react';
import PropTypes from 'prop-types';
import IconExternal from '../../components/icons/external'
import  IconGitHub from '../../components/icons/github'
import  IconInstagram from '../../components/icons/instagram'
import  IconLinkedin from '../../components/icons/linkedin'
import  IconLoader from '../../components/icons/loader'
import  IconLogo from '../../components/icons/logo'
import  IconTwitter from '../../components/icons/twitter'

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;