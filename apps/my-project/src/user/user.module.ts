import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "@app/my-library/entities/user.entitiy";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]) //加入这一行
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
}
