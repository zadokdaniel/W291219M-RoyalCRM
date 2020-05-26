import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private _contacts: Contact[] = [
    {
      id: '5eccd84b63798ecee4f530f7',
      name: 'Guadalupe Stuart',
      email: 'guadalupestuart@ontagene.com',
      birthday: new Date('2020-02-25T06:36:12'),
      phones: ['+1 (855) 417-3827'],
    },
    {
      id: '5eccd84bb074b3d8c2b1ed05',
      name: 'Burke Dillon',
      email: 'burkedillon@ontagene.com',
      birthday: new Date('2016-04-19T01:42:16'),
      phones: ['+1 (931) 490-2325', '+1 (835) 560-3711'],
    },
    {
      id: '5eccd84b1d85b009d7649afd',
      name: 'Lucinda Keith',
      email: 'lucindakeith@ontagene.com',
      birthday: new Date('2017-09-22T08:13:04'),
      phones: ['+1 (982) 463-2539'],
    },
    {
      id: '5eccd84bf8343e2c936872da',
      name: 'Duffy Hatfield',
      email: 'duffyhatfield@ontagene.com',
      birthday: new Date('2014-08-10T05:39:22'),
      phones: ['+1 (810) 512-2750', '+1 (816) 541-3648', '+1 (897) 445-3800'],
    },
    {
      id: '5eccd84ba82601a8fd09c0e1',
      name: 'Peterson Hunt',
      email: 'petersonhunt@ontagene.com',
      birthday: new Date('2016-02-08T08:43:57'),
      phones: ['+1 (803) 403-2929', '+1 (885) 496-3950'],
    },
    {
      id: '5eccd84b8720e25fda396317',
      name: 'Fanny Hughes',
      email: 'fannyhughes@ontagene.com',
      birthday: new Date('2016-06-10T04:41:17'),
      phones: ['+1 (844) 408-3338'],
    },
    {
      id: '5eccd84b195e403248341ade',
      name: 'Alexandria Decker',
      email: 'alexandriadecker@ontagene.com',
      birthday: new Date('2017-09-15T05:06:15'),
      phones: ['+1 (912) 480-3008', '+1 (837) 443-3835', '+1 (996) 553-3609'],
    },
    {
      id: '5eccd84bfa98dd26fdc1ad5f',
      name: 'Edwards Hendricks',
      email: 'edwardshendricks@ontagene.com',
      birthday: new Date('2016-10-02T05:12:59'),
      phones: [],
    },
    {
      id: '5eccd84b9346cb8d4d358e8a',
      name: 'Georgina Hogan',
      email: 'georginahogan@ontagene.com',
      birthday: new Date('2017-03-14T01:46:01'),
      phones: ['+1 (870) 495-2044', '+1 (974) 599-2052', '+1 (802) 443-3622'],
    },
    {
      id: '5eccd84bb47204c4f2a3352a',
      name: 'Rebecca Ramirez',
      email: 'rebeccaramirez@ontagene.com',
      birthday: new Date('2014-11-18T03:05:23'),
      phones: ['+1 (867) 575-2067'],
    },
  ];

  getAll(): Contact[] {
    return this._contacts;
  }
}
