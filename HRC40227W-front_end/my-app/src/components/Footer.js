import { AppBar , Box , makeStyles , Typography } from "@material-ui/core";
const useStyles=makeStyles((theme) => ({
    main: {
        textAlign: 'center',
        padding: '15px 0px',
        backgroundColor: '#283a46',
        fontSize: '2.5vw',
        fontWeight: 'bold'
    }
}));
function Footer() {
    const classes=useStyles();
    return (
        <>
            <AppBar position="static">
                <Box>
                    <Typography variant="subtitle1" className={classes.main}><span style={{color:' #0000FF',textDecoration:'underline'}}>Privacy Policy</span> | &#169; 2022 HighRadius Corporation. All rights reserved.</Typography>
                </Box>
            </AppBar>
        </>
    );
}
export default Footer;