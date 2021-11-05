import styled from "styled-components"

export const DashboardContainer = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        width: 100%;
        height: 80px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--white);

        #logoContainer {
            display: none;
        }

        #iconsContainer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #bdbdbd;
            width: 100%;

            svg {
                font-size: 23px;
            }

            #searchInput {
                input {
                    border: 2px solid var(--grey-100);
                    border-radius: 8px;
                    background-color: white;
                    height: 45px;
                    width: 200px;
                    padding-left: 10px;
                }

                input::placeholder {
                    font-size: 16px;
                    line-height: 19px;
                    color: var(--grey-100);
                }
            }

            #icons {
                display: flex;
                gap: 20px;
            }

            #cartIcon {
                position: relative;

                #cartLength {
                    position: absolute;
                    top: -13px;
                    right: -13px;
                    text-align: center;
                    width: 20px;
                    height: 24px;
                    border-radius: 7px;
                    background-color: var(--primary-color);
                    color: white;
                    font-size: 14px;
                    font-weight: 900;
                    display: grid;
                    place-items: center;
                }
            }
        }
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 95vh;
    }

    #section {
        margin-top: 85px;
        display: flex;
        gap: 20px;
        overflow-x: auto;

        #empty {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;
        }

        ::-webkit-scrollbar {
            height: 10px;
        }
        ::-webkit-scrollbar-track {
            background: var(--grey-100);
            border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--primary-color);
            border-radius: 8px;
        }
    }

    @media screen and (min-width: 600px) {
        header {
            #logoContainer {
                display: flex;
            }

            #iconsContainer {
                width: auto;
                gap: 20px;

                #searchInput {
                    width: 315px;

                    input {
                        width: 100%;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        header {
            #iconsContainer {
                #searchInput {
                    width: 415px;
                }
            }
        }

        #section {
            overflow-x: initial;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 240px;
            height: 100vh;
        }
    }

    @media screen and (min-width: 1024px) {
        #section {
            margin-top: 30px;
        }
    }
`
