import { TaskStatus } from 'src/status/status-task';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column({ default: false })
  done: boolean;
  @Column({ default: 'pending', type: 'enum', enum: TaskStatus })
  status: TaskStatus;
}
