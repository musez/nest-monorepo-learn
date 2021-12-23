import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyLibraryService } from './my-library.service';
import { UserEntity } from './entities/user.entitiy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'dmkj_root',
      database: 'my_project',
      entities: [
        UserEntity
        // __dirname +  "/entities/*.ts" //这里有问题是
      ],
      synchronize: true,
    })
  ],
  providers: [MyLibraryService],
  exports: [MyLibraryService],
})
export class MyLibraryModule {}
