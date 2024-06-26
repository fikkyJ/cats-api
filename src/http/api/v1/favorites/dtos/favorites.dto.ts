import { IsInt } from 'class-validator';

export class FavoriteDto {
  @IsInt()
  readonly user_id: number;

  @IsInt()
  readonly cat_id: number;
}
