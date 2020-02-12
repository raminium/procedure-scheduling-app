import styled from 'styled-components';
import { IHeadingWrapperProps } from '../../utilities/interfaces';

const HeadingWrapper = styled.div<IHeadingWrapperProps>`
display: flex;
padding-bottom: ${(props): string => props.pb || '1.5em'};
padding-top: ${(props): string => props.pt || '0'};
padding-left: ${(props): string => props.px || '0'};
padding-right:${(props): string => props.px || '0'};
justify-content: space-between;
width: 100%;
align-items: center;
`;

export default HeadingWrapper;
