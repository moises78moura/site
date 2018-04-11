package br.com.infra;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

	
	private static final String URL = "jdbc:mySql://localhost:3306/db_agenda";
	private static final String USUARIO = "root";
	private static final String SENHA = "admin";
	
	
	public Connection getConnection(){
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			return DriverManager.getConnection(URL, USUARIO,SENHA);
		} catch (SQLException e) {
			// Relançada como RuntimeException para quem chamar a fábrica não ficar acoplado à api JDBC
			throw new RuntimeException(e);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}
}
