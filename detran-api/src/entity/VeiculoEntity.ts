import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'veiculo' })
export class VeiculoEntity {
  @PrimaryColumn({ name: 'placa' })
  placa: string;

  @Column({ name: 'chassi' })
  chassi: string;

  @Column({ name: 'cor' })
  cor: string;

  @Column({ name: 'ano' })
  ano: number;

  @Column({ name: 'modelo' })
  modelo: string;

  @Column({ name: 'categoria' })
  categoria: string;

  @Column({ name: 'cpf_proprietario' })
  cpf_proprietario: string;

  @Column({ name: 'id_infracao' })
  id_infracao: number;
}
