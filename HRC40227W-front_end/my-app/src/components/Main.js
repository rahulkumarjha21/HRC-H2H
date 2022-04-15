// Imported Libraries
import axios from "axios";
import { Paper , Box , makeStyles , Grid, Button, Typography, Container , TextField , Dialog , DialogActions , DialogTitle , DialogContent } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React , { useState , useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
// Important Links
const fetchdata="http://localhost:8080/B2BInvoiceManagmentSystem/Fetch";
// Columns In DataBase
const columns=[
    {
        field: "sl_no",
        headerName: "Sl no",
        description: "Sl no",
        width: 250
    },
    {
        field: "business_code",
        headerName: "Business Code",
        description: "Business Code",
        width: 250
    },
    {
        field: "cust_number",
        headerName: "Customer Number",
        description: "Customer Number",
        width: 250
    },
    {
        field: "clear_date",
        headerName: "Clear Date",
        description: "Clear Date",
        width: 250
    },
    {
        field: "business_year",
        headerName: "Business Year",
        description: "Business Year",
        width: 250
    },
    {
        field: "doc_id",
        headerName: "Document Id",
        description: "Document Id",
        width: 250
    },
    {
        field: "posting_date",
        headerName: "Posting Date",
        description: "Posting Date",
        width: 250
    },
    {
        field: "document_create_date",
        headerName: "Document Create Date",
        description: "Document Create Date",
        width: 250
    },
    {
        field: "due_in_date",
        headerName: "Due Date",
        description: "Due Date",
        width: 250
    },
    {
        field: "invoice_currency",
        headerName: "Invoice Currency",
        description: "Invoice Currency",
        width: 250
    },
    {
        field: "document_type",
        headerName: "Document Type",
        description: "Document Type",
        width: 250
    },
    {
        field: "posting_id",
        headerName: "Posting Id",
        description: "Posting Id",
        width: 250
    },
    {
        field: "total_open_amount",
        headerName: "Total Open Amount",
        description: "Total Open Amount",
        width: 250
    },
    {
        field: "baseline_create_date",
        headerName: "Baseline Create Date",
        description: "Baseline Create Date",
        width: 250
    },
    {
        field: "cust_payment_terms",
        headerName: "Customer Payment Terms",
        description: "Customer Payment Terms",
        width: 250
    },
    {
        field: "invoice_id",
        headerName: "Invoice Id",
        description: "Invoice Id",
        width: 250
    }
];
// Material Ui / React Styling
const useStyles=makeStyles((theme)=> ({
    table: {
        maxwidth: '100vw',
        height: '430px',
        margin: '25px 0px',
        backgroundColor: '#2A3E46',
        color: 'white',
        '& .MuiTablePagination-root ': {
            color: 'white',
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: 'white'
        }
    },
    container: {
        position: 'flex',
        justifyContent:'space-between',
        marginTop:'20px',
        marginBottom: '5px',
        maxWidth: '100vw'
    },
    item1: {
        display: 'flex',
        justifyContent:'space-around',
        marginTop:'7.5px',
        marginBottom: '7.5px',
        maxWidth: '100vw' 
    },
    button1: {
        color: 'white',
        backgroundColor: '#14AFF1',
        width: '100%',
        height:'100%',
        borderRadius: '0px',
        border: '1px solid #14AFF1',
        fontSize:'12px'
    },
    button2: {
        color: 'white',
        backgroundColor: '#283a46',
        width: '100%',
        height:'100%',
        borderRadius: '0px',
        border: '1px solid #14AFF1',
        fontSize:'12px'
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        height:'100%',
        border: '0px',
        borderRadius: '2px',
        fontSize:'12px',
        paddingLeft: '2.5px',
        paddingRight: '2.5px',
    },
    textfield:{
        '& .MuiInputBase-input':{
            backgroundColor: 'white',
            color:'black'
        },
        '& .MuiInputLabel-outlined':{
            backgroundColor: 'white',
            color:'black'
        }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        paddingTop:'10px',
        paddingBottom: '10px',
        '& .MuiInputBase-input': {
            backgroundColor: 'white',
            color:'black'
        },
        '& .MuiFormLabel-filled': {
            backgroundColor: 'white',
            color:'black'
        }
      },
}));
// React Main Functional Componenets
function Main() {
    // Pagination
    const [pageSize,setPageSize]=useState(10);
    const [rows,setRows]=useState([]);
    // DataGrid Data Loading & Analytics View Data Loading 
    var recived=[];
    useEffect(()=>{
        async function fectchData() {
            const response=await axios.get(fetchdata);
            setRows(response.data);
            const response2=await axios.get("http://localhost:8080/B2BInvoiceManagmentSystem/View");
            recived=Object.keys(response2.data);
            console.log(recived);
        }
        fectchData();
    },[]);
    // Refresh Data Grid Data Loading & Analytics View Data Loading 
    const [refreshGrid,setRefreshGrid]=useState(0);
    useEffect(()=>{
        async function fectchData2() {
            const response=await axios.get(fetchdata);
            setRows(response.data);
            const response2=await axios.get("http://localhost:8080/B2BInvoiceManagmentSystem/View");
            recived=response2.data;
            console.log(recived);
        }
        fectchData2();
    },[refreshGrid]);
    function reload() {
        if(refreshGrid===0)
            setRefreshGrid(1);
        else
            setRefreshGrid(0);
    }
    // Dialog Open / Close useState Declaration
    const [showDialog1,setShowDialog1]=useState(false);
    const [showDialog2,setShowDialog2]=useState(false);
    const [showDialog3,setShowDialog3]=useState(false);
    const [showDialog4,setShowDialog4]=useState(false);
    const [showDialog5,setShowDialog5]=useState(false);
    const [showDialog6,setShowDialog6]=useState(false);
    const [showDialog7,setShowDialog7]=useState(false);
    const [deleteButton,setDeleteButton]=useState(true);
    const [editButton,setEditButton]=useState(true);
    // Calling useStyle Function
    const classes=useStyles();
    // User useState Delaration For Add
    const [user,setUser]=useState({
        business_code:"",
		cust_number:"",
		clear_date:"",
		business_year:"",
		doc_id:"",
		posting_date:"",
		document_create_date:"",
		due_in_date:"",
		invoice_currency:"",
		document_type:"",
		posting_id:"",
		total_open_amount:"",
	    baseline_create_date:"",
		cust_payment_terms:"",
		invoice_id:""
    });
    // User2 useState Delaration For Edit
    const [user2,setUser2]=useState({
        sl_no:"",
		invoice_currency2:"",
		cust_payment_terms2:"",
    });
    // User3 useState Delaration For Search
    const [user3,setUser3]=useState({
        doc_id3:"",
        invoice_id3:"",
        cust_number3:"",
        business_year3:"",
    });
    // Handle Input For Add
    const handleInput= (e) => {
        console.log('Hello');
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUser({...user,[name]:value});
    }
    // Handle Input For Edit
    const handleInput2= (e) => {
        console.log('Hi');
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUser2({...user2,[name]:value});
    }
    // Handle Input For Search
    const handleInput3= (e) => {
        console.log('Hii');
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUser3({...user3,[name]:value});
    }
    // Add Servlet Call 
    const onSubmit=async (e)=> {
        e.preventDefault();
        const newUser={...user};
        let data = "&business_code="+newUser.business_code+"&cust_number="+newUser.cust_number+"&clear_date="+newUser.clear_date+"&business_year="+newUser.business_year+"&doc_id="+newUser.doc_id+"&posting_date="+newUser.posting_date+"&document_create_date="+newUser.document_create_date+"&due_in_date="+newUser.due_in_date+"&invoice_currency="+newUser.invoice_currency+"&document_type="+newUser.document_type+"&posting_id="+newUser.posting_id+"&total_open_amount="+newUser.total_open_amount+"&baseline_create_date="+newUser.baseline_create_date+"&cust_payment_terms="+newUser.cust_payment_terms+"&invoice_id="+newUser.invoice_id;
        const result=(await axios.post("http://localhost:8080/B2BInvoiceManagmentSystem/Add?"+data));
        if(result.data==='<p>Record Saved Sucessfully!</p>')
            alert("Added Transaction Details Succesfully");
        else
            alert("Failed To Added Transaction Details: Invalid Information Details Provided");
        setUser({
            business_code:"",
            cust_number:"",
            clear_date:"",
            business_year:"",
            doc_id:"",
            posting_date:"",
            document_create_date:"",
            due_in_date:"",
            invoice_currency:"",
            document_type:"",
            posting_id:"",
            total_open_amount:"",
            baseline_create_date:"",
            cust_payment_terms:"",
            invoice_id:""
        });
    }
    // Store Delete Rows Details
    const [deleteRow,setDeleteRow]=useState([]);
    // Store Edit Row Details
    const [editRow,setEditRow]=useState(null);
    // Delete Servlet Call
    const remove=async (e)=> {
        const result=await axios.post("http://localhost:8080/B2BInvoiceManagmentSystem/Delete?&id="+deleteRow);
        if(result.data==='<p>Record Deleted Sucessfully!</p>')
            alert("Deleted Transaction Details Succesfully");
        else
            alert("Failed To Delete Transaction Details: Invalid Information Details Provided");
        setShowDialog2(false);
    }
    // Edit Servlet Call
    const edit=async (e)=> {
        const result=await axios.post("http://localhost:8080/B2BInvoiceManagmentSystem/Update?&sl_no="+user2.sl_no+"&invoice_currency="+user2.invoice_currency2+"&cust_payment_terms="+user2.cust_payment_terms2);
        if(result.data==='<p>Record Updated Sucessfully!</p>')
            alert(" Transaction Details Updated Succesfully ");
        else
            alert("Failed To Update Transaction Details: Invalid Information Details Provided");
        setShowDialog3(false);
    }
    //Search Servlet Call
    useEffect(()=>{
        async function fectchData2() {
            const response=await axios.get("http://localhost:8080/B2BInvoiceManagmentSystem/Search?&doc_id="+user3.doc_id3+"&cust_number="+user3.cust_number3+"&invoice_id="+user3.invoice_id3+"&business_year="+user3.business_year3);
            setRows(response.data);
            setUser3({
                doc_id3:"",
                invoice_id3:"",
                cust_number3:"",
                business_year3:"",
            });
        }
        fectchData2();
    },[showDialog5]);
    // Map Check Function
    function check(row)
    {
        if(row.sl_no==editRow)
            return true;
    }
    // ChartJs Register
    ChartJs.register(
        Tooltip, Title, ArcElement, Legend
      );
    // Pie Properties
    const recivedData={
        datasets:[{
            data:[recived[0],recived[1]-recived[0]],
            backgroundColor:['red','blue'],
        },
    ],
    labels: [
        'CAD',
        'USA',
    ],
    };
    console.log(recived);
    // Return Of Main Function React Component 
    return (
        <>
            {/* Add Form Dialog */}
            <Box>
                <Container>
                    <Dialog open={showDialog1} maxWidth="xl">
                        <DialogTitle>
                            <Typography variant="h6" style={{color:'black'}}>Add</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <form onSubmit={onSubmit} id="myform">
                                <Grid container style={{margin:'15px 0px',display: 'flex',justifyContent:'space-between'}}>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Business Code" variant="outlined" className={classes.textfield} name="business_code" value={user.business_code} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Customer Number" variant="outlined" className={classes.textfield} name="cust_number" value={user.cust_number} onChange={handleInput} required  />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="date" label="Clear Date" type="date" defaultValue="2022-01-25" variant="outlined" className={classes.textField} InputLabelProps={{shrink: true,}} name="clear_date" value={user.clear_date} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Business Year" variant="outlined" className={classes.textfield} name="business_year" value={user.business_year} onChange={handleInput} required />
                                    </Grid>
                                </Grid>
                                <Grid container style={{margin:'15px 0px',display: 'flex',justifyContent:'space-between'}}>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Document Id" variant="outlined" className={classes.textfield} name="doc_id" value={user.doc_id} onChange={handleInput} required/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="date" label="Posting Date" type="date" defaultValue="2022-01-26" variant="outlined" className={classes.textField} InputLabelProps={{shrink: true,}} name="posting_date" value={user.posting_date} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="date" label="Document Create Date" type="date" defaultValue="2022-01-25" variant="outlined" className={classes.textField} InputLabelProps={{shrink: true,}} name="document_create_date" value={user.document_create_date} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="date" label="Due Date" type="date" defaultValue="2022-01-25" variant="outlined" className={classes.textField} InputLabelProps={{shrink: true,}} name="due_in_date" value={user.due_in_date} onChange={handleInput} required />
                                    </Grid>
                                </Grid>
                                <Grid container style={{margin:'15px 0px',display: 'flex',justifyContent:'space-between'}}>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" className={classes.textfield} name="invoice_currency" value={user.invoice_currency} onChange={handleInput} required  />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Document Type" variant="outlined" className={classes.textfield} name="document_type" value={user.document_type} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Posting Id" variant="outlined" className={classes.textfield} name="posting_id" value={user.posting_id} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Total Open Amount" variant="outlined" className={classes.textfield} name="total_open_amount" value={user.total_open_amount} onChange={handleInput} required />
                                    </Grid>
                                </Grid>
                                <Grid container style={{margin:'15px 0px',display: 'flex',justifyContent:'space-between'}}>
                                    <Grid item>
                                        <TextField id="date" label="Baseline Create Date" type="date" defaultValue="2022-01-26" variant="outlined" className={classes.textField} InputLabelProps={{shrink: true,}} name="baseline_create_date" value={user.baseline_create_date} onChange={handleInput} required/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" className={classes.textfield} name="cust_payment_terms" value={user.cust_payment_terms} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Invoice Id" variant="outlined" className={classes.textfield} name="invoice_id" value={user.invoice_id} onChange={handleInput} required />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{visibility:'hidden'}} className={classes.textfield} />
                                    </Grid>
                                </Grid>
                                <Grid container style={{textAlign:'center'}}>
                                    <Grid xs={6}>
                                        <input type="submit" style={{color:'black',border:'1px solid black',height:'100%',width:'95%'}} value="ADD"/>
                                    </Grid>
                                    <Grid xs={6}>
                                        <Button style={{color:'black',border:'1px solid black',width:'95%'}} onClick={()=>{setUser({
                                            business_code:"",
                                            cust_number:"",
                                            clear_date:"",
                                            business_year:"",
                                            doc_id:"",
                                            posting_date:"",
                                            document_create_date:"",
                                            due_in_date:"",
                                            invoice_currency:"",
                                            document_type:"",
                                            posting_id:"",
                                            total_open_amount:"",
                                            baseline_create_date:"",
                                            cust_payment_terms:"",
                                            invoice_id:""
                                        });setShowDialog1(false);}}>CANCEL</Button>
                                    </Grid>
                                </Grid>
                                </form>
                            </DialogContent>
                        </Dialog>
                </Container>
            </Box>
            {/* Delete Record[s] Dialog */}
            <Box>
                <Container>
                    <Dialog open={showDialog2} maxWidth='xs'>
                        <DialogTitle>
                            <Typography>Delete Records ?</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Typography>Are you sure you want to delete these record[s] ?</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <Button style={{textAlign: "center",border: '2px solid black',width: '90%'}} onClick={()=>{setShowDialog2(false);}}>CANCEL</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button style={{textAlign:"center",border: '2px solid black',width: '90%'}} onClick={remove}>DELETE</Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Box>
            {/* Edit Record Dialog */}
            <Box>
                <Container>
                    <Dialog open={showDialog3} maxWidth='xs'>
                        <DialogTitle>
                            <Typography>Edit</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" className={classes.textfield} name="invoice_currency2" value={user2.invoice_currency2} onChange={handleInput2} style={{width: '90%'}} required  />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" className={classes.textfield} name="cust_payment_terms2" value={user2.cust_payment_terms2} onChange={handleInput2} style={{width: '90%'}} required />
                                    </Grid>
                                </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <Button style={{textAlign:"center",border: '2px solid black',width: '90%'}} onClick={edit}>Edit</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button style={{textAlign: "center",border: '2px solid black',width: '90%'}} onClick={()=>{setShowDialog3(false);}}>CANCEL</Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Box>
            {/* Advance Search Dialog */}
            <Box>
                <Container>
                    <Dialog open={showDialog4} maxWidth='xs'>
                        <DialogTitle>
                            <Typography>Advance Search</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly',paddingBottom:'10px'}}>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" label="Document Id" variant="outlined" className={classes.textfield} name="doc_id3" value={user3.doc_id3} onChange={handleInput3} style={{width: '90%'}} required/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" label="Invoice Id" variant="outlined" className={classes.textfield} name="invoice_id3" value={user3.invoice_id3} onChange={handleInput3} style={{width: '90%'}} required />
                                </Grid>
                            </Grid>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" label="Customer Number" variant="outlined" className={classes.textfield} name="cust_number3" value={user3.cust_number3} onChange={handleInput3} style={{width: '90%'}} required  />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" label="Business Year" variant="outlined" className={classes.textfield} name="business_year3" value={user3.business_year3} onChange={handleInput3} style={{width: '90%'}} required />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <Button style={{textAlign:"center",border: '2px solid black',width: '90%'}} onClick={()=>{
                                                                                                                            if(showDialog5===true)
                                                                                                                                setShowDialog5(false);
                                                                                                                            else
                                                                                                                                setShowDialog5(true);
                                                                                                                            setShowDialog4(false);
                                    }}>SEARCH</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button style={{textAlign: "center",border: '2px solid black',width: '90%'}} onClick={()=>{setShowDialog4(false);
                                    setUser3({
                                        doc_id3:"",
                                        invoice_id3:"",
                                        cust_number3:"",
                                        business_year3:"",
                                    });
                                                                                                                            }}>CANCEL</Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Box>
            {/* Analytic View Dialog */}
            <Box>
                <Container>
                    <Dialog open={showDialog6} maxWidth='xs'>
                        <DialogTitle>
                            <Typography>Analytics View</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <Typography style={{width:'90%'}}>Clear Date</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography style={{width:'90%'}}>Due Date</Typography>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <TextField id="date" type="date" variant="outlined" style={{width:'90%'}} className={classes.textField} required/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="date" type="date" variant="outlined" style={{width:'90%'}} className={classes.textField} required/>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <TextField id="date" type="date" variant="outlined" style={{width:'90%'}} className={classes.textField} required/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="date" type="date" variant="outlined" style={{width:'90%'}} className={classes.textField} required/>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <Typography style={{width:'90%'}}>Baseline Create Date</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography style={{width:'90%'}}>Invoice Currency</Typography>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <TextField id="date" type="date" variant="outlined" style={{width:'90%'}} className={classes.textField} required/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" className={classes.textfield}  style={{width: '90%'}} required />
                                </Grid>
                            </Grid>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <TextField id="date" type="date" variant="outlined" style={{width:'90%'}} className={classes.textField} required/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="date" type="date" variant="outlined" style={{width:'90%',display:'none'}} className={classes.textField} required/>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Grid container xs={12} style={{display:'flex',justifyContent:'space-evenly'}}>
                                <Grid item xs={6}>
                                    <Button style={{textAlign:"center",border: '2px solid black',width: '90%'}} onClick={()=>{
                                                                                                                        setShowDialog6(false);
                                                                                                                        setShowDialog7(true);
                                    }}>SUBMIT</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button style={{textAlign: "center",border: '2px solid black',width: '90%'}} onClick={()=>{setShowDialog6(false);}}>CANCEL</Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Box>
            {/* Analytic View Dialog2 */}
            <Box>
                <Container>
                    <Dialog open={showDialog7} maxWidth='xs'>
                        <DialogTitle>
                            <Typography>Analytics View</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Pie data={recivedData} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=>{
                                setShowDialog7(false);
                            }}>CLOSE</Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Box>
            {/* Buttons Grid  */}
            <Grid container className={classes.container}>
                <Grid container className={classes.item1} xs={12} md={5} lg={5} >
                    <Grid item xs={2}>
                        <Button className={classes.button1}>PREDICT</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={classes.button2} onClick={()=>{
                                                                            setShowDialog6(true);
                        }}>ANALYTICS VIEW</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={classes.button2} onClick={()=>{
                                                                            setShowDialog4(true);
                                                                        }}>ADVANCE SEARCH</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button2} onClick={reload}><span class="material-icons">refresh</span></Button>
                    </Grid>
                </Grid>
                <Grid container className={classes.item1} xs={12} md={2} lg={2} >
                    <Grid item xs={10}>
                        <input className={classes.input} placeholder="Search Customer Id" />
                    </Grid>
                </Grid>
                <Grid container className={classes.item1} xs={12} md={4}  lg={4} >
                <Grid item xs={4}>
                        <Button className={classes.button2} onClick={()=>setShowDialog1(true)}>ADD</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={classes.button2} disabled={editButton} onClick={()=>{
                                                                                                setShowDialog3(true);
                                                                                                const result=rows.filter(check);
                                                                                                console.log(result[0].invoice_currency);
                                                                                                setUser2(
                                                                                                    {
                                                                                                        sl_no:result[0].sl_no,
                                                                                                        cust_payment_terms2:result[0].cust_payment_terms,
                                                                                                        invoice_currency2:result[0].invoice_currency,
                                                                                                    }
                                                                                                );
                                                                                                }}>EDIT</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={classes.button2} disabled={deleteButton} onClick={()=>setShowDialog2(true)}>DELETE</Button>
                    </Grid> 
                </Grid>
            </Grid>
            {/* Data Grid Table */}
            <Box>
                <Paper component={Box} className={classes.table} lg={4}>
                    <DataGrid sx={{}}  style={{color: 'white',fontSize: '14px'}}rows={rows} columns={columns} getRowId={(rows)=>rows.sl_no}  checkboxSelection={true} onSelectionModelChange={(items)=>{
                                                                                console.log(items.length);
                                                                                if(items.length===0)
                                                                                {
                                                                                    setDeleteButton(true);
                                                                                    setEditButton(true);
                                                                                }
                                                                                else if(items.length===1)
                                                                                {
                                                                                    setEditButton(false);
                                                                                    setDeleteButton(false);
                                                                                    setEditRow(items);
                                                                                    setDeleteRow(items);
                                                                                }
                                                                                else
                                                                                {
                                                                                    setEditButton(true);
                                                                                    setDeleteButton(false);
                                                                                    setDeleteRow(items);
                                                                                }
                                                                            }} rowHeight={30} pageSize={pageSize} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)} rowsPerPageOptions={[10,25,50]} pagination  />
                </Paper>
            </Box>
        </>
    );
}
export default Main;