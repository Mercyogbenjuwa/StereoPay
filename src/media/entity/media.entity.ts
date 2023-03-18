import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'media'})
class Media {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    unsigned: true
  })
  id: number;

  @Column({ 
    type: 'enum', 
    enum: ['audio', 'image'],
    default: 'audio' 
})
  type: string;

  @Column({ 
    type: 'varchar',
    length: 200,
 })
  name: string;

  @Column({ 
    type: 'varchar',
    length: 200,
})
  description: string;

  @Column({ 
    type: 'varchar',
    length: 200,
})
  url: string;

  @Column({ 
    type: 'enum', 
    enum: ['Active', 'Inactive'], 
    default: 'Active' 
})
  status: string;

  @CreateDateColumn({ 
    type: 'datetime',
    name: 'created_at',
  })
  readonly createdAt: Date;

  @UpdateDateColumn({ 
    type: 'datetime',
    name: 'updated_at',
  })
  readonly updatedAt: Date;

  @DeleteDateColumn({ 
    type: 'datetime',
    name: 'deleted_at' 
})
  deletedAt: Date;
}

export default Media;