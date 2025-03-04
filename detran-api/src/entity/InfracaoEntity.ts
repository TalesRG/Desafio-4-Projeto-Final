import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'infracao' })
export class InfracaoEntity {
  @PrimaryGeneratedColumn({ name: 'id_infracao' })
  id_infracao: number;

  @Column({ name: 'data' })
  data: Date;

  @Column({ name: 'hora' })
  hora: string;

  @Column({ name: 'placa_veiculo' })
  placa_veiculo: string;

  @Column({ name: 'id_local' })
  id_local: number;

  @Column({ name: 'matricula_agente' })
  matricula_agente: number;

  @Column({ name: 'id_tipo_infracao' })
  id_tipo_infracao: number;
}
