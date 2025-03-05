import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity({ name: 'proprietario' })
export class ProprietarioEntity {
  @PrimaryColumn({ name: 'cpf', unique: true })
  cpf: string;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'endereco' })
  endereco: string;

  @Column({ name: 'bairro' })
  bairro: string;

  @Column({ name: 'cidade' })
  cidade: string;

  @Column({ name: 'telefone' })
  telefone: string;

  @Column({ name: 'estado' })
  estado: string;

  @Column({ name: 'sexo' })
  sexo: string;

  @Column({ name: 'data_nascimento' })
  data_nascimento: Date;
}
