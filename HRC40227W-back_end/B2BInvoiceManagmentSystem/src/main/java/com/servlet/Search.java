package com.servlet;
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.crud.Crud;
import com.google.gson.Gson;
import com.pojo.WinterInternship;
@WebServlet("/Search")
public class Search extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	public Search()
	{
		super();
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		Long cust_number=Long.parseLong(request.getParameter("cust_number"));
		Long business_year=Long.parseLong(request.getParameter("business_year"));
		Long doc_id=Long.parseLong(request.getParameter("doc_id"));
		Long invoice_id=Long.parseLong(request.getParameter("invoice_id"));
		WinterInternship Transaction=new WinterInternship();
		Transaction.setDoc_id(doc_id);
		Transaction.setInvoice_id(invoice_id);
		Transaction.setCust_number(cust_number);
		Transaction.setBusiness_year(business_year);
		ArrayList<WinterInternship> data=new Crud().getSearch(Transaction);
		//System.out.println(data.get(0));
		Gson gson=new Gson();
		String respData=gson.toJson(data);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().print(respData);
	}
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		Long cust_number=Long.parseLong(request.getParameter("cust_number"));
		Long business_year=Long.parseLong(request.getParameter("business_year"));
		Long doc_id=Long.parseLong(request.getParameter("doc_id"));
		Long invoice_id=Long.parseLong(request.getParameter("invoice_id"));
		WinterInternship Transaction=new WinterInternship();
		Transaction.setDoc_id(doc_id);
		Transaction.setInvoice_id(invoice_id);
		Transaction.setCust_number(cust_number);
		Transaction.setBusiness_year(business_year);
		ArrayList<WinterInternship> data=new Crud().getSearch(Transaction);
		Gson gson=new Gson();
		String respData=gson.toJson(data);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().print(respData);
	}
}
