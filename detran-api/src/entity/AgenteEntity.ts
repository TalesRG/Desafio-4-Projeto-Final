import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'agente_de_transito' })
export class AgenteEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'matricula' })
  matricula: string;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'data_contratacao' })
  data_contratacao: Date;

  @Column({ name: 'tempo_de_servico' })
  tempo_de_servico: number;
}
