import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'local' })
export class LocalEntity {
  @PrimaryGeneratedColumn({ name: 'id_local' })
  id_local: number;
  @Column({ name: 'nome' })
  nome: string;
  @Column({ name: 'latitude' })
  latitude: number;
  @Column({ name: 'longitude' })
  longitude: number;
  @Column({ name: 'velocidade_permitida' })
  velocidade_permitida: number;
}
