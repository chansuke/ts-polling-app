import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-copmponent';
import { Container } from '../../styledComponents/layout';

const HeadContainer = styled.header`
  ${props => props.background};
  margin-bottom: 1.45rem;
`;

const HeadWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Heading1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const BACKGROUND = 'background-color: #20232a';

const Header = ({ background, title }) => (
  <HeaderContainer background={background}>
    <Container>
      <Heading1>
        <StyledLink to="/">{title}</StyledLink>
      </Heading1>
    </Container>
  </HeaderContainer>
);

Header.defaultProps = {
  background: BACKGROUND,
  title: 'sample app',
};

export default Header;
