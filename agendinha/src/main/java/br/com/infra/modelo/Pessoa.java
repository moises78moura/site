package br.com.infra.modelo;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the tb_pessoa database table.
 * 
 */
@Entity
@Table(name="tb_pessoa")
@NamedQuery(name="Pessoa.findAll", query="SELECT p FROM Pessoa p")
public class Pessoa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	private String email;

	@Temporal(TemporalType.DATE)
	private Date nascimento;

	private String nome;

	private String sexo;

	//bi-directional many-to-one association to Endereco
	@OneToMany(mappedBy="pessoa")
	private List<Endereco> enderecos;

	//bi-directional many-to-one association to Telefone
	@OneToMany(mappedBy="pessoa")
	private List<Telefone> telefones;

	public Pessoa() {
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getNascimento() {
		return this.nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSexo() {
		return this.sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public List<Endereco> getEnderecos() {
		return this.enderecos;
	}

	public void setEndereco(List<Endereco> enderecos) {
		this.enderecos = enderecos;
	}

	public Endereco addEndereco(Endereco endereco) {
		getEnderecos().add(endereco);
		endereco.setPessoa(this);

		return endereco;
	}

	public Endereco removeEndereco(Endereco endereco) {
		getEnderecos().remove(endereco);
		endereco.setPessoa(null);

		return endereco;
	}

	public List<Telefone> getTelefones() {
		return this.telefones;
	}

	public void setTelefones(List<Telefone> telefones) {
		this.telefones = telefones;
	}

	public Telefone addTelefone(Telefone telefone) {
		getTelefones().add(telefone);
		telefone.setPessoa(this);

		return telefone;
	}

	public Telefone removeTelefone(Telefone telefone) {
		getTelefones().remove(telefone);
		telefone.setPessoa(null);

		return telefone;
	}

}