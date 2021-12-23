import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { MyLibraryModule } from "@app/my-library";
import { UserModule } from "../../../apps/my-project/src/user/user.module";

@Module({
  imports: [
    MyLibraryModule,
    LoggerModule,
    UserModule,
  ],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
