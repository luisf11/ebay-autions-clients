import styled, {css} from 'styled-components';

export const ContainerStyles = css`
    display: flex;
    flex-direction: ${props =>props.direction};
    justify-content: ${props =>props.content};
    align-items: ${props =>props.align};
    
`;

export const TextStyles = css`
    font-size:${props => props.size || '16px'} ;
    color: ${props => props.color || 'blue'};
`; 

export const TitleStyles = css`
    font-size:${props => props.size || '16px'}  ;
    font-weight:${props => props.size || 'bold'} ;
`; 