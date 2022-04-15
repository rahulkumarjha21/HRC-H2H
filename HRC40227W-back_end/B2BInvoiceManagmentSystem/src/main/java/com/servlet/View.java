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
@WebServlet("/View")
public class View extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	public View()
	{
		super();
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		Crud fetchData=new Crud();
		ArrayList<String> data=fetchData.getView();
		Gson gson=new Gson();
		String respData=gson.toJson(data);
		System.out.println(respData);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().print(respData);
	}
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		response.setHeader("Access-Control-Allow-Origin","*");
		doGet(request,response);
	}
}
