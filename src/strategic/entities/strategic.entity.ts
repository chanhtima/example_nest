import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('m_strategic')
export class Strategic {
  @PrimaryGeneratedColumn({ type: 'integer' })
  social_plan_id: number;

  @Column('text')
  name: string;

  @Column('boolean', { default: true })
  is_active: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  cwhen: Date;

  @Column('integer', { nullable: true })
  cuser: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  mwhen: Date;

  @Column('integer', { nullable: true })
  muser: number;

  @Column('boolean', { default: false })
  delete_flag: boolean;
}
