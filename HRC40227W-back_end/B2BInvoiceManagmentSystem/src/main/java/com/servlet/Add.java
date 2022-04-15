package com.servlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.crud.Crud;
import com.pojo.WinterInternship;
@WebServlet("/Add")
public class Add extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	public Add()
	{
		super();
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		Long sl_no=Long.parseLong("0");
		String business_code=request.getParameter("business_code");
		Long cust_number=Long.parseLong(request.getParameter("cust_number"));
		String clear_date=request.getParameter("clear_date");
		System.out.println(request.getParameter("business_year"));
		Long business_year=Long.parseLong(request.getParameter("business_year"));
		Long doc_id=Long.parseLong(request.getParameter("doc_id"));
		String posting_date=request.getParameter("posting_date");
		String document_create_date=request.getParameter("document_create_date");
		String due_in_date=request.getParameter("due_in_date");
		String invoice_currency=request.getParameter("invoice_currency");
		String document_type=request.getParameter("document_type");
		Long posting_id=Long.parseLong(request.getParameter("posting_id"));
		Double total_open_amount=Double.parseDouble(request.getParameter("total_open_amount"));
		String baseline_create_date=request.getParameter("baseline_create_date");
		String cust_payment_terms=request.getParameter("cust_payment_terms");
		System.out.println("Cust: "+cust_payment_terms);
		Long invoice_id=Long.parseLong(request.getParameter("invoice_id"));
		WinterInternship Transaction=new WinterInternship(sl_no,business_code,cust_number,clear_date,business_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);
		int status=new Crud().addData(Transaction);
		if(status>0)
		{
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().print("<p>Record Saved Sucessfully!</p>");
		}
		else
		{
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().print("<p>Sorry Unable To Save Record!</p>");
		}
	}
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		Long sl_no=Long.parseLong("0");
		String business_code=request.getParameter("business_code");
		Long cust_number=Long.parseLong(request.getParameter("cust_number"));
		String clear_date=request.getParameter("clear_date");
		System.out.println(request.getParameter("business_year"));
		Long business_year=Long.parseLong(request.getParameter("business_year"));
		Long doc_id=Long.parseLong(request.getParameter("doc_id"));
		String posting_date=request.getParameter("posting_date");
		String document_create_date=request.getParameter("document_create_date");
		String due_in_date=request.getParameter("due_in_date");
		String invoice_currency=request.getParameter("invoice_currency");
		String document_type=request.getParameter("document_type");
		Long posting_id=Long.parseLong(request.getParameter("posting_id"));
		Double total_open_amount=Double.parseDouble(request.getParameter("total_open_amount"));
		String baseline_create_date=request.getParameter("baseline_create_date");
		String cust_payment_terms=request.getParameter("cust_payment_terms");
		Long invoice_id=Long.parseLong(request.getParameter("invoice_id"));
		WinterInternship Transaction=new WinterInternship(sl_no,business_code,cust_number,clear_date,business_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);
		int status=new Crud().addData(Transaction);
		if(status>0)
		{
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().print("<p>Record Saved Sucessfully!</p>");
		}
		else
		{
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().print("<p>Sorry Unable To Save Record!</p>");
		}
	}
}