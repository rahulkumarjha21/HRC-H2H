package com.crud;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import com.pojo.WinterInternship;
public class Crud 
{
	public Connection getConnection()
	{
		Connection conn=null;
		String url="jdbc:mysql://localhost:3306/grey_goose";
		String user="root";
		String password="root";
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			conn=DriverManager.getConnection(url,user,password);
		}
		catch(ClassNotFoundException e)
		{
			e.printStackTrace();
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return conn;
	}
	public int addData(WinterInternship Transaction)
	{
		int status=0;
		try
		{
			Connection conn=getConnection();
			PreparedStatement ps=conn.prepareStatement("insert into winter_internship (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			System.out.println(Transaction.getDue_in_date());
			//ps.setLong(1,-10);
			ps.setString(1,Transaction.getBusiness_code());
			ps.setLong(2,Transaction.getCust_number());
			ps.setString(3,Transaction.getClear_date());
			ps.setLong(4,Transaction.getBusiness_year());
			ps.setLong(5,Transaction.getDoc_id());
			ps.setString(6,Transaction.getPosting_date());
			ps.setString(7,Transaction.getDocument_create_date());
			ps.setString(8,Transaction.getDue_in_date());
			ps.setString(9,Transaction.getInvoice_currency());
			ps.setString(10,Transaction.getDocument_type());
			ps.setLong(11,Transaction.getPosting_id());
			ps.setDouble(12,Transaction.getTotal_open_amount());
			ps.setString(13,Transaction.getBaseline_create_date());
			ps.setString(14,Transaction.getCust_payment_terms());
			ps.setLong(15,Transaction.getInvoice_id());
			status=ps.executeUpdate();
			conn.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return status;
	}
	public int updateStatus(WinterInternship Transaction)
	{
		int status=0;
		try
		{
			Connection conn=getConnection();
			PreparedStatement ps=conn.prepareStatement("update winter_internship set invoice_currency=?,cust_payment_terms=? where sl_no=?");
			ps.setString(1,Transaction.getInvoice_currency());
			ps.setString(2,Transaction.getCust_payment_terms());
			ps.setLong(3,Transaction.getSl_no());
			System.out.println(Transaction.getInvoice_currency()+Transaction.getCust_payment_terms()+Transaction.getSl_no());
			status=ps.executeUpdate();
			conn.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return status;
	}
	//public int deleteStatus(WinterInternship Transaction)
	public int deleteStatus(String sl_no)
	{
		int status=0;
		try
		{
			Connection conn=getConnection();
			//PreparedStatement ps=conn.prepareStatement("delete from winter_internship where sl_no=?");
			System.out.println(sl_no);
			PreparedStatement ps=conn.prepareStatement("delete from winter_internship where sl_no IN"+sl_no);
			//ps.setLong(1,Transaction.getSl_no());
			status=ps.executeUpdate();
			conn.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return status;
	}
	public ArrayList<WinterInternship> getData()
	{
		ArrayList<WinterInternship> AllTransactions=new ArrayList<WinterInternship>();
		Double total_open_amount;
		Long sl_no,cust_number,business_year,doc_id,posting_id,invoice_id;
		String business_code,clear_date,posting_date,document_create_date,due_in_date,invoice_currency,document_type,baseline_create_date,cust_payment_terms;
		try
		{
			Connection conn=getConnection();
			String sql_query="select * from winter_internship";
			PreparedStatement pst=conn.prepareStatement(sql_query);
			ResultSet rs=pst.executeQuery();
			while(rs.next())
			{
				sl_no=rs.getLong("sl_no");
				business_code=rs.getString("business_code");
				cust_number=rs.getLong("cust_number");
				clear_date=rs.getString("clear_date");
				business_year=rs.getLong("buisness_year");
				doc_id=rs.getLong("doc_id");
				posting_date=rs.getString("posting_date");
				document_create_date=rs.getString("document_create_date");
				due_in_date=rs.getString("due_in_date");
				invoice_currency=rs.getString("invoice_currency");
				document_type=rs.getString("document_type");
				posting_id=rs.getLong("posting_id");
				total_open_amount=rs.getDouble("total_open_amount");
				baseline_create_date=rs.getString("baseline_create_date");
				cust_payment_terms=rs.getString("cust_payment_terms");
				invoice_id=rs.getLong("invoice_id");
				WinterInternship Transaction=new WinterInternship(sl_no,business_code,cust_number,clear_date,business_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);
				AllTransactions.add(Transaction);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			System.out.println("Exception Occured");
		}
		return AllTransactions;
	}
	public ArrayList<WinterInternship> getSearch(WinterInternship Transaction2)
	{
		ArrayList<WinterInternship> AllTransactions=new ArrayList<WinterInternship>();
		Double total_open_amount;
		Long sl_no,cust_number,business_year,doc_id,posting_id,invoice_id;
		String business_code,clear_date,posting_date,document_create_date,due_in_date,invoice_currency,document_type,baseline_create_date,cust_payment_terms;
		try
		{
			Connection conn=getConnection();
			System.out.println(Transaction2.getDoc_id()+" "+Transaction2.getInvoice_id()+" "+Transaction2.getCust_number()+" "+Transaction2.getBusiness_year());
			String sql_query="select * from winter_internship where doc_id="+Transaction2.getDoc_id()+" and invoice_id="+Transaction2.getInvoice_id()+" and cust_number="+Transaction2.getCust_number()+" and buisness_year="+Transaction2.getBusiness_year();
			PreparedStatement pst=conn.prepareStatement(sql_query);
			ResultSet rs=pst.executeQuery();
			while(rs.next())
			{
				sl_no=rs.getLong("sl_no");
				business_code=rs.getString("business_code");
				cust_number=rs.getLong("cust_number");
				clear_date=rs.getString("clear_date");
				business_year=rs.getLong("buisness_year");
				doc_id=rs.getLong("doc_id");
				posting_date=rs.getString("posting_date");
				document_create_date=rs.getString("document_create_date");
				due_in_date=rs.getString("due_in_date");
				invoice_currency=rs.getString("invoice_currency");
				document_type=rs.getString("document_type");
				posting_id=rs.getLong("posting_id");
				total_open_amount=rs.getDouble("total_open_amount");
				baseline_create_date=rs.getString("baseline_create_date");
				cust_payment_terms=rs.getString("cust_payment_terms");
				invoice_id=rs.getLong("invoice_id");
				WinterInternship Transaction=new WinterInternship(sl_no,business_code,cust_number,clear_date,business_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);
				AllTransactions.add(Transaction);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			System.out.println("Exception Occured");
		}
		return AllTransactions;
	}
	public ArrayList<String> getView()
	{
		ArrayList<String> data=new ArrayList<String>();
		try
		{
			Connection conn=getConnection();
			String query = "SELECT COUNT(invoice_currency) FROM winter_internship WHERE invoice_currency = 'CAD' ";
			String query2 = "SELECT COUNT(invoice_currency) FROM winter_internship";
			String query3 = "SELECT COUNT(business_code) FROM winter_internship WHERE business_code = 'CA02'";
			String query4 = "SELECT MAX(total_open_amount) FROM winter_internship WHERE business_code = 'CA02'";
			String query5 = "SELECT COUNT(business_code) FROM winter_internship WHERE business_code = 'U001'";
			String query6 = "SELECT MAX(total_open_amount) FROM winter_internship WHERE business_code = 'U001'";
			String query7 = "SELECT COUNT(business_code) FROM winter_internship WHERE business_code = 'U002'";
			String query8 = "SELECT MAX(total_open_amount) FROM winter_internship WHERE business_code = 'U002'";
			String query9 = "SELECT COUNT(business_code) FROM winter_internship WHERE business_code = 'U005'";
			String query10 = "SELECT MAX(total_open_amount) FROM winter_internship WHERE business_code = 'U005'";
			String query11 = "SELECT COUNT(business_code) FROM winter_internship WHERE business_code = 'U007'";
			String query12 = "SELECT MAX(total_open_amount) FROM winter_internship WHERE business_code = 'U007'";
			String query13 = "SELECT COUNT(business_code) FROM winter_internship WHERE business_code = 'U013'";
			String query14 = "SELECT MAX(total_open_amount) FROM winter_internship WHERE business_code = 'U013'";
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			rs.next();
			data.add(rs.getString("COUNT(invoice_currency)"));
			ResultSet rs2 = st.executeQuery(query2);
			rs2.next();
			data.add(rs2.getString("COUNT(invoice_currency)"));
			ResultSet rs3 = st.executeQuery(query3);
			rs3.next();
			data.add(rs3.getString("COUNT(business_code)"));
			ResultSet rs4 = st.executeQuery(query4);
			rs4.next();
			data.add(rs4.getString("MAX(total_open_amount)"));
			ResultSet rs5 = st.executeQuery(query5);
			rs5.next();
			data.add(rs5.getString("COUNT(business_code)"));
			ResultSet rs6 = st.executeQuery(query6);
			rs6.next();
			data.add(rs6.getString("MAX(total_open_amount)"));
			ResultSet rs7 = st.executeQuery(query7);
			rs7.next();
			data.add(rs7.getString("COUNT(business_code)"));
			ResultSet rs8 = st.executeQuery(query8);
			rs8.next();
			data.add(rs8.getString("MAX(total_open_amount)"));
			ResultSet rs9 = st.executeQuery(query9);
			rs9.next();
			data.add(rs9.getString("COUNT(business_code)"));
			ResultSet rs10 = st.executeQuery(query10);
			rs10.next();
			data.add(rs10.getString("MAX(total_open_amount)"));
			ResultSet rs11 = st.executeQuery(query11);
			rs11.next();
			data.add(rs11.getString("COUNT(business_code)"));
			ResultSet rs12 = st.executeQuery(query12);
			rs12.next();
			data.add(rs12.getString("MAX(total_open_amount)"));
			ResultSet rs13 = st.executeQuery(query13);
			rs13.next();
			data.add(rs13.getString("COUNT(business_code)"));
			ResultSet rs14 = st.executeQuery(query14);
			rs14.next();
			data.add(rs14.getString("MAX(total_open_amount)"));
		}
		catch(Exception e)
		{
			e.printStackTrace();
			System.out.println("Exception Occured");
		}
		return data;
	}
}