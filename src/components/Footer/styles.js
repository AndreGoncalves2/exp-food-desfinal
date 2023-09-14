import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;

    justify-content: space-between;
    
    padding: 1.5rem 1.7rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    .logo {
        display: flex;
        gap: .4rem;
        align-items: center;
        
        img {
            width: 1.3rem;
            filter: grayscale(100%);
        }
        
        h4 {
            font-family: Roboto, sans-serif;
            font-size: 1rem;
            font-weight: 700;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    .copyright {
        height: 1.8rem;
        display: flex;
        
        align-items: end;
        
        h4 {
            font-family: DM Sans, sans-serif;
            font-size: 0.75rem;
            font-weight: 400;

            line-height:180% ;

            color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }
    }

    @media (min-width: 600px) {
        padding: 1.5rem 7.6rem;

        .logo {
            img {
                width: 1.8rem;
                height: 1.8rem;
            }
            
            h4 {
                font-size: 1.5rem;
            }
        }

        .copyright {
        
        h4 {
            font-size: 0.87rem;
        }
    }
    }
`;