import ABCLogoFull from '../images/ABCLogoFull.svg';
import hrcLogo from '../images/hrcLogo.svg'
import { AppBar , Typography , makeStyles , Toolbar , Grid } from "@material-ui/core";
const useStyles=makeStyles((theme) => ({
    main: {
        backgroundColor: '#283a46'
    },
    box1: {
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    box2: {
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%'
    },
}))
function Header() {
    const classes=useStyles();
    return (
        <>
            <AppBar position='static' className={classes.main}>
                <Toolbar>
                    <Grid container className={classes.box1}>
                        <Grid item xs={3} className={classes.box2}>
                            <img src={ABCLogoFull} className={classes.image} />
                        </Grid>
                        <Grid item xs={3} className={classes.box2}>
                            <img src={hrcLogo} className={classes.image} />
                        </Grid>
                        <Grid item xs={3} className={classes.box2}></Grid>
                    </Grid>
                </Toolbar>
                <Toolbar>
                    <Typography variant='h6'>Invoice List</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Header;