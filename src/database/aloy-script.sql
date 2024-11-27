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


INSERT INTO usuario (nome, email, senha) VALUES 
('Kirito', 'kirito@email.com', 'Senha!123'),
('Silica', 'silica@email.com', 'Senha!123'),
('Lisbeth', 'lisbeth@email.com', 'Senha!123'),
('Asuna', 'asuna@email.com', 'Senha!123'),
('Agil', 'agil@email.com', 'Senha!123'),
('Klein', 'klein@email.com', 'Senha!123'),
('Sinon', 'sinon@email.com', 'Senha!123'),
('Alice', 'alice@email.com', 'Senha!123'),
('Eugeo', 'eugeo@email.com', 'Senha!123'),
('Yuki', 'yuki@email.com', 'Senha!123'),
('Carion', 'carion@email.com', 'Senha!123')
;

INSERT INTO personagem (idusuario, nome, especie, strength, defense, wisdom, charisma, vitality, dexterity) VALUES 
('3', 'Kirito', 'Spriggan', '5', '6', '6', '6', '6', '6'),
('4', 'Silica', 'Cait_Sith', '5', '6', '6', '6', '6', '6'),
('5', 'Lisbeth', 'Leprechaun', '5', '6', '6', '6', '6', '6'),
('6', 'Asuna', 'Undine', '5', '6', '6', '6', '6', '6'),
('7', 'Agil', 'Gnome', '5', '6', '6', '6', '6', '6'),
('8', 'Klein', 'Salamander', '5', '6', '6', '6', '6', '6'),
('9', 'Sinon', 'Cait_Sith', '5', '6', '6', '6', '6', '6'),
('10','Alice', 'Cait_Sith', '5', '6', '6', '6', '6', '6'),
('11','Eugeo', 'Sylph', '5', '6', '6', '6', '6', '6'),
('12','Yuki', 'Imp', '5', '6', '6', '6', '6', '6'),
('13','Carion', 'Pooka', '5', '6', '6', '6', '6', '6')
;

INSERT INTO equipamento (idpersonagem, toparmor, middlearmor, lowerarmor, bottomarmor, weapon) VALUES 
('3', 'top1', 'middle2', 'lower3', 'bottom1', 'sword'),
('4', 'top1', 'middle2', 'lower3', 'bottom1', 'polearm'),
('5', 'top1', 'middle2', 'lower3', 'bottom1', 'wand'),
('6', 'top1', 'middle2', 'lower3', 'bottom1', 'dagger'),
('7', 'top1', 'middle2', 'lower3', 'bottom1', 'shield'),
('8', 'top1', 'middle2', 'lower3', 'bottom1', 'sword'),
('9', 'top1', 'middle2', 'lower3', 'bottom1', 'bow'),
('10', 'top1', 'middle2', 'lower3', 'bottom1', 'polearm'),
('11', 'top1', 'middle2', 'lower3', 'bottom1', 'wand'),
('12', 'top1', 'middle2', 'lower3', 'bottom1', 'dagger'),
('13', 'top1', 'middle2', 'lower3', 'bottom1', 'shield')
;
