import { AppEntity } from 'src/app.entity';
import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { Cat } from '../../cats/entities/cats.entity';
import { Favorite } from '../../favorites/entities/favorites.entity';

@Entity()
@Unique(['email', 'username'])
export class User extends AppEntity {
  
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  refresh_token: string;

  @OneToMany(() => Cat, cat => cat.user)
  cats: Cat[];

  @OneToMany(() => Favorite, favorite => favorite.user)
  favorite: Favorite[];
  
}