package br.com.infra.modelo;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tb_endereco database table.
 * 
 */
@Entity
@Table(name="tb_endereco")
@NamedQuery(name="Endereco.findAll", query="SELECT e FROM Endereco e")
public class Endereco implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String cep;

	private String complemento;

	private String logradouro;

	private int numero;

	@Column(name="RUA_BAIRRO")
	private String ruaBairro;

	//bi-directional many-to-one association to Pessoa
	@ManyToOne
	@JoinColumn(name="FK_TB_PESSOA")
	private Pessoa pessoa;

	public Endereco() {
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCep() {
		return this.cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getComplemento() {
		return this.complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getLogradouro() {
		return this.logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public int getNumero() {
		return this.numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getRuaBairro() {
		return this.ruaBairro;
	}

	public void setRuaBairro(String ruaBairro) {
		this.ruaBairro = ruaBairro;
	}

	public Pessoa getPessoa() {
		return this.pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}

}