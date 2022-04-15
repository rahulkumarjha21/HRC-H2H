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
@WebServlet("/Delete")
public class Delete extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	public Delete()
	{
		super();
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=response.getWriter();
		String id=request.getParameter("id");
		id="'"+id+"'";
		System.out.println("'"+id+"'");
		//WinterInternship Transaction=new WinterInternship();
		response.setHeader("Access-Control-Allow-Origin","*");
		id=id.replaceAll(",","','");
		id="("+id+")";
		System.out.println("Hi"+id);
		String sl_no[]=id.split(",");
		//Transaction.setSl_no(sl_no);
		int status=new Crud().deleteStatus(id);
		if(status>0)
		{
			out.print("<p>Record Deleted Sucessfully!</p>");
		}
		else
		{
			out.print("<p>Sorry Unable To Delete Record!</p>");
		}
		out.close();
	}
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		doGet(request,response);
		response.setHeader("Access-Control-Allow-Origin","*");
	}
}