import styled from 'styled-components';

export const Container = styled.div` 
    font-family: Roboto, sans-serif;
    
    font-size: 1.6rem;
    font-weight: 400;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    label {
        display: block;
        margin-top: .45rem;
    }

    .wrapper {
        position: relative;
        
        margin-top: .5rem;

        border-radius: 0.3rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        .red {
            color: ${({ theme }) => theme.COLORS.RED_300};
        }
        
        .yellow {
            color: ${({ theme }) => theme.COLORS.YELLOW_100};
        }

        .green {
            color: ${({ theme }) => theme.COLORS.GREEN_500};
        }

        > button {
            width: 100%;
            background: transparent;
            border: none;
            
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            padding: .65rem 1rem;
            border-radius: 0.3rem;
            
            font-family: Roboto, sans-serif;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
            
            > span {
                display: flex;
                align-items: center;
                line-height: 1rem;
                gap: .5rem;

                div {

                    font-size: 1.2rem;
                }

                svg {
                        height: 1rem;
                        width: 1rem;
                    }
                
                .arrow {
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
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: transparent;
                    border: none;

                    padding: .6rem 1rem;

                    font-family: Roboto, sans-serif;
                    font-size: 1.2rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 160%;

                    color: ${({ theme }) => theme.COLORS.LIGHT_400}; 

                    opacity: 0;

                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
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
                height: 320%; 
            }
        }

        @keyframes hidden-dropdown {
            from {
                height: 320%;
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