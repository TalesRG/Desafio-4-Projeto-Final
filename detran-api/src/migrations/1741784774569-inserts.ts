import { MigrationInterface, QueryRunner } from 'typeorm';

export class Inserts1741784774569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Inserção condicional na tabela de locais com INSERT IGNORE
    await queryRunner.query(`
      INSERT  INTO local (nome, latitude, longitude, velocidade_permitida)
      VALUES 
      ('Palácio do Planalto', -15.7998, -47.8645, 60),
      ('Congresso Nacional', -15.7993, -47.8640, 50),
      ('Supremo Tribunal Federal', -15.8006, -47.8616, 50),
      ('Parque Nacional de Brasília', -15.7389, -47.8977, 40),
      ('Ponte JK', -15.8156, -47.8321, 80),
      ('Torre de TV de Brasília', -15.7892, -47.8935, 50);
    `);

    // Inserção condicional na tabela de agentes de trânsito com INSERT IGNORE
    await queryRunner.query(`
      INSERT  INTO agente_de_transito (matricula, nome, data_contratacao, tempo_de_servico)
      VALUES
      ('AGT001', 'Carlos Silva', '2015-06-01', 7),
      ('AGT002', 'Mariana Costa', '2018-03-15', 4),
      ('AGT003', 'João Pereira', '2020-11-20', 2);
    `);

    // Inserção condicional na tabela de tipo de infração com INSERT IGNORE
    await queryRunner.query(`
      INSERT  INTO tipo_infracao (nome, valor, velocidade)
      VALUES
      ('Excesso de velocidade até 20%', 135.00, 60),
      ('Excesso de velocidade entre 20% e 50%', 195.00, 80),
      ('Excesso de velocidade superior a 50%', 880.00, 120);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Deletando os dados inseridos
    await queryRunner.query(
      `DELETE FROM tipo_infracao;` +
        `DELETE FROM agente_de_transito WHERE matricula IN ('AGT001', 'AGT002', 'AGT003');` +
        `DELETE FROM local WHERE nome IN ('Palácio do Planalto', 'Congresso Nacional', 'Supremo Tribunal Federal', 'Parque Nacional de Brasília', 'Ponte JK', 'Torre de TV de Brasília');`,
    );
  }
}
