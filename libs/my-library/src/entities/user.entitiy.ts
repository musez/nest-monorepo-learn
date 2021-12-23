import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, comment: "用户名" })
  username: string;

  @Column({ length: 60, comment: "密码" })
  password: string;
}
