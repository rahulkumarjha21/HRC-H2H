package com.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.crud.Crud;
import com.pojo.WinterInternship;
@WebServlet("/Update")
public class Update extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	public Update()
	{
		super();
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=response.getWriter();
		Long sl_no=Long.parseLong(request.getParameter("sl_no"));
		String invoice_currency=request.getParameter("invoice_currency");
		String cust_payment_terms=request.getParameter("cust_payment_terms");
		System.out.println(cust_payment_terms);
		WinterInternship Transaction=new WinterInternship();
		Transaction.setSl_no(sl_no);
		Transaction.setInvoice_currency(invoice_currency);
		Transaction.setCust_payment_terms(cust_payment_terms);
		int status=new Crud().updateStatus(Transaction);
		if(status>0)
		{
			out.print("<p>Record Updated Sucessfully!</p>");
		}
		else
		{
			out.print("<p>Sorry Unable To Update Record!</p>");
		}
		System.out.println(status);
		response.setHeader("Access-Control-Allow-Origin","*");
		out.close();
	}
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		doGet(request,response);
		response.setHeader("Access-Control-Allow-Origin","*");
	}
}