import * as React from 'react';
import * as Link from 'gatsby-link';
import * as styled from 'styled-copmponent';

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
    <HeaderWrapper>
      <Heading1>
        <StyledLink to="/">{title}</StyledLink>
      </Heading1>
    </HeaderWrapper>
  </HeaderContainer>
);

Header.defaultProps = {
  background: BACKGROUND,
  title: 'sample app',
};

export default Header;
