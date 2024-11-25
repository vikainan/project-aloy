create database aloydb;

use aloydb;

create table usuario (
  idusuario int not null auto_increment,
  nome varchar(45),
  email varchar(45),
  senha varchar(45),
  primary key (idusuario)
);

create table personagem (
  idpersonagem int not null auto_increment,
  idusuario int not null,
  nome varchar(45),
  especie varchar(10),
  strength int,
  defense int,
  vitality int,
  wisdom int,
  dexterity int,
  charisma int,
  primary key (idpersonagem, idusuario),
  constraint fkpersonagemusuario foreign key (idusuario) references usuario (idusuario)
);

create table equipamento (
  idequipamento int not null auto_increment,
  idpersonagem int not null,
  toparmor varchar(45),
  middlearmor varchar(45),
  lowerarmor varchar(45),
  bottomarmor varchar(45),
  weapon varchar(45),
  primary key (idequipamento, idpersonagem),
  constraint fkequipamentopersonagem1 foreign key (idpersonagem) references personagem (idpersonagem)
);