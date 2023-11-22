import styled from 'styled-components';

export const BoxerBox = styled.div`
  padding: ${props => props.theme.spacing.b};
  width: 200px;
  margin: ${props => props.theme.spacing.b};
  border: 1px solid ${props => props.theme.colors.borders.main};
  background: ${props => props.theme.colors.background.content};
  border-radius: 3px;
  line-height: ${props => props.theme.spacing.b};
`;

export const BoxerDetailItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.a};
`;