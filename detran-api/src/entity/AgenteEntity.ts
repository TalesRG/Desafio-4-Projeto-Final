import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'agente_de_transito' })
export class AgenteEntity {
  @PrimaryColumn({ name: 'matricula' })
  matricula: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'data_contratacao' })
  data_contratacao: Date;

  @Column({ name: 'tempo_de_servico' })
  tempo_de_servico: number;
}
