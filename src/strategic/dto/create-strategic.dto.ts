export class CreateStrategicDto {
  name: string;
  is_active?: boolean = true;
  cwhen?: Date;
  cuser?: number;
  mwhen?: Date;
  muser?: number;
  delete_flag?: boolean = false;
}
