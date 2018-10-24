import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import User from '../users/entity'

@Entity()
export class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column("text", {nullable:false})
  title: string

  @Column("text", {nullable:false})
  description: string

  @Column("text", {nullable: false})
  image: string

  @Column ("date")
  date: Date
  
  @Column ("text")
  time: string

  @Column ("text")
  place: string

  @OneToMany(_ => Player, player => player.game, {eager: true, nullable: true})
  players: Player[]
}

@Entity()
@Index(['game', 'user'], {unique:true})
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players, {nullable: true})
  user: User

  @ManyToOne(_ => Event, game => game.players, {nullable: true})
  game: Event

}