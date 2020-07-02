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
 * Servlet implementation class Shuping_PC
 */
@WebServlet("/Shuping_PC")
public class Shuping_PC extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Shuping_PC() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("text/json;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        PrintWriter JsonOut = response.getWriter();
    //-------------------------------------------------------
        request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");

		Connection  conn = pub_fun.getConnection();
    	String Sql_str = "SELECT review_data.bookid,book_data.bookname1,book_data.bookimg,review_data.yhid,yhimg,name,reviewid,reviewcontext,review_data.date FROM review_data,yh_data,book_data WHERE review_data.yhid=yh_data.yhid AND review_data.bookid=book_data.bookid ";
    	String Ostr="";
    	try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			Ostr=Ostr+"[";
			while(rs.next())  
	            {  
				Ostr=Ostr+"{\"BKID\":\""+rs.getString("bookid")+"\",";
				Ostr=Ostr+"\"BKNAME\":\""+rs.getString("bookname1")+"\",";
				Ostr=Ostr+"\"BKIMG\":\""+rs.getString("bookimg")+"\",";
				Ostr=Ostr+"\"YHID\":\""+rs.getString("yhid")+"\",";
				Ostr=Ostr+"\"YHIMG\":\""+rs.getString("yhimg")+"\",";
				Ostr=Ostr+"\"YHNAME\":\""+rs.getString("name")+"\",";
				Ostr=Ostr+"\"REID\":\""+rs.getString("reviewid")+"\",";
				Ostr=Ostr+"\"RECONTEXT\":\""+rs.getString("reviewcontext")+"\",";
				Ostr=Ostr+"\"REDATE\":\""+rs.getString("date")+"\"},";	
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
