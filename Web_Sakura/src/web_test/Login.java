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
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        PrintWriter JsonOut = response.getWriter();
        
    //-------------------------------------------------------
        request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String log = request.getParameter("loginName");
		String pwd = request.getParameter("loginPwd");
		System.out.println(log);
		System.out.println(pwd);
		
		Connection  conn = pub_fun.getConnection();
		String Sql_str = "select * from yh_data where name = '" + log + "' and pwd = '" + pwd +"'";
		String Ostr="";
		try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			if(rs.next()){
				Ostr="{\"code\":200,\"message\":\"成功\",\"date\":1504785964984}";
			}else{
				Ostr="{\"date\":\"用户名或密码错误,请重新填写\" }";
			}
			
		}catch (SQLException e) {
            e.printStackTrace();
        }
		
		
//		String Ostr="";
//		if(log==null || "".equals(log)){
//			Ostr="{\"loginok\":\"用户名不能为容,请重新填写\" }";
//		}else if(pwd==null || "".equals(pwd)){
//			Ostr="{\"loginok\":\"密码不能为容,请重新填写\" }";
//		}else if("test".equals(log) || "12345678".equals(pwd)){
////			Ostr="{\"login\":\"登录成功，欢迎你\" }";
//			Ostr="{\"code\":200,\"message\":\"成功\",\"date\":1504785964984}";
//		}else{
//			Ostr="{\"loginok\":\"用户名或密码错误,请重新填写\" }";
//		}		
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
