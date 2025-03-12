import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tipo_infracao' })
export class TipoInfracaoEntity {
  @PrimaryGeneratedColumn({ name: 'id_tipo_infracao' })
  id_tipo_infracao: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'valor' })
  valor: number;

  @Column({ name: 'velocidade' })
  velocidade: number;
}
