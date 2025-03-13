import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAgenteDeTransito1741831909566
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table agente_de_transito
            (
                matricula        varchar(36)  not null
                    primary key,
                nome             varchar(255) not null,
                data_contratacao datetime     not null,
                tempo_de_servico int          not null
            );
        
        `);

    await queryRunner.query(`
        create table infracao
        (
            id_infracao      int auto_increment
                primary key,
            data             datetime     not null,
            hora             varchar(255) not null,
            placa_veiculo    varchar(255) not null,
            id_local         int          not null,
            matricula_agente varchar(255) not null,
            id_tipo_infracao int          not null
        );
`);

    await queryRunner.query(`
    create table local
(
    id_local             int auto_increment
        primary key,
    nome                 varchar(255) not null,
    latitude             int          not null,
    longitude            int          not null,
    velocidade_permitida int          not null
);
`);

    await queryRunner.query(`
    create table proprietario
(
    cpf                varchar(255) not null
        primary key,
    nome               varchar(255) not null,
    email              varchar(255) not null,
    endereco           varchar(255) not null,
    bairro             varchar(255) not null,
    cidade             varchar(255) not null,
    telefone           varchar(255) not null,
    estado             varchar(255) not null,
    sexo               varchar(255) not null,
    data_nascimento    datetime     not null,
    pontos_na_carteira int          not null
);
    `);

    await queryRunner.query(`
    create table tipo_infracao
(
    id_tipo_infracao int auto_increment
        primary key,
    nome             varchar(255) not null,
    valor            int          not null,
    velocidade       int          not null
);
`);

    await queryRunner.query(`
        create table usuario
        (
            id_usuario int auto_increment
        primary key,
            nome       varchar(255) not null,
            email      varchar(255) not null,
            senha      varchar(255) not null
        );
    `);

    await queryRunner.query(`
    create table veiculo
(
    placa            varchar(255) not null
        primary key,
    chassi           varchar(255) not null,
    cor              varchar(255) not null,
    ano              int          not null,
    modelo           varchar(255) not null,
    categoria        varchar(255) not null,
    cpf_proprietario varchar(255) not null,
    constraint FK_7c15a31e4c30056feae202483ef
        foreign key (cpf_proprietario) references proprietario (cpf)
);

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table agente_de_transito;`);
    await queryRunner.query(`drop table infracao;`);
    await queryRunner.query(`drop table local;`);
    await queryRunner.query(`drop table proprietario;`);
    await queryRunner.query(`drop table tipo_infracao;`);
    await queryRunner.query(`drop table usuario;`);
    await queryRunner.query(`drop table veiculo;`);
  }
}
