package web_test;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



/**
 * Servlet implementation class Zhuce
 */
@WebServlet("/Zhuce_PC")
public class Zhuce_PC extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Zhuce_PC() {
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
        
        request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		
//		String log = "1";
//		String pwd = "2";
//		String bri = "3";
//		String mal = "4";
//		String pho = "5";
		String log = request.getParameter("logName");
		String pwd = request.getParameter("logPwd");
		String bri = request.getParameter("Uaddress");
		String mal = request.getParameter("Uemail");
		String pho = request.getParameter("Uphone");
		System.out.println(log);
		System.out.println(pwd);
		System.out.println(bri);
		System.out.println(mal);
		System.out.println(pho);
		
		Connection  conn = pub_fun.getConnection();
		Timestamp d = new Timestamp(System.currentTimeMillis());
		String Sql_str = "insert into yh_data(name,pwd,phone,address,email,yhimg) values  (?,?,?,?,?,?)";
		String Ostr="";
		try {
			
			
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
//			ResultSet rs = (ResultSet) pstat.executeQuery();
			
			pstat.setString(1, log);
			pstat.setString(2, pwd);
			pstat.setString(3, pho);
			pstat.setString(4, bri);
			pstat.setString(5, mal);
			pstat.setString(6, "touxiang.png");
			
			 
			pstat.executeUpdate();
			pstat.close();
	        conn.close();
			Ostr="{\"code\":200,\"message\":\"成功\",\"date\":1504785964984}";
			
		}catch (SQLException e) {
            e.printStackTrace();
            Ostr="{\"date\":\"注册失败\" }";
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
