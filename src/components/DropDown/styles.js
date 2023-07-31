import styled from 'styled-components';

export const Container = styled.div` 
    font-family: Roboto, sans-serif;
    
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
    
    .wrapper {
        position: relative;

        border-radius: 0.3rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        
        button {
            width: 100%;
            background: transparent;
            border: none;
            
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            padding: 1rem;
            border-radius: 0.3rem;
            
            font-family: Roboto, sans-serif;
            font-size: 0.87rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
            
            > span {
                display: flex;
                align-items: center;
                
                svg {
                    width: 1.7rem;
                    height: 1.7rem;
                }
            }
        }
        
        ul {
            position: absolute;
            list-style: none;
            
            width: 100%;
            height: 0%;
            z-index: -1;
            border-radius: 0.3rem;

            border: 1px solid ${({ theme }) => theme.COLORS.DARK_800};

            background-color: ${({ theme }) => theme.COLORS.DARK_900};

            
            li {
                button {
                    opacity: 0;
                }
            }
        }

        .dropdown-open {
            animation: show-dropdown .6s ;
            animation-fill-mode: forwards;  
        }

        .dropdown-close {
            animation: hidden-dropdown .6s ;
            animation-fill-mode: forwards;  
        }

        .dropdown-open li button {
            animation: show-list 2s ;
            animation-fill-mode: forwards; 
        }

        .dropdown-close li button {
            animation: hidden-list;
            animation-fill-mode: forwards;
        }
        
        @keyframes show-dropdown {
            from {
                height: 0%;
                z-index: -1;
            }

            to {
                z-index: 1;
                height: 290%; 
            }
        }

        @keyframes hidden-dropdown {
            from {
                height: 290%;
                z-index: 1;
            }

            to {
                height: 0%;
                z-index: -1;
            }
        }

        @keyframes show-list {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes hidden-list {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }
    }
    `;