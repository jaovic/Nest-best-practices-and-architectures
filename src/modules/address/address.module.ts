import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserRepository } from '../user/repository/user.repository';
import { AddressController } from './address.controller';
import { AddressRepository } from './repository/address.repository';
import { FindAddressService } from './service/reading/findAddress.service';
import { FindUserActiveAddressService } from './service/reading/findUserActiveAddress.service';
import { ChangeStatusAddressService } from './service/writing/changeStatusAddress.service';
import { CreateAddressService } from './service/writing/createAddress.service';
import { DeleteAddressService } from './service/writing/deleteAddress.service';
import { UpdateAddressService } from './service/writing/updateAddress.service';

@Module({
  imports: [],
  controllers: [AddressController],
  providers: [
    CreateAddressService,
    AddressRepository,
    UserRepository,
    PrismaService,
    FindAddressService,
    UpdateAddressService,
    ChangeStatusAddressService,
    DeleteAddressService,
    UserRepository,
    FindUserActiveAddressService,
  ],
})
export class AddressModule {}
