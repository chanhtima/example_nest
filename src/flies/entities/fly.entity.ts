import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Flys' })
export class Fly {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    name: string;
  
    @Column({ type: 'text', nullable: true })
    description: string;
}
