import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: purple[500],
        },
        
    },

});
