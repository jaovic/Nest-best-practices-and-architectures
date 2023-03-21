import { Inject, Injectable } from '@nestjs/common';
import { address } from '@prisma/client';
import { getClassError } from 'src/utils/errors/custom.error';
import { AddressRepository } from '../../repository/address.repository';
import { AddressErrorsCodes } from '../../structure/erros.codes.structure';
import { IAddressRepository } from '../../structure/IRepository.structure';
import { IUpdateAddress, IUpdateAddressService } from '../../structure/IService.structure';

@Injectable()
export class UpdateAddressService implements IUpdateAddressService {
  private _error = getClassError<AddressErrorsCodes>;

  private readonly _addressNotExist = 'error: address does not exist!';
  private readonly _prismaError = 'error: database persistence error, contact admin!';

  constructor(
    @Inject(AddressRepository)
    private readonly addressRepository: IAddressRepository,
  ) {}
  async execute(data: IUpdateAddress): Promise<address> {
    const addressExist = await this.addressRepository.exists({ id: data.address.address_id });

    if (!addressExist) throw this._error(this._addressNotExist, AddressErrorsCodes.NOT_FOUND, 404);

    try {
      return this.addressRepository.updateAddress(data);
    } catch (error) {
      throw this._error(this._prismaError, AddressErrorsCodes.INTERNAL, 500);
    }
  }
}