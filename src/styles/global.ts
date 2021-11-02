import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Inter', sans-serif;
}
:root {
    --primary-color: #27AE60;
    --primary-color-50: #93D7AF;
    --secondary-color: #EB5757;
    --white: #F5F5F5;
    --grey-600: #333333;
    --grey-300: #828282;
    --grey-100: #E0E0E0;
    --info: #155BCB;
    --success: #168821;
    --warning: #FFCD07;
    --error: #E60000;
    /* --light: ;
    --dark: ; */
}

body {
    background-attachment: fixed;
    color: var(--grey-600);
    height: 100%;
    margin: 10px;
}

h1 {
    font-size: 26px;
    font-weight: bold;
}

h2 {
    font-size: 22px;
    font-weight: bold;
}

h3 {
    font-size: 18px;
    font-weight: bold;
}

button {
    cursor: pointer;
}

#logoContainer {
    display: flex;
    width: 100%;
    max-width: 479px;
}


@media screen and (min-width: 1024px) {
    body {
        margin: 115px;
        margin-bottom: 0;
    }

}

/* .Toastify__toast-theme--colored.Toastify__toast--success {
    color: var(--success);
    background: var();
    border: 2px solid var();
    border-radius: 10px;
    color: var();
    .Toastify__progress-bar {
        background: var();
    }
    .Toastify__close-button--colored {
        
        color: var();
    }
}
.Toastify__toast-theme--colored.Toastify__toast--error, .Toastify__toast-theme--colored.Toastify__toast--warning {
    color: var(--success);
    background: var();
    border: 2px solid var();
    border-radius: 10px;
    color: var();
    .Toastify__progress-bar {
        background: var();
    }
    .Toastify__close-button--colored {
        
        color: var();
    } 
}*/

`
