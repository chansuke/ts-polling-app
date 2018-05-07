import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import { Conainer as BaseContainerStyles } from '../styledComponents/layout';

import './index.css';

const Container = BaseContainerStyles.extend`
  padding-top: 0;
`;

const TemplateWrapper = ({ children }) => {
  <div>
    <Helmet
      title="Polling App"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)" />
    <Container>{children()}</Container>
  </div>;
};

export default TemplateWrapper;
