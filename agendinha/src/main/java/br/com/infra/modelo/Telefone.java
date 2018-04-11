package br.com.infra.modelo;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tb_telefone database table.
 * 
 */
@Entity
@Table(name="tb_telefone")
@NamedQuery(name="Telefone.findAll", query="SELECT t FROM Telefone t")
public class Telefone implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String ddd;

	private String numero;

	private String tipo;

	//bi-directional many-to-one association to Pessoa
	@ManyToOne
	@JoinColumn(name="FK_TB_PESSOA")
	private Pessoa pessoa;

	public Telefone() {
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDdd() {
		return this.ddd;
	}

	public void setDdd(String ddd) {
		this.ddd = ddd;
	}

	public String getNumero() {
		return this.numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getTipo() {
		return this.tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Pessoa getPessoa() {
		return this.pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}

}