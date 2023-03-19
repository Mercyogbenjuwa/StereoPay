import { MigrationInterface, QueryRunner } from "typeorm"

export class createMediaTable1679221910392 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE media (
                id bigint unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
                type enum('audio', 'image') NOT NULL DEFAULT 'audio',
                name varchar(200) NOT NULL,
                description varchar(200) NOT NULL,
                url varchar(200) NOT NULL,
                status enum('Active', 'Inactive') NOT NULL DEFAULT 'Active',
                created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                deleted_at datetime NULL DEFAULT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE media`);
    }

}
