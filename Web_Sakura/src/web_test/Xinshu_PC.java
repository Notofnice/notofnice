package web_test;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Xinshu
 */
@WebServlet("/Xinshu_PC")
public class Xinshu_PC extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Xinshu_PC() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("text/json;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        PrintWriter JsonOut = response.getWriter();
    //-------------------------------------------------------
        request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");

		Connection  conn = pub_fun.getConnection();
    	String Sql_str = "select * from book_data order by bookid";
    	String Ostr="";
    	try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			Ostr=Ostr+"[";
			while(rs.next())  
	            {  
				Ostr=Ostr+"{\"BKID\":\""+rs.getString("bookid")+"\",";
				Ostr=Ostr+"\"BKNAME\":\""+rs.getString("bookname1")+"\",";
				Ostr=Ostr+"\"BKNAME2\":\""+rs.getString("bookname2")+"\",";
				Ostr=Ostr+"\"BKAUT\":\""+rs.getString("bookauthor1")+"\",";
				Ostr=Ostr+"\"BKAUT2\":\""+rs.getString("bookauthor2")+"\",";
				Ostr=Ostr+"\"BKCOM\":\""+rs.getString("bookcompany1")+"\",";
				Ostr=Ostr+"\"BKCOM2\":\""+rs.getString("bookcompany2")+"\",";
				Ostr=Ostr+"\"BKW\":\""+rs.getString("bookcontext")+"\",";
				Ostr=Ostr+"\"BKPRICE\":\""+rs.getString("bookprice")+"\",";
				Ostr=Ostr+"\"BKDATE\":\""+rs.getString("bookdate")+"\",";
				Ostr=Ostr+"\"BKCLASS\":\""+rs.getString("bookclass")+"\",";
				Ostr=Ostr+"\"BKIMG_GG\":\""+rs.getString("bookimg_guanggao")+"\",";
				Ostr=Ostr+"\"BKIMG\":\""+rs.getString("bookimg")+"\"},";

				
				}  
			Ostr=Ostr+"]";
			Ostr=Ostr.replace("},]", "}]");
	        pstat.close();
	        conn.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    	
    	 System.out.println(Ostr);
	        JsonOut.println(Ostr);
	        JsonOut.flush();
	        JsonOut.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
