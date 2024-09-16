import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tracking {
    @PrimaryGeneratedColumn('increment')
  tracking_id: number;

  @Column({ type: 'int' })
  project_id: number;

  @Column({ type: 'timestamp with time zone' })
  tracking_date: Date;

  @Column({ type: 'numeric', precision: 5, scale: 2 })
  performance_result: number;

  @Column({ type: 'varchar', length: 300, })
  image_url: string;

  @Column({ type: 'text',  })
  remarks: string;

  @Column({ type: 'timestamp with time zone' })
  cwhen: Date;

  @Column({ type: 'int' })
  cuser: number;

  @Column({ type: 'timestamp with time zone', })
  mwhen: Date;

  @Column({ type: 'int',})
  muser: number;

  @Column({ type: 'boolean',  })
  delete_flag: boolean;

  @Column({ type: 'boolean',  })
  is_active: boolean;
}
