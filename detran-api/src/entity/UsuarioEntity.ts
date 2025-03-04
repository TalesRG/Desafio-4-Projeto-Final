import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_usuario: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'senha' })
  senha: string;
}
