import styled from 'styled-components';

export const DetailItemLabel = styled.span`
  color: ${props => props.theme.colors.typography.secondary};
`;

export const DetailItemValue = styled.span`
  color: ${props => props.theme.colors.typography.primary};
`;

export const NamesHeader = styled.h3`
  margin-left: ${props => props.theme.spacing.b};
  color: ${props => props.theme.colors.typography.primary};
`;